// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAhEW4RmwfwoNGO9uLwlO-vWY0zTpVYWg",
  authDomain: "movie-mania-e52e8.firebaseapp.com",
  projectId: "movie-mania-e52e8",
  storageBucket: "movie-mania-e52e8.appspot.com",
  messagingSenderId: "788097382371",
  appId: "1:788097382371:web:49d9edd7bba000a250d2d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app