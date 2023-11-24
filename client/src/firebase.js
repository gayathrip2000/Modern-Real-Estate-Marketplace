// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-state-de6b6.firebaseapp.com",
  projectId: "mern-state-de6b6",
  storageBucket: "mern-state-de6b6.appspot.com",
  messagingSenderId: "842309904096",
  appId: "1:842309904096:web:067a71270a1dc554ba9285"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);