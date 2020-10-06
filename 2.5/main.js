const hi = document.querySelector(".hi");
const go = document.querySelector(".go");

function cheer(){
    hi.innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió!";
}

go.addEventListener("click", cheer);