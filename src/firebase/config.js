import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvYo5V6XVytw75NhW8gfWafhtukU3GPa8",
  authDomain: "sharpcuts-studio.firebaseapp.com",
  projectId: "sharpcuts-studio",
  storageBucket: "sharpcuts-studio.firebasestorage.app",
  messagingSenderId: "349145706190",
  appId: "1:349145706190:web:a53fe2c2a1b21d38422a9f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;