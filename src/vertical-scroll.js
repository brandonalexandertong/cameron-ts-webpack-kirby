// // vertical scroll on projects one version
// import normalizeWheel from 'normalize-wheel'
// import debounce from 'lodash/debounce'

// const projectsContainer = document.querySelector('.projects-container')
// const clamp = (min, max, val) => Math.min(Math.max(min, +val), max)

// function verticalScroll () {
//   let translationX = 0

//   // document resize => update pixelTreshold
//   projectsContainer.addEventListener('mousewheel', debounce(function (event) {
//     const pixelThreshold = projectsContainer.offsetWidth - window.innerWidth
//     projectsContainer.style.transition = 'none'
//     const normalized = normalizeWheel(event)
//     if (normalized.pixelY > 0 || normalized.pixelX < 0) {
//       translationX += 40
//       translationX = clamp(-1 * pixelThreshold, 0, translationX)
//       projectsContainer.style.transform = `translateX(${translationX}px)`
//       console.log('scroll left or down')
//     } else if (normalized.pixelY < 0 || normalized.pixelX > 0) {
//       translationX -= 40
//       translationX = clamp(-1 * pixelThreshold, 0, translationX)
//       projectsContainer.style.transform = `translateX(${translationX}px)`
//       console.log('scroll right or up')
//     }
//     console.log(normalized.pixelX, normalized.pixelY)
//   }), 2000)
// }

// verticalScroll()
import throttle from 'lodash/throttle'

const projectsContainer = document.querySelector('.projects-container')

function verticalScroll () {
  projectsContainer.addEventListener('wheel', function (eventO) {
    if (eventO.deltaY < 0 && !projectsContainer.classList.contains('off-screen')) {
      projectsContainer.scrollLeft += 30
    } else if (eventO.deltaY > 0 && !projectsContainer.classList.contains('off-screen')) {
      projectsContainer.scrollLeft -= 30
    }
  })
}

document.addEventListener('wheel', throttle(function (event) {
  if (event.deltaY < 0) {
    projectsContainer.classList.remove('off-screen')
    projectsContainer.addEventListener('transitionend', function () {
      console.log('How much transition')
      setTimeout(function() {
        verticalScroll()
      }, 1000)
      const bgImages = document.querySelectorAll('.bg-img')
      bgImages.forEach(image => {
        image.classList.add('blur-background')
      })
    })
  }
}, 3000))
