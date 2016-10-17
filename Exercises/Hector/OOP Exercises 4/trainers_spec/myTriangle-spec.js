"use strict";

let MyPoint = require("../MyPoint");
let MyTriangle = require("../MyTriangle");

let scaleneData = {x1: 0, y1: 0, x2: 0, y2: 3, x3: 2, y3: 2};
let isoscelesData = {x1: 0, y1: 0, x2: 0, y2: 2, x3: 2, y3: 0};

let scalene;
let isosceles;
let triangle;

describe('MyTriangle Class', () => {

  beforeEach(() => {
    scalene = new MyTriangle(scaleneData.x1, scaleneData.y1, scaleneData.x2, scaleneData.y2, scaleneData.x3, scaleneData.y3);
    let isoscelesV1 = new MyPoint(isoscelesData.x1, isoscelesData.y1);
    let isoscelesV2 = new MyPoint(isoscelesData.x2, isoscelesData.y2);
    let isoscelesV3 = new MyPoint(isoscelesData.x3, isoscelesData.y3);
    isosceles = new MyTriangle(isoscelesV1, isoscelesV2, isoscelesV3);
    triangle = new MyTriangle(0, 0, 0, 2, 2, 0);
  });

  describe('Private properties', () => {
    it('should have a private property called v1', () => {
      expect(triangle.v1).toBeUndefined();
    });
    it('should have a private property called v2', () => {
      expect(triangle.v2).toBeUndefined();
    });
    it('should have a private property called v3', () => {
      expect(triangle.v3).toBeUndefined();
    });
  });

  describe('Public methods', () => {
    describe('toString method', () => {
      it('should be defined', () => {
        expect(triangle.toString).toBeDefined();
        expect(typeof triangle.toString).toBe('function');
      });
      it('should return a string following the pattern: MyTriangle[v1=(x1, y1), v2=(x2, y2), v3=(x3, y3)]', () => {
        expect(scalene.toString()).toBe("MyTriangle[v1=(0, 0), v2=(0, 3), v3=(2, 2)]");
        expect(isosceles.toString()).toBe("MyTriangle[v1=(0, 0), v2=(0, 2), v3=(2, 0)]");
      });
    });

    describe('getPerimeter method', () => {
      it('should be defined', () => {
        expect(triangle.getPerimeter).toBeDefined();
        expect(typeof triangle.getPerimeter).toBe('function');
      });
      it('should return the perimeter of the instance', () => {
        let scaleneSide1to2 = Math.sqrt(Math.pow(Math.abs(scaleneData.x1 - scaleneData.x2), 2) + Math.pow(Math.abs(scaleneData.y1 - scaleneData.y2), 2));
        let scaleneSide1to3 = Math.sqrt(Math.pow(Math.abs(scaleneData.x1 - scaleneData.x3), 2) + Math.pow(Math.abs(scaleneData.y1 - scaleneData.y3), 2));
        let scaleneSide2to3 = Math.sqrt(Math.pow(Math.abs(scaleneData.x2 - scaleneData.x3), 2) + Math.pow(Math.abs(scaleneData.y2 - scaleneData.y3), 2));

        expect(scalene.getPerimeter()).toBe(scaleneSide1to2 + scaleneSide1to3 + scaleneSide2to3);
        expect(Math.round(scalene.getPerimeter())).toBe(Math.round(scaleneSide1to2 + scaleneSide1to3 + scaleneSide2to3));
      });
    });
    describe('getType method', () => {
      it('should be defined', () => {
        expect(triangle.getType).toBeDefined();
        expect(typeof triangle.getType).toBe('function');
      });
      it('should return a string with the correct type of the instance', () => {
        expect(scalene.getType()).toBe("scalene");
        expect(isosceles.getType()).toBe("isosceles");
      });
    });
  });
});