// // Lightbox
// Array.from(document.querySelectorAll("[data-lightbox]")).forEach(element => {
//     element.onclick = (e) => {
//       e.preventDefault();
//       basicLightbox.create(`<img src="${element.href}">`).show();
//     };
//   });

const infoTag = document.querySelector('.info-tag')
const infoHeroSection = document.querySelector('.info-hero-section')
const infoContainer = document.querySelector('.info-container')
const heroTag = document.querySelector('.hero-tag')
const closeTag = document.querySelector('.close-tag')
const selectedTag = document.querySelector('.selected-works-tag')
// adding slide function to info section

const slideFunction = function() {
  infoHeroSection.classList.toggle('slide-up')
  heroTag.classList.toggle('slide-down')
  infoTag.classList.toggle('slide-down')
  infoContainer.classList.toggle('clear')
}

const toggleInfo = function (tag) {
  tag.addEventListener('click', slideFunction)
}

toggleInfo(infoTag)
toggleInfo(closeTag)

// dynamic height of tidball sciullo based on browser

const tidballTag = document.querySelector('.tidball-tag')

const resizeTidballTag = () => {
  const heroHeight = heroTag.offsetHeight
  console.log(tidballTag.style)
  tidballTag.style.height = heroHeight + 'px'
}

setTimeout(resizeTidballTag, 50)

window.addEventListener('resize', resizeTidballTag)
