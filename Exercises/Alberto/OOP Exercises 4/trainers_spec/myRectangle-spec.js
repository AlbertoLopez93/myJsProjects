"use strict";

let MyPoint = require("../MyPoint");
let MyRectangle = require("../MyRectangle");

let rectangle1Data = {
  topLeft: {x: 0, y: 10},
  bottomRight: {x: 10, y: 0}
};

let rectangle2Data = {
  topLeft: {x: 5, y: 5},
  bottomRight: {x: 10, y: 0}
};

let topLeft1;
let bottomRight1;
let rectangle1;

let topLeft2;
let bottomRight2;
let rectangle2;

let rectangle3;

describe('MyRectangle class', () => {

  beforeEach(() => {
    topLeft1 = new MyPoint(rectangle1Data.topLeft.x, rectangle1Data.topLeft.y);
    bottomRight1 = new MyPoint(rectangle1Data.bottomRight.x, rectangle1Data.bottomRight.y);

    topLeft2 = new MyPoint(rectangle2Data.topLeft.x, rectangle2Data.topLeft.y);
    bottomRight2 = new MyPoint(rectangle2Data.bottomRight.x, rectangle2Data.bottomRight.y);

    rectangle1 = new MyRectangle(topLeft1, bottomRight1);
    rectangle2 = new MyRectangle(topLeft2, bottomRight2);
    rectangle3 = new MyRectangle(0, 10, 5, 0);
  });

  describe('Private properties', () => {
    it('should have a private property called topLeft', () => {
      expect(rectangle1.topLeft).toBeUndefined();
    });
    it('should have a private property called bottomRight', () => {
      expect(rectangle2.bottomRight).toBeUndefined();
    });
  });

  describe('Public methods', () => {
    describe('getArea method', () => {
      it('should be defined', () => {
        expect(rectangle1.getArea).toBeDefined();
        expect(typeof rectangle1.getArea).toBe('function');
      });
      it('should return the area of the instance', () => {
        expect(rectangle1.getArea()).toBe(100);
        expect(rectangle2.getArea()).toBe(25);
        expect(rectangle3.getArea()).toBe(50);
      });
    });
    describe('getPerimeter method', () => {
      it('should be defined', () => {
        expect(rectangle1.getPerimeter).toBeDefined();
        expect(typeof rectangle1.getPerimeter).toBe('function');
      });
      it('should return the perimeter of the instance', () => {
        expect(rectangle1.getPerimeter()).toBe(40);
        expect(rectangle2.getPerimeter()).toBe(20);
        expect(rectangle3.getPerimeter()).toBe(30);
      });
    });
    describe('toString method', () => {
      it('should be defined', () => {
        expect(rectangle1.toString).toBeDefined();
        expect(typeof rectangle1.toString).toBe('function');
      });
      it('should return a string following the pattern MyRectangle[topLeft=(x1, y1), bottomRight=(x2, y2)]', () => {
        expect(rectangle1.toString()).toBe("MyRectangle[topLeft=(0, 10), bottomRight=(10, 0)]");
        expect(rectangle2.toString()).toBe("MyRectangle[topLeft=(5, 5), bottomRight=(10, 0)]");
        expect(rectangle3.toString()).toBe("MyRectangle[topLeft=(0, 10), bottomRight=(5, 0)]");
      });
    });
  });
});