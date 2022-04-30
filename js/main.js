const menuBtn = document.querySelector('.menu-btn'),
      navWrapper = document.querySelector('.nav-wrapper');

// open/close mobile menu by click burger/close button
menuBtn.addEventListener('click', event => {
  event.stopPropagation();
  toggleMenu();
});

// close mobile menu by click outside navigation
window.addEventListener('click', () => {
  if (navWrapper.classList.contains('active')) {
    toggleMenu();
  }
});

navWrapper.addEventListener('click', event => event.stopPropagation());

// function toggle mobile menu active status
const toggleMenu = () => {
  menuBtn.classList.toggle('active');
  navWrapper.classList.toggle('active');
};

