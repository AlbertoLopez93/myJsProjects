/**
 * Created by jazielsama on 2/10/16.
 */
/*
 * Create a class called MyPoint, the constructor of this class can receive 0 parameters or 2 parameters. The parameters it could receive are: x:int, y:int. For this exercise, the constructor will not receive the parameters as one object, it will be as 2 different parameters instead. The constructor will contain two private properties:
 x:int will hold the x parameter
 y:int will hold the y parameter
 If the constructor receives 0 parameters, then the properties will be set to: zero.
 It will also have the following methods:
 getX():int will return the x value of the instance.
 setX(x:int) will set a new x to the instance.
 getY():int will return the y value of the instance.
 setY():int will set a new y to the instance.
 getXY():int[2] will return an array with the x and y property as [x, y].
 setXY(x:int, y:int):void will set a new value for x and a new value for y.
 toString():string will return a string following the pattern: “(x, y)” where x represents the value of the property x and y represents the value of y.
 distance():number will return the distance between the instance and (0, 0).
 distance(x:int, y:int):number will return the distance between the instance and the point given by x, y.
 distance(another:Point):number will return the distance between the instance and the received point.

 * */

function MyPoint () {
	if (arguments.length === 0 || arguments.length === 2) {
		var x = Number.isInteger (arguments[0]) ? arguments[0] : undefined;
		var y = Number.isInteger (arguments[1]) ? arguments[1] : undefined;
		if (arguments.length === 0) {
			x = 0;
			y = 0;
		}
		if (!(x === undefined || y === undefined)){

		this.getX = function getX () {
			return x;
		};

		this.setX = function setX (newX) {
			if (Number.isInteger (newX)) {
				x = newX;
			}
			else if (newX === undefined) {
				x = 0;
			}
		};

		this.getY = function getY () {
			return y;
		};

		this.setY = function setY (newY) {
			if (Number.isInteger (newY)) {
				y = newY;
			}
			else if (newY === undefined) {
				y = 0;
			}
		};
	}}
}

MyPoint.prototype.getXY = function getXY () {
	return [this.getX (), this.getY ()];
};

MyPoint.prototype.setXY = function setXY (newX, newY) {
	this.setX (newX);
	this.setY (newY)
};
MyPoint.prototype.toString = function toString () {
	return '(' + this.getX () + ', ' + this.getY () + ')';
};

MyPoint.prototype.distance = function distance (x, y) {
	if (x === undefined && y === undefined) {
		return Math.sqrt (Math.pow (this.getX (), 2) + Math.pow (this.getY (), 2), 2);
	} else if (Number.isInteger (x) && Number.isInteger (y)) {
		return Math.sqrt (Math.pow (x - this.getX (), 2) + Math.pow (y - this.getY (), 2), 2);
	} else if (x instanceof MyPoint) {
		return Math.sqrt (Math.pow (x.getX () - this.getX (), 2) + Math.pow (x.getY () - this.getY (), 2), 2);
	}
};

module.exports = MyPoint;


