const form = document.querySelector("form");

const getTvShow = async (query) => {
  const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`)
  const results = await res.data
  // console.log(results);
  return results;
}

function renderShows(data) {
  console.log(data)
  console.log(data[0]);
  for (let i = 0; i < data.length; i++) {
    // console.log(data[i].show.name);
    printShow(data[i].show.name)
    printShowImage(data[i].show.image["medium"], data[i].show.name);
  }
}

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  // console.log("Submitted!")
  const searchTerm = form.elements.query.value;
  const shows = await getTvShow(searchTerm)
  renderShows(shows)
})

function printShow(name) {
  const li = document.createElement("li");
  li.innerText = name;
  document.body.appendChild(li);
}

function printShowImage(url, name) {
  const img = document.createElement("img");
  img.setAttribute("src", url);
  img.setAttribute("alt", `Show poster for ${name}`)
  document.body.appendChild(img);
}