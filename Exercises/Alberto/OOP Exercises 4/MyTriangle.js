"use strict"

var MyPoint = require("./MyPoint");

function MyTriangle() {
  var v1,v2,v3;
  if(typeof arguments[0]=='undefined') {
    return ;
  }
  if(typeof arguments[3]=='undefined') {
    v1= arguments[0];
    v2= arguments[1];
    v3= arguments[2];
  }
  else {
    v1 = new MyPoint(arguments[0],arguments[1]);
    v2 = new MyPoint(arguments[2],arguments[3]);
    v3 = new MyPoint(arguments[4],arguments[5]);
  }
  this.toString = function() {
    return 'MyTriangle[v1='+v1+', v2='+v2+', v3='+v3+']';
  }
  this.getPerimeter = function() {
    var perimeter = v1.distance(v2);
    perimeter += v2.distance(v3);
    perimeter += v3.distance(v1);
    return perimeter;
  }
  this.getType = function() {
    let d1to2 = v1.distance(v2);
    let d2to3 = v2.distance(v3);
    let d3to1 = v3.distance(v1);
    console.log(d1to2+','+d2to3+','+d3to1);
    if(d1to2==d2to3 && d3to1==d1to2) {
      return 'equilateral';
    }
    if(d1to2==d2to3 || d2to3==d3to1 || d3to1==d1to2) {
      return 'isosceles';
    }
    return 'scalene';
  }
}

module.exports = MyTriangle;

/*var P1 = new MyPoint(3,6);
var P2 = new MyPoint(3,3);
var P3 = new MyPoint(6,6);
//var Tri = new MyTriangle(10,8,4,4,4,12);
var Tri = new MyTriangle(P1,P2,P3)
console.log(Tri.getPerimeter());
console.log(Tri.getType());
console.log(Tri.toString());*/
