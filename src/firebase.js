
import firebase from 'firebase'

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyDA2ZPaoFWdBUcdWvRuN1GxK3FPvHn-6r0",
    authDomain: "goalty-app.firebaseapp.com",
    databaseURL: "https://goalty-app.firebaseio.com",
    projectId: "goalty-app",
    storageBucket: "",
    messagingSenderId: "811584072615"
  };

  firebase.initializeApp(config);

export default firebase;