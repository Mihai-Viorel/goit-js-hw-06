// Exercițiul 1
// Codul HTML conține o listă de categorii ul#categories.
// Scrieți un script care:

// Va număra și afișa în consolă numărul total de categorii din ul#categories, adică elementele li.item.
// Pentru fiecare element li.item din lista ul#categories, va găsi și afișa în consolă titlul elementului (tag-ul <h2>) și numărul de elemente din acea categorie (toate elementele <li>).
// Ca rezultat, în consolă vor fi afișate astfel de mesaje:

// Number of categories: 3
// Category: Animals
// Elements: 4
// Category: Products
// Elements: 3
// Category: Technologies
// Elements: 5

///////////////////////////////////////////////////////
const listElements = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${listElements.length}`);

listElements.forEach((listElement) => {
  const listElementTitle = listElement.querySelector("h2");
  console.log(`Category: ${listElementTitle.textContent}`);

  const innerListLength = listElement.querySelectorAll("ul li").length;
  console.log(`Elements: ${innerListLength}`);
});















