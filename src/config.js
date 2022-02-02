import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAsT3puc854Fnz3NvIIrlADyRD46tPYcbU",
  authDomain: "projectjanfluk.firebaseapp.com",
  databaseURL: "https://projectjanfluk-default-rtdb.firebaseio.com",
  projectId: "projectjanfluk",
  storageBucket: "projectjanfluk.appspot.com",
  messagingSenderId: "565090435465",
  appId: "1:565090435465:web:4586044449b14911852158",
  measurementId: "G-HBYY94967E",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
