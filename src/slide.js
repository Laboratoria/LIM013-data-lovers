//DOM de slides//
const slideprev = document.getElementById("prev");
slideprev.addEventListener("click", () => {
  plusSlides(-1);
});
const slidenext = document.getElementById("next");
slidenext.addEventListener("click", () => {
  plusSlides(1);
});
const slide1 = document.getElementById("dot1");
slide1.addEventListener("click", () => {
  currentSlide(1);
});

const slide2 = document.getElementById("dot2");
slide2.addEventListener("click", () => {
  currentSlide(2);
});

const slide3 = document.getElementById("dot3");
slide3.addEventListener("click", () => {
  currentSlide(3);
});

const slide4 = document.getElementById("dot4");
slide4.addEventListener("click", () => {
  currentSlide(4);
});

//slides de modo de juego//
let slideIndex = 1;
showSlides(slideIndex);
let num = [];

function plusSlides(num) {
  showSlides((slideIndex += num));
}
plusSlides(num);

function currentSlide(num) {
  showSlides((slideIndex = num));
}
currentSlide(num);

function showSlides(num) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  if (num > slides.length) {
    slideIndex = 1;
  }
  if (num < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active-slide-img", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += "active-slide-img";
}
