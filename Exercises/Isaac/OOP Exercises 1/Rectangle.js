(function() {
    'use strict';

    var assert = require('./assert');

    function Rectangle(rectangle) {
        var width = rectangle.width;
        var length = rectangle.length;

        this.setWidth = function setWidth(newWidth) {
            if (assert.Number(newWidth)) {
                width = newWidth;
            }
        };

        this.getWidth = function getWidth() {
            return width;
        };

        this.setLength = function setLength(newLength) {
            if (assert.Number(newLength)) {
                length = newLength;
            }
        };

        this.getLength = function getLength() {
            return length;
        };
    }

    Rectangle.prototype.getArea = function getArea() {
        return this.getWidth() * this.getLength();
    };

    Rectangle.prototype.getPerimeter = function getPerimeter() {
        return 2 * this.getWidth() + 2 * this.getLength();
    };

    Rectangle.prototype.toString = function toString() {
        return "Rectangle[length=" + this.getLength() + ", width=" + this.getWidth() + "]";
    };

    module.exports = Rectangle;
}());
