// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // This line was missing

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNQzQT4M5AN7PjskTaRxHfMXdoM7XhfT0",
  authDomain: "mybookstoreapp-425c7.firebaseapp.com",
  projectId: "mybookstoreapp-425c7",
  storageBucket: "mybookstoreapp-425c7.appspot.com",
  messagingSenderId: "821385201859",
  appId: "1:821385201859:web:84a465626bbe032b01fa76",
  measurementId: "G-VCKVJB3SL0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app); // This line was missing

export default app;