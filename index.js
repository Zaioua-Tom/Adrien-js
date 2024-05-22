
let images = ['virginie-1.webp', 'virginie-2.jpeg', 'virginie-3.jpg', 'virginie-4.webp', 'virginie-5.webp', 'virginie-6.jpeg', 'virginie-7.jpeg', 'virginie-8.jpeg', 'virginie-9.jpeg', 'virginie-10.jpeg'];
let Image = ['virginie-1','virginie-2', 'virginie-3', 'virginie-4', 'virginie-5', 'virginie-6', 'virginie-7', 'virginie-8', 'virginie-9', 'virginie-10' ]
let Name = ['virginie-1','virginie-2', 'virginie-3', 'virginie-4', 'virginie-5', 'virginie-6', 'virginie-7', 'virginie-8', 'virginie-9', 'virginie-10' ]
let age = ['56','99', '66', '24', '56', '54', '33', '44', '38', '45' ]

let index = 0;
let carousel = document.querySelector('.carousel-container');

let json = JSON.stringify(images);
console.log(json);
images.forEach((image,i) => {
  let img = document.createElement('img');
  img.src = `images/${image}`;
  img.classList.add('carousel-item');
  img.style.display = 'none';
  img.alt = `${Image[i]}`;
  img.dataset.img = `${Name[i]}, ${age[i]}`;
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