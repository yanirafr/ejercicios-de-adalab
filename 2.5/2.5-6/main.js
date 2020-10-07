const input = document.querySelector(".text");
const write = document.querySelector(".paragraph");

function writeOnP(event) {
  let letter = event.currentTarget.value;
  write.innerHTML = letter;
}

input.addEventListener("keyup", writeOnP);
