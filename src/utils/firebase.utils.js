import { initializeApp } from "firebase/app";

import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_uUPClEfA96WGdbvKN9AeMikTZeGB1ww",
  authDomain: "whatsapp-clone-db-320c2.firebaseapp.com",
  projectId: "whatsapp-clone-db-320c2",
  storageBucket: "whatsapp-clone-db-320c2.appspot.com",
  messagingSenderId: "142365243048",
  appId: "1:142365243048:web:5090c09624c572902bb49d",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const provider = new GoogleAuthProvider();

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, provider)
    .then((result) => result)
    .catch((err) => console.log("error", err));
