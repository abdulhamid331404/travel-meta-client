import React from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
    return (
        <div className="hero w-full my-20">
        <div className="hero-content gap-20 grid md:grid-cols-2 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
           
           <img className='w-3/4' src='' alt="" />
          </div>
          <div className="card  w-full max-w-sm shadow-2xl bg-base-100  py-20">
          <h1 className="text-5xl font-bold text-center">Login</h1>
            <form  className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name='email' type="email" placeholder="email" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name='password' type="password" placeholder="password" className="input input-bordered" required/>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="LogIn" />
            
              </div>
            </form>
            <p className='text-center'>New to Genius Car <Link className='text-orange-600 font-bold' to={'/signup'}>Sign Up</Link></p>
          </div>
        </div>
      </div>
    );
};

export default LogIn;