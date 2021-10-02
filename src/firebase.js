import firebase from 'firebase';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDeqbGbb-XRrok4SWD3EN6zfQJ_37KzQuU",
    authDomain: "facebook-7f5cd.firebaseapp.com",
    projectId: "facebook-7f5cd",
    storageBucket: "facebook-7f5cd.appspot.com",
    messagingSenderId: "287920071072",
    appId: "1:287920071072:web:34fef7b4aa9e8464a8c4c5",
    measurementId: "G-2BPJYC25V5"
  });

  const auth = firebase.auth();

  export { auth};
