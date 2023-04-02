const hamburger = document.querySelector(".hamburger");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const closeIcon = document.querySelector(".close-icon");
const items = document.querySelector(".hamburger-items");

window.addEventListener("DOMContentLoaded", () => {
  items.classList.toggle("hide");
  closeIcon.classList.toggle("hide");
});

hamburger.addEventListener("click", () => {
  items.classList.toggle("hide");
  hamburgerIcon.classList.toggle("hide");
  closeIcon.classList.toggle("hide");
});
