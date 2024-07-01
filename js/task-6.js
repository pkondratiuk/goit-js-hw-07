function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const form = document.querySelector('#controls');
const input = form.firstElementChild;
const createButton = input.nextElementSibling;
const destroyButton = form.lastElementChild;
const boxes = document.querySelector('#boxes');


function createBoxes(amount) {
  const someDiv = [];
  for (let i = 0; i < amount; i++) {
    const element = document.createElement('div');
    const size = 30 + i * 10;
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    element.style.backgroundColor = getRandomHexColor();
    someDiv.push(element);
    
  }
  boxes.append(...someDiv);
  
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

createButton.addEventListener('click', handlerClick);

function handlerClick() {
  const amount = input.value;
  if (amount >= 1 && amount <= 100) {
    destroyBoxes();
    createBoxes(amount);
    input.value = '';
  }
}

destroyButton.addEventListener('click', () => {
  destroyBoxes();
});