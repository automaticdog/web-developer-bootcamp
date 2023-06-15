const h2 = document.querySelector("h2")
const p1 = document.querySelector("#p1")
const p2 = document.querySelector("#p2")

let eventOneCounter = 0;
let eventTwoCounter = 0;

function enableButtons() {
  p1.addEventListener("click", () => {
    p1.innerText = "event listener #1 fired!";
    eventOneCounter += 1;
    console.log(`Event counter 1 has fired ${eventOneCounter} times`)
  })

  p2.addEventListener("click", () => {
    p2.innerText = "event listener #1 fired!";
    eventTwoCounter += 1;
    console.log(`Event counter 1 has fired ${eventTwoCounter} times`)
  })
}

enableButtons();