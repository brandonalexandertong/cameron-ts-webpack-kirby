import 'loading-attribute-polyfill'
// import './js/cursor.js'
import Slideshow from './js/album-array.js'
import Scroll from './js/vertical-scroll.js'
import Vimeo from './js/vimeo.js'
import Background from './js/background.js'
import UpdateCursor from './js/cursor.js'
import Hover from './js/hover.js'

const scrollContainer = document.querySelector('.projects-section')
const backgroundSection = document.querySelector('.bg-img-section')
const bgImageArray = document.querySelectorAll('.bg-img')

window.addEventListener('load', () => {
  const albums = document.querySelectorAll('.album')
  const projects = document.querySelectorAll('.project')
  albums.forEach(project => {
    Slideshow(project, '.visible-image')
    // Hover(project)
  })

  projects.forEach(project => {
    UpdateCursor(project)
  })

  Background(bgImageArray)

  const videos = document.querySelectorAll('.vimeo-player')
  videos.forEach(function (element) {
    const id = element.dataset.vimeo
    new Vimeo({ id, element })
  })
})

function slideIn () {
  scrollContainer.classList.remove('--hide-right')
  bgImageArray.forEach(image => {
    image.classList.add('blur-background')
  })
}

window.addEventListener('wheel', slideIn, {
  once: true
})

window.addEventListener('click', slideIn, {
  once: true
})

window.addEventListener('touchmove', slideIn, {
  once: true
})

document.addEventListener('mousemove', function (event) {
  const cursor = document.getElementById('cursor')
  const cursorWidth = cursor.offsetWidth
  const halfOfCursor = cursorWidth / 2
  const mouseX = event.pageX
  const mouseY = event.pageY
  cursor.style.transform = `translate(${mouseX - halfOfCursor}px, ${mouseY + 10}px)`
})

const projectScroll = new Scroll(scrollContainer)
projectScroll.init()

const infoTag = document.querySelector('.info-tag')
const infoHeroSection = document.querySelector('.info-hero-section')
const infoContainer = document.querySelector('.info-container')
const heroTag = document.querySelector('.hero-tag')
const closeTag = document.querySelector('.close-tag')

const slideFunction = function () {
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
