"use strict";

let MyPoint = require("./MyPoint");

function MyRectangle() {
  let topLeft;
  let bottomRight;

  if (arguments.length === 4) {
    topLeft = new MyPoint(arguments[0], arguments[1]);
    bottomRight = new MyPoint(arguments[2], arguments[3]);
  } else if (arguments.length === 2) {
    topLeft = arguments[0];
    bottomRight = arguments[1];
  }

  this.getArea = function getArea() {
    let width;
    let height;
    width = Math.abs(topLeft.getX() - bottomRight.getX());
    height = Math.abs(topLeft.getY() - bottomRight.getY());

    return width * height;
  };

  this.getPerimeter = function getPerimeter() {
    let width;
    let height;
    width = Math.abs(topLeft.getX() - bottomRight.getX());
    height = Math.abs(topLeft.getY() - bottomRight.getY());

    return width * 2 + height * 2;
  };

  this.toString = function toString() {
    return "MyRectangle[topLeft=" + topLeft.toString() +", bottomRight=" + bottomRight.toString() +"]";
  };
}

module.exports = MyRectangle;
