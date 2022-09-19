import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA28i3qXe82lVhuexLoB5Qu9h8W5xhKDiY",
  authDomain: "twitter-app-b11df.firebaseapp.com",
  projectId: "twitter-app-b11df",
  storageBucket: "twitter-app-b11df.appspot.com",
  messagingSenderId: "80087337324",
  appId: "1:80087337324:web:1c3c7a66e69066b4ef0b49"
};

// const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const provider = new firebase.auth.GoogleAuthProvider();