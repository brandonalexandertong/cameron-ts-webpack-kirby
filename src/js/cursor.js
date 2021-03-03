// change cursor on hover
export default function newCursor (project) {
  const cursor = document.getElementById('cursor')
  const cursorTop = document.querySelector('.cursor-top')
  const cursorBottom = document.querySelector('.cursor-bottom')
  const projectName = project.dataset.project
  const projectInfo = project.dataset.info
  const rightArrow = document.querySelector('.right-arrow')
  const leftArrow = document.querySelector('.left-arrow')
  const projectImages = project.querySelectorAll('.visible-image')

  project.style.cursor = 'url(assets/icons/triangle.svg), auto'
  project.addEventListener('mouseenter', function () {
    cursor.style.opacity = '1'
    cursorTop.innerHTML = projectName
    cursorBottom.innerHTML = projectInfo
    const nextButton = project.querySelector('.next')
    const prevButton = project.querySelector('.prev')
    projectImages.forEach(image => {
      image.style.zIndex = 2
    })

    if (projectImages.length > 1) {
      nextButton.addEventListener('mouseenter', function () {
        leftArrow.style.display = 'none'
        rightArrow.style.display = 'block'
      })
      prevButton.addEventListener('mouseenter', function () {
        leftArrow.style.display = 'block'
        rightArrow.style.display = 'none'
      })
    }
  })
  project.addEventListener('mouseleave', function (e) {
    cursor.style.opacity = '0'
    leftArrow.style.display = 'none'
    rightArrow.style.display = 'none'
    projectImages.forEach(image => {
      image.style.zIndex = 0
    })
  })
}
