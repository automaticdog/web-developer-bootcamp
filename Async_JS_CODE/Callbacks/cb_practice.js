// function print(str, cb) {
//   console.log("do this first...")

//   cb(str);
// }

// let myString = "I should print last";

// print(myString, () => {console.log(myString)})

// console.log("1")

// console.log("2")

const delayedColorChange = (newColor, delay, callback) => {
  setTimeout(() => {
    document.body.style.backgroundColor = newColor;
    callback("i was passed to `callback` in the function definition");
  }, delay)
}

delayedColorChange('red', 1000, () => {
  delayedColorChange('purple', 1000, () => {
    delayedColorChange('blue', 1000, () => {

    })
  })
})

const changeText = (text, delay, callback) => {
  setTimeout(() => {
    document.querySelector('h1').innerText = text;
    callback();
  }, delay)
}

changeText('New heading 1', 1000, () => {
  changeText('New heading 2', 1000, () => {
    changeText('New heading 3', Math.floor(Math.random() * 10) * 1000, () => {
      delayedColorChange('teal', 1000, () => {

      })
    })
  })
})