(function() {
    'use strict';

    var assert = require('./assert');

    function Circle(circle) {
        var radius = circle.radius;
        var color = circle.color;

        this.setRadius = function setRadius(newRadius) {
            if (assert.Number(newRadius)) {
                radius = newRadius;
            }
        };

        this.getRadius = function getRadius() {
            return radius;
        };

        this.setColor = function setColor(newColor) {
            if (assert.String(newColor)) {
                color = newColor;
            }
        };

        this.getColor = function getColor() {
            return color;
        };
    }

    Circle.prototype.getArea = function getArea() {
        return Math.PI * Math.pow(this.getRadius(), 2);
    };

    Circle.prototype.getCircumference = function getCircumference() {
        return Math.PI * 2 * this.getRadius();
    };

    module.exports = Circle;
}());
