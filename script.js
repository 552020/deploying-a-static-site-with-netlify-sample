const clapButton = document.getElementById("clap-button");

clapButton.addEventListener("click", switchBackground);
clapButton.addEventListener("click", switchBackgroundButton);
clapButton.addEventListener("click", switchBackgroundBetween);
clapButton.addEventListener("click", switchFontColor);

function randomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  const color = `rgb(${red}, ${green}, ${blue})`;
  return color;
}

function switchBackground() {
  const backgroundColor = randomColor();
  document.body.style.backgroundColor = backgroundColor;
}

function switchBackgroundBetween() {
  const backgroundColor = randomColor();
  document.querySelector(".container").style.backgroundColor = backgroundColor;
}

function switchBackgroundButton() {
  const backgroundColor = randomColor();
  document.querySelector(".button").style.backgroundColor = backgroundColor;
}

function switchFontColor() {
  const fontColor = randomColor();
  document.body.style.color = fontColor;
}
