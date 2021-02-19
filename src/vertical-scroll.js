// // vertical scroll on projects one version
import normalizeWheel from 'normalize-wheel'
import debounce from 'lodash/debounce'
import throttle from 'lodash/throttle'

const projectsContainer = document.querySelector('.projects-container')

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

// const projects = document.querySelectorAll('.project')
// const clamp = (min, max, val) => Math.min(Math.max(min, +val), max)

// let translationX = 0
// const moveX = (event) => {
//   const pixelThreshold = projectsContainer.offsetWidth - window.innerWidth
//   projectsContainer.style.transition = 'none'
//   const normalized = normalizeWheel(event)
//   console.log(normalized)
//   if (normalized.pixelY > 0 || normalized.pixelX < 0) {
//     translationX += 20
//     translationX = clamp(-1 * pixelThreshold, 0, translationX)
//     projects.forEach(function (project) {
//       project.style.transform = `translateX(${translationX}px)`
//     })
//   } else if (normalized.pixelY < 0 || normalized.pixelX > 0) {
//     translationX -= 20
//     translationX = clamp(-1 * pixelThreshold, 0, translationX)
//     projects.forEach(function (project) {
//       project.style.transform = `translateX(${translationX}px)`
//     })
//   }
// }
// projectsContainer.addEventListener('mousewheel', moveX)

const projects = document.querySelectorAll('.project')
const clamp = (min, max, val) => Math.min(Math.max(min, +val), max)

let translationX = 0
const moveX = (event) => {
  const pixelThreshold = projectsContainer.offsetWidth - window.innerWidth
  projectsContainer.style.transition = 'none'
  const normalized = normalizeWheel(event)
  event.preventDefault()
  if (normalized.pixelX !== 0 || normalized.pixelY !== 0) {
    translationX -= normalized.pixelX + (normalized.pixelY * -1)
    console.log(translationX)
    translationX = clamp(-1 * pixelThreshold, 0, translationX)
    projects.forEach(function (project) {
      project.style.transform = `translateX(${translationX}px)`
    })
  }
  // else if (normalized.pixelY !== 0) {
  //   translationX += normalized.pixelY / 3
  //   translationX = clamp(-1 * pixelThreshold, 0, translationX)
  //   projects.forEach(function (project) {
  //     project.style.transform = `translateX(${translationX}px)`
  //   })
  // }
}

const throttleMoveX = throttle(moveX, 30, { leading: true, trailing: false })

projectsContainer.addEventListener('mousewheel', throttleMoveX)

// verticalScroll()
// import throttle from 'lodash/throttle'

// const projectsContainer = document.querySelector('.projects-container')

// function verticalScroll () {
//   projectsContainer.addEventListener('wheel', function (eventO) {
//     console.log(projectsContainer.scrollLeft)
//     if (eventO.deltaY < 0 && !projectsContainer.classList.contains('off-screen')) {
//       projectsContainer.scrollLeft += 30
//     } else if (eventO.deltaY > 0 && !projectsContainer.classList.contains('off-screen')) {
//       projectsContainer.scrollLeft -= 30
//     }
//   })
// }

function moveOnScreen (event) {
  if (event.deltaY < 0) {
    document.removeEventListener('wheel', moveOnScreen, { passive: true })
    projectsContainer.classList.remove('off-screen')
    // console.log(event.deltaY)
    // setTimeout(verticalScroll, 1500)
    const background = document.querySelectorAll('.bg-img')
    background.forEach(function(image) {
      image.classList.add('blurred')
    })
  }
}

document.addEventListener('wheel', moveOnScreen)
