"use strict";

let Circle = require("../Circle");

describe("Circle Class", function () {
    let data = {radius: 10, color: "white"};
    let circle;

    beforeEach(function () {
        circle = new Circle(data);
    });

    it("should be defined", function () {
        expect(Circle).toBeDefined();
        expect(typeof Circle).toBe('function');
    });
    describe("Private properties", function () {
        it("should have radius property as private", function () {
            expect(circle.radius).toBe(undefined);
        });
        it("should have color property as private", function () {
            expect(circle.color).toBe(undefined);
        });
    });

    describe("Methods", function () {
        describe("getRadius method", function () {
            it("should have a method called getRadius", function () {
                expect(circle.getRadius).toBeDefined();
                expect(typeof circle.getRadius).toBe('function');
            });
            it("should return the radius of the instance", function () {
                expect(circle.getRadius()).toBe(10);
            });
        });
        describe("setRadius method", function () {
            it("should have a method called setRadius", function () {
                expect(circle.setRadius).toBeDefined();
                expect(typeof circle.setRadius).toBe('function');
            });
            it("should set a new radius to the instance", function () {
                circle.setRadius(20);
                expect(circle.getRadius()).toBe(20);
            });
            it("should not change the radius if the param isn't a number", function () {
                circle.setRadius("hola");
                expect(circle.getRadius()).toBe(10);
            });
        });
        describe("getColor method", function () {
            it("should have a method called getColor", function () {
                expect(circle.getColor).toBeDefined();
                expect(typeof circle.getColor).toBe('function');
            });
            it("should return the color fo the instance", function () {
                expect(circle.getColor()).toBe("white");
            });
        });
        describe("setColor method", function () {
            it("should have a method called setColor", function () {
                expect(circle.setColor).toBeDefined();
                expect(typeof circle.setColor).toBe('function');
            });
            it("should set a new color to the instance", function () {
                circle.setColor("black");
                expect(circle.getColor()).toBe("black");
            });
            it("should not change the color if the param isn't a string", function () {
                circle.setColor(20);
                expect(circle.getColor()).toBe("white");
            });
        });
        describe("getCircumference method", function () {
            it("should have a method called getCircumference", function () {
                expect(circle.getCircumference).toBeDefined();
                expect(typeof circle.getCircumference).toBe('function');
            });
            it("should return the circumference of the instance", function () {
                expect(Math.round(circle.getCircumference())).toBe(63);
            });
        });
        describe("getArea method", function () {
            it("should have a method called getArea", function () {
                expect(circle.getArea).toBeDefined();
            });
            it("should return the area of the instance", function () {
                expect(Math.round(circle.getArea())).toBe(314);
            });
        });
    });
});
