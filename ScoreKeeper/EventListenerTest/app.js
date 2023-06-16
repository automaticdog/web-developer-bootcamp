// const h2 = document.querySelector("h2")
// const p1 = document.querySelector("#p1")
// const p2 = document.querySelector("#p2")

// let eventOneCounter = 0;
// let eventTwoCounter = 0;

// function enableButtons() {
//   console.log("enableButtons() has run")

//   p1.addEventListener("click", () => {
//     p1.innerText = "event listener #1 fired!";
//     eventOneCounter += 1;
//     console.log(`Event counter 1 has fired ${eventOneCounter} times`)
//   })
  
//   p2.addEventListener("click", () => {
//     p2.innerText = "event listener #2 fired!";
//     eventTwoCounter += 1;
//     console.log(`Event counter 2 has fired ${eventTwoCounter} times`)
//   })
// }

// console.log("running enableButtons 1st time...")
// enableButtons();
// console.log(eventOneCounter)
// console.log("running enableButtons 2nd time...")
// enableButtons();
// console.log(eventOneCounter)


const h2 = document.querySelector("h2")
const p1 = document.querySelector("#p1")
const p2 = document.querySelector("#p2")

let eventOneCounter = 0;
let eventTwoCounter = 0;

function enableButtons() {
  console.log("enableButtons() has run")

  p1.addEventListener("click", () => {
    eventOneCounter += 1;
    console.log("clicked! " + eventOneCounter)
  })
  
  p2.addEventListener("click", () => {
    eventTwoCounter += 1;
    console.log("clicked! " + eventTwoCounter)
  })
}

enableButtons()

// console.log("running enableButtons 1st time...")
// enableButtons();
// console.log(eventOneCounter)
// console.log("running enableButtons 2nd time...")
// enableButtons();
// console.log(eventOneCounter)