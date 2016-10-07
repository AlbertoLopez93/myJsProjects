"use strict";

let MyPoint = require("../MyPoint");
let data1 = {x: 1, y: 1};
let data2 = {x: 2, y: 2};

let point0;
let point1;
let point2;

describe('MyPoint class', () => {

  describe('Constructor', () => {

    it('should be defined', () => {
      expect(MyPoint).toBeDefined();
      expect(typeof MyPoint).toBe('function');
    });
    it('should return a new instance even if we dont pass any parameter to it', () => {
      expect(new MyPoint()).toBeDefined();
    });
    it('should return new instance if we pass 2 parameters to it', () => {
      expect(new MyPoint(1, 1)).toBeDefined();
    });
  });

  describe('Private properties', () => {
    it('should have private property called x', () => {
      expect(new MyPoint().x).toBeUndefined();
    });
    it('should have a private property called y', () => {
      expect(new MyPoint().y).toBeUndefined();
    });
  });

  describe('Public Methods', () => {

    beforeEach(() => {
      point0 = new MyPoint();
      point1 = new MyPoint(data1.x, data1.y);
      point2 = new MyPoint(data2.x, data2.y);
    });

    describe('getX method', () => {
      it('should be defined', () => {
        expect(point0.getX).toBeDefined();
        expect(typeof point0.getX).toBe('function');
      });
      it('should return the value of the x property of the instance', () => {
        expect(point1.getX()).toBe(1);
        expect(point2.getX()).toBe(2);
      });
    });

    describe('setX method', () => {
      it('should be defined', () => {
        expect(point0.setX).toBeDefined();
        expect(typeof point0.setX).toBe('function');
      });
      it('should set a new value to the X property of the instance', () => {
        expect(point0.getX()).toBe(0);
        point0.setX(1);
        expect(point0.getX()).toBe(1);
      });
    });

    describe('getY method', () => {
      it('should be defined', () => {
        expect(point0.getX).toBeDefined();
        expect(typeof point0.getX).toBe('function');
      });
      it('should return the value of the y property of the instance', () => {
        expect(point1.getY()).toBe(1);
        expect(point2.getY()).toBe(2);
      });
    });

    describe('setY method', () => {
      it('should be defined', () => {
        expect(point0.setY).toBeDefined();
        expect(typeof point0.setY).toBe('function');
      });
      it('should set a new value to the Y property of the instance', () => {
        expect(point0.getY()).toBe(0);
        point0.setY(1);
        expect(point0.getY()).toBe(1);
      });
    });

    describe('getXY method', () => {
      it('should be defined', () => {
        expect(point0.getXY).toBeDefined();
        expect(typeof point0.getXY).toBe('function');
      });
      it('should return an array of 2, with the x property value in the first position and the y property value in the second position', () => {
        expect(Array.isArray(point0.getXY())).toBe(true);
        expect(point0.getXY().length).toBe(2);
        expect(point0.getXY()[0]).toBe(0);
        expect(point0.getXY()[1]).toBe(0);
      });
    });

    describe('setXY method', () => {
      it('should be defined', () => {
        expect(point0.setXY).toBeDefined();
        expect(typeof point0.setXY).toBe('function');
      });
      it('should set a new value to the x property and a new value to the y property of the instance', () => {
        expect(point0.getX()).toBe(0);
        expect(point0.getY()).toBe(0);
        point0.setXY(1, 1);
        expect(point0.getX()).toBe(1);
        expect(point0.getY()).toBe(1);
      });
    });

    describe('toString method', () => {
      it('should be defined', () => {
        expect(point1.toString).toBeDefined();
        expect(typeof point1.toString).toBe('function');
      });
      it('should return a string following the pattern (x, y), where x represent the x property, and y represent the y property of the instance', () => {
        expect(point0.toString()).toBe("(0, 0)");
        expect(point1.toString()).toBe("(1, 1)");
        expect(point2.toString()).toBe("(2, 2)");
      });
    });

    describe('distance method', () => {
      it('should be defined', () => {
        expect(point0.distance).toBeDefined();
        expect(typeof point0.distance).toBe('function');
      });
      it('should return the distance between the instance and the point 0,0 when is called without arguments', () => {
        expect(point0.distance()).toBe(0);
        expect(point1.distance()).toBe(Math.sqrt(Math.pow(point1.getX(), 2) + Math.pow(point1.getY(), 2)));
        expect(point2.distance()).toBe(Math.sqrt(Math.pow(point2.getX(), 2) + Math.pow(point2.getY(), 2)));
      });
      it('should return the disctance between the instance and the point received as argument', () => {
        let newPoint = new MyPoint(4, 4);
        let distance = Math.sqrt(Math.pow(Math.abs(point1.getX() - newPoint.getX()), 2) + Math.pow(Math.abs(point1.getY() - newPoint.getY()), 2) )
        expect(point1.distance(newPoint)).toBe(distance);
      });
      it('should return the distance between the instance and the coordenates received as argument', () => {
        let newPoint = new MyPoint(4, 4);
        let distance = Math.sqrt(Math.pow(Math.abs(point1.getX() - newPoint.getX()), 2) + Math.pow(Math.abs(point1.getY() - newPoint.getY()), 2) );
        expect(point1.distance(4, 4)).toBe(distance);
      });
    });

  });
});