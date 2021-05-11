import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBFpV3GbhqGkIVUFjAibBqrr4MEsSjHK5I",
    authDomain: "flipper-gadgets.firebaseapp.com",
    projectId: "flipper-gadgets",
    storageBucket: "flipper-gadgets.appspot.com",
    messagingSenderId: "1053827738491",
    appId: "1:1053827738491:web:8954198a385d88bbf62bde",
    measurementId: "G-DY0X3VW232"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db