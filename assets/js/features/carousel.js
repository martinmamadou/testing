export function initCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelector('.carousel-dots');
    let currentSlide = 0;

    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dots.appendChild(dot);
    });

    slides[0].classList.add('active');

    document.querySelector('.carousel-btn.prev').addEventListener('click', prevSlide);
    document.querySelector('.carousel-btn.next').addEventListener('click', nextSlide);

    document.querySelector('.offers-carousel').addEventListener('click', (e) => {
        if (e.target.classList.contains('offers-carousel')) {
            e.target.classList.remove('active');
            dots.innerHTML = '';
        }
    });

    function goToSlide(index) {
        slides[currentSlide].classList.remove('active');
        document.querySelectorAll('.dot')[currentSlide].classList.remove('active');
        
        slides[currentSlide].classList.add('prev');
        setTimeout(() => {
            slides[currentSlide].classList.remove('prev');
        }, 500);

        currentSlide = index;
        slides[currentSlide].classList.add('active');
        document.querySelectorAll('.dot')[currentSlide].classList.add('active');
    }

    function nextSlide() {
        goToSlide((currentSlide + 1) % slides.length);
    }

    function prevSlide() {
        goToSlide((currentSlide - 1 + slides.length) % slides.length);
    }
}

export function openOffers() {
    const carousel = document.querySelector('.offers-carousel');
    carousel.classList.add('active');
    initCarousel();
} 