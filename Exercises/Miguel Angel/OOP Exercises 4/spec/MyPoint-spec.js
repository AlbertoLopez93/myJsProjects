"use strict"

let MyPoint = require("../MyPoint");

describe("Testing function MyPoint", function(){
	it("Should be defined", function(){
		expect(MyPoint).toBeDefined();
	});
	let newPoint1 = new MyPoint(2,3);
	let newPoint2 = new MyPoint();
	let newPoint3 = new MyPoint(5,6);
	it("Constructor should work", function(){
		expect(newPoint1 instanceof MyPoint).toBe(true);
		expect(newPoint2 instanceof MyPoint).toBe(true);
	});
	it("Get methods should work", function(){
		expect(newPoint1.getX()).toBe(2);
		expect(newPoint2.getX()).toBe(0);
		expect(newPoint1.getY()).toBe(3);
		expect(newPoint2.getY()).toBe(0);
		expect(newPoint1.getXY()).toEqual([2,3]);
		expect(newPoint2.getXY()).toEqual([0,0]);
	});
	it("Set methods should work", function(){
		newPoint1.setX(5);
		newPoint1.setY(6);
		newPoint2.setX(2);
		newPoint2.setY(3);
		expect(newPoint1.getX()).toBe(5);
		expect(newPoint2.getX()).toBe(2);
		expect(newPoint1.getY()).toBe(6);
		expect(newPoint2.getY()).toBe(3);
		expect(newPoint1.getXY()).toEqual([5,6]);
		expect(newPoint2.getXY()).toEqual([2,3]);
		newPoint1.setXY(2,3);
		newPoint2.setXY(0,0);
		expect(newPoint1.getX()).toBe(2);
		expect(newPoint2.getX()).toBe(0);
		expect(newPoint1.getY()).toBe(3);
		expect(newPoint2.getY()).toBe(0);
		expect(newPoint1.getXY()).toEqual([2,3]);
		expect(newPoint2.getXY()).toEqual([0,0]);
	});
	it("toString method should work", function(){
		var result1 = newPoint1.toString();
		var result2 = newPoint2.toString();
		expect(result1).toBe("(2, 3)");
		expect(result2).toBe("(0, 0)");
	});
	it("distance method should work", function(){
		expect(newPoint1.distance()).toBe(3.605551275463989);
		expect(newPoint1.distance(newPoint2)).toBe(3.605551275463989);
		expect(newPoint1.distance(newPoint3)).toBe(4.242640687119285);
	});
});