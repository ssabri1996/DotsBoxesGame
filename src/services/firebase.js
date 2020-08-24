import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA3pKVNGgnLS9CMaDh6Qo24bN7LMk1pJDk",
    authDomain: "dotsboxes-9a534.firebaseapp.com",
    databaseURL: "https://dotsboxes-9a534.firebaseio.com",
    projectId: "dotsboxes-9a534",
    storageBucket: "dotsboxes-9a534.appspot.com",
    messagingSenderId: "751501089960",
    appId: "1:751501089960:web:1593d5a24a244f0781769d",
    measurementId: "G-CZ93Q4PXDQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth()
export const db = firebase.firestore()
export default firebase