"use strict"

var MyPoint = require("./MyPoint");

function MyTriangle() {
  let v1, v2, v3;
  if (arguments.length === 3) {
    v1 = arguments[0];
    v2 = arguments[1];
    v3 = arguments[2];
  }
  if (arguments.length === 6) {
    v1 = new MyPoint (arguments[0], arguments[1]);
    v2 = new MyPoint (arguments[2], arguments[3]);
    v3 = new MyPoint (arguments[4], arguments[5]);
  }
  this.toString = function () {
    return "MyTriangle[v1=(" + v1.getX() + ", " + v1.getY() + "), v2=(" + v2.getX() + ", " + v2.getY() + "), v3=(" + v3.getX() + ", " + v3.getY() + ")]";
  };
  this.getPerimeter = function () {
    let distancia1 = Math.sqrt(Math.pow(v1.getX() - v2.getX(),2) + Math.pow(v1.getY() - v2.getY(),2));
    let distancia2 = Math.sqrt(Math.pow(v2.getX() - v3.getX(),2) + Math.pow(v2.getY() - v3.getY(),2));
    let distancia3 = Math.sqrt(Math.pow(v3.getX() - v1.getX(),2) + Math.pow(v3.getY() - v1.getY(),2));
    return distancia1 + distancia2 + distancia3;
  };
  this.getType = function () {
    let distancia1 = Math.sqrt(Math.pow(v1.getX() - v2.getX(),2) + Math.pow(v1.getY() - v2.getY(),2));
    let distancia2 = Math.sqrt(Math.pow(v2.getX() - v3.getX(),2) + Math.pow(v2.getY() - v3.getY(),2));
    let distancia3 = Math.sqrt(Math.pow(v3.getX() - v1.getX(),2) + Math.pow(v3.getY() - v1.getY(),2));

    if ((distancia1 === distancia2) && (distancia1 === distancia3)) {
      return "equilateral";
    }
    if ((distancia1 === distancia2) || (distancia1 === distancia3) || (distancia2 === distancia3)) {
      return "isosceles";
    }
    return "scalene";
  };
}



module.exports = MyTriangle;
