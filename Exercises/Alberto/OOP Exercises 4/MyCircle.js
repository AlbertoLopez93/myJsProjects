"use strict"

var MyPoint = require("./MyPoint");

function MyCircle(x,y,radius) {
  var center;
  if(typeof x=='undefined'){ //zero arguments
    center = new MyPoint();
    radius = 1;
  }
  else if(typeof radius=='undefined') { //two arguments
    radius = y;
    center = x;
  }
  else { //three arguments
    center = new MyPoint(x,y);
  }

  this.getRadius = function() {
    return radius;
  }
  this.setRadius = function(rad) {
    radius = rad;
  }
  this.getCenter = function() {
    return center;
  }
  this.setCenter = function(point) {
    center = point;
  }
  this.setCenterX = function(x) {
    center.setX(x);
  }
}

MyCircle.prototype.getCenterX = function() {
  return this.getCenter().getX();
}
MyCircle.prototype.getCenterY = function() {
  return this.getCenter().getY();
}
MyCircle.prototype.getCenterXY = function() {
  let x=this.getCenter().getX();
  let y=this.getCenter().getY();
  return [x,y];
}
MyCircle.prototype.setCenterX = function(x) {
  this.getCenter().setX(x);
}
MyCircle.prototype.setCenterY = function(y) {
  this.getCenter().setY(y);
}
MyCircle.prototype.setCenterXY = function(x,y) {
  this.getCenter().setXY(x,y);
}
MyCircle.prototype.toString = function() {
  return 'MyCircle[radius='+this.getRadius()+', center='+this.getCenter()+']';
}
MyCircle.prototype.getArea = function() {
  var rad2 = this.getRadius();
  rad2*=rad2;
  return Math.PI*rad2;
}
MyCircle.prototype.getCircumference = function() {
  return 2*Math.PI*this.getRadius();
}
MyCircle.prototype.distance = function(anotherCenter) {
  let x1=this.getCenterX();
  let y1=this.getCenterY();
  let x2=anotherCenter.getX();
  let y2=anotherCenter.getY();
  return anotherCenter.distance(this.getCenter());
}

module.exports = MyCircle;

/*var Center = new MyPoint(2,0);
var Redondo = new MyCircle(Center,3);
Redondo.setCenterXY(3,7);
console.log(Redondo.getRadius());
console.log(Redondo.getCenterXY());
console.log(Redondo.getCenter());
console.log(Redondo.toString());
var Another = new MyPoint(5,9);
console.log(Redondo.distance(Another));
console.log(Redondo.getArea());
console.log(Redondo.getCircumference());*/
