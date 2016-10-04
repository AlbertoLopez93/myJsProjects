"use strict"

function Rectangle(obj) {
  var length = obj.length;
  var width = obj.width;

  this.getLength = function () {
    return length;
  };

  this.getWidth = function () {
    return width;
  };

  this.setLength = function (num) {
    length = num;
  };

  this.setWidth = function (num) {
    width = num;
  };
}

Rectangle.prototype.getArea = function () {
  return this.getLength() * this.getWidth();
};

Rectangle.prototype.getPerimeter = function () {
  return (this.getLength() * 2) + (this.getWidth() * 2);
};

Rectangle.prototype.toString = function () {
  return "Rectangle[length=" +this.getLength()+", width="+this.getWidth()+"]"
};

var s = {
  length: 5,
  width: 5
};

var x = new Rectangle(s);
console.log(x.getLength());
x.length = 10;
console.log(x.getLength());
console.log(x.getWidth());
console.log(x.toString());
console.log(x.getArea());
console.log(x.getPerimeter());
x.setLength(3);
console.log(x.getLength());
x.setWidth(2);
console.log(x.getWidth());
console.log(x.getArea());
console.log(x.getPerimeter());
console.log(x.toString());

module.exports = Rectangle;
