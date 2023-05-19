// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAD3ULff0encW6BdC6Aa-y7FZ8GC3ciK24",
    authDomain: "tinder-clone-a117a.firebaseapp.com",
    projectId: "tinder-clone-a117a",
    storageBucket: "tinder-clone-a117a.appspot.com",
    messagingSenderId: "1017231908276",
    appId: "1:1017231908276:web:9ccd25656ef004e15be6e1",
    measurementId: "G-YFJVEF4J6P"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const database = getFirestore(firebaseApp);

export default database;