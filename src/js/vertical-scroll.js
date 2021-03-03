import { debounce } from './debounce.js'

export default class Scroll {
  constructor (container) {
    this.container = container
  }

  init () {
    const bgImageContainer = document.querySelector('.bg-img-section')
  
    let viewportWidth;
    
    function blurBackground(container) {
      const scrollDistance = container.scrollLeft
      viewportWidth = window.innerWidth
      
      if (scrollDistance > viewportWidth) {
        bgImageContainer.classList.add('blur-background')
      } else {
        bgImageContainer.classList.remove('blur-background')
      }
    }

    window.addEventListener('resize', () => {
      viewportWidth = window.innerWidth
    })
    
    window.addEventListener('touchmove', () => {
      blurBackground(this.container);
    })

    this.container.addEventListener('wheel', event => {
      blurBackground(this.container)
      this.replace(event)
    });
  }

  replace (event) {
    const replaceVerticalScrollByHorizontal = () => {
      const deltaY = event.deltaY
      const currScrollLeft = this.container.scrollLeft

      if (deltaY != 0) {
        this.container.scrollLeft = currScrollLeft + event.deltaY
      }
    }

    debounce(replaceVerticalScrollByHorizontal(event))

    if (event.deltaY != 0) {
      event.preventDefault()
    }
  }
}
