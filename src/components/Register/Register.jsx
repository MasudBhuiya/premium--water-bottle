// import React from 'react';

import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { faBottleWater } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Register = () => {
    const [error, setError]=useState('')
    const {signUp} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSignUp = e =>{
        setError('')
        e.preventDefault();
        const form = e.target;
        // const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password, name);
        
        if(password.length < 6){
             setError('Password is less then 6 characters')
              return;
        }
        signUp(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            Swal.fire({
              icon: 'success',
              title: 'Wow!',
              text: 'Sign-up Successfully'
            })
            form.reset();
            navigate('/')
        })
        .catch(error => {
            setError(error.message)
        })
    }

    const {signInwithGoogle} = useContext(AuthContext);
    const handleGoogle = () =>{
        signInwithGoogle()
        .then(result=>{
            const user = result.user;
            console.log(user)
            navigate('/')
        })
        .catch(error=>setError(error.message))
    }
    
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col justify-between lg:flex-row">
  <div className="w-full md:w-1/2">
      <img className="w-full md:w-fit" src='https://s3-alpha-sig.figma.com/img/7963/7932/e27e4523112ad91c3d7084d896bf5ab0?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZdToovY5c0u67kLOVwnuQHSJ7BheuK9tuXHuBtr6acqAwWOi85NShVPwQxaWXJ4ky88OVWf6MePge4hDN44eJrzX1khGi9c72VLdYdNup47rXoO5-XlfP~09ptd3v3bur4HpzfKYM33EJFg6XSoaJ4ybz59ueuFkBPS0Dp9Ui82qoB9AYA6aKjUAqXeN8lrbiyTmbTxiIRa5w100qr6N6L-bi4mF~gkNiTzTddxkk7OkUHWieA1d5-93N~tiI-RDM8cRCSv1dz5QdeApFFqG0znynKPh4BADksXlMMiTxFQ6Uvvb3QatM70lrdRaM8IbVS1DR6VkN7GluXvALNQmgg__' alt="" />
    </div>
    
    <div className="w-full md:w-1/2 flex flex-col items-center ">
    <Link to='/' className="btn btn-ghost ps-0 flex items-center justify-center mb-10 text-xl "><h1 className='text-3xl w-full '><FontAwesomeIcon icon={faBottleWater} />𝕭𝖔𝖙𝖙𝖑𝖊 𝖀𝖕 </h1></Link>
   <div className=" flex-shrink-0 w-full bg-[#f5f3f3] p-6 md:p-16  shadow-xl ">

      <div className="">
      <h1 className="text-5xl mb-5 text-center font-bold ">Sign Up!</h1>
        <form onSubmit={handleSignUp}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name='name' className="input input-bordered rounded-none border-none" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered rounded-none border-none" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered rounded-none border-none" />
          
        </div>
        <div className="form-control mt-8">
          <input className="btn border-none rounded-none hover:bg-cyan-900 bg-cyan-700 text-white" type="submit" value='Sign Up' name="" id="" />
        </div>
        </form>
        <h1 className="my-4">New to This Site? Please <Link className='text-blue-500 font-bold' to='/login'><u>Login</u></Link></h1>
        <p className="text-red-600 ">{error.message}</p>

        <h1 className="text-center mt-2">OR</h1>

        <div>
            <button onClick={handleGoogle} className="btn btn-block  mt-4 text-lg text-blue-500 bg-white"><img src="https://i.ibb.co/jkBJkXy/Google-Pay-Logo-wine.png" alt="" />Continue with Google</button>
        </div>
      </div>
    </div>
   </div>
  </div>
</div>
    );
};

export default Register;