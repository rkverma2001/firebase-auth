import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAEKqRk93Whku_Ngzr7CVd0I5ukYvgl3K0",
  authDomain: "nebula-141ae.firebaseapp.com",
  projectId: "nebula-141ae",
  storageBucket: "nebula-141ae.appspot.com",
  messagingSenderId: "610134895403",
  appId: "1:610134895403:web:f53dfddaa054a038d7736e",
  measurementId: "G-XV8D34J62N",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
