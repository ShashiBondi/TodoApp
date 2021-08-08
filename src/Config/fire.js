import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMZjtB_aYL1OFZjBp237RRt1-NnkIhw-g",
  authDomain: "todo-app-1e4f9.firebaseapp.com",
  projectId: "todo-app-1e4f9",
  storageBucket: "todo-app-1e4f9.appspot.com",
  messagingSenderId: "958719707093",
  appId: "1:958719707093:web:b4a91522cbce1169875f5c",
  measurementId: "G-W0R1NMG60P",
};

firebase.initializeApp(firebaseConfig);

const Auth = firebase.auth();
const Db = firebase.firestore();

export { Auth, Db };
