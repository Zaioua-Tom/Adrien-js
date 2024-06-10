let carousel = document.querySelector('.carousel-container');
let items = [];
let path = document.querySelector('.carousel-container').dataset.path;
let index = 0; 

async function getImages() {
  let response = await fetch(path);
  let data = await response.json();
  return data.images;
}
async function init() {

    const images = await getImages();

    images.forEach((image) => {
    let img = document.createElement('img');
    img.src = `${image}`;
    img.classList.add('carousel-item');
    img.style.display = 'none';
    carousel.prepend(img);
    items.push(img);
    });

    let totalItems = items.length;

    let counter = document.getElementById('counter');

    function updateCounter() {
        counter.textContent = `${index + 1} / ${totalItems}`;
    }

    function updateCarousel() {
        items.forEach(item => item.style.display = 'none');
        items[index].style.display = 'block';
        updateCounter();
    }

    function prevSlide() {
        index--;
        if (index < 0) { index = totalItems - 1; }
        updateCarousel();
    }
    
    function nextSlide() {
        index++;
        if (index === totalItems) { 
            index = 0;
        }
        updateCarousel();
    }
    
    let carouselInterval;
    let intervalDisplay = document.getElementById('current-interval');
    let intervalInput = document.getElementById('interval');
    let interval = 2;
    let isRunning = true;

    function startCarousel() {
        stopCarousel();
        carouselInterval = setInterval(nextSlide, interval * 1000);
    }

    function updateIntervalDisplay() {
        intervalDisplay.textContent = `Intervalle actuel : ${interval} secondes`;
    }

    intervalInput.addEventListener('change', function() {
        interval = Number(intervalInput.value);
        startCarousel();
        updateIntervalDisplay();
    });

    updateIntervalDisplay();

    function pauseCarousel() {
        if (!isRunning) {
            return false;
        }
        carouselInterval = setInterval(nextSlide, (interval));
    }
    
    function stopCarousel() {
        isRunning = false;
        clearInterval(carouselInterval); 
    }

    document.getElementById('on').addEventListener('click', startCarousel);

    document.getElementById('off').addEventListener('click', stopCarousel);

    document.getElementById('carousel').addEventListener('mouseover', stopCarousel);
    
    document.getElementById('carousel').addEventListener('mouseout', pauseCarousel);

    document.getElementById('prev').addEventListener('click', function() {
        stopCarousel();        
        prevSlide();
    });

    document.getElementById('next').addEventListener('click', function() {
        stopCarousel();
        nextSlide();
    });
    startCarousel();
    updateCarousel(); 
} 

init();
