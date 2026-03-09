const STORAGE_KEY = "watchlistData";

document.getElementById("movieForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let title = document.getElementById("title").value;
  let director = document.getElementById("director").value;
  let genre = document.getElementById("genre").value;
  let year = document.getElementById("year").value;
  let status = document.getElementById("status").value;
  let rating = document.getElementById("rating").value;

  let newMovie = {
    title: title,
    director: director,
    genre: genre,
    year: parseInt(year),
    status: status,
    rating: parseFloat(rating)
  };

  let savedData = localStorage.getItem(STORAGE_KEY);
  let movies = [];

  if (savedData) {
    movies = JSON.parse(savedData);
  }

  movies.push(newMovie);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(movies));

  window.location.href = "index.html";
});