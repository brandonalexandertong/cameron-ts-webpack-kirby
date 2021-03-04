import { debounce } from './debounce.js'

export default class Scroll {
  constructor (container) {
    this.container = container
  }

  init () {
    const bgImageContainer = document.querySelector('.bg-img-section')

    let viewportWidth
    const bodyTag = document.querySelector('body')

    function blurBackground (container) {
      const scrollDistance = container.scrollLeft
      viewportWidth = window.innerWidth
      let blurAmount = 0
      if (scrollDistance > viewportWidth / 2) {
        blurAmount = 1
        bodyTag.style.cursor = 'url(assets/icons/triangle.svg), auto'
      } else if (scrollDistance > viewportWidth) {
        blurAmount = 3
      }
      bgImageContainer.style.filter = `blur(${blurAmount}px)`
    }

    window.addEventListener('resize', () => {
      viewportWidth = window.innerWidth
    })

    window.addEventListener('touchmove', (event) => {
      console.log(event)
      blurBackground(this.container)
    })

    window.addEventListener('touchend', (event) => {
      console.log(event)
      blurBackground(this.container)
    })

    this.container.addEventListener('wheel', event => {
      blurBackground(this.container)
      this.replace(event)
    })
  }

  replace (event) {
    const replaceVerticalScrollByHorizontal = () => {
      const deltaY = event.deltaY
      const currScrollLeft = this.container.scrollLeft

      if (deltaY !== 0) {
        this.container.scrollLeft = currScrollLeft + event.deltaY
      }
    }

    debounce(replaceVerticalScrollByHorizontal(event))

    if (event.deltaY !== 0) {
      event.preventDefault()
    }
  }
}
