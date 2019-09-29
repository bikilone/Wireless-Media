import "./styles/main.scss";

const menu = document.getElementById("menu");
const dropdown = document.getElementById("dropdown");
const searchIcon = document.getElementById("search-icon");
const input = document.getElementById("input");
const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");
const carousel = document.getElementById("carousel");
const slides = document.getElementsByClassName("text-slider");

menu.addEventListener("click", event => {
  dropdown.classList.toggle("nav-dropdown");
  dropdown.classList.toggle("hide");
});

searchIcon.addEventListener("click", event => {
  input.classList.toggle("search-input");
  input.classList.toggle("hide");
});

// Slide
let counter = 0;
const size = slides[0].clientWidth;

arrowRight.addEventListener("click", () => {
  arrowLeft.style.transform = `translateX(${size * counter} px)`;
  // check if user can slide to right
  if (counter < 2) {
    carousel.style.transform = `translateX(${-size * counter} px)`;
    console.log(carousel);
    counter++;
  }
});
