// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "yukti-33b96.firebaseapp.com",
  projectId: "yukti-33b96",
  storageBucket: "yukti-33b96.firebasestorage.app",
  messagingSenderId: "844787504315",
  appId: "1:844787504315:web:3c5cb72ef0d67d4b1c459e"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth=getAuth(app)
export const googleProvider=new GoogleAuthProvider()