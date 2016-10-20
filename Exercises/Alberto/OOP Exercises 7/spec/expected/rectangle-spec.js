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
  describe("Private properties", () => {
    beforeEach(() => {
      rectangle = new Rectangle();
    });
    it("should have a private property called color", () => {
      expect(rectangle.color).toBeUndefined();
    });
    it("should have a private property called filled", () => {
      expect(rectangle.filled).toBeUndefined();
    });
    it("should have a private property called width", () => {
      expect(rectangle.width).toBeUndefined();
    });
    it("should have a private property called length", () => {
      expect(rectangle.length).toBeUndefined();
    });
  });
  describe("Public methods", () => {
    beforeEach(() => {
      rectangle = new Rectangle(5, 10, "green", false);
    });
    describe("getColor method", () => {
      beforeEach(() => {
        descriptor = Object.getOwnPropertyDescriptor(rectangle, "getColor");
      });
      it("should be defined", () => {
        expect(rectangle.getColor).toBeDefined();
      });
      it("should be a function", () => {
        expect(typeof rectangle.getColor).toBe("function");
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
        expect(rectangle.getColor()).toBe("green");
      });
      it("should return red by default when invoked constructor with no arguments", () => {
        expect(new Rectangle().getColor()).toBe("red");
      });
    });
    describe("setColor method", () => {
      beforeEach(() => {
        descriptor = Object.getOwnPropertyDescriptor(rectangle, "setColor");
      });
      it("should be defined", () => {
        expect(rectangle.setColor).toBeDefined();
      });
      it("should be a function", () => {
        expect(typeof rectangle.setColor).toBe("function");
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
      it("should set a new color to the instance", () => {
        rectangle.setColor("blue");
        expect(rectangle.getColor()).toBe("blue");
      });
      it("should return undefined", () => {
        expect(rectangle.setColor("blue")).toBeUndefined();
      });
    });
    describe("isFilled method", () => {
      beforeEach(() => {
        descriptor = Object.getOwnPropertyDescriptor(rectangle, "isFilled");
      });
      it("should be defined", () => {
        expect(rectangle.isFilled).toBeDefined();
      });
      it("should be a function", () => {
        expect(typeof rectangle.isFilled).toBe("function");
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
        expect(rectangle.isFilled()).toBe(false);
      });
      it("should return true by default when invoked constructor with no arguments", () => {
        expect(new Rectangle().isFilled()).toBe(true);
      });
      it("should return true by default when invoked constructor with 2 arguments", () => {
        expect(new Rectangle(5, 10).isFilled()).toBe(true);
      });
    });
    describe("setFilled method", () => {
      beforeEach(() => {
        descriptor = Object.getOwnPropertyDescriptor(rectangle, "setFilled");
      });
      it("should be defined", () => {
        expect(rectangle.setFilled).toBeDefined();
      });
      it("should be a function", () => {
        expect(typeof rectangle.setFilled).toBe("function");
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
        rectangle.setFilled(true);
        expect(rectangle.isFilled()).toBe(true);
      });
      it("should return undefined when invoked", () => {
        expect(rectangle.setFilled(false)).toBeUndefined();
      });
    });
    describe("getWidth method", () => {
      beforeEach(() => {
        descriptor = Object.getOwnPropertyDescriptor(rectangle, "getWidth");
      });
      it("should be defined", () => {
        expect(rectangle.getWidth).toBeDefined();
      });
      it("should be a function", () => {
        expect(typeof rectangle.getWidth).toBe("function");
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
      it("should return the value of the width property of the instance", () => {
        expect(rectangle.getWidth()).toBe(5);
      });
      it("should return the default width for an instance created without arguments", () => {
        expect(new Rectangle().getWidth()).toBe(1);
      });
    });
    describe("getLength method", () => {
      beforeEach(() => {
        descriptor = Object.getOwnPropertyDescriptor(rectangle, "getLength");
      });
      it("should be defined", () => {
        expect(rectangle.getLength).toBeDefined();
      });
      it("should be a function", () => {
        expect(typeof rectangle.getLength).toBe("function");
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
      it("should return the value of the length property of the instance", () => {
        expect(rectangle.getLength()).toBe(10);
      });
      it("should return the default height for an instance created without arguments", () => {
        expect(new Rectangle().getLength()).toBe(1);
      });
    });
    describe("setWidth method", () => {
      beforeEach(() => {
        descriptor = Object.getOwnPropertyDescriptor(rectangle, "setWidth");
      });
      it("should be defined", () => {
        expect(rectangle.setWidth).toBeDefined();
      });
      it("should be a function", () => {
        expect(typeof rectangle.setWidth).toBe("function");
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
      it("should set a new value to the width property of the instance", () => {
        rectangle.setWidth(10);
        expect(rectangle.getWidth()).toBe(10);
      });
      it("shuold return undefined when called it", () => {
        expect(rectangle.setWidth(10)).toBeUndefined();
      });
    });
    describe("setLength method", () => {
      beforeEach(() => {
        descriptor = Object.getOwnPropertyDescriptor(rectangle, "setLength");
      });
      it("should be defined", () => {
        expect(rectangle.setLength).toBeDefined();
      });
      it("should be a function", () => {
        expect(typeof rectangle.setLength).toBe("function");
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
      it("should set a new value to the length property of the instance", () => {
        rectangle.setLength(5);
        expect(rectangle.getWidth()).toBe(5);
      });
      it("shuold return undefined when called it", () => {
        expect(rectangle.setLength(5)).toBeUndefined();
      });
    });
    describe("getArea method", () => {
      beforeEach(() => {
        proto = Object.getPrototypeOf(rectangle);
        descriptor = Object.getOwnPropertyDescriptor(proto, "getArea");
      });
      it("should be defined", () => {
        expect(rectangle.getArea).toBeDefined();
      });
      it("should be a function", () => {
        expect(typeof rectangle.getArea).toBe("function");
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
      it("should not be a direct method of the instance", () => {
        expect(rectangle.hasOwnProperty("getArea")).toBeFalsy();
      });
      it("should be a direct method of the prototype of the instance", () => {
        expect(proto.hasOwnProperty("getArea")).toBe(true);
      });
      it("should return the calculated area of the instance", () => {
        expect(rectangle.getArea()).toBe(50);
      });
    });
    describe("getPerimeter method", () => {
      beforeEach(() => {
        proto = Object.getPrototypeOf(rectangle);
        descriptor = Object.getOwnPropertyDescriptor(proto, "getPerimeter");
      });
      it("should be defined", () => {
        expect(rectangle.getPerimeter).toBeDefined();
      });
      it("should be a function", () => {
        expect(typeof rectangle.getPerimeter).toBe("function");
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
      it("should not be a direct method of the instance", () => {
        expect(rectangle.hasOwnProperty("getPerimeter")).toBeFalsy();
      });
      it("should be a direct method of the prototype of the instance", () => {
        expect(proto.hasOwnProperty("getPerimeter")).toBe(true);
      });
      it("should return the calculated perimeter of the instance", () => {
        expect(rectangle.getPerimeter()).toBe(30);
      });
    });
    describe("toString method", () => {
      beforeEach(() => {
        proto = Object.getPrototypeOf(rectangle);
        descriptor = Object.getOwnPropertyDescriptor(proto, "toString");
      });
      it("should be defined", () => {
        expect(rectangle.toString).toBeDefined();
      });
      it("should be a function", () => {
        expect(typeof rectangle.toString).toBe("function");
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
      it("should not be a direct method of the instance", () => {
        expect(rectangle.hasOwnProperty("toString")).toBeFalsy();
      });
      it("should be a direct method of the prototype of the instance", () => {
        expect(proto.hasOwnProperty("toString")).toBe(true);
      });
      it("should return a string following the pattern: A Rectangle with width=xxx and length=zzz, which is a subclass of yyy", () => {
        expect(new Rectangle().toString()).toBe("A Rectangle with width=1 and length=1, which is a subclass of A Shape with color of red and filled");
      });
      it("should return a string following the pattern: A Rectangle with a width=xxx and length=zzz, which is subclass of A Shape with color of green and Not filled. For not filled shapes", () => {
        expect(rectangle.toString()).toBe("A Rectangle with width=5 and length=10, which is a subclass of A Shape with color of green and Not filled");
      });
    });
  });
});