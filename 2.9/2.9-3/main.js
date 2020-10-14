const lostNumbers = [4, 8, 15, 16, 23, 42];

function bestLostNumber() {
  // Even numbers
  const evenNumbers = [];

  // Remains calc
  for (let i = 0; i < lostNumbers.length; i++) {
    const even = lostNumbers[i];
    const remEven = even % 2;
    console.log(even);
    console.log(remEven);

    //Add to array
    if (remEven === 0) {
      evenNumbers.push(even);
    }
  }

  //Multiples
  const multNumbers = [];

  // Remains calc
  for (let i = 0; i < lostNumbers.length; i++) {
    const mult = lostNumbers[i];
    const remMult = mult % 3;
    console.log(mult);
    console.log(remMult);

    //Add to array
    if (remMult === 0) {
      multNumbers.push(mult);
    }
  }

  //Combination
  const combined = evenNumbers.concat(multNumbers);

  //Console log
  console.log("Pares: " + evenNumbers);
  console.log("Múltiplos de 3: " + multNumbers);
  console.log("Combinación: " + combined);
}

bestLostNumber();
