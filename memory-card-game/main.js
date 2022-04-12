//DOM Variables and other variables
const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
const playerLives = 7;

//Link text
playerLivesCount.textContent = playerLives;

//Generate the data
const getData = () => [
  { imgSrc: "./img/1.jpg", name: "card1" },
  { imgSrc: "./img/2.jpg", name: "card2" },
  { imgSrc: "./img/3.jpg", name: "card3" },
  { imgSrc: "./img/4.jpg", name: "card4" },
  { imgSrc: "./img/5.jpg", name: "card5" },
  { imgSrc: "./img/6.jpg", name: "card6" },
  { imgSrc: "./img/7.jpg", name: "card7" },
  { imgSrc: "./img/8.jpg", name: "card8" },
  { imgSrc: "./img/1.jpg", name: "card1" },
  { imgSrc: "./img/2.jpg", name: "card2" },
  { imgSrc: "./img/3.jpg", name: "card3" },
  { imgSrc: "./img/4.jpg", name: "card4" },
  { imgSrc: "./img/5.jpg", name: "card5" },
  { imgSrc: "./img/6.jpg", name: "card6" },
  { imgSrc: "./img/7.jpg", name: "card7" },
  { imgSrc: "./img/8.jpg", name: "card8" },
];

//Randomize
const randomize = () => {
  //1. Get data
  const cardData = getData();

  //2. All what you need to randomize an array
  cardData.sort(() => Math.random() - 0.5);

  //3. Console randomize array with objects
  console.log(cardData);
};

randomize();
