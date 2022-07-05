// Responsive Menu
let header = document.querySelector('.header');
let navbar = document.querySelector('.navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

// Popular BBQ Slider
  var swiper = new Swiper(".bbq-popular-slider", {
    loop: true,
    centeredSlides: true,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
    },
  });


// BBQ Popup Preview
let previewContainer = document.querySelector('.bbq-popup-container');
let bbqShow = previewContainer.querySelectorAll('.bbq-preview');

document.querySelectorAll('.popular-bbq .slide').forEach(bbq => {
  bbq.onclick = () => {
    previewContainer.style.display = 'flex';
    let name = bbq.getAttribute('data-name');
    bbqShow.forEach(show => {
      let target = show.getAttribute('data-target');
      if (name == target) {
      show.classList.add('active');
      }
    });
  };
});

// Closes the responsive menu button
previewContainer.querySelector('#close-preview').onclick = () => {
  previewContainer.style.display = 'none';
  bbqShow.forEach(close => {
   close.classList.remove('active');
  });
};

// Blog Post Slider
var swiper = new Swiper(".bbq-blogs-slider", {
  loop: true,
  centeredSlides: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});