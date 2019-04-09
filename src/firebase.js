import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyAntoZPIT4HR_szqI7-2ExfIq35HskAXNQ",
  authDomain: "test-app-f0ef4.firebaseapp.com",
  databaseURL: "https://test-app-f0ef4.firebaseio.com",
  projectId: "test-app-f0ef4",
  storageBucket: "",
  messagingSenderId: "188612113667"
};
export const firebaseApp = firebase.initializeApp(config);
/*
export const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();
*/
