"use strict"

let MyPoint = require("./MyPoint");

function MyTriangle(){
	if(arguments.length === 6){
		var v1 = new MyPoint(arguments[0], arguments[1]);
		var v2 = new MyPoint(arguments[2], arguments[3]);
		var v3 = new MyPoint(arguments[4], arguments[5]);
	} else {
		var v1 = arguments[0];
		var v2 = arguments[1];
		var v3 = arguments[2];
	}
	this.toString = function toString(){
		return "MyTriangle[v1=" + v1.toString() + ", v2=" + v2.toString() + ", v3=" + v3.toString() + "]"
	}
	this.getPerimeter = function getPerimeter(){
		return v1.distance(v3) + v2.distance(v1) + v3.distance(v2);
	}
	this.getType = function getType(){
		if((v1.distance(v3) === v2.distance(v1)) && (v2.distance(v1) === v3.distance(v2))){
			console.log(v1.distance(v3));
			console.log(v2.distance(v1));
			console.log(v3.distance(v2));
			return "equilateral";
		} else if(((v1.distance(v3) === v2.distance(v1)) && (v2.distance(v1) !== v3.distance(v2))) || ((v1.distance(v3) !== v2.distance(v1)) && (v2.distance(v1) === v3.distance(v2))) || ((v1.distance(v3) === v3.distance(v2)) && (v2.distance(v1) !== v3.distance(v2)))){
			console.log(v1.distance(v3));
			console.log(v2.distance(v1));
			console.log(v3.distance(v2));
			return "isosceles";
		} else {
			console.log(v1.distance(v3));
			console.log(v2.distance(v1));
			console.log(v3.distance(v2));
			return "scalene";
		}
	}
}

let newTriangle1 = new MyTriangle(0,0,2,3,4,0);
let newTriangle2 = new MyTriangle(0,0,3,3,6,0);
let newPoint1 = new MyPoint();
let newPoint2 = new MyPoint(3,5);
let newPoint3 = new MyPoint(2,6);
let newTriangle3 = new MyTriangle(newPoint1, newPoint2, newPoint3);

console.log(newTriangle1.getType());
console.log(newTriangle2.getType());
console.log(newTriangle3.getType());

module.exports = MyTriangle;