// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIYBICCP1NkQZ3lurIEY-szj92WET40uU",
  authDomain: "patagonio-51690.firebaseapp.com",
  projectId: "patagonio-51690",
  storageBucket: "patagonio-51690.firebasestorage.app",
  messagingSenderId: "168971028689",
  appId: "1:168971028689:web:234700dd3a0cf6a59e5df0",
  measurementId: "G-7H3NYG47EW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);