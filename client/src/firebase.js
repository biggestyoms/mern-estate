// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-adaa0.firebaseapp.com",
  projectId: "mern-estate-adaa0",
  storageBucket: "mern-estate-adaa0.appspot.com",
  messagingSenderId: "951031105769",
  appId: "1:951031105769:web:f5693977e57e15cb354878"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);