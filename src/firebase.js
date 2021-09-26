import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfKlXeEH5PpCg_M6h4Lt2LLZ43mp6DcYQ",
  authDomain: "clone-92a7c.firebaseapp.com",
  projectId: "clone-92a7c",
  storageBucket: "clone-92a7c.appspot.com",
  messagingSenderId: "691716230030",
  appId: "1:691716230030:web:83dfb5942ae0c6693632df",
  measurementId: "G-RL0EGZB38T"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth , provider};
  export default db;