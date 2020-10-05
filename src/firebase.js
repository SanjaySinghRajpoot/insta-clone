// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCExELjRA4yjmxFkhUQNgd4WLRKyLmJYE0",
    authDomain: "insta-clone-c697d.firebaseapp.com",
    databaseURL: "https://insta-clone-c697d.firebaseio.com",
    projectId: "insta-clone-c697d",
    storageBucket: "insta-clone-c697d.appspot.com",
    messagingSenderId: "1097302878195",
    appId: "1:1097302878195:web:afc9f9144ef90dd96e1486",
    measurementId: "G-MV012Y5PW7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export { db, auth, storage }