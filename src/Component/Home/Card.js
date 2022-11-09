import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
//react-photo-viwe feature added
const Card = ({service}) => {
    return (

        <PhotoProvider>
            <div className='flex items-center justify-center'>
            <div className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg h-64 overflow-hidden">
        <PhotoView  src={service.image}>
            <img className='w-full' src={service.image} alt="" />
          </PhotoView>
        </div>
        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">{service.name}</h2>
        <p className='text-xl font-bold  text-orange-500'>{service.price}</p>
        <p className="leading-relaxed text-base">{service.desc.slice(0,100).toUpperCase()}</p>
        <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"><Link to={`/services/${service._id}`}>VIEW MORE DETAILS</Link></button>
      </div>
        </div>
        </PhotoProvider>
    );
};

export default Card;