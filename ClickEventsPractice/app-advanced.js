for(let i = 0; i<100; i++) {
  let div = document.createElement("div");
  div.classList.add('div');
  document.querySelector("#squares-container").appendChild(div);
}

const divs = document.querySelectorAll('.div');
const pinkBtn = document.querySelector('#btn-pinks');
const blueBtn = document.querySelector('#btn-blues');
const greenBtn = document.querySelector('#btn-greens');

// function generatePinks() {
//   let hexStart = '#';
//   let hexMid = '';
//   let hexEnd = ''
//   let values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

//   for(let i = 0; i<2; i++) {
//     let index = values[`${Math.floor(Math.random() * values.length)}`]
//     hexStart += index;
//   }
//   for(let i = 0; i<2; i++) {
//     let index = values[`${Math.floor(Math.random() * values.length)}`]
//     hexMid += index;
//   }
//   for(let i = 0; i<2; i++) {
//     let index = values[`${Math.floor(Math.random() * 4) + 12}`]
//     hexEnd += index;
//   }
//   console.log(hexStart + hexMid + hexEnd);
//   return hexStart + hexMid + hexEnd;
// }

// function generatePinks() {
//   let hexStart = '#';
//   let hexMid = '';
//   let hexEnd = ''
//   let values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

//   for(let i = 0; i<2; i++) {
//     let index = values[`${Math.floor(Math.random() * values.length)}`]
//     hexStart += index;
//   }
//   for(let i = 0; i<2; i++) {
//     let index = values[`${Math.floor(Math.random() * 9)}`]
//     hexMid += index;
//   }
//   for(let i = 0; i<2; i++) {
//     let index = values[`${Math.floor(Math.random() * 4) + 12}`]
//     hexEnd += index;
//   }
//   console.log(hexStart + hexMid + hexEnd);
//   return hexStart + hexMid + hexEnd;
// }

function generatePinks() {
  let hexStart = '#';
  let hexMid = '';
  let hexEnd = ''
  let values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

  for(let i = 0; i<2; i++) {
    let index = values[`${Math.floor(Math.random() * 9) + 7}`]
    hexStart += index;
  }
  for(let i = 0; i<2; i++) {
    let index = values[`${Math.floor(Math.random() * 9)}`]
    hexMid += index;
  }
  for(let i = 0; i<2; i++) {
    let index = values[`${Math.floor(Math.random() * 4) + 12}`]
    hexEnd += index;
  }
  console.log(hexStart + hexMid + hexEnd);
  return hexStart + hexMid + hexEnd;
}

// function generateBlues() {
//   let hexStart = '#';
//   let hexMid = '';
//   let hexEnd = ''
//   let values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

//   for(let i = 0; i<2; i++) {
//     let index = values[`${Math.floor(Math.random() * 2)}`]
//     hexStart += index;
//   }
//   for(let i = 0; i<2; i++) {
//     let index = values[`${Math.floor(Math.random() * 10) + 6}`]
//     hexMid += index;
//   }
//   for(let i = 0; i<2; i++) {
//     let index = values[`${Math.floor(Math.random() * 4) + 12}`]
//     hexEnd += index;
//   }
//   console.log(hexStart + hexMid + hexEnd);
//   return hexStart + hexMid + hexEnd;
// }

function generateBlues() {
  let hexStart = '#';
  let hexMid = '';
  let hexEnd = ''
  let values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

  for(let i = 0; i<2; i++) {
    let index = values[`${Math.floor(Math.random() * 4) + 3}`]
    hexStart += index;
  }
  for(let i = 0; i<2; i++) {
    let index = values[`${Math.floor(Math.random() * 16)}`]
    hexMid += index;
  }
  for(let i = 0; i<2; i++) {
    let index = values[`${Math.floor(Math.random() * 3) + 13}`]
    hexEnd += index;
  }
  console.log(hexStart + hexMid + hexEnd);
  return hexStart + hexMid + hexEnd;
}

function generateGreens() {
  let hexStart = '#';
  let hexMid = '';
  let hexEnd = ''
  let values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

  for(let i = 0; i<2; i++) {
    let index = values[`${Math.floor(Math.random() * 10)}`]
    hexStart += index;
  }
  for(let i = 0; i<2; i++) {
    let index = values[`${Math.floor(Math.random() * 4) + 12}`]
    hexMid += index;
  }
  for(let i = 0; i<2; i++) {
    let index = values[`${Math.floor(Math.random() * 10) + 4}`]
    hexEnd += index;
  }
  console.log(hexStart + hexMid + hexEnd);
  return hexStart + hexMid + hexEnd;
}

function assignPinks() {
  for(let div of divs) {
        console.log(divs);
        div.style.backgroundColor = generatePinks();
  }
  for(let i = 0; i<100; i++) {
    function loop() {
      for(let div of divs) {
        console.log(divs);
        div.style.backgroundColor = generatePinks();
      }
    }
    setTimeout(loop, "250")
  }
}

function assignBlues() {
  for(let div of divs) {
    console.log(divs);
    div.style.backgroundColor = generateBlues();
}
for(let i = 0; i<100; i++) {
function loop() {
  for(let div of divs) {
    console.log(divs);
    div.style.backgroundColor = generateBlues();
  }
}
const timeout = setTimeout(loop, "150")
}
}

function assignGreens() {
  for(let div of divs) {
    console.log(divs);
    div.style.backgroundColor = generateGreens();
}
for(let i = 0; i<100; i++) {
function loop() {
  for(let div of divs) {
    console.log(divs);
    div.style.backgroundColor = generateGreens();
  }
}
const timeout = setTimeout(loop, "150")
}
}

pinkBtn.addEventListener("mouseenter", assignPinks);
blueBtn.addEventListener("click", assignBlues);
greenBtn.addEventListener("click", assignGreens);