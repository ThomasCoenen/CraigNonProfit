//initialize app. this is how react will know our credentials and where 
//to store the data
//holds all of our component levels apps
import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyChVz5rZxrzseuIZyDJMTBLI5aV01qrOQo",
    authDomain: "cragssite.firebaseapp.com",
    projectId: "cragssite",
    storageBucket: "cragssite.appspot.com",
    messagingSenderId: "831326924461",
    appId: "1:831326924461:web:411326f399ebd14d4d2024",
    measurementId: "G-87WND4FYMH"
})

//DB. currently using cloudFirestore but could also use a realtime DB
var db = firebaseApp.firestore();

export { db };