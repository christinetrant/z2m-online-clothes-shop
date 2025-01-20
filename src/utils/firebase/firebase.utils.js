// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqF7URkRNjn7K-UnG-EN6ZpjNzOvXh76w",
  authDomain: "z2m-crwn-db.firebaseapp.com",
  projectId: "z2m-crwn-db",
  storageBucket: "z2m-crwn-db.firebasestorage.app",
  messagingSenderId: "638892140750",
  appId: "1:638892140750:web:d15c1d8302672d3be4c89f"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  'prompt': 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if(!userAuth) return;
  // check if there is an exisiting reference to the user
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log("🚀 ~ createUserDocumentFromAuth ~ userDocRef:", userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  
  console.log('user exists? ', userSnapshot.exists());

  // if user data does not exist
  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      })
    } catch(error) {
      console.log('error creating the user', error.message);
    }
  }
  return userDocRef;
}

export const createAuthUserFromEmailAndPassword = async(email, password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthWithEmailAndPassword = async(email, password) => {
  if(!email || !password) return;
  try {
    const userCredentials = await signInWithEmailAndPassword(auth, email, password)
    const user = userCredentials.user;
    return user;
  } catch(error) {
    console.log('error signing in', error.message);
  }
}

export const signOutUser = async() => await signOut(auth);