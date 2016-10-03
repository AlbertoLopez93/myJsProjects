"use strict";
let MyPoint = require("./MyPoint.js");
function MyRectangle() {
    var topLeft,topRigth,bottomLeft,bottomRight,x1,x2,y1,y2;
    var argumentos=Array.prototype.slice.call(arguments);

    if(argumentos.length===4){
        x1=argumentos[0];
        y1=argumentos[1];
        x2=argumentos[2];
        y2=argumentos[3];
        topRigth=new MyPoint(x2,y1);
        bottomLeft=new MyPoint(x1,y2);
        topLeft=new MyPoint(x1,y1);
        bottomRight=new MyPoint(x2,y2);
    }
    if(argumentos.length===2){
        x1=argumentos[0].getX();
        y1=argumentos[0].getY();
        x2=argumentos[1].getX();
        y2=argumentos[1].getY();
        topLeft=new MyPoint(x1,y1);
        bottomRight=new MyPoint(x2,y2);
        topRigth=new MyPoint(x2,y1);
        bottomLeft=new MyPoint(x1,y2);
    }
    this.getArea=function getArea() {
        let base,altura,result;
        base=topLeft.distance(topRigth);
        altura=topLeft.distance(bottomLeft);
        result=base*altura
        return result;
    }
    this.getPerimeter=function getPerimeter() {
        var base,altura,result;
        base=topLeft.distance(topRigth);
        altura=topLeft.distance(bottomLeft);
        result=(base*2)+(altura*2)
        return result;
    }
    this.toString=function toString() {
        let str="MyRectangle[topLeft=("+x1+","+ y1+"), bottomRight=("+x2+","+ y2+")]";
        return str;
    }
}
var uno=new MyPoint(2,8);
var dos=new MyPoint(8,3);
var rectangulo=new MyRectangle(2,2,9,8);
console.log(rectangulo.getPerimeter());
console.log(rectangulo.getArea());
console.log(rectangulo.toString());
var rectangulo=new MyRectangle(uno,dos);
console.log(rectangulo.getPerimeter());
console.log(rectangulo.getArea());
console.log(rectangulo.toString());
module.exports=MyRectangle;
