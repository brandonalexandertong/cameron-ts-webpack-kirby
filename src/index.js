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
const closeTag = document.querySelector('.close-tag')

// adding slide function to info section

const toggleInfo = function (tag) {
  tag.addEventListener('click', function () {
    infoHeroSection.classList.toggle('slide-up')
    infoContainer.classList.remove('clear')
  })
}

toggleInfo(infoTag)
toggleInfo(closeTag)
