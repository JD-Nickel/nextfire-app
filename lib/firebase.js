import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDw9w8Ml65-oXTX9SGcuLKoQE7DfhTm798",
    authDomain: "nextfire-c072d.firebaseapp.com",
    projectId: "nextfire-c072d",
    storageBucket: "nextfire-c072d.appspot.com",
    messagingSenderId: "1065754011150",
    appId: "1:1065754011150:web:95fee90ed85da75b80fe5f",
    measurementId: "G-BL7X922XTB"
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();
