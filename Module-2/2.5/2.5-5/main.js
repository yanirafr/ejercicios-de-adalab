const color = document.querySelector("body");

function change(event) {
  if (event.key === "m") {
    color.classList.add("purple");
    color.classList.remove("red");
  }
  if (event.key === "r") {
    color.classList.add("red");
    color.classList.remove("purple");
  }
}

color.addEventListener("keydown", change);
