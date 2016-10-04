"use strict";

function PublicCircle(data) {
    this.radius = data.radius;
    this.color = data.color;

    this.getArea = function getArea() {
        return Math.PI * this.radius * this.radius;
    };
}


function Circle(data) {
    let radius = data.radius;
    let color = data.color;

    this.getRadius = function getRadius() {
        return radius;
    };

    this.setRadius = function setRadius(newRadius) {
        if (typeof newRadius === 'number') {
            radius = newRadius;
        }
    };

    this.getColor = function getColor() {
        return color;
    };

    this.setColor = function setColor(newColor) {
        if (typeof newColor === 'string') {
            color = newColor;
        }
    };
}

Circle.prototype.getArea = function getArea() {
    return Math.PI * this.getRadius() * this.getRadius();
};

Circle.prototype.getCircumference = function getCircumference() {
    return Math.PI * 2 * this.getRadius();
};

module.exports = Circle;