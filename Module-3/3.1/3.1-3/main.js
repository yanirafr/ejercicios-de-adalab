"use strict";

class Polygon {
  constructor(numberOfSides, base, height) {
    this.numberOfSides = numberOfSides;
    this.base = base;
    this.height = height;
  }
  perimeter() {
    console.log(`${this.base * this.numberOfSides} perimeter`);
  }
  area() {
    // const ar = this.base * this.height;
    console.log(`${this.base * this.height} area`);
    // return ar;
  }
}
class Square extends Polygon {
  constructor(side) {
    super(4, side);
    this.height = side;
  }
}
class Triangle extends Polygon {
  constructor(base, height) {
    super(3, base, height);
  }
  area() {
    //   console.log(super.area);
    console.log(`${(this.base * this.height) / 2} area`);
  }
}

console.log("Square");
const secondSquare = new Square(3);
secondSquare.perimeter();
secondSquare.area();

console.log("Triangle");
const firstTriangle = new Triangle(3, 4);
firstTriangle.perimeter();
firstTriangle.area();
