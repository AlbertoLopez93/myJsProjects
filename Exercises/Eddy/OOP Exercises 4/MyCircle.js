/**
 * Created by jazielsama on 2/10/16.
 */
/*
 * Create a new class called MyCircle. This class will used the MyPoint class, so don’t start this unless you have finished the exercise #1.
 The instances of this class will have 2 private properties:
 center:MyPoint
 Radius:int
 The constructor of this class can receive 0 parameters, or 2 parameters or 3 parameters.
 MyCircle() if the constructor receives 0 parameters, then the instance will have as center a MyPoint instance set to (0, 0) and a radius set to 1.
 MyCircle(x:int, y:int, radius:int) if the constructor receives 3 parameters, the 3 of them will be integers. In this scenario, the firsts two parameters will be used to create an instance of MyPoint that will be set as the center property. The last parameter, will set the radius of the instance.
 MyCircle(center:MyPoint, radius:int) if the constructor receives 2 parameters, the first parameter will be a MyPoint instance, which will be used to set the center property of the object. The last parameter, will set the radius of the instance.
 The class will also have the following methods:
 +getRadius():int returns the radius of the instance.
 *setRadius(radius:int):void sets a new radius to the instance.
 +getCenter():MyPoint returns the center of the instance, which must be a MyPoint object.
 +setCenter(center:MyPoint):void receives as argument, an object of type MyPoint and uses it to set a new center to the instance.
 +getCenterX():int returns the x value of the center property.
 +setCenterX(x:int):void sets the x value of the center property.
 +getCenterY():int returns the y value of the center property.
 +setCenterY(y:int):void sets the y value of the center property.
 +getCenterXY():int[2] returns an array with the x and y values of the center property as [x, y].
 +setCenterXY(x:int, y:int):void uses the new x value and the y value to set a new center.
 +toString():string returns a string following the pattern: “MyCircle[radius=r, center=(x, y)]” where r is the value of the radius property, and the x, y are the values of the center property.
 +getArea():int performs the calculation of the instance’s area, and returns it.
 +getCircumference():int performs the calculation instance’s circumference and returns it.
 +distance(another: MyCircle):number returns the distance between the intance’s center and the center of the received circle.

 * */

var MyPoint = require ('./MyPoint');

function MyCircle () {
	var aLen = arguments.length;
	if (aLen === 0 || aLen === 2 || aLen === 3) {
		var center,radius;
		if (aLen === 0) {
			center = new MyPoint ();
			radius = 1;
		} else if (aLen === 2) {
			center = arguments[0];
			radius = arguments[1];
			if (!(center instanceof MyPoint && Number.isInteger (radius))) {
				return undefined;
			}
		} else if (aLen === 3) {
			var x = arguments[0];
			var y = arguments[1];
			radius = arguments[2];
			if (Number.isInteger (x) && Number.isInteger (y) && Number.isInteger (radius)) {
				center = new MyPoint (x, y);
			} else {
				return undefined;
			}
		}
	}

	this.getRadius = function getRadius () {
		return radius;
	};

	this.setRadius = function setRadius (newRadius) {
		radius = newRadius;
	};

	this.getCenter = function getCenter () {
		return center;
	};

	this.setCenter = function setCenter (newCenter) {
		if (newCenter instanceof MyPoint) {
			center = newCenter
		}
	};

	this.setCenterX = function (centerNewX) {
		center.setX (centerNewX);
	};

	this.setCenterY = function setCenterY (centerNewY) {
		center.setY (centerNewY);
	};

	this.setCenterXY = function setCenterXY (centerNewX, centerNewY) {
		this.setCenterX (centerNewX);
		this.setCenterY (centerNewY);
	};

}

MyCircle.prototype.getCenterX = function getCenterX () {
	return this.getCenter ().getX ();
};

MyCircle.prototype.getCenterY = function getCenterY () {
	return this.getCenter ().getY ();
};

MyCircle.prototype.getCenterXY = function getCenterXY () {
	return [this.getCenterX (), this.getCenterY ()];
};

MyCircle.prototype.getArea = function getArea () {
	return Math.PI * Math.pow (this.getRadius (), 2);
};

MyCircle.prototype.getCircumference = function getCircumference () {
	return Math.PI * this.getRadius () * 2;
};

MyCircle.prototype.toString = function toString () {
	return this.constructor.name + '[radius=' + this.getRadius () + ', center=' + this.getCenter ().toString () + ']'
};

MyCircle.prototype.distance = function distance (otherMyCircle) {
	if (otherMyCircle instanceof MyCircle) {
		var thisCenter = this.getCenter ();
		var otherCenter = otherMyCircle.getCenterXY ();
		return thisCenter.distance (otherCenter[0], otherCenter[1]);
	}
};

module.exports = MyCircle;
