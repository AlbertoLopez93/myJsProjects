"use strict"

var MyPoint = require("./MyPoint.js");

function MyCircle() {
  if(arguments.length === 0) {
    var center = new MyPoint();
    var radius = 1;
  }
  if(arguments.length === 2) {
    var center = arguments[0];
    var radius = arguments[1];
  }
  if(arguments.length === 3) {
    var center = new MyPoint(arguments[0], arguments[1]);
    var radius = arguments[2];
  }
  this.getRadius = function getRadius() {
    return radius;
  }
  this.setRadius = function setRadius(newRadius) {
    radius = newRadius;
  }
  this.getCenter = function getCenter() {
    return center;
  }
  this.setCenter = function setCenter(newCenter) {
    center = newCenter
  }
}

MyCircle.prototype.getCenterX = function getCenterX() {
  return this.getCenter().getX();
}

MyCircle.prototype.setCenterX = function setCenterX(newX) {
  this.setCenter(new MyPoint(newX, this.getCenterY()));
}

MyCircle.prototype.getCenterY = function getCenterY() {
  return this.getCenter().getY();
}

MyCircle.prototype.setCenterY = function setCenterY(newY) {
  this.setCenter(newPoint(newX, this.getCenterX()));
}

MyCircle.prototype.getCenterXY = function getCenterXY() {
  return [this.getCenterX(), this.getCenterY()];
}

MyCircle.prototype.setCenterXY = function setCenterXY(newX, newY) {
  this.setCenter(new MyPoint(newX, newY));
}

MyCircle.prototype.toString = function toString() {
  return "MyCircle[raidus=" + this.getRadius() + ", center=" + this.getCenter().toString() + "]"
}

MyCircle.prototype.getArea = function getArea() {
  return Math.PI * this.getRadius() * this.getRadius();
}

MyCircle.prototype.getCircumference = function getCircumference() {
  return Math.PI * this.getRadius() * 2;
}

MyCircle.prototype.distance = function distance(anotherCircle) {
  return this.getCenter().distance(anotherCircle.getCenterX(), anotherCircle.getCenterY());
}

module.exports = MyCircle;
