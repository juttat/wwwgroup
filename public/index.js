/*import './styles.css';
import { 
    hideLoginError, 
    showLoginState, 
    showLoginForm, 
    showApp, 
    showLoginError, 
    btnLogin,
    btnSignup,
    btnLogout
  } from './ui' */
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import {
    getFirestore,
    collection,
    doc,
    getDocs,
    setDoc
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

const firebaseApp = initializeApp({

    apiKey: "AIzaSyB7QSJYt7tUYaL5aMFXjc2NPZOslAg7HSg",
    authDomain: "ryhma-d6a0a.firebaseapp.com",
    databaseURL: "https://ryhma-d6a0a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "ryhma-d6a0a",
    storageBucket: "ryhma-d6a0a.appspot.com",
    messagingSenderId: "984057815027",
    appId: "1:984057815027:web:4c627512898f4abc8dbc86",
    measurementId: "G-SDZSSQGCW2"
  
});

// Setting up the auth and firestore services
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
//console.log(db)

// Setting up references to the "Countries" and "Users" collections
const countries = collection(db, "countries");
const users = collection(db, "users");
//console.log(countries)

// An example reference to a country in the "Countries collection", in this case Finland
const fin = doc(countries, "fin")
//console.log(fin.name)

/* Data to add to a country
const countryData = {
    name: "ukraine",
    desc: "wild dance"
}
Adding the country to the "Countries" collection
await setDoc(doc(db, "countries", "ukr"), countryData);*/

const querySnapshot = await getDocs(collection(db, "countries"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});

// Creating a user account
const createAccount = async () => {
    const loginEmail = "user3@test.org";
    const loginPassword = "1234";
    console.log(loginEmail + loginPassword)

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
        console.log(userCredential.user);
    }
    catch (error) {
        console.log(error);
        showLoginError(error);
    }
}

function myFunction() = {
    createAccount;
    return;
}

console.log("Hello!")