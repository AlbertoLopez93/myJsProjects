/*Create a new class called MyCircle. This class will used
the MyPoint class, so don’t start this unless you have
finished the exercise #1.
The instances of this class will have 2 private properties:
center:MyPoint
radius:int
The constructor of this class can receive 0 parameters,
or 2 parameters or 3 parameters.
MyCircle() if the constructor receives 0 parameters,
then the instance will have as center a MyPoint instance
set to (0, 0) and a radius set to 1.
MyCircle(x:int, y:int, radius:int)
MyCircle(center:MyPoint, radius:int) if the constructor
receives 2 parameters, the first parameter will be a MyPoint
instance, which will be used to set the center property
of the object. The last parameter, will set the radius of
the instance.
The class will also have the following methods:
getRadius():int returns the radius of the instance.
setRadius(radius:int):void sets a new radius to the instance.
getCenter():MyPoint returns the center of the instance,
which must be a MyPoint object.
setCenter(center:MyPoint):void receives as argument, an
object of type MyPoint and uses it to set a new center to the instance.
getCenterX():int returns the x value of the center property.
setCenterX(x:int):void sets the x value of the center property.
getCenterY():int returns the y value of the center property.
setCenterY(y:int):void sets the y value of the center property.
getCenterXY():int[2] returns an array with the x and y
values of the center property as [x, y].
setCenterXY(x:int, y:int):void uses the new x value and the
y value to set a new center.
toString():string returns a string following the pattern:
“MyCircle[radius=r, center=(x, y)]” where r is the value of
the radius property, and the x, y are the values of the center property.
getArea():int performs the calculation of the instance’s area,
and returns it.
getCircumference():int performs the calculation instance’s
circumference and returns it.
distance(another: MyCircle):number returns the distance between
the intance’s center and the center of the received circle.*/
var NewPoint = require("./MyPoint");

function MyCircle(){
    var tamaño = arguments.length;
    var center;
    var radius;
    // if the constructor receives 0 parameters,
    // then the instance will have as center a MyPoint instance
    // set to (0, 0) and a radius set to 1.
    if (tamaño === 0) {
        center = new NewPoint(0,0);
        radius = 1;
    }
    // if the constructor receives 2 parameters, the first parameter will be a MyPoint
    // instance, which will be used to set the center property
    // of the object. The last parameter, will set the radius of
    // the instance.
    if (typeof arguments[0] === "object" && typeof arguments[1] === "number" && tamaño === 2) {
        center = arguments[0];
        radius = arguments[1];
    }
    // if the constructor
    // receives 3 parameters, the 3 of them will be integers.
    // In this scenario, the firsts two parameters will be used
    // to create an instance of MyPoint that will be set as the
    // center property. The last parameter, will set the radius
    // of the instance.
    if (tamaño === 3 ) {
        center = new NewPoint(arguments[0], arguments[1]);
        radius = arguments[2];
    }
    this.getRadius = function() {
        return radius;
    };
    this.setRadius = function(newRadius) {
        radius = newRadius;
    };
    this.getCenter = function() {
        return center;
    };//:MyPoint returns the center of the instance, which must be a MyPoint object.
    this.setCenter = function(newCenter) {
        this.setCenterX(newCenter.getCenterX());
        this.setCenterY(newCenter.getCenterY());
    };//:void receives as argument, an
    //object of type MyPoint and uses it to set a new center to the instance.
    this.getCenterX = function() {
        return center.getX();
    };//int returns the x value of the center property.
    this.setCenterX = function(newX) {
        center.setX(newX);
    };//:void sets the x value of the center property.
    this.getCenterY = function(){
        return center.getY();
    };//:int returns the y value of the center property.
    this.setCenterY = function(newY) {
        center.setY(newY);
    };//:void sets the y value of the center property.
    this.getCenterXY = function() {
        return [center.getX(), center.getY()];
    };//:int[2] returns an array with the x and y
    //values of the center property as [x, y].
    this.setCenterXY = function(newX, newY) {
        center.setX(newX);
        center.setY(newY);
    };//:void uses the new x value and the
    //y value to set a new center.
}
MyCircle.prototype.toString = function (){
    return "MyCircle[radius=" + this.getRadius() + ", center=(" + this.getCenterX() + ", " + this.getCenterY() + ")]";
};//:string returns a string following the pattern:
//“MyCircle[radius=r, center=(x, y)]” where r is the value of
//the radius property, and the x, y are the values of the center property.
MyCircle.prototype.getArea = function () {
    var radiusPow = Math.pow(this.getRadius(), 2);
    return Math.PI * radiusPow;
};//:int performs the calculation of the instance’s area,
//and returns it.
MyCircle.prototype.getCircumference = function() {
    var diametro = this.getRadius() * 2;
    return Math.PI * diametro;
};//:int performs the calculation instance’s
//circumference and returns it.
MyCircle.prototype.distance = function(otherCircle) {
    x1 = this.getCenterX();
    y1 = this.getCenterY();
    x2 = otherCircle.getCenterX();
    y2 = otherCircle.getCenterY();
    result1 = Math.pow((x2 - x1), 2);
    result2 = Math.pow((y2 - y1), 2);
    distance = Math.sqrt(result1 + result2);
    return distance;
};//number returns the distance between
//the intance’s center and the center of the received circle.*/
var circulo1 = new MyCircle(1,2,3);
var circulo2 = new MyCircle(5,5,3);
console.log(circulo1.toString());
console.log(circulo1.getArea());
console.log(circulo1.getCircumference());
console.log(circulo1.distance(circulo2));
circulo1.setCenterX(9);
console.log(circulo1.toString());
circulo1.setCenterY(8);
console.log(circulo1.toString());
circulo1.setCenter(circulo2);
console.log(circulo1.toString());
module.exports = MyCircle;
