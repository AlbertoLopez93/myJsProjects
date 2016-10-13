"use strict";
function MyPoint(x,y){
  if(x===undefined){
    x=0;
  }
  if(y===undefined){
    y=0;
  }
  this.getX=function getX(){
    return x;
  }
  this.setX=function setX(newX){
    x=newX;
  }
  this.getY=function getY(){
    return y;
  }
  this.setY=function setY(newY){
    y=newY;
  }
}
MyPoint.prototype.getXY= function () {
  var array=[];
  array[0]=this.getX();
  array[1]=this.getY();
  return array;
}
MyPoint.prototype.setXY= function (newY,newX) {
  this.setY(newY);
  this.setX(newX);
}
MyPoint.prototype.toString= function () {
  var x=this.getX();
  var y=this.getY();
  return "("+this.getX()+","+this.getY()+")";
}
MyPoint.prototype.distance= function () {
  var args=Array.prototype.slice.call(arguments);
  var distance,x2,y2;
  var x1=this.getX();
  var y1=this.getY();
  if(args.length===0){
    x2=0,y2=0;
  }
  if(args.length===2){
   x2=args[0];
   y2=args[1];
 }
 if(args.length===1 && args[0] instanceof MyPoint){
    x2=args[0].getX();
    y2=args[0].getY();
  }
  distance=Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));
  return distance;
}
module.exports=MyPoint;
