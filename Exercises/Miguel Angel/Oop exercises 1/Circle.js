"use strict"
function Circle (circle){
	var radius = circle.radius;
	var color = circle.color;
	this.getRadius = function getRadius(){
		return radius;
	};
	this.getColor = function getColor(){
		return color;
	};
	this.setRadius = function setRadius(newRadius){
		radius = newRadius;
	};
	this.setColor = function setColor(newColor){
		color = newColor;
	};
}

Circle.prototype.getArea = function getArea (){
	var result = 0;
	var r = this.getRadius();
	result = r * r * Math.PI;
	return result;
}

Circle.prototype.getCircumference = function getCircumference(){
	var result = 0;
	var r = this.getRadius();
	result = r * 2 * Math.PI;
	return result;
}

