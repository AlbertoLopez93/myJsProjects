(function () {
    'use strict';

    let MyPoint = require("../MyPoint");
    let MyCircle = require("../MyCircle");

    describe("MyCircle Class", function () {
        let data1 = {
            x: 4,
            y: 5,
            radius: 3
        };
        let data2 = {
            x: 3,
            y: 6,
            radius: 4
        };
        let circle0;
        let circle1;
        let circle2;

        beforeEach(function () {
            circle0 = new MyCircle();
            circle1 = new MyCircle(new MyPoint(data1.x, data1.y), data1.radius);
            circle2 = new MyCircle(data2.x, data2.y, data2.radius);
        });

        it("should be defined", function () {
            expect(MyCircle).toBeDefined();
        });

        describe("Private properties", function () {
            it("should have a 'center' property as private", function () {
                expect(circle0.center).toBe(undefined);
            });
            it("should have a 'radius' property as private", function () {
                expect(circle0.radius).toBe(undefined);
            });
        });

        describe("Methods", function () {
            describe("getRadius method", function () {
                it("should have a method called getRadius", function () {
                    expect(circle0.getRadius).toBeDefined();
                    expect(typeof circle0.getRadius).toBe('function');
                });
                it("should return the 'radius' value of the instances", function () {
                    expect(circle0.getRadius()).toBe(1);
                    expect(circle1.getRadius()).toBe(3);
                    expect(circle2.getRadius()).toBe(4);
                });
            });
            describe("setRadius method", function () {
                it("should have a method called setRadius", function () {
                    expect(circle0.setRadius).toBeDefined();
                    expect(typeof circle0.setRadius).toBe('function');
                });
                it("should change the 'radius' of the instances", function () {
                    expect(circle0.setRadius(5).getRadius()).toBe(5);
                    expect(circle1.setRadius(10).getRadius()).toBe(10);
                    expect(circle2.setRadius(15).getRadius()).toBe(15);
                });
            });
            describe("getCenter method", function () {
                it("should have a method called getCenter", function () {
                    expect(circle0.getCenter).toBeDefined();
                    expect(typeof circle0.getCenter).toBe('function');
                });
                it("should return the 'center' value of the instances", function () {
                    expect(circle0.getCenter().toString()).toBe("(0, 0)");
                    expect(circle1.getCenter().toString()).toBe("(4, 5)");
                    expect(circle2.getCenter().toString()).toBe("(3, 6)");
                });
            });
            describe("setCenter method", function () {
                it("should have a method called setCenter", function () {
                    expect(circle0.setCenter).toBeDefined();
                    expect(typeof circle0.setCenter).toBe('function');
                });
                it("should change the 'center' value of the instances", function () {
                    let newCenter = new MyPoint(5, 5);
                    expect(circle0.setCenter(newCenter).getCenter()).toBe(newCenter);
                    expect(circle0.setCenter(newCenter).getCenter().toString()).toBe("(5, 5)");
                    expect(circle1.setCenter(newCenter).getCenter()).toBe(newCenter);
                    expect(circle2.setCenter(newCenter).getCenter()).toBe(newCenter);
                });
            });
            describe("getCenterX method", function () {
                it("should have a method called getCenterX", function () {
                    expect(circle0.getCenterX).toBeDefined();
                    expect(typeof circle0.getCenterX).toBe('function');
                });
                it("should return the 'x' of the 'center' value of the instances", function () {
                    expect(circle0.getCenterX()).toBe(0);
                    expect(circle1.getCenterX()).toBe(4);
                    expect(circle2.getCenterX()).toBe(3);
                });
            });
            describe("setCenterX method", function () {
                it("should have a method called setCenterX", function () {
                    expect(circle0.setCenterX).toBeDefined();
                    expect(typeof circle0.setCenterX).toBe('function');
                });
                it("should update the 'x' of the 'center' value of the instances", function () {
                    expect(circle0.setCenterX(10).getCenterX()).toBe(10);
                    expect(circle1.setCenterX(20).getCenterX()).toBe(20);
                    expect(circle2.setCenterX(30).getCenterX()).toBe(30);
                });
            });
            describe("getCenterY method", function () {
                it("should have a method called getCenterY", function () {
                    expect(circle0.getCenterY).toBeDefined();
                    expect(typeof circle0.getCenterY).toBe('function');
                });
                it("should return the 'y' of the 'center' value of the instances", function () {
                    expect(circle0.getCenterY()).toBe(0);
                    expect(circle1.getCenterY()).toBe(5);
                    expect(circle2.getCenterY()).toBe(6);
                });
            });
            describe("setCenterY method", function () {
                it("should have a method called setCenterY", function () {
                    expect(circle0.setCenterY).toBeDefined();
                    expect(typeof circle0.setCenterY).toBe('function');
                });
                it("should change the 'y' of the 'center' value of the instances", function () {
                    expect(circle0.setCenterY(30).getCenterY()).toBe(30);
                    expect(circle1.setCenterY(40).getCenterY()).toBe(40);
                    expect(circle2.setCenterY(50).getCenterY()).toBe(50);
                });
            });
            describe("getCenterXY method", function () {
                it("should have a method called getCenterXY", function () {
                    expect(circle0.getCenterXY).toBeDefined();
                    expect(typeof circle0.getCenterXY).toBe('function');
                });
                it("should return the 'x' and 'y' values of the instances as an Array", function () {
                    expect(circle0.getCenterXY()).toEqual([0, 0]);
                    expect(circle1.getCenterXY()).toEqual([4, 5]);
                    expect(circle2.getCenterXY()).toEqual([3, 6]);
                });
            });
            describe("setCenterXY method", function () {
                it("should have a method called setCenterXY", function () {
                    expect(circle0.setCenterXY).toBeDefined();
                    expect(typeof circle0.setCenterXY).toBe('function');
                });
                it("should change the 'x' and 'y' of the 'center' value of the instances", function () {
                    expect(circle0.setCenterXY(1, 1).getCenterXY()).toEqual([1, 1]);
                    expect(circle1.setCenterXY(2, 3).getCenterXY()).toEqual([2, 3]);
                    expect(circle2.setCenterXY(3, 2).getCenterXY()).toEqual([3, 2]);
                });
            });
            describe("toString method", function () {
                it("should have a method called toString", function () {
                    expect(circle0.toString).toBeDefined();
                    expect(typeof circle0.toString).toBe('function');
                });
                it("should return the instances as a string", function () {
                    expect(circle0.toString()).toBe("MyCircle[radius=1, center=(0, 0)]");
                    expect(circle1.toString()).toBe("MyCircle[radius=3, center=(4, 5)]");
                    expect(circle2.toString()).toBe("MyCircle[radius=4, center=(3, 6)]");
                });
            });
            describe("getArea method", function () {
                it("should have a method called getArea", function () {
                    expect(circle0.getArea).toBeDefined();
                    expect(typeof circle0.getArea).toBe('function');
                });
                it("should return the area of the instances", function () {
                    expect(circle0.getArea()).toBe(3.141592653589793);
                    expect(circle1.getArea()).toBe(28.274333882308138);
                    expect(circle2.getArea()).toBe(50.26548245743669);
                });
            });
            describe("getCircumference method", function () {
                it("should have a method called getCircumference", function () {
                    expect(circle0.getCircumference).toBeDefined();
                    expect(typeof circle0.getCircumference).toBe('function');
                });
                it("should return the 'circumference' of the instances", function () {
                    expect(circle0.getCircumference()).toBe(6.283185307179586);
                    expect(circle1.getCircumference()).toBe(18.84955592153876);
                    expect(circle2.getCircumference()).toBe(25.132741228718345);
                });
            });
            describe("distance method", function () {
                it("should have a method called distance", function () {
                    expect(circle0.distance).toBeDefined();
                    expect(typeof circle0.distance).toBe('function');
                });
                it("should return the 'distance' between instances", function () {
                    expect(circle0.distance(circle1)).toBe(6.4031242374328485);
                    expect(circle1.distance(circle2)).toBe(1.4142135623730951);
                    expect(circle2.distance(circle0)).toBe(6.708203932499369);
                });
            });
        });
    });
}());