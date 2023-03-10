// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: "visioneye-e2d0d.firebaseapp.com",
  projectId: "visioneye-e2d0d",
  storageBucket: "visioneye-e2d0d.appspot.com",
  messagingSenderId: "907927192747",
  appId: "1:907927192747:web:83e7e59f9efa57a46fe3ee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
