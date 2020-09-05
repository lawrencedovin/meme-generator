const container = document.querySelector("#container");
const memeForm = document.querySelector("form"); 
const imageUrl = document.querySelector("#image-url");
const topTextInput = document.querySelector("#top-text-input");
const topFontSize = document.querySelector("#top-font-size");
const bottomTextInput = document.querySelector("#bottom-text-input");
const bottomFontSize = document.querySelector("#bottom-font-size");
const color = document.querySelector("#color");
// const meme = document.querySelector("#meme");
const meme = document.querySelector("section");

const topText = document.querySelector("#top-text");



memeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let url = '';
  // let topText = '';
  let bottomText = '';

  url = `url("${imageUrl.value}")`;
  // topText = makeText(topTextInput.value, topFontSize.value, color.value);
  bottomText = makeText(bottomTextInput.value, bottomFontSize.value, color.value);
  
  topText.innerText = "hello";
  topText.style.color = color.value;

  meme.style.backgroundImage = `${url}`;
  bottomText.classList.add("bottom-text-input");
  meme.appendChild(topText);
  meme.appendChild(bottomText);
  console.log(meme.style.backgroundImage);
  memeForm.reset();
});

function makeText(textInput, fontSize, color){
  const text = document.createElement('h2');
  text.innerText = textInput;
  text.style.color = color;
  text.style.fontSize = fontSize + "px";
  return text;
}