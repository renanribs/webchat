import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUofvfPBZ-lGiR0_xFe8sVp4luRWLncLk",
  authDomain: "polichat-b4b3f.firebaseapp.com",
  projectId: "polichat-b4b3f",
  storageBucket: "polichat-b4b3f.appspot.com",
  messagingSenderId: "1023049903271",
  appId: "1:1023049903271:web:fb761fd31703d578fc7f82",
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
