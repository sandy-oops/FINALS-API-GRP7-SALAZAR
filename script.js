const swipers = {};

function initSwiper(id) {
    swipers[id] = {
        currentIndex: 0,
        totalSlides: document.querySelectorAll(`#${id} .swiper-slide`).length
    };
}

function showSlide(id) {
    const slides = document.querySelector(`#${id} .swiper-wrapper`);
    slides.style.transform = `translateX(-${swipers[id].currentIndex * 100}%)`;
}

function nextSlide(id) {
    swipers[id].currentIndex = (swipers[id].currentIndex + 1) % swipers[id].totalSlides;
    showSlide(id);
}

function prevSlide(id) {
    swipers[id].currentIndex = (swipers[id].currentIndex - 1 + swipers[id].totalSlides) % swipers[id].totalSlides;
    showSlide(id);
}

// Initialize both swipers
initSwiper('swiper1');
initSwiper('swiper2');
