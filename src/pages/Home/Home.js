import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from './Banner/Banner';
import Service from './Service/Service';
import UpcomingEvents from './UpcomingEvents/UpcomingEvents';


const Home = () => {
    const services = useLoaderData();
   
    return (
       <div>
       <Banner></Banner>
       
       <div className='mb-4'>
        <p className="text-5xl font-bold mt-4
        mb-4"> 
            My Traveling Package
        </p>
        <div className='grid ml-4 md:grid-cols-2 lg:grid-cols-3 ml-8 sm:grid-cols-1 gap-4'>
            {
                services.map(service => <Service
                key={service._id}
                service={service}
                ></Service>)
            }
        </div>
       </div>
       <UpcomingEvents></UpcomingEvents>
       </div>
       
    );
};

export default Home;