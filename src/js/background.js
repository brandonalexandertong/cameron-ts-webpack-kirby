// looping background infinitely with lazy loading
export default function addSelected (array) {
  let i = 0
  array[i].classList.add('selected')
  lazySizes.loader.unveil(array[(i + 1) % array.length]);

  setInterval(function () {
    array[i].classList.remove('selected')
    array[(i + 1) % array.length].classList.add('selected')

    i = (i + 1) % array.length
    lazySizes.loader.unveil(array[(i + 1) % array.length]);
  }, 3000)
}