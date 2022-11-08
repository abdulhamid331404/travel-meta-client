import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="hero w-full my-20">
        <div className="hero-content gap-20 grid md:grid-cols-2 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
           
           <img className='w-3/4' src="" alt="" />
          </div>
          <div className="card  w-full max-w-sm shadow-2xl bg-base-100  py-20">
          <h1 className="text-5xl font-bold text-center">Sign Up</h1>
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input name='name' type="text" placeholder="name" className="input input-bordered" required/>
              </div>
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
                <input name='password' type="password" placeholder="password" className="input input-bordered"  required/>
               
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="SignUP" />
            
              </div>
            </form>
            <p className='text-center'>Already have an account?<Link className='text-orange-600 font-bold' to={'/login'}>LogIn</Link></p>
          </div>
        </div>
      </div>
    );
};

export default SignUp;