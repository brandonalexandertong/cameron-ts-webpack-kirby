import 'lazysizes'
import Slideshow from './js/album-array.js'
import Scroll from './js/vertical-scroll.js'
import Vimeo from './js/vimeo.js'
import Background from './js/background.js'
import UpdateCursor from './js/cursor.js'

const scrollContainer = document.querySelector('.projects-section')
const bgImageArray = document.querySelectorAll('.bg-img')
const cursor = document.getElementById('cursor')
const projectScroll = new Scroll(scrollContainer)
const infoTag = document.querySelector('.info-tag')
const infoHeroSection = document.querySelector('.info-hero-section')
const infoContainer = document.querySelector('.info-container')
const heroTag = document.querySelector('.hero-tag')
const heroTagMobile = document.querySelector('.tidball-tag-mobile')
const closeTag = document.querySelector('.close-tag')
const scrollTag = document.getElementById('scroll-tag')

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

  Background(bgImageArray)

  albums.forEach(project => {
    Slideshow(project, '.visible-image')
  })

  videos.forEach(function (element) {
    const id = element.dataset.vimeo
    new Vimeo({ id, element })
  })

  projectScroll.init()

  setTimeout(function () {
    heroTag.style.opacity = '1'
    heroTagMobile.style.opacity = '1'
  }, 1500)

  setTimeout(function () {
    infoTag.style.opacity = '1'
  }, 2500)

  setTimeout(function () {
    scrollTag.style.opacity = '1'
    heroTagMobile.style.opacity = '1'
  }, 3500)

  toggleInfo(infoTag)
  toggleInfo(closeTag)

  const cursorWidth = cursor.offsetWidth
  const halfOfCursor = cursorWidth / 2

  projects.forEach(project => {
    UpdateCursor(project)
  })

  document.addEventListener('mousemove', function (event) {
    cursor.style.transform = `translate(${event.pageX - halfOfCursor + 9}px, ${event.pageY + 30}px)`
  })
})
