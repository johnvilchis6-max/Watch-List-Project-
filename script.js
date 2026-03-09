console.log("js console");

let data = [];
const STORAGE_KEY = "watchlistData";

document.addEventListener("DOMContentLoaded", function () {
  const grid = document.querySelector(".grid-container");
  const saved = localStorage.getItem(STORAGE_KEY);

  if (saved) {
    data = JSON.parse(saved);
    displayData(data, grid);
  } else {
    loadJSON(grid);
  }
});

function loadJSON(grid) {
  let xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
      data = JSON.parse(xhttp.responseText);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      displayData(data, grid);
    }
  };

  xhttp.open("GET", "showdata.json", true);
  xhttp.send();
}

function displayData(list, grid) {
  grid.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
    let show = list[i];

    let cardHTML = `
  <div class="card">
    <h3 class="show-title">${show.title}</h3>
    <p>Director: ${show.director}</p>
    <p>Genre: ${show.genre}</p>
    <p>Status: ${show.status}</p>
    <p>Year: ${show.year}</p>
    <p>Rating: ${show.rating}</p>
  </div>
`;

    grid.innerHTML += cardHTML;
  }
}