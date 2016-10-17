/*Create a class called MyTriangle. This class will used the
MyPoint class, so don’t start this unless you have finished
the exercise #1. The instances of this class will have 3 private properties:
v1:MyPoint
v2:MyPoint
v3:MyPoint
The constructor of this class can receive 3 or 6 parameters.
MyTriangle(x1:int, y1:int, x2:int, y2:int, x3:int, y3:int)
if the constructor receives 6 parameters, all will be integers,
it will use the first pair of parameters to construct a
MyPoint object that will set the v1 property, the second
pair will be used to construct a MyPoint object that will
set the v2 property. The last pair will be used to construct
a MyPoint object that will set the v3 property.
MyTriangle(v1:MyPoint, v2:MyPoint, v3:MyPoint) if the constructor
receives 3 parameters, all will be instances of MyPoint object.
Each parameter will set the according property, the first
parameter will set v1, second parameter will set v2, and the
third parameter will set v3.
	The class will also have the following methods:
toString():string returns a string following the pattern:
“MyTriangle[v1=(x1, y1), v2=(x2, y2), v3=(x3, y3)]”.
getPerimeter():number returns the perimeter of the instance.
getType():string returns the type of the instance.
"equilateral" if all the three sides are equal, "isosceles"
if any two of the three sides are equal, or "scalene" if the
three sides are different.*/
var NewPoint = require("./MyPoint");
function MyTriangle(){
	var v1;
	var v2;
	var v3;
	if (arguments.length === 6) {
		v1 = new NewPoint(arguments[0], arguments[1]);
		v2 = new NewPoint(arguments[2], arguments[3]);
		v3 = new NewPoint(arguments[4], arguments[5]);
	}
	if (arguments.length === 3) {
		v1 = arguments[0];
		v2 = arguments[1];
		v3 = arguments[2];
	}

	this.toString = function () {
		return "MyTriangle[v1=(" + v1.getX() + ", " + v1.getY() + "), v2=(" + v2.getX() + ", " + v2.getY() + "), v3=(" + v3.getX() + ", " + v3.getY() + ")]";
	};//:string returns a string following the pattern:
	//“MyTriangle[v1=(x1, y1), v2=(x2, y2), v3=(x3, y3)]”.

	this.getPerimeter = function () {
		var a_b = v1.distance(v2);
		var b_c = v2.distance(v3);
		var c_a = v3.distance(v1);
		return a_b + b_c + c_a;
	};//:number returns the perimeter of the instance.
	this.getType = function () {
		var a_b = v1.distance(v2);
		var b_c = v2.distance(v3);
		var c_a = v3.distance(v1);
		console.log(a_b,b_c,c_a);
		if (a_b === b_c && b_c === c_a) {
			return "equilateral";
		} else {
			if ( a_b === b_c || b_c === c_a || a_b === c_a ) {
				return "isosceles";
			} else {
				if (a_b !== b_c && b_c !== c_a && a_b !== c_a) {
					return "scalene";
				}
			}
		}


	};
}
//:string returns the type of the instance.
// "equilateral" if all the three sides are equal, "isosceles"
// if any two of the three sides are equal, or "scalene" if the
// three sides are different.0,0  2,3 y 4,0*/

var triangle1 = new MyTriangle(0, 0, 2, 3, 4, 0);
console.log(triangle1.toString());
console.log(triangle1.getPerimeter());
console.log(triangle1.getType());
module.exports = MyTriangle;

var point1 = new NewPoint(0, 0);
var point2 = new NewPoint(2, 3);
var point3 = new NewPoint(4, 0);
var triangle2 = new MyTriangle(point1, point2, point3);
console.log(triangle2.toString());
console.log(triangle2.getPerimeter());
console.log(triangle2.getType());

module.exports = MyTriangle;
