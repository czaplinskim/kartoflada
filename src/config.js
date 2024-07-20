// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpjuCHH3MillslkM1D5tjGYmRJFPxQj4U",
  authDomain: "kartoflada-ef6ac.firebaseapp.com",
  databaseURL: "https://kartoflada-ef6ac-default-rtdb.firebaseio.com",
  projectId: "kartoflada-ef6ac",
  storageBucket: "kartoflada-ef6ac.appspot.com",
  messagingSenderId: "1052976623203",
  appId: "1:1052976623203:web:df6846aaae50374282d256",
  measurementId: "G-L3B47XL6RY"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig)

export default firebase_app;


