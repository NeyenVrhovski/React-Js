// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdV2scmGFk8MJud_iBCKxxK1HlHLsdRBE",
  authDomain: "coderhouse-reactjs-145df.firebaseapp.com",
  projectId: "coderhouse-reactjs-145df",
  storageBucket: "coderhouse-reactjs-145df.appspot.com",
  messagingSenderId: "412785734655",
  appId: "1:412785734655:web:9bc7f3b18a9123c004edca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);