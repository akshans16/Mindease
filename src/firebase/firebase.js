// src/firebase/firebase.jsx
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6kgbS7SJHlB12MEvTcAE-T9ZveARjHgw",
  authDomain: "mindease-e2b52.firebaseapp.com",
  projectId: "mindease-e2b52",
  storageBucket: "mindease-e2b52.appspot.com",
  messagingSenderId: "134922384533",
  appId: "1:134922384533:web:5a6985fd7cd9503e82179c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore instance
export const db = getFirestore(app);

