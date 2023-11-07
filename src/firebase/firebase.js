// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB5l6lqHINy1psQUEbuOoNqpBfa0sEZKCo",
  authDomain: "n-c1aed.firebaseapp.com",
  projectId: "n-c1aed",
  storageBucket: "n-c1aed.appspot.com",
  messagingSenderId: "437740580880",
  appId: "1:437740580880:web:51a76b5bdb343865c7da95",
  measurementId: "G-JEQ802RJTD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

