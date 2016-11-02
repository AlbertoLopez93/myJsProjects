"use strict";

let MyPoint = require("../MyPoint");
let MyCircle = require("../MyCircle");

let center1Data = {x: 1, y: 1};
let center1;
let circle1Data;

let circle2Data = {x: 5, y: 5, radius: 5};

let circle0;
let circle1;
let circle2;

describe('MyCircle class', () => {

  describe('Constructor', () => {
    it('should be defined', () => {
      expect(MyCircle).toBeDefined();
      expect(typeof MyCircle).toBe('function');
    });
    it('should return a new instance if called with 0 arguments passed to it', () => {
      expect(new MyCircle()).toBeDefined();
      expect(new MyCircle() instanceof MyCircle).toBe(true);
    });
    it('should return a new instance if called with 2 arguments passed to it', () => {
      expect(new MyCircle(new MyPoint(), 1)).toBeDefined();
      expect(new MyCircle(new MyPoint(), 1) instanceof MyCircle).toBe(true);
    });
    it('should return a new instance if called with 3 arguments', () => {
      expect(new MyCircle(1, 1, 5)).toBeDefined();
      expect(new MyCircle(1, 1, 5) instanceof MyCircle).toBe(true);
    });
  });

  describe('Private properties', () => {
    it('should have a private property called center', () => {
      expect(new MyCircle().center).toBeUndefined();
    });
    it('should have a private property called radius', () => {
      expect(new MyCircle().radius).toBeUndefined();
    });
  });

  describe('Public methods', () => {
    beforeEach(() => {
      center1 = new MyPoint(center1Data.x, center1Data.y);
      circle1Data = {center: center1, radius: 5};
      circle0 = new MyCircle();
      circle1 = new MyCircle(circle1Data.center, circle1Data.radius);
      circle2 = new MyCircle(circle2Data.x, circle2Data.y, circle2Data.radius);
    });

    describe('getRadius method', () => {
      it('should be defined', () => {
        expect(circle1.getRadius).toBeDefined();
        expect(typeof circle1.getRadius).toBe('function');
      });
      it('should return the radius of the instance', () => {
        expect(circle1.getRadius()).toBe(5);
      });
    });

    describe('setRadius method', () => {
      it('should be defined', () => {
        expect(circle1.setRadius).toBeDefined();
        expect(typeof circle1.setRadius).toBe('function');
      });
      it('should set a new radius to the instance', () => {
        expect(circle1.getRadius()).toBe(5);
        circle1.setRadius(10);
        expect(circle1.getRadius()).toBe(10);
      });
    });

    describe('getCenter method', () => {
      it('should be defined', () => {
        expect(circle1.getRadius).toBeDefined();
        expect(typeof circle1.getRadius).toBe('function');
      });
      it('should return the center property of the instance and it should be an object of MyPoint type', () => {
        expect(circle1.getCenter()).toEqual(circle1Data.center);
        expect(circle1.getCenter() instanceof MyPoint).toBe(true);
      });
    });

    describe('setCenter method', () => {
      it('should be defined', () => {
        expect(circle1.setCenter).toBeDefined();
        expect(typeof circle1.setCenter).toBe('function');
      });
      it('should set a new center to the instance', () => {
        let newCenter = new MyPoint(10, 10);
        expect(circle1.getCenter()).toEqual(circle1Data.center);
        circle1.setCenter(newCenter);
        expect(circle1.getCenter()).toEqual(newCenter);
      });
    });

    describe('getCenterX method', () => {
      it('should be defined', () => {
        expect(circle1.getCenterX).toBeDefined();
        expect(typeof circle1.getCenterX).toBe('function');
      });
      it('should return the x value of the center property of the instance', () => {
        expect(circle1.getCenterX()).toBe(1);
      });
    });

    describe('setCenterX method', () => {
      it('should be defined', () => {
        expect(circle1.setCenterX).toBeDefined();
        expect(typeof circle1.setCenterX).toBe('function');
      });
      it('should set a new x value to the center property of the instance', () => {
        expect(circle1.getCenterX()).toBe(1);
        circle1.setCenterX(10);
        expect(circle1.getCenterX()).toBe(10);
        expect(circle1.getCenter()).toEqual(circle1Data.center);
      });
    });

    describe('getCenterY method', () => {
      it('should be defined', () => {
        expect(circle1.getCenterY).toBeDefined();
        expect(typeof circle1.getCenterY).toBe('function');
      });
      it('should return the y value of the center property of the instance', () => {
        expect(circle1.getCenterY()).toBe(1);
      });
    });

    describe('setCenterY method', () => {
      it('should be defined', () => {
        expect(circle1.setCenterY).toBeDefined();
        expect(typeof circle1.setCenterY).toBe('function');
      });
      it('should set a new y value to the center propertyy of the instance', () => {
        expect(circle1.getCenterY()).toBe(1);
        circle1.setCenterY(10);
        expect(circle1.getCenterY()).toBe(10);
        expect(circle1.getCenter()).toEqual(circle1Data.center);
      });
    });

    describe('getCenterXY method', () => {
      it('should be defined', () => {
        expect(circle1.getCenterXY).toBeDefined();
        expect(typeof circle1.getCenterXY).toBe('function');
      });
      it('should return an array of 2, with the x value of the property center in the first position and the y value of the property center in the second position', () => {
        expect(Array.isArray(circle1.getCenterXY())).toBe(true);
        expect(circle1.getCenterXY().length).toBe(2);
        expect(circle1.getCenterXY()[0]).toBe(1);
        expect(circle1.getCenterXY()[1]).toBe(1);
      });
    });

    describe('setCenterXY method', () => {
      it('should be defined', () => {
        expect(circle1.setCenterXY).toBeDefined();
        expect(typeof circle1.setCenterXY).toBe('function');
      });
      it('should set a new x value and a new y value to the center property of the instance', () => {
        expect(circle1.getCenterX()).toBe(1);
        expect(circle1.getCenterY()).toBe(1);
        circle1.setCenterXY(10, 10);
        expect(circle1.getCenterX()).toBe(10);
        expect(circle1.getCenterY()).toBe(10);
        expect(circle1.getCenter()).toEqual(circle1Data.center);
      });
    });

    describe('toString method', () => {
      it('should be defined', () => {
        expect(circle1.toString).toBeDefined();
        expect(typeof circle1.toString).toBe('function');
      });
      it('should return a string following the pattern MyCircle[radius=r, center=(x, y)]', () => {
        expect(circle1.toString()).toBe("MyCircle[radius=5, center=(1, 1)]");
        expect(circle2.toString()).toBe("MyCircle[radius=5, center=(5, 5)]");
      });
    });

    describe('getArea method', () => {
      it('should be defined', () => {
        expect(circle1.getArea).toBeDefined();
        expect(typeof circle1.getArea).toBe('function');
      });
      it('should return the area of the instance', () => {
        expect(circle1.getArea()).toBe(Math.PI * 5 * 5);
        expect(Math.round(circle1.getArea())).toBe(Math.round(Math.PI * 5 * 5));
      });
    });

    describe('getCircumference method', () => {
      it('should be defined', () => {
        expect(circle1.getCircumference).toBeDefined();
        expect(typeof circle1.getCircumference).toBe('function');
      });
      it('should return the circumference of the instance', () => {
        expect(circle1.getCircumference()).toBe(Math.PI * 2 * 5);
        expect(Math.round(circle1.getCircumference())).toBe(Math.round(Math.PI * 2 * 5));
      });
    });
  });
});