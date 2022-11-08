import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/UserContext/UserContext';

const MyReview = () => {
  
   
    const [myReviews,setMyreviews]=useState([])
    const {user}=useContext(AuthContext);
    const email=user?.email;
     useEffect(()=>{
         
   fetch(`http://localhost:5000/my-reviews?email=${email}`)
     .then(res=>res.json()).then(data=>{
        console.log(data)
        setMyreviews(data)})
        

     },[email])
    return (
        <div className='w-3/4 mx-auto'>
             {
                myReviews.map(re=>{
                    
                    return <div key={re._id} className="bg-slate-200 mb-5 p-2 rounded-lg">
                               <div className='flex items-center p-2 '>
                                     <img src={re.image} className="w-12 h-12 rounded-full mr-2" alt=""/>
                                     <p>{re.email}</p>
                               </div>
                               <h1 className='text-xl'>{re.message.toUpperCase()}</h1>
                            </div>
                })
             }
        </div>
    );
};

export default MyReview;