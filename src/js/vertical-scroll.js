import { debounce } from './debounce.js'

export default class Scroll {
  constructor (container) {
    this.container = container
  }

  init () {
    const bgImageContainer = document.querySelector('.bg-img-section')
    const projectsSection = document.querySelector('.projects-section')
    const bodyTag = document.querySelector('body')
    let viewportWidth

    function clickAnimate (container) {
      if (container.scrollLeft === 0) {
        container.scrollLeft += window.innerWidth
      }
      container.style.scrollBehavior = 'unset'
      projectsSection.removeEventListener('click', clickAnimate)
    }

    projectsSection.addEventListener('click', () => {
      console.log('hello')
      clickAnimate(this.container)
    })

    function blurBackground (container) {
      const scrollDistance = container.scrollLeft
      viewportWidth = window.innerWidth
      let blurAmount = 0
      if (scrollDistance > viewportWidth * 2 / 3) {
        blurAmount = 3
      } else if (scrollDistance > viewportWidth / 3) {
        blurAmount = 1
        bodyTag.style.cursor = 'unset'
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
      this.container.style.scrollBehavior = 'unset'
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
