(function () {
    'use strict';

    let MyPoint = require("../MyPoint");
    let MyTriangle = require("../MyTriangle");

    describe("MyTriangle Class", function () {
        let data0 = {
            v1: {
                x: 0,
                y: 0
            },
            v2: {
                x: 0,
                y: 0
            },
            v3: {
                x: 0,
                y: 0
            }
        };
        let data1 = {
            v1: {
                x: -2,
                y: 0
            },
            v2: {
                x: 2,
                y: 0
            },
            v3: {
                x: 0,
                y: 5
            }
        };
        let data2 = {
            v1: {
                x: 1,
                y: 3
            },
            v2: {
                x: 5,
                y: 4
            },
            v3: {
                x: 3,
                y: 6
            }
        };
        let triangle0;
        let triangle1;
        let triangle2;

        beforeEach(function () {
            triangle0 = new MyTriangle(data0.v1.x, data0.v1.y, data0.v2.x, data0.v2.y, data0.v3.x, data0.v3.y);
            triangle1 = new MyTriangle(new MyPoint(data1.v1.x, data1.v1.y), new MyPoint(data1.v2.x, data1.v2.y), new MyPoint(data1.v3.x, data1.v3.y));
            triangle2 = new MyTriangle(new MyPoint(data2.v1.x, data2.v1.y), new MyPoint(data2.v2.x, data2.v2.y), new MyPoint(data2.v3.x, data2.v3.y));
        });

        it("should be defined", function () {
            expect(MyTriangle).toBeDefined();
        });

        describe("Private properties", function () {
            it("should have a 'v1' property as private", function () {
                expect(triangle0.v1).toBe(undefined);
            });
            it("should have a 'v2' property as private", function () {
                expect(triangle0.v2).toBe(undefined);
            });
            it("should have a 'v3' property as private", function () {
                expect(triangle0.v3).toBe(undefined);
            });
        });

        describe("Methods", function () {
            describe("toString method", function () {
                it("should have a method called toString", function () {
                    expect(triangle0.toString).toBeDefined();
                    expect(typeof triangle0.toString).toBe('function');
                });
                it("should return the instances as string", function () {
                    expect(triangle0.toString()).toBe("MyTriangle[v1=(0, 0), v2=(0, 0), v3=(0, 0)]");
                    expect(triangle1.toString()).toBe("MyTriangle[v1=(-2, 0), v2=(2, 0), v3=(0, 5)]");
                    expect(triangle2.toString()).toBe("MyTriangle[v1=(1, 3), v2=(5, 4), v3=(3, 6)]");
                });
            });
            describe("getType method", function () {
                it("should have a method called getType", function () {
                    expect(triangle0.getType).toBeDefined();
                    expect(typeof triangle0.getType).toBe('function');
                });
                it("should return the 'type' of the instances", function () {
                    expect(triangle0.getType()).toBe("equilateral");
                    expect(triangle1.getType()).toBe("isosceles");
                    expect(triangle2.getType()).toBe("scalene");
                });
            });
            describe("getPerimeter method", function () {
                it("should have a method called getPerimeter", function () {
                    expect(triangle0.getPerimeter).toBeDefined();
                    expect(typeof triangle0.getPerimeter).toBe('function');
                });
                it("should return the 'perimeter' of the instances", function () {
                    expect(triangle0.getPerimeter()).toBe(0);
                    expect(triangle1.getPerimeter()).toBe(14.77032961426901);
                    expect(triangle2.getPerimeter()).toBe(10.557084025827841);
                });
            });
        });
    });

    // Migues' tests
    describe("Testing function MyTriangle", function () {
        it("Should be defined", function () {
            expect(MyPoint).toBeDefined();
            expect(MyTriangle).toBeDefined();
        });
        let newTriangle1 = new MyTriangle(0, 0, 2, 3, 4, 0);
        let newTriangle2 = new MyTriangle(0, 0, 3, 3, 6, 0);
        let newPoint1 = new MyPoint();
        let newPoint2 = new MyPoint(3, 5);
        let newPoint3 = new MyPoint(2, 6);
        let newTriangle3 = new MyTriangle(newPoint1, newPoint2, newPoint3);
        it("Constructors should work", function () {
            expect(newPoint1 instanceof MyPoint).toBe(true);
            expect(newPoint2 instanceof MyPoint).toBe(true);
            expect(newPoint3 instanceof MyPoint).toBe(true);
            expect(newTriangle1 instanceof MyTriangle).toBe(true);
            expect(newTriangle2 instanceof MyTriangle).toBe(true);
            expect(newTriangle3 instanceof MyTriangle).toBe(true);
        });
        it("toString method should work", function () {
            let result1 = newTriangle1.toString();
            let result2 = newTriangle2.toString();
            let result3 = newTriangle3.toString();
            expect(result1).toBe("MyTriangle[v1=(0, 0), v2=(2, 3), v3=(4, 0)]");
            expect(result2).toBe("MyTriangle[v1=(0, 0), v2=(3, 3), v3=(6, 0)]");
            expect(result3).toBe("MyTriangle[v1=(0, 0), v2=(3, 5), v3=(2, 6)]");
        });
        it("getPerimeter method should work", function () {
            let result1 = newTriangle1.getPerimeter();
            let result2 = newTriangle2.getPerimeter();
            let result3 = newTriangle3.getPerimeter();
            expect(result1).toBe(11.21110255092798);
            expect(result2).toBe(14.48528137423857);
            expect(result3).toBe(13.569720777555155);
        });
        it("getType method should work", function () {
            let newTriangle = new MyTriangle(0, 0, 0, 0, 0, 0);
            expect(newTriangle.getType()).toBe("equilateral");
            expect(newTriangle2.getType()).toBe("isosceles");
            expect(newTriangle3.getType()).toBe("scalene");
        });
    });
}());