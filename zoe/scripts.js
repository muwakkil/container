let currentIndex = 0;

function moveSlide(step) {
    let images = document.querySelectorAll('.carousel-image');
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + step + images.length) % images.length;
    images[currentIndex].style.display = 'block';
}