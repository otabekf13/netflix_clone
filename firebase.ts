// Import the functions you need from the SDKs you need
import {getApp, getApps, initializeApp} from "firebase/app";
import { getAuth } from 'firebase/auth'
import {getFirestore} from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBtylFd7cmGYwDtD6flBwPvTBoVZE9-JUE",
    authDomain: "netflix-clone-f13.firebaseapp.com",
    projectId: "netflix-clone-f13",
    storageBucket: "netflix-clone-f13.appspot.com",
    messagingSenderId: "537498249938",
    appId: "1:537498249938:web:ae87e341f2d9fd69619b0b",
    measurementId: "G-PZHCB73T3E"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }