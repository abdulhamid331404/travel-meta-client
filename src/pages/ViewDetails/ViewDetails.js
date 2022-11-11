import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const service = useLoaderData();
    console.log(service);
    return (
        <div>
            <h1 className="text-4xl text-bold">
                This Is View Details 
            </h1>
        </div>
    );
};

export default ViewDetails;