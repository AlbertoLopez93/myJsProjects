/*Create a class called MyRectangle. This class will used the
MyPoint class, so don’t start this unless you have finished
the exercise #1. The instances will have 2 private properties:
topLeft:MyPoint
bottomRight:MyPoint
The constructor of this class can receive 2 or 4 parameters.
MyRectangle(topLeft:MyPoint, bottomRight:MyPoint) if the
constructor receives 2 parameters, both parameters will
be instances of MyPoint object. Each parameter will set
the according property of the  MyRectangle instance.
MyRectangle(x1:int, y1:int, x2:int, y2:int) if the constructor
receives 4 parameters, all of those will be integers.
It will use the first pair of parameters to create a MyPoint
object that will be use to set the topLeft property. The last
pair of parameters will be used to create another MyPoint
object that will be use to set the bottomRight property.
	The class will also have the following methods:
getArea():number returns the area of the instance.
getPerimeter():number returns the perimeter of the instance.
toString():int returns a string following the pattern:
“MyRectangle[topLeft=(x1, y1), bottomRight=(x2, y2)]”.*/
var NewPoint = require("./MyPoint");

function MyRectangle() {
	var topLeft;
	var bottomRight;
	if ( arguments.length === 2 ) {
		topLeft = arguments[0];
		bottomRight = arguments[1];
	}
	if ( arguments.length === 4 ) {
		topLeft = new NewPoint(arguments[0], arguments[1]);
		bottomRight = new NewPoint(arguments[2], arguments[3]);
	}
	this.getArea = function () {
		var x1 = topLeft.getX();
		var y1 = topLeft.getY();
		var x2 = bottomRight.getX();
		var y2 = bottomRight.getY();
		var topRight = new NewPoint(x2, y1);
		var bottomLeft = new NewPoint(x1, y2);
		var bottom = bottomLeft.distance(bottomRight);
		var top = topLeft.distance(topRight);
		var leftSide = bottomLeft.distance(topLeft);
		var rightSide = bottomRight.distance(topRight);
		return bottom * leftSide;

	};//:number returns the area of the instance.
	this.getPerimeter = function () {
		var x1 = topLeft.getX();
		var y1 = topLeft.getY();
		var x2 = bottomRight.getX();
		var y2 = bottomRight.getY();
		var topRight = new NewPoint(x2, y1);
		var bottomLeft = new NewPoint(x1, y2);
		var bottom = bottomLeft.distance(bottomRight);
		var top = topLeft.distance(topRight);
		var leftSide = bottomLeft.distance(topLeft);
		var rightSide = bottomRight.distance(topRight);
		return bottom + top + leftSide + rightSide;
	};//:number returns the perimeter of the instance.
	this.toString = function() {
		return "MyRectangle[topLeft=" + topLeft + ", bottomRight=" + bottomRight + "]";
	};

}
var rectangulo = new MyRectangle(0,0,10,4);
console.log(rectangulo.toString());
console.log(rectangulo.getArea());
console.log(rectangulo.getPerimeter());
var point1 = new NewPoint(0,0);
var point2 = new NewPoint(10,4);
var rectangulo2 = new MyRectangle(point1, point2);
console.log(rectangulo2.toString());
console.log(rectangulo2.getArea());
console.log(rectangulo2.getPerimeter());
module.exports = MyRectangle;
