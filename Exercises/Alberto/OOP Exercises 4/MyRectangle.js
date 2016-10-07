"use strict"

var MyPoint = require("./MyPoint");

function MyRectangle() {
  var topLeft,bottomRight,x1,y1,x2,y2;
  if(typeof arguments[0]=='undefined') {
    return ;
  }
  if(typeof arguments[2]=='undefined') {
    topLeft= arguments[0];
    bottomRight= arguments[1];
  }
  else {
    topLeft = new MyPoint(arguments[0],arguments[1]);
    bottomRight = new MyPoint(arguments[2],arguments[3]);
  }
  x1= topLeft.getX();
  y1= topLeft.getY();
  x2= bottomRight.getX();
  y2= bottomRight.getY();
  var base= x1-x2;
  if(base<0) {
    base *= (-1);
  }
  var height= y2-y1;
  if(height<0) {
    height *= (-1);
  }
  this.getArea = function getArea() {
    return base*height;
  }
  this.getPerimeter = function getPerimeter() {
    return 2*(base+height);
  }
  this.toString = function toString() {
    return 'MyRectangle[topLeft='+topLeft+', bottomRight='+bottomRight+']';
  }
}

module.exports = MyRectangle;

/*var P1 = new MyPoint(3,6);
var P2 = new MyPoint(7,3);
//var Figure = new MyRectangle(0,8,8,2);
var Figure = new MyRectangle(P1,P2);
console.log(Figure.getPerimeter());
console.log(Figure.getArea());
console.log(Figure.toString());*/
