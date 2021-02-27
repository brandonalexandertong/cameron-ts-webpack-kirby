export const launchIntoFullscreen = (element) => {
  if (element.requestFullscreen) {
    element.requestFullscreen()
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen()
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen()
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen()
  }
}

export const exitFullscreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen()
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen()
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen()
  }
}

export const keyEsc = (evt, fn) => {
  evt = evt || window.event
  let isEscape = false
  if ('key' in evt) {
    isEscape = (evt.key === 'Escape' || evt.key === 'Esc')
  } else {
    isEscape = (evt.keyCode === 27)
  }
  if (isEscape) {
    fn()
  }
}

export const iOS = typeof navigator !== 'undefined'
&& (/iPad|iPhone|iPod/.test(navigator.userAgent || '')
|| (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) // iPad iOS 13

export const isSafariDesktop = window.safari !== undefined
