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

var s = {
  radius: 5,
  color: "black"
};


var x = new Circle(s);
x.radius = 10;
console.log(x.getArea());
console.log(x.getRadius());
x.setRadius(10);
x.setColor("white");
console.log(x.getArea());
console.log(x.getColor());
