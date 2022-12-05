import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

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

async function getNotitas(db) {
  const notitasCol = collection(db, 'notitas');
  const notitasSnapshot = await getDocs(notitasCol);
  const notitasList = notitasSnapshot.docs.map(doc => doc.data());
  return notitasList;
};

export { GoogleAuthProvider };