// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-tLvH1XL4cMwDTyE6KRRyfPZ66NaGfyY",
  authDomain: "mini-blog-9fbe4.firebaseapp.com",
  projectId: "mini-blog-9fbe4",
  storageBucket: "mini-blog-9fbe4.appspot.com",
  messagingSenderId: "547051502498",
  appId: "1:547051502498:web:85f0ac188d591f68e410fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };