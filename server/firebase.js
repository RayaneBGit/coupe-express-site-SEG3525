// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-k9TtP52DtV6DSSzfk2-8n_qng6gYCak",
  authDomain: "salon-boreal.firebaseapp.com",
  projectId: "salon-boreal",
  storageBucket: "salon-boreal.firebasestorage.app",
  messagingSenderId: "412770992935",
  appId: "1:412770992935:web:b7d7cb2568abb5550e9f02",
  measurementId: "G-GBK702F8DN"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };