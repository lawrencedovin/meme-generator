let body = document.querySelector("body");
const memeForm = document.querySelector("#meme-form");
const imageUrl = document.querySelector("#image-url");
const topTextInput = document.querySelector("#top-text-input");
const topFontSize = document.querySelector("#top-font-size");
const topText = document.querySelector("#top-text");
const bottomTextInput = document.querySelector("#bottom-text-input");
const bottomFontSize = document.querySelector("#bottom-font-size");
const bottomText = document.querySelector("#bottom-text");
const color = document.querySelector("#color");
const meme = document.querySelector("#meme");

const colors = ["#8A3DFE", "#8846EE", "#884EE3", "#8855DA", "#8A5BD4", "#885FCA", "#8863C3",
                "#885FCA", "#8A5BD4", "#8855DA", "#884EE3", "#8846EE", "#8A3DFE"];

function changeColor(colors, i) {
  setInterval(() => {
    let linearGradient = `-webkit-gradient(linear, center top, center bottom, from(#563D7C), to(${colors[i]})) fixed`;
    body.style.background = linearGradient;
    i++;
    i %= colors.length;
  }, 250);
}
changeColor(colors, 0);

memeForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const url = `url("${imageUrl.value}")`;
  console.log(topTextInput.value, topFontSize.value, color.value);
  makeText(topText, topTextInput.value, topFontSize.value, color.value);
  makeText(bottomText, bottomTextInput.value, bottomFontSize.value, color.value);
  meme.style.backgroundImage = `${url}`;

  bottomText.classList.add("bottom-text-input");
  meme.appendChild(topText);
  meme.appendChild(bottomText);
  console.log(meme.style.backgroundImage);
  memeForm.reset();
});

function makeText(text, textInput, fontSize, color) {
  text.innerText = textInput;
  text.style.color = color;
  text.style.fontSize = fontSize + "px";
  text.style.fontWeight = 500;
  return text;
}
