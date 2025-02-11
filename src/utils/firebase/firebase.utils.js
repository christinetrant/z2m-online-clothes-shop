// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    // writeBatch,
    query,
    getDocs,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBqF7URkRNjn7K-UnG-EN6ZpjNzOvXh76w",
    authDomain: "z2m-crwn-db.firebaseapp.com",
    projectId: "z2m-crwn-db",
    storageBucket: "z2m-crwn-db.firebasestorage.app",
    messagingSenderId: "638892140750",
    appId: "1:638892140750:web:d15c1d8302672d3be4c89f",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
    signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
    signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
) => {
    if (!userAuth) return;
    // check if there is an exisiting reference to the user
    const userDocRef = doc(db, "users", userAuth.uid);
    console.log("🚀 ~ createUserDocumentFromAuth ~ userDocRef:", userDocRef);

    const userSnapshot = await getDoc(userDocRef);

    console.log("user exists? ", userSnapshot.exists());

    // if user data does not exist
    if (!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        } catch (error) {
            console.log("error creating the user", error.message);
        }
    }
    return userDocRef;
};

export const createAuthUserFromEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    try {
        const userCredentials = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        const user = userCredentials.user;
        return user;
    } catch (error) {
        console.log("error signing in", error.message);
    }
};

export const signOutUser = async () => await signOut(auth);

// listen to changes in the auth state
export const onAuthStateChangedListener = (callback) =>
    onAuthStateChanged(auth, callback);

// Quick way to import products to database - use just once then comment out!
// export const addCollectionAndDocuments = async (
//     collectionKey,
//     objectsToAdd
// ) => {
//     // Create a new collection
//     const collectionRef = collection(db, collectionKey);
//     // Call batch to add objects to database collection
//     const batch = writeBatch(db);

//     objectsToAdd.forEach((object) => {
//         const docRef = doc(collectionRef, object.title.toLowerCase());
//         batch.set(docRef, object);
//     });

//     await batch.commit();
//     console.log("collection added to database");
// };

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, "categories");
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);

    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const {title, items} = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});

    return categoryMap;
};
