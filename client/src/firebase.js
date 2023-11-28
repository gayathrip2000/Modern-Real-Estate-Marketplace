// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-state-real-state.firebaseapp.com",
  projectId: "mern-state-real-state",
  storageBucket: "mern-state-real-state.appspot.com",
  messagingSenderId: "62405528690",
  appId: "1:62405528690:web:74d67c8d54d8084c4746eb"
};

export const app = initializeApp(firebaseConfig);