
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,

  // apiKey: 'AIzaSyDtVx-9SgDiRG70h10z1rtLsN-c0qB5FCk',
  // authDomain: 'blessed-consciousness-app.firebaseapp.com',
  // projectId: 'blessed-consciousness-app',
  // storageBucket: 'blessed-consciousness-app.appspot.com',
  // messagingSenderId: '966811973973',
  // appId: '1:966811973973:web:6ad0719ead8b76b2e917dc',
  // measurementId: 'G-KQB8B3T4HJ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const firestoreDB = getFirestore(app);
