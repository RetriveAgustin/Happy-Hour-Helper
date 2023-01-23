    // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoqsCaNBJhk1bFHMwYB6_TUqPlnnCZFko",
  authDomain: "happy-hour-h.firebaseapp.com",
  projectId: "happy-hour-h",
  storageBucket: "happy-hour-h.appspot.com",
  messagingSenderId: "664827079892",
  appId: "1:664827079892:web:3a45961d38f5d4ffae5f41"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
