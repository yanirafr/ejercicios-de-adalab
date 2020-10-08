let fav1 = document.querySelector(".fav1").value;
let fav2 = document.querySelector(".fav2").value;
const send = document.querySelector(".send");
const answer = document.querySelector(".answer");

movies = [fav1, fav2];

function askMovie () {
    for (const favourite of movies) {
        console.log(`¡A mí también me encantó ${favourite}! Tenemos mucho en común, humana.`);
    }
}

send.addEventListener("click", askMovie)