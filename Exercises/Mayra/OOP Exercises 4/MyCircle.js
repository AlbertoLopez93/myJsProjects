"use strict";
let MyPoint = require("./MyPoint.js");
function MyCircle() {
    var center,radius;
    var argumentos=Array.prototype.slice.call(arguments);
    if(argumentos.length===0){
    center=new MyPoint(0,0),radius=0;
    }
    if(argumentos.length===2){
    center=argumentos[0],radius=argumentos[1];
    }
    if(argumentos.length===3){
        center=new MyPoint(argumentos[0],argumentos[1]),radius=argumentos[2];

    }

    this.getRadius=function getRadius() {
        return radius;
    }
    this.setRadius=function setRadius(newRadius) {
        if (typeof newRadius==="number") {
            radius=newRadius;
        }
    }
    this.getCenter=function getCenter() {
        return center;
    }
    this.setCenter=function setCenter(newCenter) {
        if (typeof newCenter==="object") {
            center=newCenter;
        }
    }
    this.getCenterX=function getCenterX() {
        return this.getCenter().getX();
    }
    this.setCenterX=function setCenterX(newCenterX) {
        if (typeof newCenterX==="number") {
            this.getCenter().setX(newCenterX);
        }
    }
    this.getCenterY=function getCenterY() {
        return this.getCenter().getY();
    }
    this.setCenterY=function setCenterY(newCenterY) {
        if (typeof newCenterY==="number") {
            this.getCenter().setY(newCenterY);
        }
    }
}
MyCircle.prototype.getCenterXY=function(){
    var ary=[];
    ary[0]=this.getCenterX();
    ary[1]=this.getCenterY();
    return ary;
}
MyCircle.prototype.setCenterXY=function setCenterXY(newX,newY){
    this.getCenter().setXY(newX,newY);
}
MyCircle.prototype.toString=function toString(){
    let str="MyCircle[radius="+this.getRadius()+", center=("+this.getCenterX()+", "+this.getCenterY()+")]";
    return str;
}
MyCircle.prototype.getArea=function getArea(){
    var result=Math.PI*(this.getRadius()*this.getRadius());
    return result;
}
MyCircle.prototype.getCircumference=function getCircumference(){
    var result=2*Math.PI*this.getRadius();
    return result;
}
MyCircle.prototype.distance=function distance(another){
    var distance;
    return another.distance(this.getCenterX(),this.getCenterY());
}
/*
var circulo=new MyCircle(1,2,3);
var newCirculo=new MyPoint(2,3);
circulo.setCenterXY(5,11);
console.log(circulo.getArea());
console.log(circulo.getCircumference());
console.log(circulo.distance(newCirculo));*/
module.exports=MyCircle;
