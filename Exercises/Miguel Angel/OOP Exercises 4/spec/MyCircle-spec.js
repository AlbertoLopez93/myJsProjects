"use strict"

let MyCircle = require("../MyCircle");
let MyPoint = require("../MyPoint");

describe("Testing function MyCircle", function(){
	it("Should be defined", function(){
		expect(MyPoint).toBeDefined();
		expect(MyCircle).toBeDefined();
	});
	let newCircle1 = new MyCircle();
	let newCircle2 = new MyCircle(2,3,5);
	let newPoint1 = new MyPoint(5,6);
	let newCircle3 = new MyCircle(newPoint1, 3);
	it("Constructors should work", function(){
		expect(newPoint1 instanceof MyPoint).toBe(true);
		expect(newCircle1 instanceof MyCircle).toBe(true);
		expect(newCircle2 instanceof MyCircle).toBe(true);
		expect(newCircle3 instanceof MyCircle).toBe(true);
	});
	it("Get methods should work", function(){
		expect(newCircle1.getRadius()).toBe(1);
		expect(newCircle2.getRadius()).toBe(5);
		expect(newCircle3.getRadius()).toBe(3);
		expect(newCircle1.getCenter() instanceof MyPoint).toBe(true);
		expect(newCircle2.getCenter() instanceof MyPoint).toBe(true);
		expect(newCircle3.getCenter() instanceof MyPoint).toBe(true);
		expect(newCircle1.getCenterX()).toBe(0);
		expect(newCircle1.getCenterY()).toBe(0);
		expect(newCircle1.getCenterXY()).toEqual([0,0]);
		expect(newCircle2.getCenterX()).toBe(2);
		expect(newCircle2.getCenterY()).toBe(3);
		expect(newCircle2.getCenterXY()).toEqual([2,3]);
		expect(newCircle3.getCenterX()).toBe(5);
		expect(newCircle3.getCenterY()).toBe(6);
		expect(newCircle3.getCenterXY()).toEqual([5,6]);
		expect(newCircle1.getArea()).toBe(3.141592653589793);
		expect(newCircle1.getCircumference()).toBe(6.283185307179586);
		expect(newCircle2.getArea()).toBe(78.53981633974483);
		expect(newCircle2.getCircumference()).toBe(31.41592653589793);
		expect(newCircle3.getArea()).toBe(28.274333882308138);
		expect(newCircle3.getCircumference()).toBe(18.84955592153876);
	});
	it("Set methods should work", function(){
		newCircle1.setRadius(4);
		let newPoint2 = new MyPoint(5,6);
		newCircle1.setCenter(newPoint2);
		expect(newCircle1.getRadius()).toBe(4);
		expect(newCircle1.getCenterX()).toBe(5);
		expect(newCircle1.getCenterY()).toBe(6);
		expect(newCircle1.getCenterXY()).toEqual([5,6]);
		newCircle2.setCenterX(1);
		newCircle2.setCenterY(3);
		expect(newCircle2.getCenterX()).toBe(1);
		expect(newCircle2.getCenterY()).toBe(3);
		expect(newCircle2.getCenterXY()).toEqual([1,3]);
		newCircle3.setCenterXY(4,3);
		expect(newCircle3.getCenterX()).toBe(4);
		expect(newCircle3.getCenterY()).toBe(3);
		expect(newCircle3.getCenterXY()).toEqual([4,3]);
	});
	it("toString method should work", function(){
		let result1 = newCircle1.toString();
		let result2 = newCircle2.toString();
		let result3 = newCircle3.toString();
		expect(result1).toBe("MyCircle[radius=4, center=(5, 6)]");
		expect(result2).toBe("MyCircle[radius=5, center=(1, 3)]");
		expect(result3).toBe("MyCircle[radius=3, center=(4, 3)]");
	});
	it("distance method should work", function(){
		expect(newCircle1.distance(newCircle2)).toBe(5);
		expect(newCircle1.distance(newCircle3)).toBe(3.1622776601683795);
		expect(newCircle2.distance(newCircle3)).toBe(3);
	});
});