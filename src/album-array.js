export default function slideshow(container, elementSelector) {
  const imageContainer = container;
  const images = imageContainer.querySelectorAll(elementSelector);
  let currentIndex = 0;

  function init() {
    const nextButton = container.querySelector('.next');
    const prevButton = container.querySelector('.prev');

    nextButton.addEventListener('click', e => {
      switchImage(true)
    })

    prevButton.addEventListener('click', e => {
      switchImage(false)
    })
  };

  function switchImage(isForwards) {
    const nextValue = isForwards ? (currentIndex + 1) : ((currentIndex - 1));
    images[currentIndex].style.display = 'none';
    currentIndex = (nextValue % images.length + images.length) % images.length;
    console.log(nextValue)
    images[currentIndex].style.display = 'block';
  };

  init();
};