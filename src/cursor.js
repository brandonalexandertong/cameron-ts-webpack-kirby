// change cursor on hover
const cursor = document.querySelector('.cursor')
const cursorTop = document.querySelector('.cursor-top')
const cursorBottom = document.querySelector('.cursor-bottom')

function changeCursor (top, bottom) {
  cursor.style.display = 'flex'
  cursorTop.innerHTML = top
  cursorBottom.innerHTML = bottom
}

document.addEventListener('mousemove', function (event) {
  const cursorWidth = cursor.offsetWidth
  const halfOfCursor = cursorWidth / 2
  const mouseX = event.pageX
  const mouseY = event.pageY
  cursor.style.left = mouseX - halfOfCursor + 'px'
  cursor.style.top = mouseY + 10 + 'px'
})

const rightArrow = document.querySelector('.right-arrow')
const leftArrow = document.querySelector('.left-arrow')

function removeRight () {
  rightArrow.style.display = 'none'
  leftArrow.style.display = 'block'
}

function removeLeft () {
  leftArrow.style.display = 'none'
  rightArrow.style.display = 'block'
}

function removeCursor () {
  cursor.style.display = 'none'
  rightArrow.style.display = 'none'
  leftArrow.style.display = 'none'
}

// update mobile cursor

const mobileCursors = document.querySelectorAll('.mobile-cursor')
console.log(mobileCursors)

const updateCursor = (cursor) => {
  const cursorTopCopy = cursor.dataset.project
  const cursorBottomCopy = cursor.dataset.info
  const cursorTop = cursor.querySelector('.cursor-top')
  const cursorBottom = cursor.querySelector('.cursor-bottom')

  cursorTop.innerHTML = cursorTopCopy
  cursorBottom.innerHTML = cursorBottomCopy
}

mobileCursors.forEach(function (element) {
  // console.log(element)
  updateCursor(element)
})

window.changeCursor = changeCursor
window.removeCursor = removeCursor
window.removeRight = removeRight
window.removeLeft = removeLeft
