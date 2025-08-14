// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUpJ1n8uaUujJQiQg9VH0wRi5QcN3NDtE",
  authDomain: "agenda-8466d.firebaseapp.com",
  projectId: "agenda-8466d",
  storageBucket: "agenda-8466d.firebasestorage.app",
  messagingSenderId: "501812400667",
  appId: "1:501812400667:web:8e1d61ea6686ffe0195ebe",
  measurementId: "G-12X4KWCRYH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
