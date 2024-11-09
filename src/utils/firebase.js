// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoHcOiw2o8nhI2x1Phw8EmKn605sDxrqg",
  authDomain: "netflix-final-8c1f1.firebaseapp.com",
  projectId: "netflix-final-8c1f1",
  storageBucket: "netflix-final-8c1f1.firebasestorage.app",
  messagingSenderId: "249281749985",
  appId: "1:249281749985:web:dcfa5f9d922ea753db68a0",
  measurementId: "G-2N9GF27CMV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth()