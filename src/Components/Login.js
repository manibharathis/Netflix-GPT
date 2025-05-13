import React, { useRef } from "react";
import Header from "./Header";
import { useState } from "react";
import { checkValidData } from "../Utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { USER_AVATAR ,NETFLIX_BG} from "../Utils/constants";

function Login() {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [formError, setFormError] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };
  const handleClick = () => {
    const isError = checkValidData(email.current.value, password.current.value);
    
    if (isError) {
      setFormError(isError);
      return;
    } else {
      if (isSignInForm) {
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name.current.value,
              photoURL: USER_AVATAR,
            });
          })
          .then(()=>{
            const {uid, email, displayName , photoURL} = auth.currentUser
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            )
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
           

            // ..
          });
      } else {
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
           
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            
            setFormError("Invalid UserName/Password");
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
          src={NETFLIX_BG}
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
