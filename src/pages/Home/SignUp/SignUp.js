import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {

  const {createUser} = useContext(AuthContext)
  const navigate = useNavigate();
  const handleSignUp= (event) =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
    .then(result =>{
      const user = result.user;
      form.reset();
      navigate('/');
      console.log(user);
    })
    .catch(err => console.error(err))
  }

    return (
        <div className="hero w-full my-20">
        <div className="hero-content w-1/3 ">
         
          <div className="card  w-full shadow-2xl bg-base-100  py-20">
          <h1 className="text-5xl font-bold text-center">Sign Up</h1>
            <form onSubmit={handleSignUp} className="card-body">
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