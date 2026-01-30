import React, { use } from 'react'
import Lottie from "lottie-react";
import animationData from '../../../assets/animation/Login.json'
import { AuthContext } from '../../../context/AuthProvider';
import GoogleAuth from '../GoogleAuth';

const Register = () => {
    const {createUser} = use(AuthContext)
    const handleRegistration =(e)=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });
    }
  return (
   <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
   <Lottie
      animationData={animationData}
      loop
      autoplay
      style={{ width: 600, height: 400 }}
    />
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <form onSubmit={handleRegistration}>

        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" name='password' placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
          </form>
          <GoogleAuth/>
      </div>
    </div>
  </div>
</div>
  )
}

export default Register
