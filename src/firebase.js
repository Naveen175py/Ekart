// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCsK0YGwPP-lZSj4N_E2agAu4MgGfsyo-E",
  authDomain: "challange-f26ff.firebaseapp.com",
  projectId: "challange-f26ff",
  storageBucket: "challange-f26ff.appspot.com",
  messagingSenderId: "12930768570",
  appId: "1:12930768570:web:23ffe22814f9558b172c83",
  measurementId: "G-9F0MNRP8BN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebase.auth();

export { db,auth};