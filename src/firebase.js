// const firebaseConfig = {
    
// };

import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDS33fFJfqoNldHzg11txv421CedSyNXc8",
    authDomain: "todo-app-c21e1.firebaseapp.com",
    databaseURL: "https://todo-app-c21e1.firebaseio.com",
    projectId: "todo-app-c21e1",
    storageBucket: "todo-app-c21e1.appspot.com",
    messagingSenderId: "747759868913",
    appId: "1:747759868913:web:2d77d8168012a8fcee8250",
    measurementId: "G-3ZQFM8M7KL"
})

const db = firebaseApp.firestore();


export default db;