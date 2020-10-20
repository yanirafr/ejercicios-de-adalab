const color = document.querySelector(".color");

function change() {
    if (window.scrollY < 250){
        color.classList.remove("color2");
        color.classList.add("color1");
    }
    if (window.scrollY > 250){
        color.classList.remove("color1");
        color.classList.add("color2");
    }
}

window.addEventListener("scroll", change);