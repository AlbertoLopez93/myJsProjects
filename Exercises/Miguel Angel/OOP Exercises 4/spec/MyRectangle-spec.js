"use strict"

let MyRectangle = require("../MyRectangle");
let MyPoint = require("../MyPoint");

describe("Testing function MyRectangle", function(){
	it("Should be defined", function(){
		expect(MyPoint).toBeDefined();
		expect(MyRectangle).toBeDefined();
	});
	let newRectangle1 = new MyRectangle(0,2,4,0);
	let newPoint1 = new MyPoint(0,3);
	let newPoint2 = new MyPoint(6,0);
	let newRectangle2 = new MyRectangle(newPoint1, newPoint2);
	it("Constructors should work", function(){
		expect(newPoint1 instanceof MyPoint).toBe(true);
		expect(newPoint2 instanceof MyPoint).toBe(true);
		expect(newRectangle1 instanceof MyRectangle).toBe(true);
		expect(newRectangle2 instanceof MyRectangle).toBe(true);
	});
	it("getArea method should work", function(){
		expect(newRectangle1.getArea()).toBe(8);
		expect(newRectangle2.getArea()).toBe(18);
	});
	it("getPerimeter method should work", function(){
		expect(newRectangle1.getPerimeter()).toBe(12);
		expect(newRectangle2.getPerimeter()).toBe(18);
	});
	it("toString method should work", function(){
		expect(newRectangle1.toString()).toBe("MyRectangle[topLeft=(0, 2), bottomRight=(4, 0)]");
		expect(newRectangle2.toString()).toBe("MyRectangle[topLeft=(0, 3), bottomRight=(6, 0)]");
	});
});