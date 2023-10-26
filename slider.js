const slider = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.slide');
const slideWidth = 412; // Adjust this value to match your card width including margin

let currentIndex = 0;

function showSlide(index) {
    if (index < 0) {
        index = slides.length - 1;
    } else if (index >= slides.length) {
        index = 0;
    }

    const translateX = -index * slideWidth;
    slider.style.transform = `translateX(${translateX}px)`;
    currentIndex = index;
}

// Next Slide
function nextSlide() {
    showSlide(currentIndex + 1);
}

// Previous Slide
function prevSlide() {
    showSlide(currentIndex - 1);
}

// Start the slider from the first card when reaching the end
function startFromBeginning() {
    showSlide(0);
}

// Set an interval to automatically move to the next slide
const interval = 5000; // Adjust this value to control the interval time (in milliseconds)

let autoSlider;

function startAutoSlider() {
    autoSlider = setInterval(nextSlide, interval);
}

function stopAutoSlider() {
    clearInterval(autoSlider);
}

// Start auto slider when the page loads
startAutoSlider();

// Add event listeners for the "Next" and "Previous" buttons
const nextButton = document.querySelector('.slider-button-next');
const prevButton = document.querySelector('.slider-button-prev');

nextButton.addEventListener('click', () => {
    nextSlide();
    stopAutoSlider();
    startAutoSlider();
});

prevButton.addEventListener('click', () => {
    prevSlide();
    stopAutoSlider();
    startAutoSlider();
});