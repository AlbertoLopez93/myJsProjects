"use strict"

function MyPoint(coordX,coordY) {
  var x = coordX ||0;
  var y = coordY ||0;
  this.getX = function getX() {
    return x;
  }
  this.getY = function getY() {
    return y;
  }
  this.setX = function setX(coorX) {
    x=coorX ||0;
  }
  this.setY = function setY(coorY) {
    y=coorY ||0;
  }
}

MyPoint.prototype.getXY = function() {
  return [this.getX(),this.getY()];
}
MyPoint.prototype.setXY = function(x,y) {
  this.setX(x);
  this.setY(y);
}
MyPoint.prototype.toString = function() {
  return '('+this.getX()+', '+this.getY()+')';
}
MyPoint.prototype.distance = function distance(x2,y2) {
  if(typeof x2=='undefined' && typeof y2=='undefined') {
    x2=0;
    y2=0;
  }
  else if(typeof x2=='number' && typeof y2=='number') {
  }
  else if(typeof x2=='object' && typeof y2=='undefined') {
    y2=x2.getY();
    x2=x2.getX();
  }

  let x1=this.getX();
  let y1=this.getY();
  let Dx=x2-x1;
  let Dy=y2-y1;
  Dx*=Dx;
  Dy*=Dy;
  return Math.sqrt(Dx+Dy);
}

module.exports = MyPoint;

/*var Point = new MyPoint();
console.log(Point.getXY());
Point.setXY(8,6);
console.log(Point.toString());
console.log(Point.distance());
var Other = new MyPoint(8,9);
console.log(Point.distance(Other));*/
