// src/Firebase/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAbJDEIfxUoMItS9MPprK6X7IXDf1hZWx8",
  authDomain: "peerhelp-810ff.firebaseapp.com",
  projectId: "peerhelp-810ff",
  storageBucket: "peerhelp-810ff.firebasestorage.app",
  messagingSenderId: "7955188726",
  appId: "1:7955188726:web:9a1cb8c0016f093fd595d7",
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Authentication instance
export const auth = getAuth(app);

// Google Authentication Provider
export const googleProvider = new GoogleAuthProvider();


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAbJDEIfxUoMItS9MPprK6X7IXDf1hZWx8",
//   authDomain: "peerhelp-810ff.firebaseapp.com",
//   projectId: "peerhelp-810ff",
//   storageBucket: "peerhelp-810ff.firebasestorage.app",
//   messagingSenderId: "7955188726",
//   appId: "1:7955188726:web:9a1cb8c0016f093fd595d7",
//   measurementId: "G-3Y4MW8K1C0"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);