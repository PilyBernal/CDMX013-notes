import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

export { initializeApp };

export const firebaseConfig = {
  apiKey: "AIzaSyDULyBMZb_NJJy1HzlrfCIvCad3ivc9m8Q",
  authDomain: "notitas-6532a.firebaseapp.com",
  projectId: "notitas-6532a",
  storageBucket: "notitas-6532a.appspot.com",
  messagingSenderId: "765198493968",
  appId: "1:765198493968:web:90241ae098f0eae94ddd95"
  };
  
  // Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

//signInWithRedirect(auth, provider);

export { signInWithPopup }

export const db = getFirestore(app);

export { GoogleAuthProvider };