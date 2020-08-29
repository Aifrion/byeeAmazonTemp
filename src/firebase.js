import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCLXzPI6ppKuO8DplB2llwQTXZA00AxYGM",
    authDomain: "clone-4439a.firebaseapp.com",
    databaseURL: "https://clone-4439a.firebaseio.com",
    projectId: "clone-4439a",
    storageBucket: "clone-4439a.appspot.com",
    messagingSenderId: "955240211292",
    appId: "1:955240211292:web:b6d65d5c734685c4dc5799",
    measurementId: "G-QGR9PZBHEY"
});


const auth = firebase.auth();

export{auth};
