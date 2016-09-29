"use strict"

function Circle(obj) {
  this.radius = obj.radius;
  this.color = obj.color;
}

Circle.prototype.getArea = function () {
  return Math.PI * Math.pow(this.radius,2)
};

var s = {
  radius: 5,
  color: "black"
};

var x = new Circle(s);
x.radius = 3;
console.log(x.getArea());
