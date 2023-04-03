const hamburger = document.querySelector(".hamburger");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const closeIcon = document.querySelector(".close-icon");
const items = document.querySelector(".hamburger-items");
const btn = document.getElementById("myBtn");
const modal = document.getElementById("myModal");
var closeBtn = document.getElementsByClassName("close")[0];

window.addEventListener("DOMContentLoaded", () => {
  items.classList.toggle("hide");
  closeIcon.classList.toggle("hide");
});

hamburger.addEventListener("click", () => {
  items.classList.toggle("hide");
  hamburgerIcon.classList.toggle("hide");
  closeIcon.classList.toggle("hide");
});

btn.onclick = function() {
  modal.style.display = "block";
}

closeBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(e) {
  if (e.target == modal) {
    modal.style.display = "none";
    console.log(e.target);
  }
}