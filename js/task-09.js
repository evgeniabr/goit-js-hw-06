function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanChangeColor = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");

btnChangeColor.addEventListener("click", changeRandomColor);

function changeRandomColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  spanChangeColor.textContent = getRandomHexColor();
}
