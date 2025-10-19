import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBW_uOfuwkED26DNpDFNuq4CNxx50_3LLk",
  authDomain: "yolollevo-c4d15.firebaseapp.com",
  projectId: "yolollevo-c4d15",
  storageBucket: "yolollevo-c4d15.firebasestorage.app",
  messagingSenderId: "774496818433",
  appId: "1:774496818433:web:b6a8da4e411a23b91bb700",
  measurementId: "G-ZBMCTMN6QC"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar servicios
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };