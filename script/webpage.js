// responsive hamburger
let myResp = document.getElementById("myNav");

myResp.addEventListener("click", (e) => {
  
  if (myResp.className === "nav") {
    myResp.className += " responsive";
  } else {
    myResp.className = "nav";
  }
});

// image slider
const images = document.querySelectorAll('#slider img');
const previousImage = document.getElementById("prev");
const nextImage = document.getElementById("next");

let currentIndex = 0;

function reset() {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove('active1');
  }
}

function initializeSlider() {
  if (images.length < 1 ) {
    return;
  }
  reset();
  images[currentIndex].classList.add('active1');
}

function slideLeft() {
  reset();
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  images[currentIndex].classList.add('active1');
}

function slideRight() {
  reset();
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  images[currentIndex].classList.add('active1');
}

initializeSlider();

previousImage?.addEventListener('click', function() {
  slideLeft();
});

nextImage?.addEventListener('click', function() {
  slideRight();
});

// fade-in Animation
const items = document.querySelectorAll('.main:not(:first-child)');

const options = {
  threshold: 0.5
}

function addSlideIn(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in');
    }
  });
}

const observer = new IntersectionObserver(addSlideIn, options);

items.forEach(item => {
  observer.observe(item);
})

