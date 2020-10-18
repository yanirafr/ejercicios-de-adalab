"use strict";



function getCharacter (){

    const char = document.querySelector(".char").value;
    
    fetch(`https://swapi.dev/api/people/?search=${char}`)
        .then(response => response.json())
        .then(data => {

            let list = document.querySelector(".list");
            list.innerHTML += `<li>${data.results[0].name}, ${data.results[0].gender}</li>`
            
;  });}

document.querySelector(".btn").addEventListener("click", getCharacter);