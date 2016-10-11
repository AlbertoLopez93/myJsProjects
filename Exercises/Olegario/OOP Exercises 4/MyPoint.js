"use strict"

function MyPoint(instanciaX, instanciaY) {
  let x = instanciaX ? instanciaX : 0;
  let y = instanciaY ? instanciaY : 0;

  this.getX = function () {
    return x;
  };
  this.getY = function () {
    return y;
  };
  this.setX = function (newX) {
      x = newX;
  };
  this.setY = function (newY) {
      y = newY;
  };

}


MyPoint.prototype.getXY = function () {
  return [this.getX(),this.getY()];
};

MyPoint.prototype.setXY = function (newX, newY) {
  this.setX(newX)
  this.setY(newY)
};

MyPoint.prototype.toString = function () {
  return "("+ this.getX() +", "+ this.getY() +")"
};

MyPoint.prototype.distance = function () {
  if (arguments.length === 0) {
    return Math.sqrt(Math.pow(this.getX(),2) + Math.pow(this.getY(),2));
  }

  if (arguments.length === 1) {
    if (arguments[0] instanceof Object) {
      if (this.getX() > arguments[0].getX()) {
        return Math.sqrt(Math.pow(this.getX() - arguments[0].getX(),2) + Math.pow(this.getY() - arguments[0].getY(),2));
      }
      return Math.sqrt(Math.pow(arguments[0].getX() - this.getX(),2) + Math.pow(arguments[0].getY() - this.getY(),2));
    }
  }

  if (arguments.length === 2) {
    if (Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
      if (this.getX() > arguments[0]) {
        return Math.sqrt(Math.pow(this.getX() - arguments[0],2) + Math.pow(this.getY() - arguments[1],2));
      }
      return Math.sqrt(Math.pow(arguments[0] - this.getX(),2) + Math.pow(arguments[1] - this.getY(),2));
    }
  }

};


module.exports = MyPoint;
