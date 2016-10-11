"use strict";

function MyPoint() {
  let x;
  let y;

  if (arguments.length === 0) {
    x = 0;
    y = 0;
  } else {
    x = arguments[0];
    y = arguments[1];
  }

  this.getX = function getX() {
    return x;
  };

  this.setX = function setX(newX) {
    x = newX;
  };

  this.getY = function getY() {
    return y;
  };

  this.setY = function setY(newY) {
    y = newY;
  };
}

MyPoint.prototype.getXY = function() {
  return [this.getX(), this.getY()];
};

MyPoint.prototype.setXY = function(newX, newY) {
  this.setX(newX);
  this.setY(newY);
};

MyPoint.prototype.toString = function() {
  return "(" + this.getX() + ", " + this.getY() +")";
};

MyPoint.prototype.distance = function() {
  let origX = this.getX();
  let origY = this.getY();
  let targetX;
  let targetY;

  if (arguments.length === 2) {
    targetX = arguments[0];
    targetY = arguments[1];
  } else if (arguments.length === 1) {
    targetX = arguments[0].getX();
    targetY = arguments[0].getY();
  } else {
    targetX = 0;
    targetY = 0;
  }

  return Math.sqrt( Math.pow(Math.abs(origX - targetX), 2) + Math.pow(Math.abs(origY - targetY), 2) );

};

module.exports = MyPoint;
