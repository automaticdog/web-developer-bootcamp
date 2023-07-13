const form = document.querySelector("form");

const getTvShow = async (query) => {
  const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`)
  const results = await res.data
  return results;
}

function renderShows(data) {
  for (let i = 0; i < data.length; i++) {
    let showName = data[i].show.name;
    let imgUrl = data[i].show.image;
    printShow(showName);
    printShowImage(imgUrl, showName);
  }
}

form.addEventListener("submit", async function (e) {
  e.preventDefault();
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
  if (!url) {
    console.log("no image for this show :(")
  } else {
    const img = document.createElement("img");
    img.setAttribute("src", url["medium"]);
    img.setAttribute("alt", `Show poster for ${name}`)
    document.body.appendChild(img);
  }
}