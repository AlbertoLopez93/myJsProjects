"use strict"

let MyPoint = require("./MyPoint");

function MyRectangle(){
	if(arguments.length === 4){
		var topLeft = new MyPoint(arguments[0], arguments[1]);
		var bottomRight = new MyPoint(arguments[2], arguments[3]);
	} else {
		var topLeft = arguments[0];
		var bottomRight = arguments[1];
	}
	let topRight = new MyPoint(bottomRight.getX(), topLeft.getY());
	console.log(topRight.getX());
	console.log(bottomRight.getX());
	let height = bottomRight.distance(topRight);
	let length = topLeft.distance(topRight);
	this.getArea = function getArea(){
		let result = height * length;
		return result;
	};
	this.getPerimeter = function getPerimeter(){
		let result = (height + length) * 2;
		return result;
	};
	this.toString = function toString(){
		return "MyRectangle[topLeft=" + topLeft.toString() + ", bottomRight=" + bottomRight.toString() + "]";
	};
}

module.exports = MyRectangle;