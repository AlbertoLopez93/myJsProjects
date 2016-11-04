"use strict";

let Rectangle = require("../../Rectangle");
let rectangle;
let descriptor;
let proto;

describe("Rectangle Class", () => {
  describe("Constructor", () => {
    it("should work when called without areguments", () => {
      expect(new Rectangle() instanceof Rectangle).toBe(true);
    });
    it("should work when called with 2 arguments", () => {
      expect(new Rectangle(5, 10) instanceof Rectangle).toBe(true);
    });
    it("should work when called with 4 arguments", () => {
      expect(new Rectangle(5, 10, "yellow", true) instanceof Rectangle).toBe(true);
    });
  });
  describe("Public methods", () => {
    beforeEach(() => {
      rectangle = new Rectangle(5, 10, "green", false);
    });
    describe("getColor method", () => {
      it("should return the color of the instance", () => {
        expect(rectangle.getColor()).toBe("green");
      });
      it("should return red by default when invoked constructor with no arguments", () => {
        expect(new Rectangle().getColor()).toBe("red");
      });
    });
    describe("setColor method", () => {
      it("should set a new color to the instance", () => {
        rectangle.setColor("blue");
        expect(rectangle.getColor()).toBe("blue");
      });
      it("should return undefined", () => {
        expect(rectangle.setColor("blue")).toBeUndefined();
      });
    });
    describe("isFilled method", () => {
      it("should return true by default when invoked constructor with no arguments", () => {
        expect(new Rectangle().isFilled()).toBe(true);
      });
      it("should return true by default when invoked constructor with 2 arguments", () => {
        expect(new Rectangle(5, 10).isFilled()).toBe(true);
      });
    });
    describe("setFilled method", () => {
      it("should set a new value for the filled property of the instance", () => {
        rectangle.setFilled(true);
        expect(rectangle.isFilled()).toBe(true);
      });
      it("should return undefined when invoked", () => {
        expect(rectangle.setFilled(false)).toBeUndefined();
      });
    });
    describe("getWidth method", () => {
      it("should return the value of the width property of the instance", () => {
        expect(rectangle.getWidth()).toBe(5);
      });
      it("should return the default width for an instance created without arguments", () => {
        expect(new Rectangle().getWidth()).toBe(1);
      });
    });
    describe("getLength method", () => {
      it("should return the value of the length property of the instance", () => {
        expect(rectangle.getLength()).toBe(10);
      });
      it("should return the default height for an instance created without arguments", () => {
        expect(new Rectangle().getLength()).toBe(1);
      });
    });
    describe("setWidth method", () => {
      it("should set a new value to the width property of the instance", () => {
        rectangle.setWidth(10);
        expect(rectangle.getWidth()).toBe(10);
      });
      it("shuold return undefined when called it", () => {
        expect(rectangle.setWidth(10)).toBeUndefined();
      });
    });
    describe("setLength method", () => {
      it("should set a new value to the length property of the instance", () => {
        rectangle.setLength(5);
        expect(rectangle.getWidth()).toBe(5);
      });
      it("shuold return undefined when called it", () => {
        expect(rectangle.setLength(5)).toBeUndefined();
      });
    });
    describe("getArea method", () => {
      it("should return the calculated area of the instance", () => {
        expect(rectangle.getArea()).toBe(50);
      });
    });
    describe("getPerimeter method", () => {
      it("should return the calculated perimeter of the instance", () => {
        expect(rectangle.getPerimeter()).toBe(30);
      });
    });
    describe("toString method", () => {
      it("should return a string following the pattern: A Rectangle with width=xxx and length=zzz, which is a subclass of yyy", () => {
        expect(new Rectangle().toString()).toBe("A Rectangle with width=1 and length=1, which is a subclass of A Shape with color of red and filled");
      });
      it("should return a string following the pattern: A Rectangle with a width=xxx and length=zzz, which is subclass of A Shape with color of green and Not filled. For not filled shapes", () => {
        expect(rectangle.toString()).toBe("A Rectangle with width=5 and length=10, which is a subclass of A Shape with color of green and Not filled");
      });
    });
  });
});