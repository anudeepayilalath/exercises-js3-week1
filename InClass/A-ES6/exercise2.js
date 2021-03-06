class Polygon {
  constructor(height, width) {
    this.name = "Polygon";
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log('Hi, I am a ' + this.name);
  }
}

let p = new Polygon('Polygon', 300, 400);
p.sayName();
console.log('The area of this polygon is ' + p.area);


class Rectangle extends Polygon {
  constructor(height, width) {
    super(height, width);
    this.name = "Rectangle";
    this.sides = 4;
    //this.area = this.height * this.width;
  }
  get area() {return this.width * this.height;}
  sayName() {
    console.log('Hi I am a polygon and my name is ' + this.name + '.');
  }
}

let r = new Rectangle(50, 60);
r.sayName();
//r.area = 3;
console.log('The area of this polygon is ' + r.area);

//Create 2 new classes that extend from polygon: triangle and circle and log their names and areas

class Triangle extends Polygon{
  constructor(height, width){
  super(height, width);
  this.name="triangle";
  this.area=(width * height) / 2;
 
  }
 get areaResult(){
  return this.area
}
}

let newTriangle=new Triangle(100, 200)

console.log(newTriangle.areaResult);


class Trapezoid extends Polygon{
  constructor(height, base1, base2){
  super(height)
  this.base1=base1
  this.base2=base2
  this.name="Trapezoid"
  this.area=(this.base1 + this.base2) * this.height / 2

}}

let newTrpzd=new Trapezoid(100, 100, 100)
console.log(newTrpzd.area)


