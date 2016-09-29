"use strict"

function Circle(obj) {
  var radius = obj.radius;
  var color = obj.color;

  this.setColor = function (cad) {
    if (typeof(cad) === "string") {
      color = cad;
    }
  };

  this.getColor = function () {
    return color;
  };

  this.setRadius = function (num) {
    if ((Number.isInteger(num)) && (num >= 0)) {
     radius = num;
    }
  };

  this.getRadius = function () {
    return radius;
  };
}


Circle.prototype.getArea = function () {
  return Math.PI * Math.pow(this.getRadius(),2)
};

Circle.prototype.getCircumference = function () {
  return Math.PI * (this.getRadius() * 2)
};

var s = {
  radius: 5,
  color: "black"
};


var x = new Circle(s);
x.radius = 10;
console.log(x.getArea());
console.log(x.getRadius());
x.setRadius(7);
x.setColor("white");
console.log(x.getRadius());
console.log(x.getArea());
console.log(x.getColor());
console.log(x.getRadius());
console.log(x.getCircumference());

module.exports = Circle;
