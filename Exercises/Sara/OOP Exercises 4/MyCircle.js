"use strict";
var MyPoint=require("./MyPoint.js");
function MyCircle(){
  var args=Array.prototype.slice.call(arguments);
  var center,radius;
  if(args.length===0){
    center=new MyPoint(0,0);
    radius=1;
  }
  if(args.length===3){
    center=new MyPoint(args[0],args[1]);
    radius=args[2];
  }
  if(args.length===2){
    center=args[0];
    radius=args[1];
  }
  this.getRadius=function getRadius(){
    return radius;
  }
  this.setRadius=function setRadius(newRadius){
    radius=newRadius;
  }
  this.getCenter=function getCenter(){
    return center;
  }
  this.setCenter=function setCenter(newCenter){
    center=newCenter;
  }
  this.getCenterX=function getCenterX(){
    return this.getCenter();
  }
  this.getCenterY=function getCenterY(){
    return this.getCenter().getY();
  }
  this.setCenterX=function setCenterX(newCenterX){
   this.setCenter(new MyPoint(newCenterX,this.getCenterY()));
  }
  this.setCenterY=function setCenterY(newCenterY){
    this.setCenter(new MyPoint(this.getCenterX(),newCenterY));
  }
}
MyCircle.prototype.getCenterXY=function(){
  var array=[];
  array[0]=this.getCenterX();
  array[1]=this.getCenterY();
  return array;
}
MyCircle.prototype.setCenterXY=function(newX,newY){
  this.setCenterX(newX);
  this.setCenterY(newY);
}
MyCircle.prototype.toString=function(){
  var radius=this.getRadius();
  var x=this.getCenterX();
  var y=this.getCenterY();
  return "MyCircle[radius="+radius+", center=("+x+", "+y+")]";
}
MyCircle.prototype.getArea=function(){
  var radius=this.getRadius();
  return Math.PI*(radius*radius);
}
MyCircle.prototype.getCircumference=function(){
  var radius=this.getRadius();
  return 2*Math.PI*radius;
}
MyCircle.prototype.distance=function(another){
 var distance;
 return another.distance(this.getCenterX(),this.getCenterY());
}
var c=new MyCircle(0);

console.log(c.getCenterX());
//console.log(c.getCenterY());


module.exports=MyCircle;
