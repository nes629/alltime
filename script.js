const slidesContainer = document.querySelector('.slideshow');
const slides = slidesContainer.querySelectorAll('.slide-img');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    const slideOffset = (i - index) * 100; 
    slide.style.transform = `translateX(${slideOffset}%)`;
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 3000);
showSlide(currentSlide);
