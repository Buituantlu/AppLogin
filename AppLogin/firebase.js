// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc7iyEoykc6wLUkG5glmiKNqjxusEMVFs",
  authDomain: "applogin-e6e87.firebaseapp.com",
  projectId: "applogin-e6e87",
  storageBucket: "applogin-e6e87.appspot.com",
  messagingSenderId: "537430796622",
  appId: "1:537430796622:web:7a08aab7aea6c201a6961f"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export {auth};