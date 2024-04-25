class Rectangle {
  constructor(widith, height) {
    this.widith = widith;
    this.height = height;
  }

  get area() {
    return this.widith * this.height;
  }
}

const rectangle = new Rectangle(7, 9);
console.log(rectangle.area);

/* heritage - inherit the previus function  */ 

class Square extends Rectangle {
  constructor(side) {
    super(side,side);
  }
}

const square = new Square(5)
console.log(square.area)