/**
 * Created by jazielsama on 2/10/16.
 */
/*
 * Create a class called MyTriangle. This class will used the MyPoint class, so don’t start this unless you have finished the exercise #1. The instances of this class will have 3 private properties:
 v1:MyPoint
 v2:MyPoint
 v3:MyPoint
 The constructor of this class can receive 3 or 6 parameters.
 MyTriangle(x1:int, y1:int, x2:int, y2:int, x3:int, y3:int) if the constructor receives 6 parameters, all will be integers, it will use the first pair of parameters to construct a MyPoint object that will set the v1 property, the second pair will be used to construct a MyPoint object that will set the v2 property. The last pair will be used to construct a MyPoint object that will set the v3 property.
 MyTriangle(v1:MyPoint, v2:MyPoint, v3:MyPoint) if the constructor receives 3 parameters, all will be instances of MyPoint object. Each parameter will set the according property, the first parameter will set v1, second parameter will set v2, and the third parameter will set v3.
 The class will also have the following methods:
 toString():string returns a string following the pattern: “MyTriangle[v1=(x1, y1), v2=(x2, y2), v3=(x3, y3)]”.
 getPerimeter():number returns the perimeter of the instance.
 getType():string returns the type of the instance. "equilateral" if all the three sides are equal, "isosceles" if any two of the three sides are equal, or "scalene" if the three sides are different.

 * */
var MyPoint = require ('./MyPoint');

function MyTriangle () {

	var aLen = arguments.length;
	if (aLen === 3 || aLen === 6) {
		var v1,v2,v3;
		if (aLen === 3) {
			v1 = arguments[0];
			v2 = arguments[1];
			v3 = arguments[2];
			if (!(v1 instanceof MyPoint && v2 instanceof MyPoint && v3 instanceof MyPoint )) {
				//console.log ('if using 3 arguments all 3 should be instances of MyPoint');
				return undefined;
			}
			if (v1.toString () === v2.toString () || v1.toString () === v3.toString () || v2.toString () === v3.toString ()) {
				//console.log ('points should be located in 3 different places in order to create a
				// triangle')
				return undefined;
			}
		} else {
			var x1 = arguments[0];
			var y1 = arguments[1];
			var x2 = arguments[2];
			var y2 = arguments[3];
			var x3 = arguments[4];
			var y3 = arguments[5];
			var triangle = [x1, x2, x3, y1, y2, y3];
			if (triangle.every (function (element) {
					return Number.isInteger (element);
				})) {

				v1 = new MyPoint (x1, y1);
				v2 = new MyPoint (x2, y2);
				v3 = new MyPoint (x3, y3);
				if (v1.toString () === v2.toString () || v1.toString () === v3.toString () || v2.toString () === v3.toString ()) {
					//console.log ('points should be located in 3 different places in order to
					// create a triangle');
					return undefined;
				}

			} else {
				//console.log ('if using 6 arguments all 6 should be Integers');
				return undefined;
			}
		}

		this.v1 = (function getV1 () {
			return v1;
		}) ();
		this.v2 = (function getV2 () {
			return v2;
		}) ();
		this.v3 = (function getV3 () {
			return v3;
		}) ();

	}
	//console.log('use only 3 MyPoint instances or only 6 integers ')
}

MyTriangle.prototype.toString = function toString () {
	return this.constructor.name + '[v1=' + this.v1.toString () + ', v2=' + this.v2.toString () + ', v3=' + this.v3.toString () + ']'
};

MyTriangle.prototype.getPerimeter = function getPerimeter () {
	return parseFloat (this.v1.distance (this.v2)) + parseFloat (this.v2.distance (this.v3)) + parseFloat (this.v3.distance (this.v1));
};

MyTriangle.prototype.getType = function getType () {
	var v1v2 = parseFloat (this.v1.distance (this.v2));
	var v2v3 = parseFloat (this.v2.distance (this.v3));
	var v3v1 = parseFloat (this.v3.distance (this.v1));
	if (v1v2 === v2v3 && v2v3 === v3v1 && v3v1 === v1v2) {
		return "equilateral"
	} else if (v1v2 !== v2v3 && v2v3 !== v3v1 && v3v1 !== v1v2) {
		return "scalene"
	} else {
		return "equilateral"
	}
};

module.exports = MyTriangle;
