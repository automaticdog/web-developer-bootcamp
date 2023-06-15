const button = document.querySelector("#btn")
const input = document.querySelector('input')
const swatch = document.querySelector("#swatch")
const colorName = document.querySelector(".text")

function changeColor() {
  console.log('this = ' + this.innerText)
  console.log("changing color")
  let hex = '#';
  let values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

  for(let i = 0; i<6; i++) {
    let index = values[`${Math.floor(Math.random() * values.length)}`]
    hex += index;
  }
  swatch.setAttribute("style", `background-color: ${hex}`)
  colorName.textContent = hex;
}

button.addEventListener("mouseenter", changeColor)
button.addEventListener("click", function(event){
  console.log(`${event.clientX}, ${event.clientY}`);
})
window.addEventListener('keydown', function(event){
  switch(event.code) {
    case 'ArrowUp':
      console.log("UP!");
      break;
    case 'ArrowDown':
      console.log("DOWN!");
      break;
    case 'ArrowRight':
      console.log("RIGHT!");
      break;
    case 'ArrowLeft':
      console.log("LEFT");
      break;
    default:
      console.log("nada");
  }
})