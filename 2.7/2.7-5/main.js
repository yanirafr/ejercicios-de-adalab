
function avg (numbers) {
    // const numbers = [5, 10, 7, 3, 8];
    let mean = 0;
    for (let i = 0; i < numbers.length; i++){
        mean += numbers[i]/numbers.length;
    };
    return mean;
}

console.log(avg([5, 10, 7, 3, 8]));
console.log(avg([1, 2, 3]));

const avgResult = avg([1, 2, 3]);
console.log(avgResult)

const myNumbers = [1, 2, 3];
const avgResult2 = avg(myNumbers);
console.log(avgResult2)