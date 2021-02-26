import 'loading-attribute-polyfill'

import './cursor.js'
import Slideshow from './album-array.js'
import Scroll from './vertical-scroll.js'
import Vimeo from './vimeo.js'
import Background from './background.js'

window.addEventListener('load', () => {
  const projects = document.querySelectorAll('.album');
  projects.forEach(project => {
    Slideshow(project, '.visible-image')
  });

  const bgImageArray = document.querySelectorAll('.bg-img')
  Background(bgImageArray)

  const videos = document.querySelectorAll('.vimeo-player')
  videos.forEach(function (element) {
    const id = element.dataset.vimeo
    new Vimeo({ id, element })
  })
})

window.addEventListener('wheel', () => {
  scrollContainer.classList.remove('--hide-right');
}, {
  once: true
})

const scrollContainer = document.querySelector('.projects-section');

const projectScroll = new Scroll(scrollContainer);
projectScroll.init();

const infoTag = document.querySelector('.info-tag')
const infoHeroSection = document.querySelector('.info-hero-section')
const infoContainer = document.querySelector('.info-container')
const heroTag = document.querySelector('.hero-tag')
const closeTag = document.querySelector('.close-tag')

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