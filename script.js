document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slider img');
    const dots = document.querySelectorAll('.slider-nav a');

    let currentSlide = 0;

    function showSlide(n) {
        slides.forEach((slide, index) => {
            if (index === n) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
        updateDots(n);
    }

    function updateDots(n) {
        dots.forEach((dot, index) => {
            if (index === n) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function startSlider() {
        setInterval(nextSlide, 5000); // Change slide every 3 seconds
    }

    showSlide(currentSlide);
    startSlider();

    const menuButton = document.getElementById('menu-button');
    const navBar = document.getElementById('navPanel');

    menuButton.addEventListener('click', function () {
        navBar.classList.toggle('active');
    });
});


