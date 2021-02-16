// vertical scroll on projects
const projectsContainer = document.querySelector('.projects-container')

function verticalScroll () {
  projectsContainer.addEventListener('wheel', function (event) {
    if (event.deltaY < 0) {
      projectsContainer.scrollLeft += 30
    } else if (event.deltaY > 0) {
      projectsContainer.scrollLeft -= 30
    }
  })
}

document.addEventListener('wheel', function (event) {
  if (event.deltaY < 0) {
    projectsContainer.classList.remove("off-screen")
  }
})

verticalScroll()
