// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from '@firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//Later need to create env file to safely store API variables securely
const firebaseConfig = {
  apiKey: "AIzaSyAzU8TjOuG0XqsqvugohNYbLTVrI6lrAjg",
  authDomain: "snout-app-633.firebaseapp.com",
  projectId: "snout-app-633",
  storageBucket: "snout-app-633.appspot.com",
  messagingSenderId: "299034374163",
  appId: "1:299034374163:web:e4e2e11314eb8485b18fe6",
  measurementId: "G-KMMRXZK8TH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Firebase Authentication Email/Password variable
export const auth = getAuth(app)

//Firebase User Database Storing user information
export const db = getFirestore(app)