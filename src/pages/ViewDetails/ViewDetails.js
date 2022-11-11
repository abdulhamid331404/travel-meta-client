import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const service = useLoaderData();
    const {img, description, title, fee} = service;
    console.log(service);
    return (
        <div>
 <div className="card w-full glass border">
  <figure><img src={img} alt=""/></figure>
  <div className="card-body flex items-center">
    <h2 className="card-title text-4xl font-bold ">{title}</h2> <br />
    <p className='text-left w-1/2'>{description}</p><br />
    <p className="text-3xl font-bold text-left">
       Price: $ {fee}
    </p>
   
  </div>
</div>
        </div>
    );
};

export default ViewDetails;