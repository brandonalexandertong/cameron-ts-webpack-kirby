import 'lazysizes'
import Slideshow from './js/album-array.js'
import Scroll from './js/vertical-scroll.js'
import Vimeo from './js/vimeo.js'
import Background from './js/background.js'
import UpdateCursor from './js/cursor.js'

const scrollContainer = document.querySelector('.projects-section')
const bgImageArray = document.querySelectorAll('.bg-img')
const cursor = document.getElementById('cursor')
const cursorWidth = cursor.offsetWidth
const halfOfCursor = cursorWidth / 2
const projectScroll = new Scroll(scrollContainer)
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

window.addEventListener('load', () => {
  const albums = document.querySelectorAll('.album')
  const projects = document.querySelectorAll('.project')
  const videos = document.querySelectorAll('.vimeo-player')
  albums.forEach(project => {
    Slideshow(project, '.visible-image')
  })

  projectScroll.init()
  toggleInfo(infoTag)
  toggleInfo(closeTag)

  projects.forEach(project => {
    UpdateCursor(project)
  })

  Background(bgImageArray)

  videos.forEach(function (element) {
    const id = element.dataset.vimeo
    new Vimeo({ id, element })
  })

  document.addEventListener('mousemove', function (event) {
    cursor.style.transform = `translate(${event.pageX - halfOfCursor}px, ${event.pageY + 10}px)`
  })
})
