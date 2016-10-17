"use strict"

let MyPoint = require("./MyPoint");

function MyCircle (x, y, radius){
	if(x instanceof MyPoint || y instanceof MyPoint){
		if(x instanceof MyPoint){
			var center = x;
			var radius = radius || y;
		} else if(y instanceof MyPoint){
			var center = y;
			var radius = radius || x;
		}
	} else {
		var center = new MyPoint(x, y);
		var radius = radius || 1;
	}
	this.getRadius = function getRadius(){
		return radius;
	};
	this.setRadius = function setRadius(newRadius){
		radius = newRadius;
	};
	this.getCenter = function getCenter(){
		return center;
	};
	this.setCenter = function setCenter(newCenter){
		center = newCenter;
	};
}

MyCircle.prototype.getCenterX = function getCenterX(){
	return this.getCenter().getX();
};

MyCircle.prototype.setCenterX = function setCenter(newCenterX){
	this.getCenter().setX(newCenterX);
};

MyCircle.prototype.getCenterY = function getCenterY(){
	return this.getCenter().getY();
};

MyCircle.prototype.setCenterY = function setCenter(newCenterY){
	this.getCenter().setY(newCenterY);
};

MyCircle.prototype.getCenterXY = function getCenterXY(){
	return this.getCenter().getXY();
};

MyCircle.prototype.setCenterXY = function setCenterXY(newCenterX, newCenterY){
	this.getCenter().setXY(newCenterX, newCenterY);
};

MyCircle.prototype.toString = function toString(){
	return "MyCircle[radius=" + this.getRadius() + ", center=" + this.getCenter().toString() + "]";
};

MyCircle.prototype.getArea = function getArea(){
	return this.getRadius() * this.getRadius() * Math.PI;
};

MyCircle.prototype.getCircumference = function getCircumference(){
	return 2 * this.getRadius() * Math.PI;
};

MyCircle.prototype.distance = function distance(another){
	return this.getCenter().distance(another.getCenter());
};

module.exports = MyCircle;