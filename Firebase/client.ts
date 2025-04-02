// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyAUcrbGvxiB5Jy4pScAtdyNGGAdi6FS2fU",
  authDomain: "telestar-interview-platform.firebaseapp.com",
  projectId: "telestar-interview-platform",
  storageBucket: "telestar-interview-platform.firebasestorage.app",
  messagingSenderId: "639867910648",
  appId: "1:639867910648:web:430a570ea76011ff03fe0d",
  measurementId: "G-G5TP36CYCP"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth (app);
export const db = getFirestore(app)
