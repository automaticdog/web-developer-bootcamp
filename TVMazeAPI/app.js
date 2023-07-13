const form = document.querySelector("form");

const getTvShow = async (query) => {
  const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`)
  await console.log(res.data)
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Submitted!")
  const searchTerm = form.elements.query.value;

  getTvShow(searchTerm)
})