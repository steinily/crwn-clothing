// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
        getAuth,
        signInWithPopup,
        GoogleAuthProvider,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,
        onAuthStateChanged,
      } from 'firebase/auth'

import {
getFirestore,
doc,
getDoc,
setDoc,
collection,
writeBatch
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg68j9zzgKI2FegWLwdCdoDMhvmjaKVXM",
  authDomain: "crwn-clothing-db-57eee.firebaseapp.com",
  projectId: "crwn-clothing-db-57eee",
  storageBucket: "crwn-clothing-db-57eee.appspot.com",
  messagingSenderId: "988688193125",
  appId: "1:988688193125:web:9efb80b0f883681513188c"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth=getAuth(firebaseApp);
export const signInWithGooglePopup= () =>  {
     return signInWithPopup(auth,googleProvider)
};

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd)=>{

  const collectionRef = collection(db, collectionKey)
  

}


export const createUserDocumentFromAuth = async (userAuth , additionalInformation = {}) => {
    const userDocRef = doc(db, 'users' , userAuth.uid);
  
  const userSnapShot = await getDoc(userDocRef);
  
  if(!userSnapShot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef , { 
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch(error){
      console.log('error createing user' , error.message)
    }
  }

  return userDocRef;
} 


export const createAuthUserWithEmailAndPassword = async (email, password) => {
 if (!email || !password) return;

 return await createUserWithEmailAndPassword(auth,email,password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
 
  return await signInWithEmailAndPassword(auth,email,password)
 }

 export const signOutUser = async () => await signOut(auth);

 export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth,callback)