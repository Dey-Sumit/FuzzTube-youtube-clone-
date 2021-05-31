import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCosoL0Fdg0uqge8-",
  authDomain: "",
  projectId: "fu",
  storageBucket: "",
  messagingSenderId: "",
  appId: "1::web:",
};
//provide your own config from firebase
firebase.initializeApp(firebaseConfig);

export default firebase.auth();
