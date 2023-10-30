let sliderContent = document.querySelector(".slider__content");
let sliderImage = document.querySelector(".slider__image");
let controlPrev = document.querySelector(".control__prev");
let controlNext = document.querySelector(".control__next");

let photoGalery = [
  "./img/котик1.jpg",
  "./img/котик2.jpg",
  "./img/котик3.jpg",
  "./img/котик4.jpg",
  "./img/котик5.jpg",
  "./img/котик6.jpg",
];

const WIDTH_IMAGE = 90   // брать ширину из css .slider__content

console.log(sliderImage, controlPrev, controlNext, photoGalery);

let imageIndex = 0;

function showNextImage() {
  if (imageIndex === photoGalery.length - 1) {
    imageIndex = 0;
    // sliderContent.style.transform = "translateX(0vw)";
  } else {
    imageIndex += 1;
    // sliderContent.style.transform += `translateX(-${WIDTH_IMAGE}vw)`;
  }

  sliderContent.style.transform = `translateX(-${imageIndex * WIDTH_IMAGE}vw)`;


  // sliderImage.setAttribute("src", photoGalery[imageIndex]);

  // console.log(imageIndex);
}

function showPrevImage() {
  if (imageIndex === 0) {
    imageIndex = photoGalery.length - 1;
  } else {
    imageIndex -= 1;
  }
  
  sliderContent.style.transform = `translateX(-${imageIndex * WIDTH_IMAGE}vw)`;
  

  // sliderImage.setAttribute("src", photoGalery[imageIndex]);

  // console.log(imageIndex);
}

controlPrev.addEventListener("click", showPrevImage);
controlNext.addEventListener("click", showNextImage);
