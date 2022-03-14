import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD5v6urtha_8G9d1qdjQJC6n3ZJskiOJOM",
  authDomain: "smartfarming-b6f1a.firebaseapp.com",
  databaseURL: "https://smartfarming-b6f1a-default-rtdb.firebaseio.com",
  projectId: "smartfarming-b6f1a",
  storageBucket: "smartfarming-b6f1a.appspot.com",
  messagingSenderId: "355310653007",
  appId: "1:355310653007:web:9e1ff129bfcb1fd393243a",
  measurementId: "G-G96Q8QE7HX"
};

const app = initializeApp(firebaseConfig);
const firedb = getDatabase(app);
export default firedb;


