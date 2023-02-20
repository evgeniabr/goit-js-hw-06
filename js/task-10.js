function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createElementsBtn = document.querySelector(
  "#controls button[data-create]"
);
console.log(createElementsBtn);

const destroyElementsBtn = document.querySelector(
  "#controls button[data-destroy]"
);
console.log(destroyElementsBtn);

const amountInput = document.querySelector("input");
console.log(amountInput);

const divBoxes = document.querySelector("#boxes");

createElementsBtn.addEventListener("click", onBtnCreateClick);

destroyElementsBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const divCollection = [];
  for (let i = 0; i < amount; i += 1) {
    const newDiv = document.createElement("div");

    newDiv.style.width = 30 + i * 10 + "px";
    newDiv.style.height = 30 + i * 10 + "px";
    newDiv.style.backgroundColor = getRandomHexColor();
    divCollection.push(newDiv);
  }
  return divCollection;
}

function onBtnCreateClick() {
  const newDivCollection = createBoxes(amountInput.value);
  divBoxes.append(...newDivCollection);
}

function destroyBoxes() {
  amountInput.value = "";
  divBoxes.innerHTML = "";
}
