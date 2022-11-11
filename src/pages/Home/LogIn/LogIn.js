import React, { useContext } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider ,GithubAuthProvider} from "firebase/auth";


const LogIn = () => {
  const googleProvider =new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const {logInUser, googleLogin, githubLogin} = useContext(AuthContext)
  const navigate = useNavigate();
  
const handleGoogleLogIn = (event) =>{
  event.preventDefault();
  googleLogin(googleProvider)
  .then(result =>{
    const user = result.user;
    navigate('/')
    console.log(user);
  })
  .catch(err => console.error(err))

}

const handleGithubLogIn = (event) =>{
  event.preventDefault();
  githubLogin(githubProvider)
  .then(result =>{
    const user = result.user;
    navigate('/')
    console.log(user);
  })
  .catch(err => console.error(err))

}

  const handleLogin = (event) =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    logInUser(email, password)
    .then(result =>{
      const user = result.user;
      navigate('/')
      console.log(user);
    })
    .catch(err => console.error(err))
  }
    return (
      <div className="hero w-full my-20">
        <div className="hero-content w-1/3 ">
         
          <div className="card  w-full shadow-2xl bg-base-100  py-20">
          <h1 className="text-5xl font-bold text-center">Log In</h1>
            <form onSubmit={handleLogin} className="card-body">
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
                <input className="btn btn-primary" type="submit" value="Login" /> <br />
            
               
               {/* <input onClick={handleGoogleLogIn}  className="btn btn-primary"  value="Login with google" /> */}
               <button onClick={handleGoogleLogIn} className="btn btn-primary">Login with google</button> <br />
               <button onClick={handleGithubLogIn} className="btn btn-primary">Login with github</button> 
              </div>
            </form>
            <p className='text-center'>Don't have an account?<Link className='text-orange-600 font-bold' to={'/signup'}>SignUp</Link></p>
          </div>
        </div>
      </div>
    );
};

export default LogIn;