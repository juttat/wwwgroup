// const functions = require("firebase-functions");

// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {
  getFirestore, collection, getDocs,
} from "firebase/firestore";


// import {getAnalytics} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7QSJYt7tUYaL5aMFXjc2NPZOslAg7HSg",
  authDomain: "ryhma-d6a0a.firebaseapp.com",
  databaseURL: "https://ryhma-d6a0a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ryhma-d6a0a",
  storageBucket: "ryhma-d6a0a.appspot.com",
  messagingSenderId: "984057815027",
  appId: "1:984057815027:web:4c627512898f4abc8dbc86",
  measurementId: "G-SDZSSQGCW2",
};

// Initialize Firebase
initializeApp(firebaseConfig);

// db ref
const db = getFirestore();

// collection ref
const colRef = collection(db, "countries");

// get collection data
getDocs(colRef)
    .then((snapshot) => {
      console.log(snapshot.docs);
    });

// const analytics = getAnalytics(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
/* exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});*/

