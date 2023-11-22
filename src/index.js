import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAGTZXRNACPv-Zl3_v7jvgy9AB-m0YuvMQ",
    authDomain: "proyecto-react-6bd56.firebaseapp.com",
    projectId: "proyecto-react-6bd56",
    storageBucket: "proyecto-react-6bd56.appspot.com",
    messagingSenderId: "200304667965",
    appId: "1:200304667965:web:7953f2bfbc15e18ef66954"
};



export const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />

);
