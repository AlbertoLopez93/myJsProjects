"use strict"

function MyPoint(x, y){
	var x = x || 0;
	var y = y || 0;
	this.getX = function getX(){
		return x;
	};
	this.setX = function setX(newX){
		x = newX;
	};
	this.getY = function getY(){
		return y;
	};
	this.setY = function setY(newY){
		y = newY;
	};
	this.getXY = function getXY(){
		return [x, y];
	};
	this.setXY = function setXY(newX, newY){
		x = newX;
		y = newY;
	};
}

MyPoint.prototype.toString = function toString(){
	return "(" + this.getX() + ", " + this.getY() + ")";
};

MyPoint.prototype.distance = function distance(x, y){
	if(x instanceof MyPoint || y instanceof MyPoint){
		var another = x instanceof MyPoint ? x : y;
	} else {
		var another = new MyPoint(x, y);
	}
	var d = 0;
	d = Math.sqrt(Math.pow(another.getX()-this.getX(),2) + Math.pow(another.getY()-this.getY(),2));
	return d;
};

module.exports = MyPoint;