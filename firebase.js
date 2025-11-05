// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJHg9mpp4OGfnvM6wmuQ3lr63PF8x9vI8",
  authDomain: "next14-cc-8c779.firebaseapp.com",
  projectId: "next14-cc-8c779",
  storageBucket: "next14-cc-8c779.firebasestorage.app",
  messagingSenderId: "325879742937",
  appId: "1:325879742937:web:bbdbd4a22f288b34a0d9c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)