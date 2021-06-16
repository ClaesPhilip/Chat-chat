import firebase from 'firebase';

import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';

var firebaseConfig = {
  apiKey: "AIzaSyAwTncxTVWatGADaezwBNXDXlFjZ-2j8uU",
  authDomain: "chatie-a4982.firebaseapp.com",
  projectId: "chatie-a4982",
  storageBucket: "chatie-a4982.appspot.com",
  messagingSenderId: "1083514089036",
  appId: "1:1083514089036:web:7d7fd014c163a505280ee9"
};

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;