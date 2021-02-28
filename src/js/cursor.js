// change cursor on hover
export default function newCursor (project) {
  const cursor = document.getElementById('cursor')
  const cursorTop = document.querySelector('.cursor-top')
  const cursorBottom = document.querySelector('.cursor-bottom')
  const projectName = project.dataset.project
  const projectInfo = project.dataset.info
  const rightArrow = document.querySelector('.right-arrow')
  const leftArrow = document.querySelector('.left-arrow')
  project.style.cursor = 'url(assets/icons/triangle.svg), auto'
  project.addEventListener('mouseenter', function () {
    cursor.style.opacity = '1'
    cursorTop.innerHTML = projectName
    cursorBottom.innerHTML = projectInfo
    const projectImages = project.querySelectorAll('.visible-image')
    const nextButton = project.querySelector('.next')
    const prevButton = project.querySelector('.prev')

    nextButton.style.cursor = 'url(assets/icons/triangle.svg), auto'
    prevButton.style.cursor = 'url(assets/icons/triangle.svg), auto'

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
  })
}
