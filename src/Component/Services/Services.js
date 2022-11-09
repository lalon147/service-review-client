import React, { useEffect, useState } from 'react';
import Card from '../Home/Card';

const Services = () => {
    const [services,setServices]=useState([])

    useEffect(()=>{
        fetch(`https://service-review-server-lalon147.vercel.app/services?size=all`).then(res=>res.json()).then(data=>{
        setServices(data); 
        console.log(data)})
   
      },[])
     
      console.log(services);
    return (
        <div className='w-3/4 mx-auto'>
                <h1 className="text-3xl text-center">SERVICES THAT I OFFER</h1> 
  <section className='w-11/12 mx-auto my-10'>
     <h1 className='text-3xl text-center font-bold'>SERVICES</h1>
      <div className='grid grid-cols-1  my-10 bg-slate-100 rounded py-5 '>
             {
              services.map((service)=><Card key={service._id} service={service}></Card>)
             }
      </div>
      
 
      
  </section>
        </div>
    );
};

export default Services; 