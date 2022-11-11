import React from 'react';
import img1 from '../../../images/event/Sitakunda.png'
import img2 from '../../../images/event/padma.png'
import img3 from '../../../images/event/sikkim-event.png'

const upcomingEvents = () => {
    return (
        <div className='bg-gray-200 p-5'>
            <div className='mb-5'>
            <h1 className="text-5xl  font-bold">
                Upcoming Events
            </h1>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-3'>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img1} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
   
  </div>
</div>

<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img2} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
   
  </div>
</div>

<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img3} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
   
  </div>
</div>
            </div>
        </div>
    );
};

export default upcomingEvents;