// script.js
const carousel = document.getElementById('carousel');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let currentIndex = 0;
const cardWidth = 395; // Adjust as needed for spacing
const cardsToShow = 3;

nextButton.addEventListener('click', () => {
    if (currentIndex < carousel.children.length - cardsToShow) {
        currentIndex += 1;
        updateCarousel();
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex -= 1;
        updateCarousel();
    }
});

function updateCarousel() {
    const translateX = -currentIndex * cardWidth;
    carousel.style.transform = `translateX(${translateX}px)`;
}

updateCarousel();
