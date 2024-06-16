
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {

  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,
  // measurementId: process.env.REACT_APP_MEASUREMENT_ID,

  apiKey: 'AIzaSyDtVx-9SgDiRG70h10z1rtLsN-c0qB5FCk',
  authDomain: 'blessed-consciousness-app.firebaseapp.com',
  projectId: 'blessed-consciousness-app',
  storageBucket: 'blessed-consciousness-app.appspot.com',
  messagingSenderId: '966811973973',
  appId: '1:966811973973:web:6ad0719ead8b76b2e917dc',
  measurementId: 'G-KQB8B3T4HJ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const firestoreDB = getFirestore(app);
