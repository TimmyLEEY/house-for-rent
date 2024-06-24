
const firebaseConfig = {
    apiKey: "AIzaSyCJTI8HysbBxFvkF5hKw_euYRALmhtHu_E",
    authDomain: "get-house-for-rent.firebaseapp.com",
    projectId: "get-house-for-rent",
    storageBucket: "get-house-for-rent.appspot.com",
    messagingSenderId: "317107927433",
    appId: "1:317107927433:web:5e39f3445f1f792f800958"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
var provider = new firebase.auth.GoogleAuthProvider();
const db = firebase.firestore();
var storageRef = firebase.storage().ref();
