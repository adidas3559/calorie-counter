// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUW11MQZP8TkC3zh4oSMerhguWZC19LC4",
  authDomain: "calorie-counter-9a14b.firebaseapp.com",
  projectId: "calorie-counter-9a14b",
  storageBucket: "calorie-counter-9a14b.appspot.com",
  messagingSenderId: "792124932590",
  appId: "1:792124932590:web:f00742302e39400cf58eff",
  measurementId: "G-PSQ7YYM7B7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);