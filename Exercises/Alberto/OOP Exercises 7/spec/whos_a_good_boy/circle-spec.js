"use strict";

let Circle = require("../../Circle");
let circle;
let descriptor;
let proto;

describe("Circle class", () => {
  describe("Constructor", () => {
    it("should work when executed with out arguments", () => {
      expect(new Circle() instanceof Circle).toBe(true);
    });
    it("should work when executed with 1 argument", () => {
      expect(new Circle(5) instanceof Circle).toBe(true);
    });
    it("should work when executed with 3 arguments", function() {
        expect(new Circle(5, "green", true) instanceof Circle).toBe(true);
    });
  });
  describe("Public methods", () => {
    beforeEach(() => {
      circle = new Circle(10, "green", false);
    });
    describe("getColor method", () => {
      it("should return the color of the instance", () => {
        expect(circle.getColor()).toBe("green");
      });
      it("should return red by default when invoked constructor with no arguments", () => {
        expect(new Circle().getColor()).toBe("red");
      });
    });
    describe("setColor method", () => {
      it("should set a new color to the circle", () => {
        circle.setColor("blue");
        expect(circle.getColor()).toBe("blue");
      });
      it("should return undefined", () => {
        expect(circle.setColor("blue")).toBeUndefined();
      });
    });
    describe("isFilled method", () => {
      it("should return the value of the filled property of the instance", () => {
        expect(circle.isFilled()).toBe(false);
      });
      it("should return true by default when invoked constructor with no arguments", () => {
        expect(new Circle().isFilled()).toBe(true);
      });
    });
    describe("setFilled method", () => {
      it("should set a new value for the filled property of the instance", () => {
        circle.setFilled(true);
        expect(circle.isFilled()).toBe(true);
      });
      it("should return undefined when invoked", () => {
        expect(circle.setFilled(false)).toBeUndefined();
      });
    });
    describe("getRadius method", () => {
      it("should return the value of the radius property of the instance", () => {
        expect(circle.getRadius()).toBe(10);
      });
    });
    describe("setRadius method", () => {
      it("should set a new value to the radius of the instance", () => {
        circle.setRadius(5);
        expect(circle.getRadius()).toBe(5);
      });
      it("should return undefined when called it", () => {
        expect(circle.setRadius(5)).toBeUndefined();
      });
    });
    describe("getArea method", () => {
      it("should return the calculation of the area of the instance", () => {
        expect(Math.round(circle.getArea())).toBe(314);
      });
    });
    describe("getPerimeter method", () => {
      it("should return the calculation of the area of the instance", () => {
        expect(Math.round(circle.getPerimeter())).toBe(63);
      });
    });
    describe("toString method", () => {
      it("should return a string following the pattern A Circle with radius=xxx, which is a subclass of yyy", () => {
        expect(new Circle().toString()).toBe("A Circle with radius=1, which is a subclass of A Shape with color of red and filled");
      });
      it("should return a string following the pattern: A Circle with radius=xxx, which is a subclass of A Shape with color of xxx and Not filled. For not filled shapes", () => {
        expect(circle.toString()).toBe("A Circle with radius=10, which is a subclass of A Shape with color of green and Not filled");
      });
    });
  });
});