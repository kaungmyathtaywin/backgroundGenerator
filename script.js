var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var css = document.querySelector("h3");
var body = document.getElementById("background");
var button = document.querySelector("button");

addGradient();
css.textContent = body.style.background;

function generateColor() {
  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

function addGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background;
}

color1.addEventListener("input", addGradient);

color2.addEventListener("input", addGradient);

button.addEventListener("click", function () {
  color1.value = generateColor();
  color2.value = generateColor();
  addGradient();
});
