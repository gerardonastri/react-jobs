import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDyOu8MoSYzPcYxyG3Q1fx1m_v-sv5aW9o",
  authDomain: "react-jobs-8b191.firebaseapp.com",
  projectId: "react-jobs-8b191",
  storageBucket: "react-jobs-8b191.appspot.com",
  messagingSenderId: "184325908602",
  appId: "1:184325908602:web:c7352e141d1bc476c133c3"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const storage = firebase.storage();
export default storage