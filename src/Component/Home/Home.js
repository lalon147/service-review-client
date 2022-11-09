import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Card from './Card';
import Contact from './Contact';
import Statistics from './Statistics';

const Home = () => {
  useTitle("HOME")
  const [size,setSize]=useState(3)
  const [services,setServices]=useState([])
   useEffect(()=>{
     fetch(`http://localhost:5000/services?size=${size}`).then(res=>res.json()).then(data=>{
     setServices(data); 
     console.log(data)})

   },[size])
  
   console.log(services);
    return (
        <div>
              <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">HELLO THERE,
        <br className="hidden lg:inline-block"/>I AM HERE TO HELP WITH ANY OCCASION THAT MIGHT COME TO YOUR LIFE
      </h1>
      <p className="mb-8 leading-relaxed"> I AM RISAN REHMAN .I PROVIDE WITH MANY SERVICE LIKE WEDDING MEALS AND MOSTLY FOOD AND BEVERAGE BUT A LITTLE BIT OF DECORATION .</p>
      <div className="flex justify-center">
        <Link to="/blogs"><button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">BLOGS</button></Link>

      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img src="https://www.mbatuts.com/wp-content/uploads/2019/11/Event-Planning-Business-in-plan-672x420.jpg" className="object-cover object-center rounded" alt="hero" />
    </div>
  </div>
</section>
  <section className='w-11/12 mx-auto my-10'>
     <h1 className='text-3xl text-center font-bold'>SERVICES</h1>
      <div className='grid grid-cols-1  my-10 bg-slate-100 rounded py-5 '>
             {
              services.map((service)=><Card key={service._id} service={service}></Card>)
             }
      </div>
      
        <div className='flex items-center justify-center'><button onClick={()=>{setSize("all")}} className=' w-32 bg-blue-400 p-2 text-2xl rounded font-bold hover:bg-blue-600 '>SEE ALL</button> </div>
      
  </section>

      <Contact></Contact>
      <Statistics></Statistics>
    
        </div>
    );
};

export default Home;