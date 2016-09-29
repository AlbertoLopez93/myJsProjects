"use strict";

let Rectangle = require("../Rectangle");

xdescribe("Rectangle Class", function () {
    let data = {length: 10, width: 20};
    let rectangle;

    beforeEach(function () {
        rectangle = new Rectangle(data);
    });

    it("should be defined", function () {
        expect(Rectangle).toBeDefined();
        expect(typeof Rectangle).toBe('function');
    });

    describe("Private properties", function () {
        it("should have a width property as private", function () {
            expect(rectangle.width).toBe(undefined);
        });
        it("should have a length property as private", function () {
            expect(rectangle.width).toBe(undefined);
        });
    });

    describe("Methods", function () {
        describe("getWidth method", function () {
            it("should have a method called getWidth", function () {
                expect(rectangle.getWidth).toBeDefined();
                expect(typeof rectangle.getWidth).toBe('function');
            });
            it("should return the width of the instance", function () {
                expect(rectangle.getWidth()).toBe(20);
            });
        });
        describe("setWidth method", function () {
            it("should have a method called setWidth", function () {
                expect(rectangle.setWidth).toBeDefined();
                expect(typeof rectangle.setWidth).toBe('function');
            });
            it("should set a new width to the instance", function () {
                rectangle.setWidth(30);
                expect(rectangle.getWidth()).toBe(30);
            });
        });
        describe("getLength method", function () {
            it("should have a method called getLength", function () {
                expect(rectangle.getLength).toBeDefined();
                expect(typeof rectangle.getLength).toBe('function');
            });
            it("should return the length of the instance", function () {
                expect(rectangle.getLength()).toBe(10);
            });
        });
        describe("setLength method", function () {
            it("should have a method called setLength", function () {
                expect(rectangle.setLength).toBeDefined();
                expect(typeof rectangle.setLength).toBe('function');
            });
            it("should set a new length to the instance", function () {
                rectangle.setLength(40);
                expect(rectangle.getLength()).toBe(40);
            });
        });
        describe("getArea method", function () {
            it("should have a method called getArea", function () {
                expect(rectangle.getArea).toBeDefined();
                expect(typeof rectangle.getArea).toBe('function');
            });
            it("should return the area of the instance", function () {
                expect(rectangle.getArea()).toBe(200);
            });
        });
        describe("getPerimeter method", function () {
            it("should have a method called getPerimeter", function () {
                expect(rectangle.getPerimeter).toBeDefined();
                expect(typeof rectangle.getPerimeter).toBe('function');
            });
            it("should return the perimeter of the instance", function () {
                expect(rectangle.getPerimeter()).toBe(60);
            });
        });
        describe("toString method", function () {
            it("should have a method called toString", function () {
                expect(rectangle.toString).toBeDefined();
                expect(typeof rectangle.toString).toBe('function');
            });
            it("should return a string following the pattern: Rectangle[length=?, width=?]", function () {
                expect(rectangle.toString()).toBe("Rectangle[length=10, width=20]");
            });
        });
    });
});
