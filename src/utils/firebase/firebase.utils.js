// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth,
        signInWithRedirect,
        signInWithPopup,
        GoogleAuthProvider} from 'firebase/auth'


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

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth=getAuth(firebaseApp);
export const signInWithGooglePopup= () =>  {
    signInWithPopup(auth,provider)
};
