/* eslint-disable no-new */
// import Vimeo from './vimeo.js'

// const videos = document.querySelectorAll('.vimeo-player')

// videos.forEach(function (video) {
//   const id = video.dataset.vimeo
//   const element = video.id
//   console.log(video.id)
//   new Vimeo({ id, element })
// })

// Parsing in the video element itself does not work as player accepts the
// Value of an ID tag on the div and then options which include the
// Video ID. I then tried pulling a test ID to run, and now I am getting
// TypeError: this.el.querySelector is not a function. Tried adding single quotes to html
// so that we're passing a single quote ID to the player as below

import Player from '@vimeo/player'

var player = new Player('test-video-id', {
  id: 277950987,
  width: 640
})

player.on('play', function () {
  console.log('played the video')
})

// but still getting the error that this.Element.querySelector is not a function 
// until we can figure out what needs too be passed to element 
// alternative strategy would be trying to edit options for an iterated player 