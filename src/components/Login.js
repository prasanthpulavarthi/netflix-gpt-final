import React from 'react'
import Header from './Header'
import { useState } from 'react';

const Login = () => {
const [isSignInForm, setIsSignInForm]=useState(true);
const toggleSignInForm=()=>{
setIsSignInForm(!isSignInForm)
}

  return (
    <div>
        <Header/>
    <div className='absolute'>
        <img class="concord-img vlv-creative" src="https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/IN-en-20241104-TRIFECTA-perspective_55263ea2-af7f-40ed-9cf0-7029a9b9baf4_small.jpg" srcset="https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/IN-en-20241104-TRIFECTA-perspective_55263ea2-af7f-40ed-9cf0-7029a9b9baf4_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/IN-en-20241104-TRIFECTA-perspective_55263ea2-af7f-40ed-9cf0-7029a9b9baf4_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/IN-en-20241104-TRIFECTA-perspective_55263ea2-af7f-40ed-9cf0-7029a9b9baf4_large.jpg 1800w" alt=""></img>
    </div>
    <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto text-white left-0 right-0 bg-opacity-800 rounded-lg'>
    <h1 className='font-bold text-3xl py-4'> {isSignInForm? "Sign In":"Sign Up"}</h1>
    {!isSignInForm && <input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>}
      <input type="text" placeholder='Email Address' className="p-4 my-4 w-full bg-gray-700"/>
      <input type="password" placeholder='password' className='p-4 my-4 w-full bg-gray-700'/>
      <button className='p-4 my-6 bg-red-600 w-full rounded-lg'> {isSignInForm? "Sign In":"Sign Up"}</button>
      <p className='py-4 cursor-pointer' onClick={toggleSignInForm}> {isSignInForm?"New to Netflix? Sign Up  Now":"already Resgistered sign In now"}</p>
    </form>
    </div>
  )
}

export default Login