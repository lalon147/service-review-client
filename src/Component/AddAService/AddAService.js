import React from 'react';

const AddAService = () => {
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
        }).then(res=>res.json()).then(data=>console.log(data))
         }
         return (
             <form onSubmit={handleSubmit} className='w-1/2 mx-auto flex flex-col space-y-4 my-10'>
                        <h1 className='text-4xl text-center '>ADD A SERVICE HERE</h1>
                        <input type="text" name="name" className=' bg-slate-300  p-2 rounded ' placeholder='NAME OF THE SERVICE'></input>   
                        <input type="text" name="photo" className='bg-slate-300   p-2 rounded ' placeholder='POSTER IMAGE'></input> 
                        <input type="number" name="price" className=' bg-slate-300  p-2 rounded ' placeholder='PRICE OF SERVICE'></input> 
                        <textarea  type="text" name="desc" className='  bg-slate-300 p-2 rounded ' placeholder='DESCRIPTION'></textarea> 
                        <button className='bg-slate-400 hover:bg-slate-700 p-2 rounded'  type="submit">Submit</button>  
             </form>
         );
  
};

export default AddAService;