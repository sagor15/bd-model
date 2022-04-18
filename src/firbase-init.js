// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPSEV0VTqOZDi3k8clLIQouXPwqMJ8x_c",
  authDomain: "mehejabin-project.firebaseapp.com",
  projectId: "mehejabin-project",
  storageBucket: "mehejabin-project.appspot.com",
  messagingSenderId: "619411291945",
  appId: "1:619411291945:web:face75a07cb7a78c67c138"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);

export default auth;