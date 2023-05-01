// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBPcETDCxrAhOPEdHS2z3AfHCqbgW_bQ-M",
    authDomain: "delight-chef.firebaseapp.com",
    projectId: "delight-chef",
    storageBucket: "delight-chef.appspot.com",
    messagingSenderId: "295833246612",
    appId: "1:295833246612:web:404e5d32d1d3160ec6cd81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;