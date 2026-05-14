
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "fir-c8c38.firebaseapp.com",
  projectId: "fir-c8c38",
  storageBucket: "fir-c8c38.firebasestorage.app",
  messagingSenderId: "798294241289",
  appId: "1:798294241289:web:7985f363264afa4a2a08d8"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}