let dog = document.querySelector(".dog-age");
let dogAge = parseFloat(dog.innerHTML);
humanAge = document.querySelector(".human-age");
console.log(dogAge);
if (dogAge <= 2) {
  humanAge.innerHTML = dogAge * 15;
} else if (dogAge <= 3) {
  humanAge.innerHTML = 15 + (dogAge - 1) * 9;
} else if (dogAge > 3) {
  humanAge.innerHTML = 24 + (dogAge - 2) * 5;
}
console.log(humanAge.innerHTML);
