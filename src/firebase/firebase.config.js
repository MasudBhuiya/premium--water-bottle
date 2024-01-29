// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM4y1WLQDGwRhtnmf33Ta8mwQblC7Lijg",
  authDomain: "premium-water-bottle.firebaseapp.com",
  projectId: "premium-water-bottle",
  storageBucket: "premium-water-bottle.appspot.com",
  messagingSenderId: "1027798278387",
  appId: "1:1027798278387:web:02b565bf62806fb5d85786"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;