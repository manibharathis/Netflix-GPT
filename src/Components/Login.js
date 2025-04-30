import React from 'react'
import Header from './Header'
import { useState } from 'react'
function Login() {
    const [isSignInForm,setisSignInForm] = useState(true)
    const toggleSignInForm=()=>{
       
        setisSignInForm(!isSignInForm)
    }
  return (
    <div>
       
      <Header />
      <div className='absolute'>
      <img alt="background" className='' src="https://assets.nflxext.com/ffe/siteui/vlv3/9390f6f6-cf80-4bc9-8981-8c2cc8adf98a/web/IN-en-20250421-TRIFECTA-perspective_dc5bcfdf-88a5-4972-8ffe-b28ff942f76e_large.jpg"></img>
      </div>
      <form className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
      {isSignInForm? <input  className="p-4 my-4 w-full bg-gray-700" type="string"  placeholder='Name' />:""}
        <input  className="p-4 my-4 w-full bg-gray-700" type="email"  placeholder='Email' />
        <input  className="p-4 my-4 w-full bg-gray-700" type="password"  placeholder='Password'/>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">{isSignInForm?"SignUp":"SignIn"}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  )
}

export default Login
