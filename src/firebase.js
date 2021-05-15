import firebase from 'firebase/app';// rollup bundle issue with ESM import
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBhkXbI6EjoartBLBvlqyRmK5OEnDzBsyU",
    authDomain: "grubstake-82448.firebaseapp.com",
    projectId: "grubstake-82448",
    storageBucket: "grubstake-82448.appspot.com",
    messagingSenderId: "590336944685",
    appId: "1:590336944685:web:4b3e118d1a477f915166a4",
    measurementId: "G-DPJF0T089J"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();
export const db = firebase.firestore();
