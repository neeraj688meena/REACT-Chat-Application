import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDZ4Ry4C7YWDeBZwXEx-dA25YJmSJowIcQ",
    authDomain: "bharat-kee-baat.firebaseapp.com",
    databaseURL: "https://bharat-kee-baat.firebaseio.com",
    projectId: "bharat-kee-baat",
    storageBucket: "bharat-kee-baat.appspot.com",
    messagingSenderId: "897733044521",
    appId: "1:897733044521:web:3a5acab546cae5cbd26f38",
    measurementId: "G-51WS7HE63D"

});

const db = firebase.firestore();

export default db;