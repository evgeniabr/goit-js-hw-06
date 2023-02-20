const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ulRef = document.querySelector("ul");
const liListRef = ingredients.map((product) => {
  const liRef = document.createElement("li");
  liRef.textContent = product;
  liRef.classList.add("item");
  return liRef;
});
ulRef.append(...liListRef);
