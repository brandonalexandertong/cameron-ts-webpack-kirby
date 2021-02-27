import { debounce } from './debounce.js'

export default class Scroll {
  constructor (container) {
    this.container = container
  }

  init () {
    this.container.addEventListener('wheel', event => this.replace(event))
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
