"use strict";

let MyPoint = require("./MyPoint");

function MyCircle() {
    let radius;
    let center;

    if (arguments.length === 3) {
        center = new MyPoint(arguments[0], arguments[1]);
        radius = arguments[2];
    } else if (arguments.length === 2) {
        center = arguments[0];
        radius = arguments[1];
    } else {
        center = new MyPoint(0, 0);
        radius = 1;
    } 

    this.getRadius = function getRadius() {
        return radius;
    };

    this.setRadius = function setRadius(newRadius) {
        radius = newRadius;
    };

    this.getCenter = function getCenter() {
        return center;
    };

    this.setCenter = function setCenter(newCenter) {
        center = newCenter;
    };
};

MyCircle.prototype.getCenterX = function() {
    return this.getCenter().getX();
};

MyCircle.prototype.setCenterX = function(newCenterX) {
    this.getCenter().setX(newCenterX);
};

MyCircle.prototype.getCenterY = function() {
    return this.getCenter().getY();
};

MyCircle.prototype.setCenterY = function(newCenterY) {
    this.getCenter().setY(newCenterY);
};

MyCircle.prototype.getCenterXY = function() {
    return this.getCenter().getXY();
};

MyCircle.prototype.setCenterXY = function(newCenterX, newCenterY) {
    this.getCenter().setX(newCenterX);
    this.getCenter().setY(newCenterY);
};

MyCircle.prototype.toString = function() {
    return "MyCircle[radius=" + this.getRadius() + ", center=" + this.getCenter().toString() + "]";
};

MyCircle.prototype.getArea = function() {
    return Math.PI * Math.pow(this.getRadius(), 2);
};

MyCircle.prototype.getCircumference = function() {
    return Math.PI * 2 * this.getRadius();
};

module.exports = MyCircle;
