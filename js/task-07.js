const fontSizeControlInput = document.querySelector("#font-size-control");
const textArea = document.querySelector("#text");

console.log(textArea);

fontSizeControlInput.addEventListener("input", () => {
  textArea.style.fontSize = fontSizeControlInput.value + "px";
});
