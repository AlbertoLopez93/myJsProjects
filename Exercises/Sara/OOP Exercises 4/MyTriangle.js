"use strict";
var MyPoint=require("./MyPoint.js");
function MyTriangle(){
  var v1,v2,v3;
  var args=Array.prototype.slice.call(arguments);
  if(args.length===6){
    v1=new MyPoint(args[0],args[1]);
    v2=new MyPoint(args[2],args[3]);
    v3=new MyPoint(args[4],args[5]);
  }
  else{
    v1=args[0];
    v2=args[1];
    v3=args[2];
  }
  this.toString = function toString(){
    return "MyTriangle[v1=("+v1.getX()+", "+v1.getY()+"), v2=("+v2.getX()+", "+v2.getY()+"), v3=("+v3.getX()+", "+v3.getY()+")]";
  }
  this.getPerimeter = function getPerimeter() {
    var d1,d2,d3,distance;
    d1=v1.distance(v2);
    d2=v2.distance(v3);
    d3=v3.distance(v1);
    distance=d1+d2+d3;
    return distance;
  }
  this.getType= function getType() {
    var d1,d2,d3;
    d1=v1.distance(v2);
    d2=v2.distance(v3);
    d3=v3.distance(v1);
    if(d1===d2 && d2===d3){
      return "equilateral";
    }
    else{
      if((d1===d2 && d2!==d3) || (d2===d3 && d3!==d1) || (d3===d1 && d1!==d2)){
        return "isosceles";
      }
      else{
        return "scalene";
      }
    }
  }
}
var v1=new MyPoint(4,4);
var v2=new MyPoint(4,4);
var v3=new MyPoint(4,4);
var c=new MyTriangle(v1,v2,v3);
console.log(c.toString());
console.log(c.getPerimeter());
console.log(c.getType());
