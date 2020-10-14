const array = [];
let number = 0;

// Ej 1

function get100Numbers() {
  for (let i = 0; i < 100; i++) {
    number++;
    array.push(number);
  }
  console.log(array);
}

get100Numbers();

// Ej 2

function getReversedNumbers() {
  array.reverse();
  console.log(array);
}

getReversedNumbers();
