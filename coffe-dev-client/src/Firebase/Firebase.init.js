import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDav8H7ZCdg3ldQ8nnmeR9l6dSiymxyzo0",
  authDomain: "my-coffee-app-a3d8c.firebaseapp.com",
  projectId: "my-coffee-app-a3d8c",
  storageBucket: "my-coffee-app-a3d8c.firebasestorage.app",
  messagingSenderId: "364125196670",
  appId: "1:364125196670:web:187db2e3082d205042e32f",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
