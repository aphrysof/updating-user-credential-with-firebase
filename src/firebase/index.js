// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-oM-0-dSEnOB95sUCcRbT7DnRXhgCyok",
  authDomain: "user-authentication-4235b.firebaseapp.com",
  projectId: "user-authentication-4235b",
  storageBucket: "user-authentication-4235b.appspot.com",
  messagingSenderId: "275194527767",
  appId: "1:275194527767:web:7a799e6f7f9c2da4c21c52",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
//SignInWithGoogle function

export const SignInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
     console.log(result.user);
    })
    .catch((err) => {
      console.log(err.message);
    });
};
//Sign OUt

export const SignOut = () => {
  signOut(auth)
    .then(() => {
      console.log('logged out')
    })
    .catch((error) => {
      console.log(error);
    });
};
//onAuthStateChanged is an observable that gets called whenever a user state changes
// onAuthStateChanged(auth, (user) => {
// if (user) {
//   // User is signed in, see docs for a list of available properties
//   // https://firebase.google.com/docs/reference/js/firebase.User
//   const uid = user.uid;
//   // ...
// } else {
//   // User is signed out
//   // ...
//   // }
//   if (user) {
//     console.log(user);
//   } else {
//     console.log("still null");
//   }
// });
