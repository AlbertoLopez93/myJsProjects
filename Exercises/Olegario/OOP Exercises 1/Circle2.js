"use strict"

function Circle(obj) {
  var radius = obj.radius;
  var color = obj.color;
  this.getRadius = function () {
    return radius;
  };
  this.getColor = function () {
    return color;
  };
}

Circle.prototype.getArea = function () {
  return Math.PI * Math.pow(this.getRadius(),2)
};

var s = {
  radius: 5,
  color: "black"
};


var x = new Circle(s);
x.radius = 10;
console.log(x.getArea());
console.log(x.getRadius());
console.log(x.getArea());
console.log(x.getColor());
