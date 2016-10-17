(function () {
    'use strict';

    let MyPoint = require("../MyPoint");

    describe("MyPoint Class", function () {
        let data1 = {
            x: 5,
            y: 10
        };
        let data2 = {
            x: 10,
            y: 15
        };
        let point0;
        let point1;
        let point2;

        beforeEach(function () {
            point0 = new MyPoint();
            point1 = new MyPoint(data1.x, data1.y);
            point2 = new MyPoint(data2.x, data2.y);
        });

        it("should be defined", function () {
            expect(MyPoint).toBeDefined();
        });

        describe("Private properties", function () {
            it("should have a 'x' property as private", function () {
                expect(point0.x).toBe(undefined);
            });
            it("should have a 'y' property as private", function () {
                expect(point0.y).toBe(undefined);
            });
        });

        describe("Methods", function () {
            describe("getX method", function () {
                it("should have a method called getX", function () {
                    expect(point0.getX).toBeDefined();
                    expect(typeof point0.getX).toBe('function');
                });
                it("should return the 'x' value of the instances", function () {
                    expect(point0.getX()).toBe(0);
                    expect(point1.getX()).toBe(5);
                    expect(point2.getX()).toBe(10);
                });
            });
            describe("getY method", function () {
                it("should have a method called getY", function () {
                    expect(point0.getY).toBeDefined();
                    expect(typeof point0.getY).toBe('function');
                });
                it("should return the 'y' value of the instances", function () {
                    expect(point0.getY()).toBe(0);
                    expect(point1.getY()).toBe(10);
                    expect(point2.getY()).toBe(15);
                });
            });
            describe("setX method", function () {
                it("should have a method called setX", function () {
                    expect(point0.setX).toBeDefined();
                    expect(typeof point0.setX).toBe('function');
                });
                it("should change the 'x' value of the instances", function () {
                    expect(point0.setX(1).getX()).toBe(1);
                    expect(point1.setX(50).getX()).toBe(50);
                    expect(point2.setX(100).getX()).toBe(100);
                });
            });
            describe("setY method", function () {
                it("should have a method called setY", function () {
                    expect(point0.setY).toBeDefined();
                    expect(typeof point0.setY).toBe('function');
                });
                it("should change the 'y' value of the instances", function () {
                    expect(point0.setY(8).getY()).toBe(8);
                    expect(point1.setY(16).getY()).toBe(16);
                    expect(point2.setY(320).getY()).toBe(320);
                });
            });
            describe("getXY method", function () {
                it("should have a method called getXY", function () {
                    expect(point0.getXY).toBeDefined();
                    expect(typeof point0.getXY).toBe('function');
                });
                it("should return both 'x' and 'y' values of the instances as an Array", function () {
                    expect(point0.getXY()).toEqual([0, 0]);
                    expect(point1.getXY()).toEqual([5, 10]);
                    expect(point2.getXY()).toEqual([10, 15]);
                });
            });
            describe("setXY method", function () {
                it("should have a method called setXY", function () {
                    expect(point0.setXY).toBeDefined();
                    expect(typeof point0.setXY).toBe('function');
                });
                it("should update both 'x' and 'y' values of the instances", function () {
                    expect(point0.setXY(1, 2).getXY()).toEqual([1, 2]);
                    expect(point1.setXY(10, 20).getXY()).toEqual([10, 20]);
                    expect(point2.setXY(100, 200).getXY()).toEqual([100, 200]);
                });
            });
            describe("toString method", function () {
                it("should have a method called toString", function () {
                    expect(point0.toString).toBeDefined();
                    expect(typeof point0.toString).toBe('function');
                });
                it("should return both 'x' and 'y' of the instances in the format (x, y)", function () {
                    expect(point0.toString()).toBe("(0, 0)");
                    expect(point1.toString()).toBe("(5, 10)");
                    expect(point2.toString()).toBe("(10, 15)");
                });
            });
            describe("distance method", function () {
                it("should have a method called distance", function () {
                    expect(point0.distance).toBeDefined();
                    expect(typeof point0.distance).toBe('function');
                });
                it("should return the distance between the default point(0, 0) and each instance", function () {
                    expect(point0.distance()).toBe(0);
                    expect(point1.distance()).toBe(11.180339887498949);
                    expect(point2.distance()).toBe(18.027756377319946);
                });
                it("should return the distance between the point(1, 3) and each instance", function () {
                    expect(point0.distance(1, 3)).toBe(3.1622776601683795);
                    expect(point1.distance(1, 3)).toBe(8.06225774829855);
                    expect(point2.distance(1, 3)).toBe(15);
                });
                it("should return the distance between the a new MyPoint(5, 2) and each instance", function () {
                    let newPoint = new MyPoint(5, 2);
                    expect(point0.distance(newPoint)).toBe(5.385164807134504);
                    expect(point1.distance(newPoint)).toBe(8);
                    expect(point2.distance(newPoint)).toBe(13.92838827718412);
                });
            });
        });
    });
}());