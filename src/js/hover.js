export default function imageHover (project) {
  const visibleImages = project.querySelectorAll('.visible-image')
  const buttons = project.querySelectorAll('button')
  project.addEventListener('mouseenter', function () {
    visibleImages.forEach(image => {
      image.style.zIndex = 2
    })
    buttons.forEach(button => {
      button.style.zIndex = 4
    })
  })
  
  project.addEventListener('mouseleave', function () {
    visibleImages.forEach(image => {
      image.style.zIndex = 0
    })
    buttons.forEach(button => {
      button.style.zIndex = 2
    })
  })
}
