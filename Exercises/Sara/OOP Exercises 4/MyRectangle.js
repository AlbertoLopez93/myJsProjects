"use strict";
var MyPoint=require("./MyPoint.js");
function MyRectangle(){
  var topLeft,topRight,bottomRight,bottomLeft,x1,y1,x2,y2;
  var args=Array.prototype.slice.call(arguments);
  if(args.length===2){
    x1=args[0].getX();
    y1=args[0].getY();
    x2=args[1].getX();
    y2=args[1].getY();
    topLeft=args[0];
    bottomRight=args[1];
    topRight=new MyPoint(x2,y1);
    bottomLeft=new MyPoint(x1,y2)
  }
  if(args.length===4){
    x1=args[0];
    y1=args[1];
    x2=args[2];
    y2=args[3];
    topLeft=new MyPoint(x1,y1);
    bottomRight=new MyPoint(x2,y2);
    topRight=new MyPoint(x2,y1);
    bottomLeft=new MyPoint(x1,y2);
  }
  this.getArea=function getArea(){
    var base, altura,area;
    base=bottomLeft.distance(bottomRight);
    altura=bottomLeft.distance(topLeft);
    area=base*altura/2;
    return area;
  }
  this.getPerimeter=function getPerimeter(){
    var d1,d2,d3,d4;
    d1=topLeft.distance(topRight);
    d2=topRight.distance(bottomRight);
    d3=bottomRight.distance(bottomLeft);
    d4=bottomLeft.distance(topLeft);
    return d1+d2+d3+d4;
  }
  this.toString=function toString(){
    return "MyRectangle[topLeft=("+x1+", "+y1+"), bottomRight=("+x2+", "+y2+")]";
  }
}
var c=new MyRectangle(2,8,8,3);
console.log(c.getArea());
console.log(c.getPerimeter());
console.log(c.toString());
