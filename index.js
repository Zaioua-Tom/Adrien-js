
let images = ['virginie-1.webp', 'virginie-2.jpeg', 'virginie-3.jpg', 'virginie-4.webp', 'virginie-5.webp', 'virginie-6.jpeg', 'virginie-7.jpeg', 'virginie-8.jpeg', 'virginie-9.jpeg', 'virginie-10.jpeg'];
let index = 0;

let carousel = document.querySelector('.carousel-container');
images.forEach(image => {
  let img = document.createElement('img');
  img.src = `images/${image}`;
  img.classList.add('carousel-item');
  img.style.display = 'none';
  carousel.prepend(img);
});

let items = document.querySelectorAll('.carousel-item');
let totalItems = items.length;

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

function updateCarousel() {
  for (let i = 0; i < totalItems; i++) {
    items[i].style.display = "none";
  }
  items[index].style.display = "block";

  document.getElementById('counter').innerText = index + 1 + '/' + totalItems;
}

updateCarousel(); 