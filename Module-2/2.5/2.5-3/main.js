const text = document.querySelector(".text");
const inv = document.querySelector(".inv");

function hover() {
    inv.innerHTML = "Holi chiques";
}
function nover() {
    inv.innerHTML = "";
}

text.addEventListener("mouseover", hover);
text.addEventListener("mouseout", nover)