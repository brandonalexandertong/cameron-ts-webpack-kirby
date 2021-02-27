// change cursor on hover
export default function newCursor (project) {
  const cursor = document.querySelector('.cursor')
  const cursorTop = document.querySelector('.cursor-top')
  const cursorBottom = document.querySelector('.cursor-bottom')
  const projectName = project.dataset.project
  const projectInfo = project.dataset.info
  const rightArrow = document.querySelector('.right-arrow')
  const leftArrow = document.querySelector('.left-arrow')
  project.addEventListener('mouseenter', function () {
    cursor.style.opacity = '1'
    cursorTop.innerHTML = projectName
    cursorBottom.innerHTML = projectInfo
    const projectImages = project.querySelectorAll('.visible-image')
    console.log(projectImages)
    if (projectImages.length > 1) {
      const nextButton = project.querySelector('.next')
      const prevButton = project.querySelector('.prev')
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

document.addEventListener('mousemove', function (event) {
  const cursorWidth = cursor.offsetWidth
  const halfOfCursor = cursorWidth / 2
  const mouseX = event.pageX
  const mouseY = event.pageY
  cursor.style.transform = `translate(${mouseX - halfOfCursor}px, ${mouseY + 10}px)`
})

// update mobile cursor

const mobileCursors = document.querySelectorAll('.mobile-cursor')

const updateCursor = (cursor) => {
  const cursorTopCopy = cursor.dataset.project
  const cursorBottomCopy = cursor.dataset.info
  const cursorTop = cursor.querySelector('.cursor-top')
  const cursorBottom = cursor.querySelector('.cursor-bottom')

  cursorTop.innerHTML = cursorTopCopy
  cursorBottom.innerHTML = cursorBottomCopy
}

mobileCursors.forEach(function (element) {
  updateCursor(element)
})