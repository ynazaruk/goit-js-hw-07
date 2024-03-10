function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector("input");
const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const divBox = document.querySelector("#boxes");

create.addEventListener("click", (event) => {
  if (input.value > 0 && input.value <= 100) {
    createBox(input.value);
    input.value = "";
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});

function createBox(amount) {
  divBox.innerHTML = "";
  for (let i = 0; i < amount; i += 1) {
    let boxSize = 30 + i * 10;
    divBox.insertAdjacentHTML(
      "beforeend",
      `<div style = "width: ${boxSize}px; height: ${boxSize}px; background: ${getRandomHexColor()}"></div>`
    );
  }
}
destroy.addEventListener("click", (event) => {
  divBox.innerHTML = "";
});
