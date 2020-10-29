"use strict";

class Square {
    constructor(side){
        this.side = side;
    }
    perimeter(){
        console.log(`${this.side * 4} perimeter`);
    }
    area(){
        console.log(`${this.side ** 2} area`);
    }
}

const firstSquare = new Square(1);
firstSquare.perimeter();
firstSquare.area();

const secondSquare = new Square(3);
secondSquare.perimeter();
secondSquare.area();

const thirdSquare = new Square(7);
thirdSquare.perimeter();
thirdSquare.area();