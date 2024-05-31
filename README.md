# Adrien-js

# 💾 Etape 1 : Création de la structure HTML et CSS 

# * Preparation de la structure du projet *

# 💬 le HTML sert de point d'ancrage pour l'injection du JS ;

# 💬 On definit une div parent recupéré en JS par sa classe qui va contenir le carrousel avec les elements btn et compteur récupéré par un ID en JS:

# HTML ✍️
# <div class="carousel"> // Parent 🎠
#   <button id="prev">Précédent</button> ⏮️
#   <button id="next">Suivant</button>  ⏭️
#   <p id="counter"></p> 🔢
# </div>

# CSS 🖌️
# .carousel {  
#    width: 50rem; 💬 Definition de la taille du container 
# }

# 🚗 🚗 🚗 🚗 🚗 🚗 🚗 🚗 🚗 🚗

# 💾 Etape 2 : Gestion de la navigation des images 

# JS 🤖
# 💬 Création d’un tableau en JS qui contient le chemin vers chaqu’une des images ;
# let images = ['virginie-1.webp', 'virginie-2.jpeg', 'virginie-3.jpg' ... ];

# 💬  Un index est défini et initialisé à 0. Cet index sera utilisé pour naviguer à travers les images du carrousel.
# let index = 0;

# 💬 On pointe l'élément Html avec la classe .carousel-container;
# let carousel = document.querySelector('.carousel-container');

# 💬 Pour chaque image dans le tableau images
# images.forEach(image => {

# 💬 On crée un nouvel élément 'img' 
# let img = document.createElement('img'); 

# 💬 Définit son attribut pour pointer vers le fichier d'image
# img.src = `images/${image}`;

# 💬 Ajoute la classe à l'élément
# img.classList.add('carousel-item');

# 💬 Cache le en définissant display à none
# img.style.display = 'none';

# 💬 Ajoute le au début du carrousel

# carousel.prepend(img); });

# 💬 Sélectionne tous les éléments avec la classe .carousel-item 
# let items = document.querySelectorAll('.carousel-item');

# 💬 Met à jour le nombre d'images total dans le compteur via le JS.
# let totalItems = items.length;

# 💬 Au clique sur le bouton prev j’affiche l’image suivante dans le tableau
# document.getElementById('prev').addEventListener('click', function() {
#  index--;
#  if (index < 0) { index = totalItems - 1; }
#  updateCarousel();
# });

# 💬 Au clique sur le bouton next j’affiche l’image suivante dans le tableau
# document.getElementById('next').addEventListener('click', function() {
#  index++;
#  if (index === totalItems) { index = 0; }
#  updateCarousel();
# });

# function updateCarousel() {
# 💬 Si j’arrive à la dernière images et que je clique sur suivant j’affiche la 1er images
# 💬 Si je suis sur la première images et que je clique sur précédent, j’affiche la dernière image
#  for (let i = 0; i < totalItems; i++) {
#    items[i].style.display = "none";
#  }
# items[index].style.display = "block";

# 💬 Au changement d’image je met à jour le compteur sous le carrousel
# document.getElementById('counter').innerText = index + 1 + '/' + totalItems;
# }

# updateCarousel(); 

# ✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️

# 💾 Etape 3 : Gestion de la data via la data-attribute api

# HTML ✍️
# <div class="carousel"> // Parent 🎠
# 💬 Déplacement du tableau JS dans un "data-attribute" (variable html)
#   <div class="carousel-container" data-img='["virginie-1.webp", "virginie-2.  jpeg", "virginie-3.jpg"...]'>
#       <p id="counter"></p> 🔢
#       <button id="prev">Précédent</button> ⏮️
#       <button id="next">Suivant</button>  ⏭️
#   </div> 
# </div>

# JS 🤖
# 💬 On pointe l'élément Html avec la classe .carousel-container;
# let carousel = document.querySelector('.carousel-container');

# 💬 On créé Un tableau vide pour stocker les éléments d'image du carrousel;
# let items = [];

# 💬 On recupere les noms des fichiers via dataset.img ( data-img= html ) puis on les convertits en tableau JS via JSON.;
# let images = JSON.parse(document.querySelector('.carousel-container').dataset.img);

# 💬 Un index est également défini et initialisé à 0. Cet index sera utilisé pour naviguer à travers les images du carrousel.;
# let index = 0;

# images.forEach((image) => {
# ...
# });

# ...

# 🏂🏂🏂🏂🏂🏂🏂🏂🏂🏂🏂🏂🏂🏂🏂🏂🏂🏂🏂🏂🏂🏂🏂🏂🏂🏂🏂🏂🏂🏂🏂🏂🏂🏂

# 💾 Etape 4 : Gestion de la data via fetch

# 💬 Création d'un fichier data.json qui va contenir le tableau avec les paths des images
# data.json 🔖 
# { "images" : [
#    "images/virginie-1.webp", 
#    "images/virginie-2.jpeg", 
#    "images/virginie-3.jpg",
#    ...
# ] }
 
# HTML ✍️
# <#div class="carousel" // Parent 🎠
# 💬 Suppression du "data-img" remplacé par un data-path qui pointe vers data.json
#   <#div class="carousel-container" data-path='data.json'>
#       <#p id="counter"></#p> 🔢
#       <#button id="prev">Précédent</#button> ⏮️
#       <#button id="next">Suivant</#button>  ⏭️
#   </#div> 
# </#div>

# JS 🤖
# 💬 On pointe l'élément Html avec la classe .carousel-container;
# let carousel = document.querySelector('.carousel-container');

# 💬 On créé Un tableau vide pour stocker les éléments d'image du carrousel;
# let items = [];

# 💬 On recupere les noms des fichiers via dataset.img ( data-img= html ) puis on les convertits en tableau JS via JSON.;
# let images = JSON.parse(document.querySelector('.carousel-container').dataset.img);

# 💬 Un index est également défini et initialisé à 0. Cet index sera utilisé pour naviguer à travers les images du carrousel.;
# let index = 0;

# images.forEach((image) => {
# ...
# });