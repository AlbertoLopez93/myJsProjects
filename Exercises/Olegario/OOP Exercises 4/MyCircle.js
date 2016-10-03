"use strict"

var MyPoint = require("./MyPoint");

function MyCircle() {
  let center, radius;

  if (arguments.length === 0) {
    center = new MyPoint(0,0);
    radius = 1;
  }
  if (arguments.length === 2) {
    center = arguments[0];
    radius = arguments[1];
  }
  if (arguments.length === 3) {
    center = new MyPoint(arguments[0],arguments[1]);
    radius = arguments[2];
  }

  this.getCenter =function () {
    return center;
  };
  this.getRadius =function () {
    return radius;
  };
  this.getCenterX =function () {
    return center.getX();
  };
  this.getCenterY =function () {
    return center.getY();
  };
  this.setRadius =function (newRadius) {
    if ((typeof(newRadius) === "number") && (!isNaN(newRadius))) {
      radius = newRadius;
    }
  };
  this.setCenter =function (newCenter) {
    if (newCenter instanceof Object) {
      center = newCenter;
    }
  };
  this.setCenterX =function (newCenterX) {
    if ((typeof(newCenterX) === "number") && (!isNaN(newCenterX))) {
      center.setX(newCenterX);
    }
  };
  this.setCenterY =function (newCenterY) {
    if ((typeof(newCenterY) === "number") && (!isNaN(newCenterY))) {
      center.setY(newCenterY);
    }
  };
}

MyCircle.prototype.getCenterXY = function () {
  return this.getCenter().getXY();
};

MyCircle.prototype.setCenterXY = function (newX, newY) {
  this.getCenter().setX(newX);
  this.getCenter().setY(newY);
};

MyCircle.prototype.toString = function () {
  return "MyCircle[radius=" + this.getRadius() + ", center=("+ this.getCenterX() + ", " + this.getCenterY() + ")]";
};

MyCircle.prototype.getArea = function () {
  return Math.PI * Math.pow(this.getRadius(), 2);
};

MyCircle.prototype.getCircumference = function () {
  return Math.PI * (this.getRadius() *2);
};

MyCircle.prototype.distance = function (newMyCircle) {
  return this.getCenter().distance(newMyCircle.getCenter());
};


module.exports = MyCircle;
