// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnOE85wBuRthGk0FLY7odEfWTUaT9oMsc",
  authDomain: "geoid-81313.firebaseapp.com",
  projectId: "geoid-81313",
  storageBucket: "geoid-81313.appspot.com",
  messagingSenderId: "1058801737096",
  appId: "1:1058801737096:web:92c20c410b1804de90ee3d",
  measurementId: "G-36VHXKFNCE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

