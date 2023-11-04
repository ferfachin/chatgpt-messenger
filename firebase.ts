import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6rKnra3qdVutHwoq-7EgDIUaduIFpH3k",
  authDomain: "chatgpt-messenger-a1d6a.firebaseapp.com",
  projectId: "chatgpt-messenger-a1d6a",
  storageBucket: "chatgpt-messenger-a1d6a.appspot.com",
  messagingSenderId: "322136213397",
  appId: "1:322136213397:web:fad8dee213e865441fd89c"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db };