let carousel = document.querySelector('.carousel-container');
let items = [];
let images = JSON.parse(document.querySelector('.carousel-container').dataset.img);
let index = 0;

images.forEach((image) => {
  let img = document.createElement('img');
  img.src = `images/${image}`;
  img.classList.add('carousel-item');
  img.style.display = 'none';
  carousel.prepend(img);
  items.push(img);
});

let totalItems = items.length;

let counter = document.getElementById('counter');

function updateCarousel() {
  items.forEach(item => item.style.display = 'none');
  items[index].style.display = 'block';
  updateCounter();
}

function updateCounter() {
  counter.textContent = `${index + 1} / ${totalItems}`;
}


document.getElementById('prev').addEventListener('click', function() {
  index--;
  if (index < 0) { index = totalItems - 1; }
  updateCarousel();
});

document.getElementById('next').addEventListener('click', function() {
  index++;
  if (index === totalItems) { index = 0; }
  updateCarousel();
});

updateCarousel(); 