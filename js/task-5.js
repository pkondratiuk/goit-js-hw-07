function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = document.querySelector('.change-color');
const body = document.querySelector('body');
const colorValue = document.querySelector('.color');

changeColor.addEventListener('click', () => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorValue.textContent = color;

})

