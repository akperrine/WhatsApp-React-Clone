import { initializeApp } from "firebase/app";

import {
  GoogleAuthProvider,
  getAuth,
  RecaptchaVerifier,
  signInWithPopup,
  signInWithPhoneNumber,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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

export const createRecaptchaVerifier = () => {
  return new RecaptchaVerifier("recaptcha", {}, auth);
};

export const createUserDocumentFromGoogle = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName } = userAuth;
    const createdAt = new Date();
    console.log(displayName, createdAt);
    try {
      await setDoc(userDocRef, {
        displayName,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const signOutUser = () => signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
