/* eslint-disable no-new */
import Vimeo from './vimeo.js'

const videos = document.querySelectorAll('.vimeo-player')

videos.forEach(function (element) {
  const id = element.dataset.vimeo
  console.log(id, element)
  new Vimeo({ id, element })
})
