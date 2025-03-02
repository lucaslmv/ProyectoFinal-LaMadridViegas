import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCogc8105qqa32aq1s8eqejY2OZ2gjHbek",
  authDomain: "bodybags.firebaseapp.com",
  projectId: "bodybags",
  storageBucket: "bodybags.firebasestorage.app",
  messagingSenderId: "477531798356",
  appId: "1:477531798356:web:05dd9374f63e7679d5a6c1",
  measurementId: "G-103W9EWYLV",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };