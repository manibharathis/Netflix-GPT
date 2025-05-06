import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import {  useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { addUser , removeUser} from "../Utils/userSlice";
import { NETFLIX_LOGO } from "../Utils/constants";

function Header() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        Navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: "https://avatars.githubusercontent.com/u/17941613?v=4",
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  }, []);
  return (
    <div className="w-screen absolute  bg-gradient-to-b from-black z-20">
      <img
        className="w-48 h-16 mt-4  absolute block mx-auto md:mx-0"
        src={NETFLIX_LOGO}
        alt="logo"
      ></img>
      {user && 
      <div className="flex justify-end">
       
      <img
            className="hidden md:block w-12 h-12"
            alt="usericon"
            src={user?.photoURL}
          />
          <button onClick={handleSignOut} className="font-bold text-white ">
            (Sign Out)
          </button>
      </div>
}
    </div>
  );
}

export default Header;
