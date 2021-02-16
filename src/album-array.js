// album arrays

const projects = document.querySelectorAll('.project')
const albums = document.querySelectorAll('.album')
const projectsAmount = projects.length
const slideIndex = new Array(projectsAmount).fill(1)

function plusSlides (n, no) {
  const x = (projects[no].getElementsByTagName('img'))
  showSlides(slideIndex[no] += n, no)

  if (n == -1 && slideIndex[no] > 1) {
    x[slideIndex[no] - 2].setAttribute('loading', 'eager')
  }
}

function showSlides (n, no) {
  if (projects[no].classList.contains('album')) {
    let i
    const x = (projects[no].querySelectorAll('.visible-image'))
    if (n > x.length) {
      slideIndex[no] = 1
    }
    if (n < 1) {
      slideIndex[no] = x.length
    }
    if (slideIndex[no] < x.length) {
      x[slideIndex[no]].setAttribute('loading', 'eager')
    }
    // if (slideIndex[no] > 1) {
    //   x[slideIndex[no]-1].setAttribute('loading', 'eager')
    // }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = 'none'
    }
    x[slideIndex[no] - 1].style.display = 'block'
    x[slideIndex[no] - 1].setAttribute('loading', 'eager')
    x[x.length - 1].setAttribute('loading', 'eager')
  }
}

const initialRun = (function () {
  for (let i = 0; i < projects.length; i++) {
    showSlides(1, i)
  }
}())

window.plusSlides = plusSlides
