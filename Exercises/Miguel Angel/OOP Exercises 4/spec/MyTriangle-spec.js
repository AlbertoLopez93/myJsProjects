"use strict"

let MyTriangle = require("../MyTriangle");
let MyPoint = require("../MyPoint");

describe("Testing function MyTriangle", function(){
	it("Should be defined", function(){
		expect(MyPoint).toBeDefined();
		expect(MyTriangle).toBeDefined();
	});
	let newTriangle1 = new MyTriangle(0,0,2,3,4,0);
	let newTriangle2 = new MyTriangle(0,0,3,3,6,0);
	let newPoint1 = new MyPoint();
	let newPoint2 = new MyPoint(3,5);
	let newPoint3 = new MyPoint(2,6);
	let newTriangle3 = new MyTriangle(newPoint1, newPoint2, newPoint3);
	it("Constructors should work", function(){
		expect(newPoint1 instanceof MyPoint).toBe(true);
		expect(newPoint2 instanceof MyPoint).toBe(true);
		expect(newPoint3 instanceof MyPoint).toBe(true);
		expect(newTriangle1 instanceof MyTriangle).toBe(true);
		expect(newTriangle2 instanceof MyTriangle).toBe(true);
		expect(newTriangle3 instanceof MyTriangle).toBe(true);
	});
	it("toString method should work", function(){
		let result1 = newTriangle1.toString();
		let result2 = newTriangle2.toString();
		let result3 = newTriangle3.toString();
		expect(result1).toBe("MyTriangle[v1=(0, 0), v2=(2, 3), v3=(4, 0)]");
		expect(result2).toBe("MyTriangle[v1=(0, 0), v2=(3, 3), v3=(6, 0)]");
		expect(result3).toBe("MyTriangle[v1=(0, 0), v2=(3, 5), v3=(2, 6)]");
	});
	it("getPerimeter method should work", function(){
		let result1 = newTriangle1.getPerimeter();
		let result2 = newTriangle2.getPerimeter();
		let result3 = newTriangle3.getPerimeter();
		expect(result1).toBe(11.21110255092798);
		expect(result2).toBe(14.485281374238568);
		expect(result3).toBe(13.569720777555155);
	});
	it("getType method should work", function(){
		expect(newTriangle1.getType()).toBe("equilateral");
		expect(newTriangle2.getType()).toBe("isosceles");
		expect(newTriangle3.getType()).toBe("scalene");
	})
});