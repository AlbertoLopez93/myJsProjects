"use strict"

var MyPoint = require("./MyPoint");

function MyRectangle() {
  let topLeft, bottomRight;

  if (arguments.length === 2) {
    topLeft = arguments[0];
    bottomRight = arguments[1];
  }
  if (arguments.length === 4) {
    topLeft = new MyPoint (arguments[0], arguments[1]);
    bottomRight = new MyPoint (arguments[2], arguments[3]);
  }
  this.getArea = function () {
    let topRigth ={x: bottomRight.getX(), y: topLeft.getY() };
    let bottomLeft ={x: topLeft.getX(), y: bottomRight.getY() };
    let base = Math.sqrt(Math.pow(topLeft.getX() - bottomRight.getX(),2) + Math.pow(topLeft.getY() - topLeft.getY(),2));
    let altura = Math.sqrt(Math.pow(bottomRight.getX() - bottomRight.getX(),2) + Math.pow(topLeft.getY() - bottomRight.getY(),2));
    return base * altura;
  };
  this.getPerimeter = function () {
    let topRigth ={x: bottomRight.getX(), y: topLeft.getY() };
    let bottomLeft ={x: topLeft.getX(), y: bottomRight.getY() };
    let base = Math.sqrt(Math.pow(topLeft.getX() - bottomRight.getX(),2) + Math.pow(topLeft.getY() - topLeft.getY(),2));
    let altura = Math.sqrt(Math.pow(bottomRight.getX() - bottomRight.getX(),2) + Math.pow(topLeft.getY() - bottomRight.getY(),2));
    return (base + altura) * 2;
  };
  this.toString = function () {
    return "MyRectangle[topLeft=(" + topLeft.getX() + ", " + topLeft.getY() + "), bottomRight=(" + bottomRight.getX() + ", " + bottomRight.getY() + ")]";
  };
}


module.exports = MyRectangle;
