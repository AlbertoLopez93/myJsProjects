"use strict"

function MyPoint(_x, _y) {
  let x = _x || 0;
  let y = _y || 0;
  this.getX = function getX() {
    return x;
  }
  this.setX = function setX(newX) {
    x = newX;
  }
  this.getY = function getY() {
    return y;
  }
  this.setY = function setY(newY) {
    y = newY;
  }
}

MyPoint.prototype.getXY = function getXY() {
  return [this.getX(), this.getY()];
}

MyPoint.prototype.setXY = function setXY(newX, newY) {
  this.setX(newX);
  this.setY(newY);
}

MyPoint.prototype.toString = function toString() {
  return "(" + this.getX() + ", " + this.getY() + ")";
}

MyPoint.prototype.distance = function distance() {
  if(arguments.length === 0) {
    var x = 0;
    var y = 0;
  }
  if(arguments.length === 1) {
    var x = arguments[0].getX();
    var y = arguments[0].getY();
  }
  if(arguments.length === 2) {
    var x = arguments[0];
    var y = arguments[1];
  }
  return Math.sqrt(Math.pow(this.getX() - x, 2) + Math.pow(this.getY() - y, 2));
}

module.exports = MyPoint;
