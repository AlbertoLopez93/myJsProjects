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
			return "equilateral";
		} else if(((v1.distance(v3) === v2.distance(v1)) && (v2.distance(v1) !== v3.distance(v2))) || ((v1.distance(v3) !== v2.distance(v1)) && (v2.distance(v1) === v3.distance(v2))) || ((v1.distance(v3) === v3.distance(v2)) && (v2.distance(v1) !== v3.distance(v2)))){
			return "isosceles";
		} else {
			return "scalene";
		}
	}
}

module.exports = MyTriangle;