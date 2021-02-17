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

const projectsContainer = document.querySelector('.projects-container')
const videoScroll = document.querySelector('.o-ratio-16-9')

function verticalScroll () {
  projectsContainer.addEventListener('wheel', function (event) {
    if (event.deltaY < 0) {
      projectsContainer.scrollLeft += 30
    } else if (event.deltaY > 0) {
      projectsContainer.scrollLeft -= 30
    }
  })
  videoScroll.addEventListener('wheel', function (event) {
    if (event.deltaY < 0) {
      projectsContainer.scrollLeft += 30
    } else if (event.deltaY > 0) {
      projectsContainer.scrollLeft -= 30
    }
  })
}

document.addEventListener('wheel', function (event) {
  if (event.deltaY < 0) {
    projectsContainer.classList.remove('off-screen')
  }
})

verticalScroll()

// projectsContainer.addEventListener('wheel', function (event) {
//   /* downward */
//   if (event.deltaY < 0) {
//     console.log('upward')
//     translationX -= 70
//     translationX = clamp(-1 * pixelTreshold, 0, translationX)
//     projectsContainer.style.transform = `translateX(${translationX}px)`
//     console.log(translationX)

//     /* upward */
//   } else if (event.deltaY > 0) {
//     console.log('downward')
//     translationX += 70
//     translationX = clamp(-1 * pixelTreshold, 0, translationX)
//     projectsContainer.style.transform = `translateX(${translationX}px)`
//     console.log(translationX)
//   }
// })
