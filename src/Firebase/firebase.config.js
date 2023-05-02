// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBETb33YD4q518HtFDx2U_OFeSCczSFz64",
  authDomain: "recipe-hunter-client.firebaseapp.com",
  projectId: "recipe-hunter-client",
  storageBucket: "recipe-hunter-client.appspot.com",
  messagingSenderId: "859545605824",
  appId: "1:859545605824:web:ffa5db67d109b8d78fff25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;