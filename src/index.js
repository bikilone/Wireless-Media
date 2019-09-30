import "./styles/main.scss";

const menu = document.getElementById("menu");
const dropdown = document.getElementById("dropdown");
const searchIcon = document.getElementById("search-icon");
const input = document.getElementById("input");
const sliders = document.getElementById("sliders");
const sliderDot1 = document.getElementById("slider-dot-1");
const sliderDot2 = document.getElementById("slider-dot-2");
const sliderDot3 = document.getElementById("slider-dot-3");
const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");
const textSliders = document.getElementById("text-sliders");

menu.addEventListener("click", event => {
  dropdown.classList.toggle("nav-dropdown");
  dropdown.classList.toggle("hide");
});

searchIcon.addEventListener("click", event => {
  input.classList.toggle("search-input");
  input.classList.toggle("hide");
});

// Slider
const numOfSlides = 3;
const greenColor = "#bbd547";
const grayColor = "#bababa";
let counter = 0;

window.addEventListener("resize", e => {
  const sliderWidth = sliders.clientWidth / numOfSlides;
  const textSliderWidth = textSliders.clientWidth / numOfSlides;
  if (sliders.style.transform !== "") {
    sliders.classList.remove("slider-transition");
    sliders.style.transform = `translateX(${-sliderWidth}px)`;
    setTimeout(() => {
      sliders.classList.add("slider-transition");
    }, 0);
  }
  if (textSliders.style.transform !== "") {
    textSliders.classList.remove("slider-transition");
    textSliders.style.transform = `translateX(${-textSliderWidth}px)`;
    setTimeout(() => {
      textSliders.classList.add("slider-transition");
    }, 0);
  }
});

arrowLeft.addEventListener("click", () => {
  const size = sliders.clientWidth / numOfSlides;
  if (counter === 0) {
    return;
  }
  counter--;
  textSliders.style.transform = `translateX(${-counter * size}px)`;
  sliders.style.transform = `translateX(${-counter * size}px)`;
});
arrowRight.addEventListener("click", () => {
  const size = sliders.clientWidth / numOfSlides;
  if (counter === 2) {
    return;
  }
  counter++;

  textSliders.style.transform = `translateX(${-counter * size}px)`;
  sliders.style.transform = `translateX(${-counter * size}px)`;
});

sliderDot1.addEventListener("click", () => {
  const size = sliders.clientWidth / numOfSlides;
  sliders.style.transform = "translateX(0)";
  sliderDot1.style.borderColor = greenColor;
  sliderDot2.style.borderColor = grayColor;
  sliderDot3.style.borderColor = grayColor;
});
sliderDot2.addEventListener("click", () => {
  const size = sliders.clientWidth / numOfSlides;
  sliders.style.transform = `translateX(${-size}px)`;
  sliderDot1.style.borderColor = grayColor;
  sliderDot2.style.borderColor = greenColor;
  sliderDot3.style.borderColor = grayColor;
});
sliderDot3.addEventListener("click", () => {
  const size = sliders.clientWidth / numOfSlides;
  sliders.style.transform = `translateX(${-size * 2}px)`;
  sliderDot1.style.borderColor = grayColor;
  sliderDot2.style.borderColor = grayColor;
  sliderDot3.style.borderColor = greenColor;
});
