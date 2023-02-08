// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCG4Zabp_wlJuSvcy4zgfEj940u8feQ-Do",
  // authDomain: "happy-hour-helper.firebaseapp.com",
  authDomain: "https://happy-hour-helper-nqwdtexbb-retriveagustin.vercel.app/",
  projectId: "happy-hour-helper",
  storageBucket: "happy-hour-helper.appspot.com",
  messagingSenderId: "385456537481",
  appId: "1:385456537481:web:cafc624d3d0be1ca11ab58"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
