import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, deleteDoc, doc, getDocs, query, where, Timestamp } from "firebase/firestore";

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
