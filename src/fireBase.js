// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDPap3_gqmgsRss0e_yd0sTEbkaAkm0G3o",
  authDomain: "fir-d32c5.firebaseapp.com",
  projectId: "fir-d32c5",
  storageBucket: "fir-d32c5.appspot.com",
  messagingSenderId: "144397822773",
  appId: "1:144397822773:web:1639063ca9e6f1ddb4ba7c",
  measurementId: "G-JQ9EVVS218"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);