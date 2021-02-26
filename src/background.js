// looping background infinitely with lazy loading
export default function addSelected (array) {
  let i = 0
  array[i].classList.add('selected')
  array[i + 1].setAttribute('loading', 'eager');

  setInterval(function () {
    array[i].classList.remove('selected')
    array[(i + 1) % array.length].classList.add('selected')

    i = (i + 1) % array.length
    array[(i + 1) % array.length].setAttribute('loading', 'eager');
  }, 3000)
}