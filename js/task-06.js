const textInput = document.querySelector("#validation-input");
const textInputLength = Number(textInput.dataset.length);
console.log(typeof textInputLength);

textInput.addEventListener("blur", () => {
  if (textInput.value.length === textInputLength) {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
  } else {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  }
});
