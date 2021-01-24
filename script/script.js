const hamburger = document.querySelector('.nav-menu-button');
const nav = document.querySelector('.nav-menu-list');

const handleClick = () => {
  hamburger.classList.toggle('nav-menu-button-click');
  nav.classList.toggle('nav-menu-list-click');
}

hamburger.addEventListener('click', handleClick);