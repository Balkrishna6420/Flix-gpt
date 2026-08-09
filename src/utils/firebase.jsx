// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8ms_c4L9TKLXqwtR9gjxbsTIuGh9CVAA",
  authDomain: "flix-gpt-4b493.firebaseapp.com",
  projectId: "flix-gpt-4b493",
  storageBucket: "flix-gpt-4b493.firebasestorage.app",
  messagingSenderId: "623534082784",
  appId: "1:623534082784:web:d76c6221784bb987f99e85",
  measurementId: "G-J8DMKNGRTT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
