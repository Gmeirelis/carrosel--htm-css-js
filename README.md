# carrosel--htm-css-js

# html
<section class="carrosel">
  <ul class="slides">
    <li class="slide" data-active>
      <img src="img/pizza-promocao.jpeg" alt="Pizza">
    </li>
    <li class="slide">
      <img src="img/macarão.jpeg" alt="Macarrão">
    </li>
    <li class="slide">
      <img src="img/promoçao.png" alt="Promoção">
    </li>
  </ul>

  <!-- Barra de progresso -->
  <div class="progress-bar"></div>
</section>


# css

.carrosel {
  position: relative;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #000000;
  border-radius: 20px;
}

.slides {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

.slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.7s ease-in-out;
}

.slide[data-active] {
  opacity: 1;
  z-index: 1;
}

li {
  list-style: none;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}

/* Barra de progresso */
.progress-bar {
  position: absolute;
  bottom: 10px;
  left: 5%;
  width: 90%;
  height: 5px;
  background: rgba(255,255,255,0.3);
  border-radius: 5px;
  overflow: hidden;
}

.progress-bar::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0%;
  background: #ffcc00;
  animation: progress 3s linear infinite;      
 }
 @keyframes progress {
  from { width: 0%; }
  to { width: 100%; }
}

# js

const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function nextSlide() {
  slides[currentIndex].removeAttribute("data-active");
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].setAttribute("data-active", "");
}

setInterval(nextSlide, 3000);

































