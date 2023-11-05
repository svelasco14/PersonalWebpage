// responsive hamburger
const myResp = document.getElementById("myNav");

myResp.addEventListener("click", () => {
  
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

// form validation 1

// const form = document.querySelector("form1");
// const email = document.getElementById("mail");
// const emailError = document.querySelector("#mail + span.error");

// email.addEventListener("input", () => {
//   if (email.validity.valid) {
//     emailError.textContent = "";
//     emailError.className = "error";
//   } else {
//     showError();
//   }
// });

// form.addEventListener("submit", (event) => {
//   if (!email.validity.valid) {
//     showError();
//     event.preventDefault();
//   }
// });

// function showError() {
//   if (email.validity.valueMissing) {
//     emailError.textContent = "You need to enter an email address";
//   } else if (email.validity.typeMismatch) {
//     emailError.textContent = "Entered value needs to be an email address";
//   }
//   emailError.className = "error active";
// }

// form validation 2
const form = document.getElementById('form1');
const submitButton = document.getElementById('submit1');
const successMessage = document.getElementById('form-submitted-msg');

const formElements = [ ...form.elements ];

const allInputsValid = () => {
  const valid = formElements.every((element) =>{
    if (element.nodeName === 'SELECT') {
      return element.value !== 'Please select an option'
    } else {
      return element.checkValidity()
    }
  })

  return valid
}

const handleChange = () => {
  formElements.forEach((element) => {
    if (!element.checkValidity()
          && element.nodeName !== 'INPUT'
          && element.nodeName !== 'SELECT'
    ) {
      element.style.borderColor = 'red'
      element.nextElementSibling.style.color = 'red'
      element.nextElementSibling.style.display = 'block'
      element.previousElementSibling.style.color = 'red'
    }

    if (element.checkValidity()
          && element.nodeName !== 'INPUT'
          && element.nodeName !== 'SELECT'
    ) {
      element.style.borderColor = '#000000'
      element.nextElementSibling.style.color = '#000000'
      element.nextElementSibling.style.display = 'none'
      element.previousElementSibling.style.color = '#fffff'
    }

    if (element.nodeName === 'SELECT'
          && element.value === 'Please select an option'
    ) {
      element.style.borderColor = 'red'
      element.nextElementSibling.style.color = 'red'
      element.nextElementSibling.style.display = 'block'
      element.previousElementSibling.style.color = 'red'
    }

    if (element.nodeName === 'SELECT'
          && element.value !== 'Please select an option'
    ) {
      element.style.borderColor = '#000000'
      element.nextElementSibling.style.color = '#000000'
      element.nextElementSibling.style.display = 'none'
      element.previousElementSibling.style.color = '#ffffff'
    }

    if (element.nodeName === 'TEXTAREA'
          && element.value === 'Your thoughts..'
    ) {
      element.style.borderColor = 'red'
      element.nextElementSibling.style.color = 'red'
      element.nextElementSibling.style.display = 'block'
      element.previousElementSibling.style.color = 'red'
    }

    if (element.nodeName === 'TEXTAREA'
          && element.value !== 'Your thoughts..'
    ) {
      element.style.borderColor = '#000000'
      element.nextElementSibling.style.color = '#000000'
      element.nextElementSibling.style.display = 'none'
      element.previousElementSibling.style.color = '#ffffff'
    }

    if (element.nextElementSibling) {
      element.nextElementSibling.style.color = "#000000";
  } else {
      console.log("No next sibling element found.");
  }

  return
  })

  if (allInputsValid()) {
    submitButton.removeAttribute('disabled', '')
  } else {
    submitButton.setAttribute('disabled', '')
  }
}

const handleSubmit = (e) => {
  e.preventDefault()
    if (allInputsValid()) {
    successMessage.style.display = 'block'
    form.reset()
    submitButton.setAttribute('disabled', '')

    setTimeout(() => {
      successMessage.style.display = 'none'
    }, 3000)
  }
}

formElements.forEach((element) => {
  element.addEventListener('change', handleChange)
})

form.addEventListener('submit', (e) => handleSubmit(e))

// Google Map API

function initMap() {
            
  const coordinates = { lat: 28.040510, lng: -81.954109 };
 
  const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 11,
      center: coordinates,
  });

  const marker = new google.maps.Marker({
    position: coordinates,
    map: map,
});
}
window.initMap = initMap;