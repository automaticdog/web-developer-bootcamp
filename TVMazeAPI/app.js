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
    console.log(data[i].show.name);
  }
  // data.forEach(show => {
  //   console.log(show.name)
  // });
}

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  console.log("Submitted!")
  const searchTerm = form.elements.query.value;

  const shows = await getTvShow(searchTerm)
  renderShows(shows)
})