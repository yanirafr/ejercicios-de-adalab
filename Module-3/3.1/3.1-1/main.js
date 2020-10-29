"use strict";

const side = 9;

class Square {
    perimeter(){
        console.log(side * 4);
    }
    area(){
        console.log(side ** 2);
    }
}

const mySquare = new (Square);
mySquare.perimeter();
mySquare.area();