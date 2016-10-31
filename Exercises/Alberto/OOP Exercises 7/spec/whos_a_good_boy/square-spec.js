"use strict";

let Square = require("../../Square");
let square;
let descriptor;
let proto;

describe("Square Class", () => {
  describe("Constructor", () => {
    it("should work when called without arguments", () => {
      expect(new Square() instanceof Square).toBe(true);
    });
    it("should work when called with 1 argument", () => {
      expect(new Square(10) instanceof Square).toBe(true);
    });
    it("should work when called with 3 arguments", () => {
      expect(new Square(10, "green", false) instanceof Square).toBe(true);
    });
  });
  describe("Public methods", () => {
    beforeEach(() => {
      square = new Square(5, "green", false);
    });
    describe("getColor method", () => {
      it("should return the color of the instance", () => {
        expect(square.getColor()).toBe("green");
      });
      it("should return red by default when invoked constructor with no arguments", () => {
        expect(new Square().getColor()).toBe("red");
      });
    });
    describe("setColor method", () => {
      it("should set a new color to the instance", () => {
        square.setColor("blue");
        expect(square.getColor()).toBe("blue");
      });
      it("should return undefined", () => {
        expect(square.setColor("blue")).toBeUndefined();
      });
    });
    describe("isFilled method", () => {
      it("should return the value of the filled property of the instance", () => {
        expect(square.isFilled()).toBe(false);
      });
      it("should return true by default when invoked constructor with no arguments", () => {
        expect(new Square().isFilled()).toBe(true);
      });
      it("should return true by default when invoked constructor with 1 argument", () => {
        expect(new Square(5).isFilled()).toBe(true);
      });
    });
    describe("setFilled method", () => {
      it("should set a new value for the filled property of the instance", () => {
        square.setFilled(true);
        expect(square.isFilled()).toBe(true);
      });
      it("should return undefined when invoked", () => {
        expect(square.setFilled(false)).toBeUndefined();
      });
    });
    describe("getSide method", () => {
      it("should return the value of the side of the instance which is either the width or length", () => {
        expect(square.getSide()).toBe(5);
      });
    });
    describe("setSide method", () => {
      it("should set a new value to the sides of the instance which should set the same value to the width and length properties", () => {
        square.setSide(10);
        expect(square.getSide()).toBe(10);
      });
      it("should return undefined when executed", () => {
        expect(square.setSide(10)).toBeUndefined();
      });
    });
    describe("getWidth method", () => {
      it("should return the value of the width property of the instance", () => {
        expect(square.getWidth()).toBe(5);
      });
      it("should return the default width for an instance created without arguments", () => {
        expect(new Square().getWidth()).toBe(1);
      });
    });
    describe("getLength method", () => {
      it("should return the value of the length property of the instance", () => {
        expect(square.getLength()).toBe(5);
      });
      it("should return the default height for an instance created without arguments", () => {
        expect(new Square().getLength()).toBe(1);
      });
    });
    describe("setWidth method", () => {
      it("should set a new value to the width property of the instance but also set that same value to the length property of the instance", () => {
        square.setWidth(10);
        expect(square.getSide()).toBe(10);
        expect(square.getWidth()).toBe(10);
        expect(square.getLength()).toBe(10);
      });
      it("should return undefined when called it", () => {
        expect(square.setWidth(10)).toBeUndefined();
      });
    });
    describe("setLength method", () => {
      it("should set a new value to the width property of the instance but also set that same value to the lenght property of the instance", () => {
        square.setLength(10);
        expect(square.getSide()).toBe(10);
        expect(square.getWidth()).toBe(10);
        expect(square.getLength()).toBe(10);
      });
      it("should return undefined when called it", () => {
        expect(square.setLength(10)).toBeUndefined();
      });
    });
    describe("getArea method", () => {
      it("should return the calculated area of the instance", () => {
        expect(square.getArea()).toBe(25);
      });
    });
    describe("getPerimeter method", () => {
      it("should return the calculated perimeter of the instance", () => {
        expect(square.getPerimeter()).toBe(20);
      });
    });
    describe("toString method", () => {
      it("should return a string following the pattern: A Square with side=xxx, which is a subclass of yyy", () => {
        expect(new Square().toString()).toBe("A Square with side=1, which is a subclass of A Rectangle with width=1 and length=1, which is a subclass of A Shape with color of red and filled");
      });
      it("should return a string following the pattern: A Square with a side=xxx, which is subclass of A Shape with color of green and Not filled. For not filled shapes", () => {
        expect(square.toString()).toBe("A Square with side=5, which is a subclass of A Rectangle with width=5 and length=5, which is a subclass of A Shape with color of green and Not filled");
      });
    });
  });
});