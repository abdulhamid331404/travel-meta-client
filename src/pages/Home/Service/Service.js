import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
   const {title, fee, img, description } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body text-start">
    <h2 className="card-title text-3xl font-bold">{title}</h2>
    <p className='text-lg'>{description.slice(0, 100)} .....</p>
    <h1 className="text-2xl font-bold">
        Price: $ {fee}
    </h1>
    <div className="card-actions justify-end">
     <Link > <button className="btn btn-primary">Buy Now</button></Link>
    </div>
  </div>
</div>
    );
};

export default Service;