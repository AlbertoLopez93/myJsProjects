"use strict";
function Rectangle(obj) {
    var length=obj.length,width=obj.width;
    this.getLength=function getLength() {
        return length;
    }
    this.setLength=function setLength(newLength) {
        length=newLength;
        return this;
    }

    this.getWidth=function getWidth() {

        return width;
    }
    this.setWidth=function setwidth(newWidth) {
        width=newWidth;
        return width;
    }

}
Rectangle.prototype={};
Rectangle.prototype.getArea = function getArea() {
    return this.getLength()*this.getWidth();
};
Rectangle.prototype.getPerimeter = function getPerimeter() {
    return this.getLength()+this.getLength()+this.getWidth()+this.getWidth();
};
Rectangle.prototype.toString = function toString() {
    let str="Rectangle[length="+this.getLength()+", width="+this.getWidth()+"]";
    return str;
};
var rectangulo=new Rectangle({length:5,width:3})
console.log(rectangulo.getArea());
console.log(rectangulo.getPerimeter());
console.log(rectangulo.getLength());
console.log(rectangulo.getWidth());
rectangulo.setLength(7);
rectangulo.setWidth(7);
console.log(rectangulo.getLength());
console.log(rectangulo.getWidth());
console.log(rectangulo.toString());
module.exports = Rectangle;
