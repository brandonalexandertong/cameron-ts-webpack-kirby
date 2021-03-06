import { debounce } from './debounce.js'

export default class Scroll {
  constructor (container) {
    this.container = container
  }

  init () {
    const bgImageContainer = document.querySelector('.bg-img-section')
    const bodyTag = document.querySelector('body')
    let viewportWidth = window.innerWidth

    function removeArrow () {
      bodyTag.style.cursor = 'unset'
    }

    function blurBackground (container) {
      let blurAmount = 0
      if (container.scrollLeft > viewportWidth * 4 / 6) {
        blurAmount = 4
      } else if (container.scrollLeft > viewportWidth * 3 / 6) {
        blurAmount = 2
        removeArrow()
      } else if (container.scrollLeft > viewportWidth * 2 / 6) {
        blurAmount = 1
        removeArrow()
      }
      bgImageContainer.style.filter = `blur(${blurAmount}px)`
    }

    window.addEventListener('resize', () => {
      viewportWidth = window.innerWidth
    })

    window.addEventListener('touchmove', (event) => {
      blurBackground(this.container)
    })

    window.addEventListener('touchend', (event) => {
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
