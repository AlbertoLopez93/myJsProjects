"use strict";

let MyPoint = require("./MyPoint");

function MyTriangle() {
  let v1, v2, v3;

  if (arguments.length === 6) {
    v1 = new MyPoint(arguments[0], arguments[1]);
    v2 = new MyPoint(arguments[2], arguments[3]);
    v3 = new MyPoint(arguments[4], arguments[5]);
  } else if (arguments.length === 3) {
    v1 = arguments[0];
    v2 = arguments[1];
    v3 = arguments[2];
  }

  this.toString = function toString() {
    return "MyTriangle[v1=" + v1.toString() + ", v2=" + v2.toString() + ", v3=" + v3.toString() + "]";
  };

  this.getPerimeter = function getPerimeter() {
    let v1v2Side;
    let v1v3Side;
    let v2v3Side;
    v1v2Side = Math.sqrt( Math.pow(Math.abs(v1.getX() - v2.getX()), 2) + Math.pow(Math.abs(v1.getY() - v2.getY()), 2) );
    v1v3Side = Math.sqrt( Math.pow(Math.abs(v1.getX() - v3.getX()), 2) + Math.pow(Math.abs(v1.getY() - v3.getY()), 2) );
    v2v3Side = Math.sqrt( Math.pow(Math.abs(v2.getX() - v3.getX()), 2) + Math.pow(Math.abs(v2.getY() - v3.getY()), 2) );
    return v1v2Side + v1v3Side + v2v3Side;
  };

  this.getType = function getType() {
    let v1v2Side;
    let v1v3Side;
    let v2v3Side;
    v1v2Side = Math.sqrt( Math.pow(Math.abs(v1.getX() - v2.getX()), 2) + Math.pow(Math.abs(v1.getY() - v2.getY()), 2) );
    v1v3Side = Math.sqrt( Math.pow(Math.abs(v1.getX() - v3.getX()), 2) + Math.pow(Math.abs(v1.getY() - v3.getY()), 2) );
    v2v3Side = Math.sqrt( Math.pow(Math.abs(v2.getX() - v3.getX()), 2) + Math.pow(Math.abs(v2.getY() - v3.getY()), 2) );

    if (v1v2Side === v1v3Side && v1v2Side === v2v3Side) {
      return "equilateral";
    } else if (v1v2Side === v1v3Side || v1v2Side === v2v3Side || v1v3Side === v2v3Side) {
      return "isosceles";
    } else {
      return "scalene";
    }
  };
}

module.exports = MyTriangle;