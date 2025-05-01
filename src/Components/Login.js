import React, { useRef } from "react";
import Header from "./Header";
import { useState } from "react";
import { checkValidData } from "../Utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
function Login() {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [formError, setFormError] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };
  const handleClick = () => {
    const isError = checkValidData(email.current.value, password.current.value);
    console.log(isError);
    if (isError) {
      setFormError(isError);
      return
    } else {
      if (isSignInForm) {
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log(user)
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage)
           
            // ..
          });
     } 
     else {
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user)
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage)
            setFormError("Invalid UserName/Password")
          });
      }
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="background"
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9390f6f6-cf80-4bc9-8981-8c2cc8adf98a/web/IN-en-20250421-TRIFECTA-perspective_dc5bcfdf-88a5-4972-8ffe-b28ff942f76e_large.jpg"
        ></img>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        {isSignInForm ? (
          <input
            className="p-4 my-4 w-full bg-gray-700"
            type="string"
            placeholder="Name"
          />
        ) : (
          ""
        )}
        <input
          className="p-4 my-4 w-full bg-gray-700"
          ref={email}
          type="email"
          placeholder="Email"
        />
        <input
          className="p-4 my-4 w-full bg-gray-700"
          ref={password}
          type="password"
          placeholder="Password"
        />
        {formError != null ? (
          <p className="text-red-600 font-bold text-lg py-2">{formError}</p>
        ) : (
          ""
        )}
        <button
          onClick={handleClick}
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
        >
          {isSignInForm ? "SignUp" : "SignIn"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {!isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
}

export default Login;
