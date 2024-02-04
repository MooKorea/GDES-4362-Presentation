// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlpaI8RfRp3c5OzAG0F9W1aB5aQlzAyZo",
  authDomain: "gdes-4362-presentation.firebaseapp.com",
  projectId: "gdes-4362-presentation",
  storageBucket: "gdes-4362-presentation.appspot.com",
  messagingSenderId: "429128256518",
  appId: "1:429128256518:web:7a7100b25e357b54250787",
  measurementId: "G-BFQVBHNR41",
  databaseURL: "https://gdes-4362-presentation-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);