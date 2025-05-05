// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAadwqbQryXCsYOx5lMoJDGoM_eXDBfH5U",
  authDomain: "tutelify.firebaseapp.com",
  projectId: "tutelify",
  storageBucket: "tutelify.firebasestorage.app",
  messagingSenderId: "167275185322",
  appId: "1:167275185322:web:fe6088ac536642d03afcd3",
  measurementId: "G-MYK2EJFLK5"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);