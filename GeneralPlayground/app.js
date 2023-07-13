// XHR :

// const req = new XMLHttpRequest();
// req.onload = function () {
//   console.log("LOADED SUCCESSFULLY");
//   console.log(this);
// }

// req.onerror = function () {
//     console.log("ERROR!!");
//     console.log(this);
// }
// req.open("GET", "https://swapi.dev/api/people/1");
// req.send();

// FETCH:

// fetch("https://swapi.dev/api/people/1")
//   .then((res) => {
//     console.log("resolved!", res);
//     return res.json()
//   }).then(data => console.log("json done", data))
//   .catch((e) => {
//     console.log("ERROR: ", e)
//   })

// const loadPerson = async (id) => {
//   try {    
//     const res = await fetch(`https://swapi.dev/api/people/${id}`);
//     const data = await res.json();
//     console.log(data)
//   } catch (e) {
//     console.log("error found?!!", e)
//   }
// }

// const loadPersonAlt = async (id) => {
//   try {    
//     const res = await fetch(`https://swapi.dev/api/people/${id}`);
//     const data = await res.json();
//     console.log(data)
//     const res2 = await fetch(`https://swapi.dev/api/peoplfdsge/${id}`);
//     const data2 = await res2.json();
//     console.log(data2)
//   } catch (e) {
//     console.log("error found?!!", e)
//   }
// }

// axios.get('https://swapi.dev/api/pefdople/1')
//   .then(res => {
//     console.log(res.data);
//     console.log(res.status);
//   })
//   .catch(e => {
//     console.log("ERROR!!", e)
//   })

// const getPerson = async () => {
//   try {
//     const res = await axios.get("https://swapi.dev/api/people/1");
//     console.log(res.data)
//     const res2 = await axios.get("https://swapi.dev/api/peofdple/1");
//     console.log(res2.data)
//   } catch (e) {
//     console.log("UH OH!!!", e)
//   }
// }

// getPerson();
const btn = document.querySelector("button");

let joke;

const getDadJoke = async () => {
  const config = { headers: {Accept: 'application/json'}}
  const res = await axios.get("https://icanhazdadjoke.com", config);
  // await console.log(joke);
  joke = await res.data.joke;
  // await console.log(joke);

  let p = document.createElement('p');
  document.getElementById("jokes").appendChild(p);
  p.innerText = joke;
}

btn.addEventListener("click", () => {getDadJoke()})