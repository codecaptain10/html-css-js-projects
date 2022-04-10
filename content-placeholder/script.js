//Variables
const header = document.querySelector("#header");
const title = document.querySelector("#title");
const excerpt = document.querySelector("#excerpt");
const profile_img = document.querySelector("#profile_img");
const userName = document.querySelector("#name");
const date = document.querySelector("#date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bgs_text = document.querySelectorAll(".animated-bg-text");

//Functions
function getData() {
  header.innerHTML = ` <img src="img/laptop.jpg" alt="" />`;
  title.innerHTML = "Lorem ipsum dolor sit amet.";
  excerpt.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quas.";
  profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits.men.45.jpg" alt="" />`;
  userName.innerHTML = "John Doe";
  date.innerHTML = "08 October, 2020";

  animated_bgs.forEach(bg => bg.classList.remove("animated-bg"));
  animated_bgs_text.forEach(bg => bg.classList.remove("animated-bg-text"));
}

setTimeout(getData, 2500);
