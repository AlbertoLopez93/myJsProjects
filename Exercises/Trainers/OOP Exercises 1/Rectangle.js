"use strict";

function Rectangle(data) {
    let width = data.width;
    let length = data.length;

    this.getWidth = function getWidth() {
        return width;
    };

    this.setWidth = function setWidth(newWidth) {
        width = newWidth;
    };

    this.getLength = function getLength() {
        return length;
    };

    this.setLength = function setLength(newLength) {
        length = newLength;
    };
}

Rectangle.prototype.getArea = function getArea() {
    return this.getWidth() * this.getLength();
};

Rectangle.prototype.getPerimeter = function getPerimeter() {
    return (2 * this.getWidth()) + (2 * this.getLength());
};

Rectangle.prototype.toString = function toString() {
    return "Rectangle[length=" + this.getLength() + ", width=" + this.getWidth() + "]";
};

module.exports = Rectangle;
