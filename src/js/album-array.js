export default function slideshow (container, elementSelector) {
  const imageContainer = container
  const images = imageContainer.querySelectorAll(elementSelector)
  let currentIndex = 0
  let nextIndex = 0
  let prevIndex = 0

  function init () {
    const nextButton = container.querySelector('.next')
    const prevButton = container.querySelector('.prev')

    nextButton.addEventListener('click', e => {
      switchImage(true)
    })

    prevButton.addEventListener('click', e => {
      switchImage(false)
    })
  }

  function preload () {
    nextIndex = ((currentIndex + 1) % images.length + images.length) % images.length
    prevIndex = ((currentIndex - 1) % images.length + images.length) % images.length
    images[currentIndex].style.display = 'block'
    images[nextIndex].classList.add('lazypreload')
    images[prevIndex].classList.add('lazypreload')
  }

  function switchImage (isForwards) {
    const nextValue = isForwards ? (currentIndex + 1) : ((currentIndex - 1))
    images[currentIndex].style.display = 'none'
    currentIndex = (nextValue % images.length + images.length) % images.length
    images[currentIndex].style.display = 'block'
    preload()
  }

  preload()
  init()
}
