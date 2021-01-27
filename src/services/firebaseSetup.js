import firebase from "firebase";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfUNR5cPl7ldCXs-8ApMYlHxUUnkz8HzU",
  authDomain: "omega-14.firebaseapp.com",
  projectId: "omega-14",
  storageBucket: "omega-14.appspot.com",
  messagingSenderId: "187356339044",
  appId: "1:187356339044:web:3d87b652a084863502b871",
  measurementId: "G-9Z3RWWXTVM",
};
// Initialize Firebase
const firebaseInit = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebaseInit;
