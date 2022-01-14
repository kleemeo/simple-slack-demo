import firebase from "firebase/app";
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBfuLWvtIdTp4X-d8_QQj8569mHSUDdf7g",
  authDomain: "test-database-d477f.firebaseapp.com",
  databaseURL: "https://test-database-d477f-default-rtdb.firebaseio.com",
  projectId: "test-database-d477f",
  storageBucket: "test-database-d477f.appspot.com",
  messagingSenderId: "435125739081",
  appId: "1:435125739081:web:ae8805759af9d474496998"
};

firebase.initializeApp(firebaseConfig);

export default firebase;