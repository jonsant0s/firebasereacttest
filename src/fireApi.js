import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDclWyI95eha2B3BIoo19olGYMIKGyQrcE",
  authDomain: "reactfire-auth-protection.firebaseapp.com",
  projectId: "reactfire-auth-protection"
};

const firebaseApp = firebase.initializeApp(config);

export const fireAuth = firebaseApp.auth();
