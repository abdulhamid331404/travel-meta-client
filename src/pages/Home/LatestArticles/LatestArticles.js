import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../images/articls/saka.jpg'
import img2 from '../../../images/articls/top.jpg'
import img3 from '../../../images/articls/velly.jpg'
import img4 from '../../../images/articls/water.jpg'

const LatestArticles = () => {
    return (
        <div>
           <div>
           <h1 className="text-5xl font-bold mb-5 p-4">
            Latest Articles
            </h1>
           </div>
           <div className='grid lg:grid-cols-4 md:grid-cols-4 p-2 mb-3'>
            
           <div className="card w-80 glass p-4 bg-gray-200">
  <figure><img src={img1} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title"></h2>
    <Link><u>Saka Haphong: Travel Guideline</u></Link>
    
  </div>
</div>

<div className="card w-80 glass p-4 bg-gray-200">
  <figure><img src={img2} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title"></h2>
    <Link><u>Top 15 Islands in Bangladesh you shouldn’t Miss</u></Link>
    
  </div>
</div>

<div className="card w-80 glass p-4 bg-gray-200">
  <figure><img src={img3} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title"></h2>
    <Link><u>Sajek Valley: Travel Guideline</u></Link>
  
  </div>
</div>

<div className="card w-80 glass p-4 bg-gray-200">
  <figure><img src={img4} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title"></h2>
    <Link><u>Top 15 Waterfalls in Bangladesh you shouldn’t Miss</u></Link>
   
  </div>
</div>

           </div>
        </div>
    );
};

export default LatestArticles;