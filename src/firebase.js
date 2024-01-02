// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZwMVS2M6XO9aNOqoxcl-V3Zw1tIQh6Uw",
  authDomain: "chat-95715.firebaseapp.com",
  projectId: "chat-95715",
  storageBucket: "chat-95715.appspot.com",
  messagingSenderId: "419052531647",
  appId: "1:419052531647:web:e7017217c1b0aaf14ffb0a",
  measurementId: "G-0VNVHENN6X"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();


/**
 * 
 * // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZwMVS2M6XO9aNOqoxcl-V3Zw1tIQh6Uw",
  authDomain: "chat-95715.firebaseapp.com",
  projectId: "chat-95715",
  storageBucket: "chat-95715.appspot.com",
  messagingSenderId: "419052531647",
  appId: "1:419052531647:web:e7017217c1b0aaf14ffb0a",
  measurementId: "G-0VNVHENN6X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 */