// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnvNQdkSRUt4D2Rux1A7xGbVTjylDY51w",
  authDomain: "my-shop-a8ec3.firebaseapp.com",
  projectId: "my-shop-a8ec3",
  storageBucket: "my-shop-a8ec3.appspot.com",
  messagingSenderId: "60242413040",
  appId: "1:60242413040:web:de93f73865c1108ba84935",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
