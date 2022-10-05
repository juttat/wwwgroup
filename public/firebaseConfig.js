import { initializeApp } from "firebase/app";

const firebaseConfig = {

    apiKey: "AIzaSyB7QSJYt7tUYaL5aMFXjc2NPZOslAg7HSg",
  
    authDomain: "ryhma-d6a0a.firebaseapp.com",
  
    databaseURL: "https://ryhma-d6a0a-default-rtdb.europe-west1.firebasedatabase.app",
  
    projectId: "ryhma-d6a0a",
  
    storageBucket: "ryhma-d6a0a.appspot.com",
  
    messagingSenderId: "984057815027",
  
    appId: "1:984057815027:web:4c627512898f4abc8dbc86",
  
    measurementId: "G-SDZSSQGCW2"
  
  };

  
  export const app = initializeApp(firebaseConfig);