// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJJij3hjU4TIHMljLyweIX5VWnxaGQT_s",
  authDomain: "netflix-gpt-74f7a.firebaseapp.com",
  projectId: "netflix-gpt-74f7a",
  storageBucket: "netflix-gpt-74f7a.appspot.com",
  messagingSenderId: "760648238229",
  appId: "1:760648238229:web:2f95836c8d404927b6079c",
  measurementId: "G-1LBZW6TP2R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);