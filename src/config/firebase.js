import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSH9n7xssr1zDSvwODjZTn9Rs5WJjgvuY",
  authDomain: "imoney-2333e.firebaseapp.com",
  projectId: "imoney-2333e",
  storageBucket: "imoney-2333e.appspot.com",
  messagingSenderId: "478529927961",
  appId: "1:478529927961:web:967af5947d3984650be388",
  measurementId: "G-5KVWNXNFT2"
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectAuth, projectFirestore, timestamp };