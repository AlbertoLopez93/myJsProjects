"use strict"

function Rectangle(data) {
  var width = data.width;
  var length = data.length;
  this.setWidth = function setWidth(newWidth) {
    width = newWidth;
  }
  this.setLength = function setLength(newLength) {
    length = newLength;
  }
  this.getWidth = function getWidth() {
    return width;
  }
  this.getLength = function getLength() {
    return length;
  }
  this.getArea = function getArea() {
    return width * length;
  }
  this.getPerimeter = function getPerimeter() {
    return 2 * width + 2 * length;
  }
  this.toString = function toString() {
    return "Rectangle[length=" + length + ", width=" +  width  + "]"
  }
}

module.exports = Rectangle;
