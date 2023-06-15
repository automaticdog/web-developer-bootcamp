const form = document.querySelector('form');
const catList = document.querySelector('#cats');
const input = document.querySelector('input');
const h1 = document.querySelector('h1');
// const alphValidation = RegExp('^[A-Z, a-z]$');

let currentInput = '';

form.addEventListener("submit", function(event) {
  addCat();
  clearInput();
  event.preventDefault()
})

function clearInput() {
  currentInput = '';
  form.reset();
}

function addCat() {
  let newCat = document.createElement('li');
  console.log(newCat);
  newCat.innerText = input.value;
  console.log(newCat.innerText);
  catList.appendChild(newCat);
}

catList.addEventListener("click", function(event){
  event.target.remove();
})

// ------------

input.addEventListener("input", (e) => {
  h1.innerText = input.value;
  console.log("CHANGED!");
  console.log(e);
})