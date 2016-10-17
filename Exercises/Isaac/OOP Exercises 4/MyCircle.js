(function () {
    'use strict';

    let MyPoint = require('./MyPoint');

    function MyCircle(_center, _radius) {
        let center = _center || new MyPoint(0, 0);
        let radius = _radius === undefined ? 1 : _radius;

        if (arguments.length === 3) {
            center = new MyPoint(arguments[0], arguments[1]);
            radius = arguments[2];
        }

        // getRadius():int returns the radius of the instance.
        this.getRadius = function getRadius() {
            return radius;
        };

        // setRadius(radius:int):void sets a new radius to the instance.
        this.setRadius = function setRadius(newRadius) {
            radius = newRadius;
            return this;
        };

        // getCenter():MyPoint returns the center of the instance, which must be a MyPoint object.
        this.getCenter = function getCenter() {
            return center;
        };

        // setCenter(center:MyPoint):void receives as argument, an object of type MyPoint and uses it to set a new center to the instance.
        this.setCenter = function setCenter(newCenter) {
            center = newCenter;
            return this;
        };
    }

    // getCenterX():int returns the x value of the center property.
    MyCircle.prototype.getCenterX = function getCenterX() {
        return this.getCenter().getX();
    };

    // setCenterX(x:int):void sets the x value of the center property.
    MyCircle.prototype.setCenterX = function setCenterX(newCenterX) {
        this.getCenter().setX(newCenterX);
        return this;
    };

    // getCenterY():int returns the y value of the center property.
    MyCircle.prototype.getCenterY = function getCenterY() {
        return this.getCenter().getY();
    };

    // setCenterY(y:int):void sets the y value of the center property.
    MyCircle.prototype.setCenterY = function setCenterY(newCenterY) {
        this.getCenter().setY(newCenterY);
        return this;
    };

    // getCenterXY():int[2] returns an array with the x and y values of the center property as [x, y].
    MyCircle.prototype.getCenterXY = function getCenterXY() {
        return this.getCenter().getXY();
    };

    // setCenterXY(x:int, y:int):void uses the new x value and the y value to set a new center.
    MyCircle.prototype.setCenterXY = function setCenterXY(newCenterX, newCenterY) {
        this.getCenter().setXY(newCenterX, newCenterY);
        return this;
    };

    // toString():string returns a string following the pattern: “MyCircle[radius=r, center=(x, y)]”
    // where r is the value of the radius property, and the x, y are the values of the center property.
    MyCircle.prototype.toString = function toString() {
        return "MyCircle[radius=" + this.getRadius() + ", center=" + this.getCenter() + "]";
    };

    // getArea():int performs the calculation of the instance’s area, and returns it.
    MyCircle.prototype.getArea = function getArea() {
        return Math.PI * Math.pow(this.getRadius(), 2);
    };

    // getCircumference():int performs the calculation instance’s circumference and returns it.
    MyCircle.prototype.getCircumference = function getCircumference() {
        return 2 * Math.PI * this.getRadius();
    };

    // distance(another: MyCircle):number returns the distance between the intance’s center and the center of the received circle.
    MyCircle.prototype.distance = function distance(another) {
        return this.getCenter().distance(another.getCenter());
    };

    module.exports = MyCircle;
}());