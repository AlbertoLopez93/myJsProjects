"use strict";
function MyPoint(x,y) {

    if (x===undefined) {
        x=0;
    }
    if (y===undefined) {
        y=0;
    }
    this.getX=function getX() {
        return x;
    }
    this.setX=function setX(newX) {
        if (typeof newX==="number") {
            x=newX;
        }
    }
    this.getY=function getY() {
        return y;
    }
    this.setY=function setY(newY) {
        if (typeof newY==="number") {
            y=newY;
        }
    }
}

MyPoint.prototype.getXY=function getXY() {
    var ary=[];
    ary[0]=this.getX();
    ary[1]=this.getY();
    return ary;
}
MyPoint.prototype.setXY=function setXY(newX,newY) {
    if (typeof newX==="number") {
        this.setX(newX);
    }
    if (typeof newY==="number") {
        this.setY(newY);
    }
}
MyPoint.prototype.toString=function toString() {
    let str="("+getX()+","+getY()+")";
    return str;
}
MyPoint.prototype.distance=function distance() {
    var argumentos=Array.prototype.slice.call(arguments);
    if(argumentos.length===0){
    let distanceResult=Math.sqrt((Math.pow((0-this.getX()),2)+Math.pow((0-this.getY()),2)));
    return distanceResult;
    }
    if (argumentos.length===2) {
        let x=argumentos[0],y=argumentos[1];
    let distanceResult=Math.sqrt((Math.pow((x-this.getX()),2)+Math.pow((y-this.getY()),2)));
    return distanceResult;
    }
    if (typeof argumentos[0]==="object") {
        let x=argumentos[0].getX(),y=argumentos[0].getY();
    let distanceResult=Math.sqrt((Math.pow((x-this.getX()),2)+Math.pow((y-this.getY()),2)));
    return distanceResult;
    }
}/*
var prueba = new MyPoint(5,6);
var obj= new MyPoint(2,2);
console.log(prueba.getX());
console.log(prueba.getY());
prueba.setX(1);
prueba.setY(2);
console.log(prueba.getX());
console.log(prueba.getY());
console.log(prueba.getXY());
prueba.setXY(5,6);
console.log(prueba.getXY());
console.log(prueba.x);
console.log(prueba.distance());
console.log(prueba.distance(1,1));
console.log(prueba.distance(obj));*/
module.exports=MyPoint;
