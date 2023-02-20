let counterValue = 0;

const counterStep = 1;

const counterWrap = document.querySelector("#counter");

const incrementBtn = document.querySelector('[data-action="increment"]');

const decrementBtn = document.querySelector('[data-action="decrement"]');

const counterValueUI = document.querySelector("#value");
console.log(counterValueUI);

const onIncrementBtnClick = () => {
  counterValue += counterStep;
  apdateCounterValueUI();
};

const onDecrementBtnClick = () => {
  counterValue -= counterStep;
  apdateCounterValueUI();
};

const apdateCounterValueUI = () => {
  counterValueUI.textContent = counterValue;
};

incrementBtn.addEventListener("click", onIncrementBtnClick);

decrementBtn.addEventListener("click", onDecrementBtnClick);
