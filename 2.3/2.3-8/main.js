"use strict";
const currentYear = parseFloat(3);
if (currentYear % 4 === 0) {
  console.log(`Estamos en un año bisiesto`);
} else if ((currentYear + 1) % 4 === 0) {
  console.log(`El próximo año bisiesto es el (1 + ${currentYear})`);
} else if ((currentYear + 2) % 4 === 0) {
  console.log(`El próximo año bisiesto es el (2 + ${currentYear})`);
} else if ((currentYear + 3) % 4 === 0) {
  console.log(`El próximo año bisiesto es el (3 + ${currentYear})`);
}
