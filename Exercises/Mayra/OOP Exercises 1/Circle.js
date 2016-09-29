"use strict";
function Circle(obj) {
    var radius=obj.radius,color=obj.color;
    this.getRadius=function getRadius() {
        return radius;
    }
    this.setRadius=function setRadius(newRadius) {
        if (typeof newRadius!=='number') {
            return this;
        }
        radius=newRadius;
        return this;
    }

    this.getColor=function getColor() {

        return color;
    }
    this.setColor=function setColor(newColor) {
        if (typeof newColor!=='string') {
            return this;
        }
        color=newColor;
        return color;
    }

}
Circle.prototype={};
Circle.prototype.getArea = function getArea() {
    return Math.PI*this.getRadius()*this.getRadius();
};
Circle.prototype.getCircumference = function getCircumference() {
    return Math.PI*2*this.getRadius();
};

var circulo=new Circle({radius:5,color:"azul"})
console.log(circulo.getArea());
console.log(circulo.getCircumference());
console.log(circulo.getRadius());
circulo.setRadius(8);
console.log(circulo.getRadius());
console.log(circulo.getColor());
circulo.setColor("magenta");
console.log(circulo.getColor());

module.exports = Circle;
