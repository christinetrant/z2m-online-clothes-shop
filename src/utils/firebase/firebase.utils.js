// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
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

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  'prompt': 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
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
      })
    } catch(error) {
      console.log('error creating the user', error.message);
    }
  }
  return userDocRef;
}