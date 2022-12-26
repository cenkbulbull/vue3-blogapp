import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwX72mJyj2_SwKu50cSSNZ-NLPopwExU0",
  authDomain: "vue3-blogapp.firebaseapp.com",
  projectId: "vue3-blogapp",
  storageBucket: "vue3-blogapp.appspot.com",
  messagingSenderId: "333632400852",
  appId: "1:333632400852:web:d7f91e3e25a67f42923a41",
  measurementId: "G-8K4KBPKHVJ"
};

const firebaseApp = initializeApp(firebaseConfig);

// Firestore Reference
const db = getFirestore(firebaseApp);

export {db}