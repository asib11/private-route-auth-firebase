// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGv_HjEb0WM8R6d1SqojjhUI3YXAhYjHY",
  authDomain: "private-router-auth-firebase.firebaseapp.com",
  projectId: "private-router-auth-firebase",
  storageBucket: "private-router-auth-firebase.appspot.com",
  messagingSenderId: "154049174133",
  appId: "1:154049174133:web:9fcfdf74fa0c93d871b63c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;