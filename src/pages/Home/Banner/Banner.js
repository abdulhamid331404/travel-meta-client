import React from 'react';
import img1 from '../../../images/banner/banner1.jpg'
import img2 from '../../../images/banner/banner2.jpg'
import img3 from '../../../images/banner/banner3.jpg'
import './Banner.css'

const Banner = () => {
  return (
    
      <div style={{height:'600px'}} className="carousel w-full">
  <div id="slide1" className="banner-image carousel-item relative w-full ">
   
    <img src={img3} className="w-full" />
   
    <div className="absolute  justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <h1 className="text-6xl   mb-6 font-bold text-center">
      Welcome to Travel Mate
      </h1>
      <p className="text-3xl font-bold ">
      Travelers want beautiful and unique places <br /> every time they want to leave the home.
      </p>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img1} className="w-full" />
    <div className="absolute  justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <h1 className="text-6xl  mb-6 font-bold text-center">
      Welcome to Travel Mate
      </h1>
      <p className="text-3xl font-bold">
      Travelers want beautiful and unique places <br /> every time they want to leave the home.
      </p>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img2} className="w-full" />
    <div className="absolute  justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <h1 className="text-6xl mb-6 text-white font-bold text-center">
      Welcome to Travel Mate
      </h1>
      <p className="text-3xl text-white font-bold">
      Travelers want beautiful and unique places <br /> every time they want to leave the home.
      </p>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
 
  );
};

export default Banner;