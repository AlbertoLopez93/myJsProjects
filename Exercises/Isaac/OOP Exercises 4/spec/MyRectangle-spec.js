(function () {
    'use strict';

    let MyPoint = require("../MyPoint");
    let MyRectangle = require("../MyRectangle");

    describe("MyRectangle Class", function () {
        let data1 = {
            x1: 0,
            y1: 0,
            x2: 5,
            y2: 5
        };
        let data2 = {
            x1: 1,
            y1: 2,
            x2: 9,
            y2: 18
        };
        let rectangle1;
        let rectangle2;

        beforeEach(function () {
            rectangle1 = new MyRectangle(data1.x1, data1.y1, data1.x2, data1.y2);
            rectangle2 = new MyRectangle(new MyPoint(data2.x1, data2.y1), new MyPoint(data2.x2, data2.y2));
        });

        it("should be defined", function () {
            expect(MyRectangle).toBeDefined();
        });

        describe("Private properties", function () {
            it("should have a 'topLeft' property as private", function () {
                expect(rectangle1.topLeft).toBe(undefined);
            });
            it("should have a 'bottomRight' property as private", function () {
                expect(rectangle1.bottomRight).toBe(undefined);
            });
        });

        describe("Methods", function () {
            describe("getArea method", function () {
                it("should have a method called getArea", function () {
                    expect(rectangle1.getArea).toBeDefined();
                    expect(typeof rectangle1.getArea).toBe('function');
                });
                it("should return the 'area' of the instances", function () {
                    expect(rectangle1.getArea()).toBe(25);
                    expect(rectangle2.getArea()).toBe(128);
                });
            });
            describe("getPerimeter method", function () {
                it("should have a method called getPerimeter", function () {
                    expect(rectangle1.getPerimeter).toBeDefined();
                    expect(typeof rectangle1.getPerimeter).toBe('function');
                });
                it("should return the 'perimeter' of the instances", function () {
                    expect(rectangle1.getPerimeter()).toBe(20);
                    expect(rectangle2.getPerimeter()).toBe(48);
                });
            });
            describe("toString method", function () {
                it("should have a method called toString", function () {
                    expect(rectangle1.toString).toBeDefined();
                    expect(typeof rectangle1.toString).toBe('function');
                });
                it("should return the instances as a String", function () {
                    expect(rectangle1.toString()).toBe("MyRectangle[topLeft=(0, 0), bottomRight=(5, 5)]");
                    expect(rectangle2.toString()).toBe("MyRectangle[topLeft=(1, 2), bottomRight=(9, 18)]");
                });
            });
        });
    });
}());