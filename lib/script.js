const memeForm = document.querySelector("form"); 
const imageUrl = document.querySelector("#image-url");
const topTextInput = document.querySelector("#top-text");
const topFontSize = document.querySelector("#top-font-size");
const bottomTextInput = document.querySelector("#bottom-text");
const bottomFontSize = document.querySelector("#bottom-font-size");
const color = document.querySelector("#color");
const memes = document.querySelector("#memes");


memeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(imageUrl.value);
  console.log(topTextInput.value);
  console.log(topFontSize.value);
  console.log(bottomTextInput.value);
  console.log(bottomFontSize.value);
  console.log(color.value);
  const topText = makeText(topTextInput.value, topFontSize.value, color.value);
  const bottomText = makeText(bottomTextInput.value, bottomFontSize.value, color.value);
  memes.appendChild(topText);
  memes.appendChild(bottomText);
});

function makeText(textInput, fontSize, color){
  const text = document.createElement('h2');
  text.innerText = textInput;
  text.style.color = color;
  text.style.fontSize = fontSize + "px";
  return text;
}