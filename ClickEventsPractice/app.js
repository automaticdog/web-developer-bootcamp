for(let i = 0; i<100; i++) {
  let div = document.createElement("div");
  div.classList.add('div');
  document.querySelector("#squares-container").appendChild(div);
}

const divs = document.querySelectorAll('.div');
const btn = document.querySelector('button');

function generateHexCode() {
  console.log("generateHexCode called")
  let hex = '#';
  let values = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for(let i = 0; i<6; i++) {
    let index = values[`${Math.floor(Math.random() * values.length)}`]
    hex += index;
  }
  console.log(hex);
  return hex;
}

function assignColors() {
  console.log("assignColors called")
  for(let div of divs) {
    console.log(divs);
    div.style.backgroundColor = generateHexCode();
  }
}

btn.addEventListener("click", assignColors);