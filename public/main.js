// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, onValue } from "firebase/database";

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
const database = getDatabase(app);

const nameForm = document.querySelector("form");
const nameInput = document.querySelector('form input[type="text"]');
const nameSubmit = document.querySelector('form input[type="submit"');
const iconButtons = document.querySelector(".icon-buttons").children;

nameSubmit.style.opacity = "0.5";
nameSubmit.style.pointerEvents = "none";

nameInput.addEventListener("input", (e) => {
  const isAtLeast1Char = e.target.value.length > 0;
    nameSubmit.style.opacity = isAtLeast1Char ? "1" : "0.5"; 
    nameSubmit.style.pointerEvents = isAtLeast1Char ? "all" : "none";
  
});

Array.from(iconButtons).forEach((e) => {
  e.style.opacity = "0.5";
  e.style.pointerEvents = "none";
});

nameForm.addEventListener("submit", (e) => {
  e.preventDefault();
  nameForm.style.opacity = "0.5";
  nameForm.style.pointerEvents = "none";
  set(ref(database, "name"), nameInput.value);
  for (let i = 0; i < iconButtons.length; i++) {
    iconButtons[i].style.opacity = "1";
    iconButtons[i].style.pointerEvents = "all";
    iconButtons[i].setAttribute("data-index", i);
    iconButtons[i].addEventListener("click", (e) => {
      e = e.target;
      e.style.opacity = "0.5";
      e.style.pointerEvents = "none";
      const index = e.getAttribute("data-index");
      set(ref(database, "software"), index);
    });
  }
});

const softwareRef = ref(database, "software");
onValue(softwareRef, (snapshot) => {
  console.log(snapshot.val())
})