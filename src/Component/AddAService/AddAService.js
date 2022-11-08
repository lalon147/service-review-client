import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const AddAService = () => {
     useTitle("ADD A SERVICE")
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault();
        const name=e.target.title.value;
        const image=e.target.photo.value;
        const price=e.target.price.value;
        const desc=e.target.desc.value;
        const service={name,image,price,desc};
     //    console.log(movie)
     
        fetch("https://service-review-server-lalon147.vercel.app/add-a-service",{
         method:"POST",
         headers:{
             "Content-Type":"application/json",
             authorization:`Bearer ${localStorage.getItem("token")}`
         },
         body:JSON.stringify(service),
        }).then(res=>res.json()).then(data=>{
            toast.success("SERVICE ADDED SUCCESSFULLY")
            console.log(data);
            e.target.reset();
            navigate("/");

        })
         }
         return (
             <form onSubmit={handleSubmit} className='w-1/2 mx-auto flex flex-col space-y-4 my-10'>
                        <h1 className='text-4xl text-center '>ADD A SERVICE HERE</h1>
                        <input required type="text" name="name" className=' bg-slate-300  p-2 rounded ' placeholder='NAME OF THE SERVICE'></input>   
                        <input required type="text" name="photo" className='bg-slate-300   p-2 rounded ' placeholder='POSTER IMAGE'></input> 
                        <input required type="number" name="price" className=' bg-slate-300  p-2 rounded ' placeholder='PRICE OF SERVICE'></input> 
                        <textarea required  type="text" name="desc" className='  bg-slate-300 p-2 rounded ' placeholder='DESCRIPTION'></textarea> 
                        <button className='bg-slate-400 hover:bg-slate-700 p-2 rounded'  type="submit">Submit</button>  
             </form>
         );
  
};

export default AddAService;