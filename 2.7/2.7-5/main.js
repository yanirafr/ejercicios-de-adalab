const numbers = [5, 10, 7, 3, 8];
let mean = 0;

for (let i = 0; i < numbers.length; i++){
    mean += numbers[i]/numbers.length;
}

console.log(mean);