# javascript

const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function nextSlide() {
  slides[currentIndex].removeAttribute("data-active");
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].setAttribute("data-active", "");
}

setInterval(nextSlide, 3000);
