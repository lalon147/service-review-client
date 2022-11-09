import React from 'react';

const stat = () => {
    return (
        <div className='w-11/12 mx-auto bg-slate-100 my-10 rounded-xl p-10'>
               <h1 className='text-5xl font-semibold text-center mb-5'>HOW I SERVE OR HOW THIS WORKS</h1>
               <div className='flex items-center justify-between'>
                 <div className='w-48 h-48 rounded-full '>
                  <img className='w-full h-full rounded-full' src='https://t4.ftcdn.net/jpg/02/54/93/61/360_F_254936166_5MFxlGv7PNPw4VmpuNNQxlU0K2D4f7Ya.jpg' alt=""/>
                  <p className='text-xl font-semibold'>COOKING PROPERLY</p>
                 </div>
                  
                 <div className='w-48 h-48 rounded-full'>
                  <img className='w-full h-full rounded-full' src='https://images-platform.99static.com//3LBIPhvgiYA2jOCq_IEislxxudI=/0x0:1500x1500/fit-in/590x590/99designs-contests-attachments/100/100298/attachment_100298252' alt=""/>
                  <p className='text-xl font-semibold'>PACKING</p>
                 </div>
                 <div className='w-48 h-48 rounded-full '>
                  <img className='w-full h-full rounded-full' src='https://img.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg?w=2000' alt=""/>
                  <p className='text-xl font-semibold'>DELIVERING</p>
                 </div>
               </div>

        </div>
    );
};

export default stat;     