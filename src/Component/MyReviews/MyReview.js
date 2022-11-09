import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext/UserContext';
import useTitle from '../../hooks/useTitle';

const MyReview = () => {
  const {logOut}=useContext(AuthContext)
   if(!localStorage.getItem("token")){
        logOut().then(()=>toast.error("USER NOT FOUND"))
   }
  useTitle("MY REVIEWS")  
    const [myReviews,setMyreviews]=useState([])
    const {user}=useContext(AuthContext);
    const email=user?.email;
     
  useEffect(()=>{
         
   fetch(`http://localhost:5000/my-reviews?email=${email}`,{
    headers:{
        authorization:`Bearer ${localStorage.getItem("token")}`
    }
   })
     .then(res=>res.json()).then(data=>{
        if(data.message==="UNAUTHORIZED ACCESS"){
          return logOut().then(()=>toast.error("TOKEN EXPIRED"))
        }
        setMyreviews(data);        
    }).catch(error=>console.log(error))
     },[email,logOut])
     
     const handleDelete=(id)=>{
           fetch(`http://localhost:5000/my-reviews/${id}`,{
            method:"DELETE",
            headers:{
                "content-type":"application/json"
            }
            
           }).then(res=>res.json()).then(data=>{
            
             if(data.acknowledged){
               let remaining=myReviews.filter(re=>id!==re._id)
               console.log(remaining);
               setMyreviews(remaining);
               toast.success("REVIEW DELETED SUCESSFULLY ")

             }

            })
            
     }
     if(myReviews.length===0){
        return  <h1 className='text-center  my-10 h-full text-5xl font-bold '>NO REVIEW GIVEN  </h1>
    }
   const handleUpdate=(e,id)=>{
      e.preventDefault();
      const reviewMessage=document.getElementById("message").value;
      const message={
        message:reviewMessage
      }
    
      fetch(`http://localhost:5000/update-review/${id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(message)
     
    }).then(res=>res.json()).then(data=>console.log(data))
   }
      
    return (
        <div className='w-3/4 mx-auto'>
            

             {
               
                myReviews?.map(re=>{
                    
                    return <div key={re._id} className="bg-slate-200 mb-5 p-2 rounded-lg">
                               <div className='flex items-center p-2 '>
                                     <img src={re.image} className="w-12 h-12 rounded-full mr-2" alt=""/>
                                     <p>{re.email}</p>
                               </div>
                               <p className='mx-5 my-1'>last modified:{re.added}</p>
                              <form onSubmit={(e)=>handleUpdate(e,re._id)}> <input id="message" className='text-xl w-full' defaultValue={re.message.toUpperCase()}></input>
                              <button type="submit" className='p-2 bg-slate-400 rounded-md hover:bg-slate-600 m-2'>UPDTAE</button>
                              </form>

                               <button onClick={()=>handleDelete(re._id)} className='p-2 bg-slate-400 rounded-md hover:bg-slate-600 m-2'>DELETE</button>
                            </div>
                })
             }
        </div>
    );
};

export default MyReview;