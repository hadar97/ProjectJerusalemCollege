// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBg27NTawoqZEbCnT1uxUS_qqZEe2VbuJw",
    authDomain: "cvprojectdb-205fb.firebaseapp.com",
    projectId: "cvprojectdb-205fb",
    storageBucket: "cvprojectdb-205fb.appspot.com",
    messagingSenderId: "343403767339",
    appId: "1:343403767339:web:83b4301661509dc4e5ec6e",
    measurementId: "G-5CDVRX65B2"
  };
  

initializeApp(firebaseConfig)
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();