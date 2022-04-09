//DOM variables
const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upButton = document.querySelector(".up-btn");
const downButton = document.querySelector(".down-btn");
const slidesLength = slideRight.querySelectorAll("div").length;

//Variables settings
let activeSlideIndex = 0;

slideLeft.style.top = `${(slidesLength - 1) * 100}`;

//Functions
const changeSlide = direction => {
  const sliderHeight = sliderContainer.clientHeight;
  console.log(sliderHeight);

  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  }

  slideRight.style.transform = `translateY(-${activeSlideIndex *
    sliderHeight}px)`;
};

//events
upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("up"));
