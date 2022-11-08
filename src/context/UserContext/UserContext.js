import React, { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth,GoogleAuthProvider,onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"
import app from '../../firebase/firebase.config';




export const AuthContext=createContext();
const auth=getAuth(app);
const googleProvider=new GoogleAuthProvider();
const UserContext = ({children}) => {
     const [user,setUser]=useState({});
     const [loading,setLoading]=useState(true);
   

     const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
     }
     const updateUserInfo=(photoUrl,name)=>{
        return updateProfile(auth.currentUser,{
            displayName:name,photoURL:photoUrl
        })

    }

     const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
     }
     const signInWithGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider);
     }
     const logOut=()=>{
        setLoading(true);
        localStorage.removeItem("token")
        
        return signOut(auth)
     }
     


  useEffect(()=>{
  const unSubscribe=onAuthStateChanged(auth,currentUser=>{
    console.log("Auth state changed")
    setLoading(false)
    setUser(currentUser)
  })

  return ()=>{
    unSubscribe()
  }
   },[])
    const authInfo={
             user,
             createUser,
             loading,
             signInWithGoogle,
             logOut,
             signIn,
             updateUserInfo
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {
                    children
                }
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;