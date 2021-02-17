// album arrays

const projects = document.querySelectorAll('.project')
const projectsAmount = projects.length
const slideIndex = new Array(projectsAmount).fill(1)

function plusSlides (n, no) {
  const x = (projects[no].getElementsByTagName('img'))
  showSlides(slideIndex[no] += n, no)

  if (n == -1 && slideIndex[no] > 1) {
    x[slideIndex[no] - 2].setAttribute('loading', 'eager')
    x[slideIndex[no] - 2].classList.add('lazypreload')
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
      x[slideIndex[no]].classList.add('lazypreload')
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = 'none'
    }
    x[slideIndex[no] - 1].style.display = 'block'
    x[slideIndex[no] - 1].setAttribute('loading', 'eager')
    x[slideIndex[no] - 1].classList.add('lazypreload')
    x[x.length - 1].setAttribute('loading', 'eager')
    x[x.length - 1].classList.add('lazypreload')
  }
}

const initialRun = (function () {
  for (let i = 0; i < projects.length; i++) {
    showSlides(1, i)
  }
}())

window.plusSlides = plusSlides
