// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkWfubVqvH4AaVs4Q3OE1tJ4hpyBCCZVU",
  authDomain: "netflixgpt-157e3.firebaseapp.com",
  projectId: "netflixgpt-157e3",
  storageBucket: "netflixgpt-157e3.appspot.com",
  messagingSenderId: "201265056099",
  appId: "1:201265056099:web:258d58a52faac9e84eeb56",
  measurementId: "G-EJKC1S04BB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);