"use strict";

let Shape = require("../../Shape");
let shape;
let descriptor;
let proto;

describe("Shape Class", () => {
  describe("Constructor", () => {
    it("should work with out arguments", () => {
      expect(new Shape() instanceof Shape).toBe(true);
    });
    it("should work when called with 2 arguments", () => {
      expect(new Shape("green", false) instanceof Shape).toBe(true);
    });
  });
  describe("Private Properties", () => {
    beforeEach(() => {
      shape = new Shape();
    });
    it("should have a private property called color", () => {
      expect(shape.color).toBeUndefined();
    });
    it("should have a private property called filled", () => {
      expect(shape.filled).toBeUndefined();
    });
  });
  describe("Public methods", () => {
    beforeEach(() => {
      shape = new Shape("green", false);
    });
    describe("getColor method", () => {
      beforeEach(() => {
        descriptor = Object.getOwnPropertyDescriptor(shape, "getColor");
      });
      it("should be defined", () => {
        expect(shape.getColor).toBeDefined();
      });
      it("should be a function", () => {
        expect(typeof shape.getColor).toBe("function");
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
        expect(shape.getColor()).toBe("green");
      });
      it("should return red by default when invoked constructor with no arguments", () => {
        expect(new Shape().getColor()).toBe("red");
      });
    });
    describe("setColor method", () => {
      beforeEach(() => {
        descriptor = Object.getOwnPropertyDescriptor(shape, "setColor");
      });
      it("should be defined", () => {
        expect(shape.setColor).toBeDefined();
      });
      it("should be a function", () => {
        expect(typeof shape.setColor).toBe("function");
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
      it("should set a new color to the shape", () => {
        shape.setColor("blue");
        expect(shape.getColor()).toBe("blue");
      });
      it("should return undefined", () => {
        expect(shape.setColor("blue")).toBeUndefined();
      });
    });
    describe("isFilled method", () => {
      beforeEach(() => {
        descriptor = Object.getOwnPropertyDescriptor(shape, "isFilled");
      });
      it("should be defined", () => {
        expect(shape.isFilled).toBeDefined();
      });
      it("should be a function", () => {
        expect(typeof shape.isFilled).toBe("function");
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
        expect(shape.isFilled()).toBe(false);
      });
      it("should return true by default when invoked constructor with no arguments", () => {
        expect(new Shape().isFilled()).toBe(true);
      });
    });
    describe("setFilled method", () => {
      beforeEach(() => {
        descriptor = Object.getOwnPropertyDescriptor(shape, "setFilled");
      });
      it("should be defined", () => {
        expect(shape.setFilled).toBeDefined();
      });
      it("should be a function", () => {
        expect(typeof shape.setFilled).toBe("function");
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
        shape.setFilled(true);
        expect(shape.isFilled()).toBe(true);
      });
      it("should return undefined when invoked", () => {
        expect(shape.setFilled(false)).toBeUndefined();
      });
    });
    describe("toString method", () => {
      beforeEach(() => {
        proto = Object.getPrototypeOf(shape);
        descriptor = Object.getOwnPropertyDescriptor(proto, "toString");
      });
      it("should be defined", () => {
        expect(shape.toString).toBeDefined();
      });
      it("should be a function", () => {
        expect(typeof shape.toString).toBe("function");
      });
      it("should not be a direct method of the instance", () => {
        expect(shape.hasOwnProperty("toString")).toBe(false);
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
      it("should return a string following the pattern A Shape with color of xxx and filled for filled shapes", () => {
        expect(new Shape().toString()).toBe("A Shape with color of red and filled");
      });
      it("should return a string following the pattern A Shape with color of xxx and Not filled for not filled shapes", () => {
        expect(shape.toString()).toBe("A Shape with color of green and Not filled");
      });
    });
  });
});