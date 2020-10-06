
const go = document.querySelector(".go");

function hi(){
    const name = document.querySelector(".name").value;
    console.log(`Hola ${name}`);
}

go.addEventListener("click", hi);