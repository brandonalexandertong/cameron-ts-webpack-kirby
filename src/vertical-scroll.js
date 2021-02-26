import { debounce } from "./debounce.js";

export default class Scroll {
  constructor(container) {
    this.container = container
  }

  init() {
    this.container.addEventListener("wheel", event => this.replace(event));
  }
  
  replace(event) {
    const replaceVerticalScrollByHorizontal = () => {
      let deltaY = event.deltaY
      let currScrollLeft = this.container.scrollLeft;
  
      if (deltaY != 0) {
        this.container.scrollLeft = currScrollLeft + event.deltaY;
      }
  
      return;
    }

    debounce(replaceVerticalScrollByHorizontal(event));

    if (event.deltaY != 0) {
      event.preventDefault();
    }
  }
}
