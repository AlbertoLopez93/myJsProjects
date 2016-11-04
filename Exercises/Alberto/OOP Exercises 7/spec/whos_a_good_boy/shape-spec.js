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
  describe("Public methods", () => {
    beforeEach(() => {
      shape = new Shape("green", false);
    });
    describe("getColor method", () => {
      it("should return the color of the instance", () => {
        expect(shape.getColor()).toBe("green");
      });
      it("should return red by default when invoked constructor with no arguments", () => {
        expect(new Shape().getColor()).toBe("red");
      });
    });
    describe("setColor method", () => {
      it("should set a new color to the shape", () => {
        shape.setColor("blue");
        expect(shape.getColor()).toBe("blue");
      });
      it("should return undefined", () => {
        expect(shape.setColor("blue")).toBeUndefined();
      });
    });
    describe("isFilled method", () => {
      it("should return the value of the filled property of the instance", () => {
        expect(shape.isFilled()).toBe(false);
      });
      it("should return true by default when invoked constructor with no arguments", () => {
        expect(new Shape().isFilled()).toBe(true);
      });
    });
    describe("setFilled method", () => {
      it("should set a new value for the filled property of the instance", () => {
        shape.setFilled(true);
        expect(shape.isFilled()).toBe(true);
      });
      it("should return undefined when invoked", () => {
        expect(shape.setFilled(false)).toBeUndefined();
      });
    });
    describe("toString method", () => {
      it("should return a string following the pattern A Shape with color of xxx and filled for filled shapes", () => {
        expect(new Shape().toString()).toBe("A Shape with color of red and filled");
      });
      it("should return a string following the pattern A Shape with color of xxx and Not filled for not filled shapes", () => {
        expect(shape.toString()).toBe("A Shape with color of green and Not filled");
      });
    });
  });
});