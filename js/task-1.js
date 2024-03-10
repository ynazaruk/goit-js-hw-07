const elementsList = document.querySelectorAll("li.item");
//console.log(elementsList);

console.log(`Number of categories: ${elementsList.length}`);

elementsList.forEach((element) => {
  const elementName = element.querySelector("h2").textContent;
  const elementsQuantity = element.querySelectorAll("li").length;
  console.log(`Category: ${elementName}`);
  console.log(`Elements: ${elementsQuantity}`);
});
