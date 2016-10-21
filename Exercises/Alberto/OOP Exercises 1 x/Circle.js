"use strict"

function Circle(obj) {
  var radius = obj.radius;
  var color = obj.color;
  this.getArea = function getArea() {
    return Math.PI*radius*radius;
  }
  this.setRadius = function setRadius(newRad) {
    if(typeof newRad=='number') {
      radius=newRad;
    }
  }
  this.getRadius = function getRadius() {
    return radius;
  }
  this.setColor = function setColor(newColor) {
    if(typeof newColor=='string') {
      color=newColor;
    }
  }
  this.getColor = function getColor() {
    return color;
  }
}
Circle.prototype ={};
Circle.prototype.getCircumference = function() {
  return 2*Math.PI*this.getRadius();
}

/*var any=new Circle({radius:7,color:"blue"});
console.log(any.getArea());
any.radius=3;
console.log(any.getArea());
any.setRadius(1);
console.log(any.getRadius());
console.log(any.getArea());
console.log(any.getCircumference());*/

module.exports = Circle;
