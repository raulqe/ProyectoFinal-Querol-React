// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter} from 'react-router-dom'
import './index.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcjkpvxOyX1l69ngG9gPOoLF0495Y4WvM",
  authDomain: "oh-my-t-shirt.firebaseapp.com",
  projectId: "oh-my-t-shirt",
  storageBucket: "oh-my-t-shirt.appspot.com",
  messagingSenderId: "274440988626",
  appId: "1:274440988626:web:c65b63ce8f13a2ab708a0b",
  measurementId: "G-C7FG2GD21G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

createRoot(document.getElementById('root')).render(
<BrowserRouter>
    <App />
</BrowserRouter>
)
