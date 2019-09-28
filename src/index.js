import "./styles/main.scss";

const menu = document.getElementById("menu");
const dropdown = document.getElementById("dropdown");
const searchIcon = document.getElementById("search-icon");
const input = document.getElementById("input");

menu.addEventListener("click", event => {
  dropdown.classList.toggle("nav-dropdown");
  dropdown.classList.toggle("hide");
});

searchIcon.addEventListener("click", event => {
  input.classList.toggle("search-input");
  input.classList.toggle("hide");
});
