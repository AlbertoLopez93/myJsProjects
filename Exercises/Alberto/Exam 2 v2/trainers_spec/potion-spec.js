"use strict";

let Potion = require("../Potion");
let potion;
let buyPrice = 100;
let count = 5;
let description = "A really magic potion";
let ID = 10;
let name = "Magic Potion";
let sellPrice = 50;
let weight = 5.5;
let hpRestore = 100;
let mpRestore = 100;

describe('Potion class', () => {
  describe('Constructor function', () => {
    it('should create a new potion', () => {
      potion = new Potion(buyPrice, count, description, ID, name, sellPrice, weight, hpRestore, mpRestore);
      expect(potion instanceof Potion).toBe(true);
    });
  });
  describe('Public methods', () => {
    describe('Own methods', () => {
      beforeEach(() => {
        potion = new Potion(buyPrice, count, description, ID, name, sellPrice, weight, hpRestore, mpRestore);
      });
      describe('HPRestore method', () => {
        it('should return the value of the HPRestore property of the instance', () => {
          expect(potion.HPRestore()).toBe(hpRestore);
        });
      });
      describe('MPRestore method', () => {
        it('should return the value of the MPRestore property of the instance', () => {
          expect(potion.MPRestore()).toBe(mpRestore);
        });
      });
    });
    describe('Inherited methods', () => {
      beforeEach(() => {
        potion = new Potion(buyPrice, count, description, ID, name, sellPrice, weight, hpRestore, mpRestore);
      });
      describe('getBuyPrice method', () => {
        it('should return the value of the BuyPrice property of the instance', function() {
            expect(potion.getBuyPrice()).toBe(buyPrice);
        });
      });
      describe('getCount method', () => {
        it('should return the value of the Count property of the instance', () => {
          expect(potion.getCount()).toBe(count);
        });
      });
      describe('setCount method', () => {
        it('should set a new value to the Count property of the instance', () => {
          potion.setCount(7);
          expect(potion.getCount()).toBe(7);
        });
        it('should return the instance when executed', () => {
          expect(potion.setCount(7)).toBe(potion);
        });
        it('should not set a value if it isnt a number', () => {
          expect(potion.setCount("hola").getCount()).toBe(count);
        });
        it('should be able to set 0 as value', () => {
          expect(potion.setCount(0).getCount()).toBe(0);
        });
        it('should not set a value if the number is less than 0', () => {
          expect(potion.setCount(-1).getCount()).toBe(count);
        });
      });
      describe('getDescription method', () => {
        it('should return the value of the Description property of the instance', () => {
          expect(potion.getDescription()).toBe(description);
        });
      });
      describe('getID method', () => {
        it('should return the value of the ID property of the instance', () => {
          expect(potion.getID()).toBe(ID);
        });
      });
      describe('getName method', () => {
        it('should return the value of the Name property of the instance', () => {
          expect(potion.getName()).toBe(name);
        });
      });
      describe('getSellPrice method', () => {
        it('should return the value of the SellPrice property of the instance', () => {
          expect(potion.getSellPrice()).toBe(sellPrice);
        });
      });
      describe('getWeight method', () => {
        it('should return the value of the Weight property of the instance', () => {
          expect(potion.getWeight()).toBe(weight);
        });
      });
    });
  });
});
