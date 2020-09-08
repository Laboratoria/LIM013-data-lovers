//DOM de slides//
const slideAnterior = document.getElementById("prev");
slideAnterior.addEventListener("click", () => {
  nextSlides(-1);
});
const slideSiguiente = document.getElementById("next");
slideSiguiente.addEventListener("click", () => {
  nextSlides(1);
});
const slide1 = document.getElementById("dot1");
slide1.addEventListener("click", () => {
  presentSlide(1);
});

const slide2 = document.getElementById("dot2");
slide2.addEventListener("click", () => {
  presentSlide(2);
});

const slide3 = document.getElementById("dot3");
slide3.addEventListener("click", () => {
  presentSlide(3);
});

const slide4 = document.getElementById("dot4");
slide4.addEventListener("click", () => {
  presentSlide(4);
});

//slides de modo de juego//
let slideIndice = 1;
mostradoSlides(slideIndice);
let num = [];

function nextSlides(num) {
  mostradoSlides((slideIndice += num));
}
nextSlides(num);

function presentSlide(num) {
  mostradoSlides((slideIndice = num));
}
presentSlide(num);

function mostradoSlides(num) {
  let i = "";
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  if (num > slides.length) {
    slideIndice = 1;
  }
  if (num < 1) {
    slideIndice = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active-slide-img", "");
  }
  slides[slideIndice - 1].style.display = "block";
  dots[slideIndice - 1].className += "active-slide-img";
}
