// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC9bhr9vNwkUgeFEut0cFGP0Zo_eagw6W8",
    authDomain: "dsvp-app.firebaseapp.com",
    projectId: "dsvp-app",
    storageBucket: "dsvp-app.firebasestorage.app",
    messagingSenderId: "342010279797",
    appId: "1:342010279797:web:d6c2e7ba3075418232053c",
    measurementId: "G-M7GNQNPWK5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);