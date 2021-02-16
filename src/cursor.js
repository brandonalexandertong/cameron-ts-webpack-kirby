// change cursor on hover
const cursor = document.querySelector('.cursor')
const cursorTop = document.querySelector('.cursor-top')
const cursorBottom = document.querySelector('.cursor-bottom')

function changeCursor (top, bottom) {
  cursor.style.display = 'flex'
  cursorTop.innerHTML = top
  cursorBottom.innerHTML = bottom
}

function removeCursor () {
  cursor.style.display = 'none'
}

document.addEventListener('mousemove', function (event) {
  const mouseX = event.pageX
  const mouseY = event.pageY
  cursor.style.left = mouseX + 10 + 'px'
  cursor.style.top = mouseY + 10 + 'px'
})

window.changeCursor = changeCursor
window.removeCursor = removeCursor
