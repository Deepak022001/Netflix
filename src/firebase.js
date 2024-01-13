// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHh76RoYlzOpGqL0QsuoWJBcHj51h_p3c",
  authDomain: "netflix-clone-a5767.firebaseapp.com",
  projectId: "netflix-clone-a5767",
  storageBucket: "netflix-clone-a5767.appspot.com",
  messagingSenderId: "26912796532",
  appId: "1:26912796532:web:4e28372ab713a69a3a8621",
  measurementId: "G-W15TGK4KVH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);