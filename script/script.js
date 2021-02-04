// HamburgerMenu
const hamburger = document.querySelector('.nav-menu-button');
const nav = document.querySelector('.nav-menu-list');

const handleClick = () => {
  hamburger.classList.toggle('nav-menu-button-click');
  nav.classList.toggle('nav-menu-list-click');
}

hamburger.addEventListener('click', handleClick);

//ProgerssBarMenu
const progressBar = document.querySelectorAll('.skills-content-single-scale');
const progressEle = document.createElement("div");
progressEle.classList.add("skills-content-single-bar");

for(let i=0; i<10; i++){
  const singleStep = document.createElement("div");
  singleStep.classList.add("skills-content-single-bar-ele");
  progressEle.appendChild(singleStep);
}

progressBar.forEach(el => {
  el.appendChild(progressEle.cloneNode(true));
});

const one = document.getElementById('one').querySelector('.skills-content-single-bar').childNodes;
const two = document.getElementById('two').querySelector('.skills-content-single-bar').childNodes;
const three = document.getElementById('three').querySelector('.skills-content-single-bar').childNodes;
const four = document.getElementById('four').querySelector('.skills-content-single-bar').childNodes;
const five = document.getElementById('five').querySelector('.skills-content-single-bar').childNodes;
const six = document.getElementById('six').querySelector('.skills-content-single-bar').childNodes;

const changeColor = (index, lang) => {
  for (let i=0; i<index; i++){
    lang[i].classList.toggle('skills-content-single-bar-elealt');
  }
}

changeColor(9, one);
changeColor(8, two);
changeColor(8, three);
changeColor(5, four);
changeColor(2, five);
changeColor(6, six);

// ScrollTriger
gsap.registerPlugin(ScrollTrigger);

gsap.to(".panel:not(:last-child)", {
  yPercent: -100, 
  ease: "none",
  stagger: 0.5,
  scrollTrigger: {
    trigger: "#slides",
    start: "top top",
    end: "+=300%",
    scrub: true,
    pin: true
  }
});

gsap.set(".panel", {zIndex: (i, target, targets) => targets.length - i});


//OpinionSlider
const slides = document.querySelectorAll(".opinion-carousel-single");
const dots = document.querySelectorAll(".dot");
let slideIndex = 0;

const showSlides = () => {
  let i;
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); 
}

document.addEventListener('load', showSlides());