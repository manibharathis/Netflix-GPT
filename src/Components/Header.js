import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import {  useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { addUser , removeUser} from "../Utils/userSlice";
import { NETFLIX_LOGO } from "../Utils/constants";
import { toggleGptButton } from "../Utils/gptSlice";
import { changeLanguage } from "../Utils/configSlice";
import { SUPPORTED_LANGUAGES } from "../Utils/constants";

function Header() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const gpt = useSelector((store)=>store.gpt)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        Navigate("/error");
      });
  };
  const handleSeachClick = ()=>{
    dispatch(toggleGptButton())
  }
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
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
    <div className="w-screen absolute  bg-gradient-to-b from-black z-20 " >
     
      <img
        className="w-48 h-16 mt-4  absolute block mx-auto md:mx-0"
        src={NETFLIX_LOGO}
        alt="logo"
      ></img>
      {user && 
      <div className="flex justify-end mt-4 mr-8">
        {!gpt.showGPTButton && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
     <button onClick={handleSeachClick} className="text-white bg-purple-700 text-sm rounded-lg h-8 w-auto p-2  mt-4 mx-4 ">{gpt.showGPTButton?"GPT Search":"Home"}</button> 
        <img
            className="hidden md:block w-12 h-12"
            alt="usericon"
            src={user?.photoURL}
          />
          <button onClick={handleSignOut} className="font-bold text-white mt-6">
            (Sign Out)
          </button>
      </div>
}
    </div>
  );
}

export default Header;
