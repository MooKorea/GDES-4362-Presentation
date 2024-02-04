import { database } from "./main";

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