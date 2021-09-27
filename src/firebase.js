
import firebase from 'firebase/app';
import 'firebase/firestore';
require('firebase/auth');




const firebaseConfig = {
  apiKey: "AIzaSyDdFYonf8cRYuTQS_O52w0XDoxqCjOCpcQ",
  authDomain: "facebookweb-2021.firebaseapp.com",
  projectId: "facebookweb-2021",
  storageBucket: "facebookweb-2021.appspot.com",
  messagingSenderId: "988053418351",
  appId: "1:988053418351:web:efc832b5a98105083f789a"
};


  const firebaseApp = firebase.initializeApp(firebaseConfig); 

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();



  export {auth, provider};
  export default db;