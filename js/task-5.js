function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const backColor = document.querySelector(".color");
const button = document.querySelector(".change-color");

button.addEventListener("click", (event) => {
  backColor.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
});
