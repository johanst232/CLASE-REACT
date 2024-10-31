// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeRoAUxldsLyGsHR_-wf2Lv1HjuQCT9Fw",
  authDomain: "bd-eshoop.firebaseapp.com",
  projectId: "bd-eshoop",
  storageBucket: "bd-eshoop.appspot.com",
  messagingSenderId: "21853267385",
  appId: "1:21853267385:web:1cbb41ae6da3a1a7ffc268",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
