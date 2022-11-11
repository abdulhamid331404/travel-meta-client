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
                    <div className="card-body ">
                        <h2 className="card-title text-3xl">Sitakunda Day Tour <br /> from Dhaka</h2>
                        <p className='text-left'>Sitakunda <br /> PSitakunda, Bangladesh</p>

                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-3xl">Padma Bridge Day Tour</h2>
                        <p className='text-left'>Padma Bridge <br /> Padma Bridge - Mawa Side, Approach Road, <br /> Mawa, Bangladesh </p>

                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body  ">
                        <h2 className="card-title text-3xl">Sikkim Tour – 5D/6N</h2>
                        <p className='text-left'>sikkim <br /> Sikkim, India </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default upcomingEvents;