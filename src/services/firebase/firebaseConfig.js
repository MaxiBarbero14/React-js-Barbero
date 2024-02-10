import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCQrp2OSxw39AXmS2Fu7G94usUDF2kRJHM",
  authDomain: "maxibarberoch.firebaseapp.com",
  projectId: "maxibarberoch",
  storageBucket: "maxibarberoch.appspot.com",
  messagingSenderId: "211274462501",
  appId: "1:211274462501:web:41954379f2d7efa136d6cc"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)