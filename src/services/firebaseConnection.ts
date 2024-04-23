import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCQhlWDP1efVawMqTmk4y2h6DM5Q6hc-5w",
  authDomain: "sistema-de-chamado2024.firebaseapp.com",
  projectId: "sistema-de-chamado2024",
  storageBucket: "sistema-de-chamado2024.appspot.com",
  messagingSenderId: "778760188328",
  appId: "1:778760188328:web:b36247541702ce7a36ed9d",
  measurementId: "G-7SLK8288F4"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
