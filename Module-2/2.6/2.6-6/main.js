const pears = {};

pears.max = 10;
pears.min = 1;
pears.current = 7;
pears.ini = 3;

// function addPear() {
//   pears.current += 1;
//   console.log(pears.current);
// }

pears.addPear = function () {
  pears.current += 1;
  console.log(pears.current);
};

pears.addPear();

pears.removePear = function () {
  pears.current -= 1;
  console.log(pears.current);
};

pears.removePear();

pears.restore = function () {
  pears.current = pears.ini;
  console.log(pears.current);
};

pears.restore();
