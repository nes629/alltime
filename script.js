const slidesContainer = document.querySelector('.slideshow');
const slides = slidesContainer.querySelectorAll('.slide-img'); // Use the correct class
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    const slideOffset = (i - index) * 100; // Assuming each slide is 100% width
    slide.style.transform = `translateX(${slideOffset}%)`; // Slide the image
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 3000);
showSlide(currentSlide);
