"use strict";

let year = document.querySelector(".year");
let currentYear = parseFloat(year.innerHTML);
const leap = document.querySelector(".leap");
if (currentYear % 4 === 0) {
  leap.innerHTML = "Estamos en un año bisiesto";
} else if ((currentYear + 1) % 4 === 0) {
  leap.innerHTML = `El próximo año bisiesto es el ${currentYear + 1}`;
} else if ((currentYear + 2) % 4 === 0) {
  leap.innerHTML = `El próximo año bisiesto es el ${currentYear + 2}`;
} else if ((currentYear + 3) % 4 === 0) {
  leap.innerHTML = `El próximo año bisiesto es el ${currentYear + 3}`;
}
