import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle("BLOGS")
    return (
        <div className='grid grid-cols-2 gap-4 my-10 w-3/4 mx-auto'>
             <div className='border-2 bg-slate-100 p-4 '>
                 <h1 className='text-3xl font-bold'>Difference between SQL and NoSQL</h1>
                 <p>SQL DATABASES ARE MORE LIKELY RELATONAL DATABASE MANAGEMENT SYSTEM WHITE NOSQL WHICH STANDS FOR NOT ONLY SQL IS NOT A RELATIONAL DATABASE WHICH MEANS THE TABLES ARE NOT CONNECTED TO EACH OTHER LIKE SQL DATABASE.MOREOVER TO BUILD A FAST PACED DATABASE DATA RETRIVE WE MORE LIKELY TO USE NO SQL DATABASES</p>
             </div>
             <div className='border-2 bg-slate-100 p-4 '>
                 <h1 className='text-3xl font-bold'>What is JWT, and how does it work?</h1>
                 <p>JWT PRONOUNCED AS JOT STANDS FOR JSON WEB TOKEN Y PERSONAL EXPERIENCE IT IS A EASY TO USE AUTHORIZATION METHODS TO AUTHORIZE YOUR USERS SO THAT THIRD PERSONS CAN NOT ACCESS THE DATA OF ANOTHER PERSON USING PERTICULAR WEB APPLICATION </p>
             </div>
             <div className='border-2 bg-slate-100 p-4 '>
                 <h1 className='text-3xl font-bold'>What is the difference between javascript and NodeJS?</h1>
                 <p>WORLDWIDE JAVASCRIPT IS A PROGRAMMING LANGUAGE WHEREAS NODEJS IS A JAVASCRIPT RUNTIME IT HELPS DEVELOPERS TO RUN JAVASCRIPT CODE ON SERVER IT CREATES AN ENVIROMENT WHERE DEVELPERS CAN CODE IN THE SERVER OR THE SERVER ITSELF</p>
             </div>
             <div className='border-2 bg-slate-100 p-4 '>
                 <h1 className='text-3xl font-bold'>How does NodeJS handle multiple requests at the same time?</h1>
                 <p>WE ALL KNOW THAT JS IS A SINGLE THREDED NON BLOCKING PRORAMMING LANGUAGE IT MEANS THUGH IT IS A SINGLE THREADED BUT IT WIL NOT BLOCK ANY REQUEST IT GETS IT'S ASYNCHRONUS NATURE MADE IT POSSIBLE BECAUSE EVENT LOOP HELPS JAVASCRIPT TO RUN THE ASYNCHRONUS CALLS.</p>
             </div>
        </div>
    );
};

export default Blog;