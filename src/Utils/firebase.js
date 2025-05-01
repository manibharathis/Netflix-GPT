// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdWFLDE0sV9ygPfq7fIY2RUgJLqMk_DnQ",
  authDomain: "netflixgpt-ba7f4.firebaseapp.com",
  projectId: "netflixgpt-ba7f4",
  storageBucket: "netflixgpt-ba7f4.firebasestorage.app",
  messagingSenderId: "191108502371",
  appId: "1:191108502371:web:16e135f0ba360a96e1b956",
  measurementId: "G-4CR0TPPPX2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();