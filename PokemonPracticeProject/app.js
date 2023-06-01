const container = document.getElementById("container")
const addBtn = document.getElementById("add-btn")
const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

let counter = 0;

function addPokemon() {
  counter++;

  let div = container.appendChild(document.createElement("div"));
  div.classList.add("card");
  const pokeNumber = `${counter}.png`;

  let pokeSprite = document.createElement("img");
  pokeSprite.src = baseUrl + pokeNumber;

  div.appendChild(pokeSprite);
  let displayNumber = document.createElement("div")
  displayNumber.textContent = `#${counter}`;
  div.appendChild(displayNumber);
}

addBtn.addEventListener("click", addPokemon)