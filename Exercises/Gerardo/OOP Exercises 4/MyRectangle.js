"use strict"

var MyPoint = require("./MyPoint.js");

function MyRectangle() {
  if(arguments.length === 2) {
    var topLeft = arguments[0];
    var bottomRight = arguments[1];
  }
  if(arguments.length === 4) {
    var topLeft = new MyPoint(arguments[0], arguments[1]);
    var bottomRight = new MyPoint(arguments[2], arguments[3]);
  }
  this.getArea = function getArea() {
    let topRight = new MyPoint(bottomRight.getX(), topLeft.getY());
    let height = topRight.distance(topLeft);
    let width = topRight.distance(bottomRight);
    return height * width;
  }
  this.getPerimeter = function getPerimeter() {
    let topRight = new MyPoint(bottomRight.getX(), topLeft.getY());
    let height = topRight.distance(topLeft);
    let width = topRight.distance(bottomRight);
    return 2 * height + 2 * width;
  }
  this.toString = function toString() {
    return "MyRectangle[topLeft=" + topLeft.toString() + ", bottomRight=" + bottomRight.toString() + "]";
  }
}

module.exports = MyRectangle;
