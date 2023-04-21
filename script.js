const imgs = document.getElementById('imgs');
const left = document.getElementById('left');
const right = document.getElementById('right');
const slides = document.querySelectorAll('img').length - 1;

let slideNumber = 0;

let interval = setInterval(slideCarousel, 3000);

function slideCarousel() {
    slideNumber++;
    if (slideNumber > slides) {
        slideNumber = 0;
    }
    imgs.style.transform = `translateX(${-500 * slideNumber}px)`;
}

right.addEventListener('click', () => {
    slideNumber++;
    if (slideNumber > slides) {
        slideNumber = 0;
    }
    imgs.style.transform = `translateX(${-500 * slideNumber}px)`;
    clearInterval(interval);
    interval = setInterval(slideCarousel, 3000);
});

left.addEventListener('click', () => {
    slideNumber--;
    if (slideNumber < 0) {
        slideNumber = slides;
    }
    imgs.style.transform = `translateX(${-500 * slideNumber}px)`;
    clearInterval(interval);
    interval = setInterval(slideCarousel, 3000);
});

