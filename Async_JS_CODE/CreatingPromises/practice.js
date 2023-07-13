// new Promise((resolve, reject) => {
//   resolve()
// })

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 3000)
  })
}