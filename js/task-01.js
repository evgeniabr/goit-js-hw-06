const listWithClass = document.querySelectorAll(".item");
console.log("Number of categories:", listWithClass.length);
// console.log(listWithClass);
// const chieldEl = listWithClass.chieldren;
// console.log(chieldEl);

const listRef = Array.from(listWithClass);
// console.log(listRef);

const message = (element) => {
  const titleEl = element.querySelector("h2");

  const liListEl = element.querySelectorAll("li");
  return console.log(
    "Category:",
    titleEl.textContent,
    "Elements:",
    liListEl.length
  );
};
const makeMessage = listRef.map(message);

// const firstLiRef = listWithClass[0];
// const firstTitleRef = firstLiRef.querySelector("h2");

// console.log('Category:', firstTitleRef.textContent);

// const firstLiListChield = firstLiRef.querySelectorAll("li");
// console.log('Elements:', firstLiListChield.length);

// const secondLiRef = listWithClass[1];
// const secondTitleRef = secondLiRef.querySelector("h2");

// console.log('Category:', secondTitleRef.textContent);

// const secondLiListChield = secondLiRef.querySelectorAll("li");
// console.log('Elements:', secondLiListChield.length);

// const thirtLiRef = listWithClass[2];
// const thirtTitleRef = thirtLiRef.querySelector("h2");

// console.log('Category:', thirtTitleRef.textContent);

// const thirtLiListChield = thirtLiRef.querySelectorAll("li");
// console.log('Elements:', thirtLiListChield.length);
