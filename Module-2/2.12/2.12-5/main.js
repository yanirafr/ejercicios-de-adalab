const pins = [2389, 2384, 2837, 5232, 8998];

const evenNumbers = pins.filter( pins => pins % 2 === 0);

console.log(evenNumbers);