let sliderContent = document.querySelector(".slider__content");
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

console.log(sliderContent, controlPrev, controlNext, photoGalery);

let imageIndex = 0;

function showNextImage() {
  if (imageIndex === photoGalery.length - 1) {
    imageIndex = 0;
  } else {
    imageIndex += 1;
  }

  console.log(imageIndex);
}

function showPrevImage() {
  if (imageIndex === 0) {
    imageIndex = photoGalery.length - 1;
  } else {
    imageIndex -= 1;
  }

  console.log(imageIndex);
}

controlPrev.addEventListener("click", showPrevImage);
controlNext.addEventListener("click", showNextImage);