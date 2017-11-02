import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCLtPE8ETn5MBJBHjo3jE8NH6y1twWBx2I",
  authDomain: "flight-ade38.firebaseapp.com",
  databaseURL: "https://flight-ade38.firebaseio.com",
  projectId: "flight-ade38",
  storageBucket: "",
  messagingSenderId: "352941223274"
};

firebase.initializeApp(config);

export const database = firebase.database();

export default firebase;