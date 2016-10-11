"use strict"

var MyPoint = require("./MyPoint.js");

function MyTriangle() {
  if(arguments.length === 3) {
    var v1 = arguments[0];
    var v2 = arguments[1];
    var v3 = arguments[2];
  }
  if(arguments.length === 6) {
    var v1 = new MyPoint(arguments[0], arguments[1]);
    var v2 = new MyPoint(arguments[2], arguments[3]);
    var v3 = new MyPoint(arguments[4], arguments[5]);
  }
  this.toString = function toString() {
    return "MyTriangle[v1=" + v1.toString() + ", v2=" + v2.toString() + ", v3=" + v3.toString() + "]";
  }
  this.getPerimeter = function getPerimeter() {
    let side1 = v1.distance(v2.getX(), v2.getY());
    let side2 = v2.distance(v3.getX(), v3.getY());
    let side3 = v3.distance(v1.getX(), v1.getY());
    return side1 + side2 + side3;
  }
  this.getType = function getType() {
    let side1 = v1.distance(v2.getX(), v2.getY());
    let side2 = v2.distance(v3.getX(), v3.getY());
    let side3 = v3.distance(v1.getX(), v1.getY());
    if(side1 === side2 && side1 === side3) {
      return "equilateral";
    }
    if(side1 === side2 || side1 === side3) {
      return "isosceles";
    }
    return "scalene";
  }
}

module.exports = MyTriangle;
