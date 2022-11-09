import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext/UserContext';
import useTitle from '../../hooks/useTitle';

const Review = () => {
  const navigate=useNavigate()
   useTitle("REVIEWS BY OTHER")
   const [reviews,setReviews]=useState([])
    const {user}=useContext(AuthContext);
    const data=useLoaderData();console.log(data)
     useEffect(()=>{
          
       fetch(`https://service-review-server-lalon147.vercel.app/review/${data._id}`,{
        headers:{
          authorization:`Bearer ${localStorage.getItem("token")}`
      }
       })
        .then(res=>res.json())
         .then(data=>{
          setReviews(data);
          console.log(data)
         })

     },[data])
    const handleReview=(e)=>{
      e.preventDefault();
      const email=e.target.email.value;
      const message=e.target.message.value;
      const serviceId=data._id;
      const image=user.photoURL;
      const review={email,message,serviceId,image};

      fetch("https://service-review-server-lalon147.vercel.app/add-a-review",{
        method:"POST",
        headers:{
          "content-type":"application/json",
          authorization:`Bearer ${localStorage.getItem("token")}`
        },
        body:JSON.stringify(review)
      }).then(res=>res.json()).then(data=>{
        console.log(data);
        toast.success("REVIEW ADDED SUCCESSFULLY")
        e.target.reset();
        navigate("/my-reviews")

      }).catch(error=>console.log(data))
    }
    return (
        <div>
          <PhotoProvider>
             <div className='my-10 w-1/2 mx-auto'>
                     <p className='font-bold  text-2xl'>NAME:{data.name}</p>
                     <PhotoView  src={data.image}>
                     <img className='w-full rounded-full  ' src={data.image} alt="" title='click here to see in full screen'/>
                     </PhotoView>
                     <p className='text-orange-500 font-bold'>PRICE:{data.price}</p>
                     <p>{data.desc}</p>
             </div>
             </PhotoProvider>
          
               {
                 user?.email ?  
                 <>
                 <h1 className='text-center text-3xl font-bold text-blue-400'>ADD YOUR REVIEW TO <span className='text-blue-600'>{data.name}</span> </h1>
                 <form onSubmit={handleReview}  className='flex flex-col space-y-4 w-1/2 mx-auto my-10'>
                 
                EMAIL: <input  className='bg-slate-200 p-2  ' placeholder='YOUR EMAIL' type="email" name="email" defaultValue={`${user.email}`}></input>
                REVIEW:<textarea required className='bg-slate-200 p-2 ' placeholder='YOUR REVIEW' type="text" name="message"></textarea>
                <button type="submit" className='bg-blue-600 p-2 hover:bg-blue-800'>SUBMIT</button>
               </form>
                 </>
                 

                 :
                 <h1 className='text-center text-3xl font-bold text-blue-400 my-5'>LOGIN TO ADD YOUR REVIEW</h1>
               }
              <h1 className='text-5xl font-bold text-center'>OTHER REVIEWs</h1>
               <div className='my-10 w-3/4 mx-auto'>
               {
                reviews?.map(re=>{
                  return <div key={re._id} className=" bg-slate-200 p-4 rounded-lg mb-5">
                          <div className='flex items-center p-2 '>
                          <img src={re.image} className="w-12 h-12 rounded-full mr-2" alt=""/>
                           <p>{re.email}</p>
                           <p className='mx-5'>last modified:{re.added}</p>
                          </div>
                          <p className='ml-16 bg-slate-100 p-1'>{re.message}</p>
                  </div>
                })
               }
               </div>


               
        </div>
    );
};

export default Review;