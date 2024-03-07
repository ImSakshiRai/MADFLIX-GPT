// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";  //getting get Auth from this
 

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

export const auth = getAuth(); //calling this get auth from firebase we dont have to call it again n again so here we creating for once
//so wheneve we will need this auth we will get it import from firebase