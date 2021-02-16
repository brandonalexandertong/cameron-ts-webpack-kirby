// looping background infinitely with lazy loading
const bgImageArray = document.querySelectorAll('.bg-img')

function addSelected (array) {
  let i = 0
  let j = 1
  let k = 2
  array[i].classList.add('selected')
  array[i].setAttribute('loading', 'eager')

  array[j].classList.add('load')
  array[j].setAttribute('loading', 'eager')

  setInterval(function () {
    array[k].classList.add('load')
    array[k].setAttribute('loading', 'eager')
    array[i].classList.remove('selected')
    // array[i - 1].classList.remove('selected')
    array[j].classList.remove('load')
    array[j].classList.add('selected')
    i = (i + 1) % array.length
    j = (j + 1) % array.length
    k = (k + 1) % array.length
  }, 3000)
}

addSelected(bgImageArray)
