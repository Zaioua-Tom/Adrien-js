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

    let isRunning = true;

    function startCarousel() {
        if (!isRunning) {
            return false;
        }
        carouselInterval = setInterval(nextSlide, 2000);
    }

    function stopCarousel() {
        clearInterval(carouselInterval); 
    }

    document.getElementById('carousel').addEventListener('mouseover', stopCarousel);
    
    document.getElementById('carousel').addEventListener('mouseout', startCarousel);

    document.getElementById('prev').addEventListener('click', function() {
        isRunning = false;
        stopCarousel();        
        prevSlide();
    });

    document.getElementById('next').addEventListener('click', function() {
        isRunning = false;
        stopCarousel();
        nextSlide();
    });
    startCarousel
    updateCarousel(); 
}

init();
