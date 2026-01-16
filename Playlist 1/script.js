console.log("js console");


let data;
let grid = document.querySelector(".grid-container");


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
 if (this.readyState == 4 && this.status == 200) {
   data = JSON.parse(xhttp.responseText);
   console.log(data);
   localStorage.setItem("data",JSON.stringify(data)); 
   data.forEach(function(show) {
     let card = document.createElement("div");
  
     card.classList.add("card");


     let textData=
     "<div class='show-title'>"+show.title+"</div>"+
     "<span>"+
     "Director:" +show.director+"<br>"+
       "Genre:" +show.genre+"<br>"+
       "Status:" +show.status+"<br>"+
       "Rating:" +show.rating+"<br>"+
     "</span>";


     card.innerHTML = textData;
   
     if(show.imgSrc) {
       card.style.backgroundImage = "url('"+show.imgSrc+"')";
     }
  
       grid.appendChild(card);
 });


 }
};
xhttp.open("GET","gamedate.json",true);
xhttp.send();


