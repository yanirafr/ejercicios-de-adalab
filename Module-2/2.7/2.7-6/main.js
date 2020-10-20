/*const send = document.querySelector(".send");
const answer = document.querySelector(".answer");

function askMovie () {
    let fav1 = document.querySelector(".fav1").value;
    let fav2 = document.querySelector(".fav2").value;
    const movies = [fav1, fav2];
    console.log(movies)
    for (const favourite of movies) {
        console.log(`¡A mí también me encantó ${favourite}! Tenemos mucho en común, humana.`);
    }
}

send.addEventListener("click", askMovie);*/

let fav1 = document.querySelector(".fav1");
let fav2 = document.querySelector(".fav2");
const send = document.querySelector(".send");
const answer = document.querySelector(".answer");

function askMovie () {
    const fav1Value = fav1.value;
    const movies = [fav1Value, fav2.value];
    console.log(movies)
    for (const favourite of movies) {
        console.log(`¡A mí también me encantó ${favourite}! Tenemos mucho en común, humana.`);
    }
}

send.addEventListener("click", askMovie);