"use strict";

let Item = require("../Item");
let item;
let buyPrice = 100;
let count = 5;
let description = "Some item";
let ID = 10;
let name = "The Item";
let sellPrice = 50;
let weight = 5.5;

describe('Item Class', () => {
  describe('Construct function', () => {
    it('should create a new item', () => {
      item = new Item(buyPrice, count, description, ID, name, sellPrice, weight);
      expect(item instanceof Item).toBe(true);
    });
  });
  describe('Public methods', () => {
    beforeEach(() => {
      item = new Item(buyPrice, count, description, ID, name, sellPrice, weight);
    });
    describe('getBuyPrice method', () => {
      it('should return the value of the BuyPrice property of the instance', function() {
          expect(item.getBuyPrice()).toBe(buyPrice);
      });
    });
    describe('getCount method', () => {
      it('should return the value of the Count property of the instance', () => {
        expect(item.getCount()).toBe(count);
      });
    });
    describe('setCount method', () => {
      it('should set a new value to the Count property of the instance', () => {
        item.setCount(7);
        expect(item.getCount()).toBe(7);
      });
      it('should return the instance when executed', () => {
        expect(item.setCount(7)).toBe(item);
      });
      it('should not set a value if it isnt a number', () => {
        expect(item.setCount("hola").getCount()).toBe(count);
      });
      it('should be able to set 0 as value', () => {
        expect(item.setCount(0).getCount()).toBe(0);
      });
      it('should not set a value if the number is less than 0', () => {
        expect(item.setCount(-1).getCount()).toBe(count);
      });
    });
    describe('getDescription method', () => {
      it('should return the value of the Description property of the instance', () => {
        expect(item.getDescription()).toBe(description);
      });
    });
    describe('getID method', () => {
      it('should return the value of the ID property of the instance', () => {
        expect(item.getID()).toBe(ID);
      });
    });
    describe('getName method', () => {
      it('should return the value of the Name property of the instance', () => {
        expect(item.getName()).toBe(name);
      });
    });
    describe('getSellPrice method', () => {
      it('should return the value of the SellPrice property of the instance', () => {
        expect(item.getSellPrice()).toBe(sellPrice);
      });
    });
    describe('getWeight method', () => {
      it('should return the value of the Weight property of the instance', () => {
        expect(item.getWeight()).toBe(weight);
      });
    });
  });
});
