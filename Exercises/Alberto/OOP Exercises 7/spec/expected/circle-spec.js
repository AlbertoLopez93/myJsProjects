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
  describe("Private Properties", () => {
    beforeEach(() => {
      circle = new Circle();
    });
    it("should have a private property called color", () => {
      expect(circle.color).toBeUndefined();
    });
    it("should have a private property called filled", () => {
      expect(circle.filled).toBeUndefined();
    });
    it("should have a private property called radius", () => {
      expect(circle.radius).toBeUndefined();
    });
  });
  describe("Public methods", () => {
    beforeEach(() => {
      circle = new Circle(10, "green", false);
    });
    describe("getColor method", () => {
      beforeEach(() => {
        descriptor = Object.getOwnPropertyDescriptor(circle, "getColor");
      });
      it("should be defined", () => {
        expect(circle.getColor).toBeDefined();
      });
      it("should be a function", () => {
        expect(typeof circle.getColor).toBe("function");
      });
      it("should not be configurable", () => {
        expect(descriptor.configurable).toBe(false);
      });
      it("should not be writable", () => {
        expect(descriptor.writable).toBe(false);
      });
      it("should be enumerable", () => {
        expect(descriptor.enumerable).toBe(true);
      });
      it("should return the color of the instance", () => {
        expect(circle.getColor()).toBe("green");
      });
      it("should return red by default when invoked constructor with no arguments", () => {
        expect(new Circle().getColor()).toBe("red");
      });
    });
    describe("setColor method", () => {
      beforeEach(() => {
        descriptor = Object.getOwnPropertyDescriptor(circle, "setColor");
      });
      it("should be defined", () => {
        expect(circle.setColor).toBeDefined();
      });
      it("should be a function", () => {
        expect(typeof circle.setColor).toBe("function");
      });
      it("should not be configurable", () => {
        expect(descriptor.configurable).toBe(false);
      });
      it("should not be writable", () => {
        expect(descriptor.writable).toBe(false);
      });
      it("should be enumerable", () => {
        expect(descriptor.enumerable).toBe(true);
      });
      it("should set a new color to the circle", () => {
        circle.setColor("blue");
        expect(circle.getColor()).toBe("blue");
      });
      it("should return undefined", () => {
        expect(circle.setColor("blue")).toBeUndefined();
      });
    });
    describe("isFilled method", () => {
      beforeEach(() => {
        descriptor = Object.getOwnPropertyDescriptor(circle, "isFilled");
      });
      it("should be defined", () => {
        expect(circle.isFilled).toBeDefined();
      });
      it("should be a function", () => {
        expect(typeof circle.isFilled).toBe("function");
      });
      it("should not be configurable", () => {
        expect(descriptor.configurable).toBe(false);
      });
      it("should not be writable", () => {
        expect(descriptor.writable).toBe(false);
      });
      it("should be enumerable", () => {
        expect(descriptor.enumerable).toBe(true);
      });
      it("should return the value of the filled property of the instance", () => {
        expect(circle.isFilled()).toBe(false);
      });
      it("should return true by default when invoked constructor with no arguments", () => {
        expect(new Circle().isFilled()).toBe(true);
      });
    });
    describe("setFilled method", () => {
      beforeEach(() => {
        descriptor = Object.getOwnPropertyDescriptor(circle, "setFilled");
      });
      it("should be defined", () => {
        expect(circle.setFilled).toBeDefined();
      });
      it("should be a function", () => {
        expect(typeof circle.setFilled).toBe("function");
      });
      it("should not be configurable", () => {
        expect(descriptor.configurable).toBe(false);
      });
      it("should not be writable", () => {
        expect(descriptor.writable).toBe(false);
      });
      it("should be enumerable", () => {
        expect(descriptor.enumerable).toBe(true);
      });
      it("should set a new value for the filled property of the instance", () => {
        circle.setFilled(true);
        expect(circle.isFilled()).toBe(true);
      });
      it("should return undefined when invoked", () => {
        expect(circle.setFilled(false)).toBeUndefined();
      });
    });
    describe("getRadius method", () => {
      beforeEach(() => {
        descriptor = Object.getOwnPropertyDescriptor(circle, "getRadius");
      });
      it("should be defined", () => {
        expect(circle.getRadius).toBeDefined();
      });
      it("should be a function", () => {
        expect(typeof circle.getRadius).toBe("function");
      });
      it("should not be configurable", () => {
        expect(descriptor.configurable).toBe(false);
      });
      it("should not be writable", () => {
        expect(descriptor.writable).toBe(false);
      });
      it("should be enumerable", () => {
        expect(descriptor.enumerable).toBe(true);
      });
      it("should return the value of the radius property of the instance", () => {
        expect(circle.getRadius()).toBe(10);
      });
    });
    describe("setRadius method", () => {
      beforeEach(() => {
        descriptor = Object.getOwnPropertyDescriptor(circle, "setRadius");
      });
      it("should be defined", () => {
        expect(circle.setRadius).toBeDefined();
      });
      it("should be a function", () => {
        expect(typeof circle.setRadius).toBe("function");
      });
      it("should not be configurable", () => {
        expect(descriptor.configurable).toBe(false);
      });
      it("should not be writable", () => {
        expect(descriptor.writable).toBe(false);
      });
      it("should be enumerable", () => {
        expect(descriptor.enumerable).toBe(true);
      });
      it("should set a new value to the radius of the instance", () => {
        circle.setRadius(5);
        expect(circle.getRadius()).toBe(5);
      });
      it("should return undefined when called it", () => {
        expect(circle.setRadius(5)).toBeUndefined();
      });
    });
    describe("getArea method", () => {
      beforeEach(() => {
        proto = Object.getPrototypeOf(circle);
        descriptor = Object.getOwnPropertyDescriptor(proto, "getArea");
      });
      it("should be defined", () => {
        expect(circle.setRadius).toBeDefined();
      });
      it("should be a function", () => {
        expect(typeof circle.setRadius).toBe("function");
      });
      it("should not be a direct method of the instance", () => {
      expect(circle.hasOwnProperty("getArea")).toBeFalsy();
      });
      it("should be a method of the prototype", () => {
        expect(proto.hasOwnProperty("getArea")).toBe(true);
      });
      it("should not be configurable", () => {
        expect(descriptor.configurable).toBe(false);
      });
      it("should not be writable", () => {
        expect(descriptor.writable).toBe(false);
      });
      it("should be enumerable", () => {
        expect(descriptor.enumerable).toBe(true);
      });
      it("should return the calculation of the area of the instance", () => {
        expect(Math.round(circle.getArea())).toBe(314);
      });
    });
    describe("getPerimeter method", () => {
      beforeEach(() => {
        proto = Object.getPrototypeOf(circle);
        descriptor = Object.getOwnPropertyDescriptor(proto, "getPerimeter");
      });
      it("should be defined", () => {
        expect(circle.setRadius).toBeDefined();
      });
      it("should be a function", () => {
        expect(typeof circle.setRadius).toBe("function");
      });
      it("should not be a direct method of the instance", () => {
      expect(circle.hasOwnProperty("getPerimeter")).toBeFalsy();
      });
      it("should be a method of the prototype", () => {
        expect(proto.hasOwnProperty("getPerimeter")).toBe(true);
      });
      it("should not be configurable", () => {
        expect(descriptor.configurable).toBe(false);
      });
      it("should not be writable", () => {
        expect(descriptor.writable).toBe(false);
      });
      it("should be enumerable", () => {
        expect(descriptor.enumerable).toBe(true);
      });
      it("should return the calculation of the area of the instance", () => {
        expect(Math.round(circle.getPerimeter())).toBe(63);
      });
    });
    describe("toString method", () => {
      beforeEach(() => {
        proto = Object.getPrototypeOf(circle);
        descriptor = Object.getOwnPropertyDescriptor(proto, "toString");
      });
      it("should be defined", () => {
        expect(circle.toString).toBeDefined();
      });
      it("should be a function", () => {
        expect(typeof circle.toString).toBe("function");
      });
      it("should not be a direct method of the instance", () => {
        expect(circle.hasOwnProperty("toString")).toBe(false);
      });
      it("should be a direct method of the prototype of the instance", () => {
        expect(proto.hasOwnProperty("toString")).toBe(true);
      });
      it("should not be configurable", () => {
        expect(descriptor.configurable).toBe(false);
      });
      it("should not be writable", () => {
        expect(descriptor.writable).toBe(false);
      });
      it("should be enumerable", () => {
        expect(descriptor.enumerable).toBe(true);
      });
      it("should return a string following the pattern A Circle with radius=xxx, which is a subclass of yyy", () => {
        expect(new Circle().toString()).toBe("A Circle with radius=1, which is a subclass of A Shape with color of red and filled");
      });
      it("should return a string following the pattern: A Circle with radius=xxx, which is a subclass of A Shape with color of xxx and Not filled. For not filled shapes", () => {
        expect(circle.toString()).toBe("A Circle with radius=10, which is a subclass of A Shape with color of green and Not filled");
      });
    });
  });
});