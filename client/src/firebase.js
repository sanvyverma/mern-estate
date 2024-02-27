// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-161e0.firebaseapp.com",
  projectId: "mern-estate-161e0",
  storageBucket: "mern-estate-161e0.appspot.com",
  messagingSenderId: "27227702412",
  appId: "1:27227702412:web:fc95e931460ff720e667a9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);