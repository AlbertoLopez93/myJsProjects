"use strict";

let Armor = require("../Armor");
let armor;
let buyPrice = 100;
let count = 5;
let description = "A very very heavy helmet";
let ID = 10;
let name = "The Heavy Helmet";
let sellPrice = 50;
let weight = 99.9;
let agiBonus = 7;
let intBonus = 7;
let isHeavy = true;
let physDR = 35;
let spellDR = 45;
let spiBonus = 7;
let staBonus = 7;
let strBonus = 7;

describe('Armor class', () => {
  describe('Constructor function', () => {
    it('should create a new armor', () => {
      armor = new Armor(buyPrice, count, description, ID, name, sellPrice, weight, agiBonus, intBonus, isHeavy, physDR, spellDR, spiBonus, staBonus, strBonus);
      expect(armor instanceof Armor).toBe(true);
    });
  });
  describe('Public methods', () => {
    describe('Own methods', () => {
      beforeEach(() => {
        armor = new Armor(buyPrice, count, description, ID, name, sellPrice, weight, agiBonus, intBonus, isHeavy, physDR, spellDR, spiBonus, staBonus, strBonus);
      });
      describe('getAgiBonus method', () => {
        it('should return the value of the AgiBonus property of the instance', () => {
          expect(armor.getAgiBonus()).toBe(agiBonus);
        });
      });
      describe('getIntBonus method', () => {
        it('should return the value of the IntBonus property of the instance', () => {
          expect(armor.getIntBonus()).toBe(intBonus);
        });
      });
      describe('isItHeavy method', () => {
        it('should return true if the IsHeavy property of the instance has a true value', () => {
          expect(armor.isItHeavy()).toBe(isHeavy);
        });
      });
      describe('getPhysDR method', () => {
        it('should return the value of the PhysDR property of the instance', () => {
          expect(armor.getPhysDR()).toBe(physDR);
        });
      });
      describe('getSpellDR method', () => {
        it('should return the value of the SpellDR property of the instance', () => {
          expect(armor.getSpellDR()).toBe(spellDR);
        });
      });
      describe('getSpiBonus method', () => {
        it('should return the value of the SpiBonus property of the instance', () => {
          expect(armor.getSpiBonus()).toBe(spiBonus);
        });
      });
      describe('getStaBonue method', () => {
        it('should return the value of the StaBonus property of the instance', () => {
          expect(armor.getStaBonus()).toBe(staBonus);
        });
      });
      describe('getStrBonus method', () => {
        it('should return the value of the StrBonus property of the instance', () => {
          expect(armor.getStrBonus()).toBe(strBonus);
        });
      });
    });
    describe('Inherited methods', () => {
      beforeEach(() => {
        armor = new Armor(buyPrice, count, description, ID, name, sellPrice, weight, agiBonus, intBonus, isHeavy, physDR, spellDR, spiBonus, staBonus, strBonus);
      });
      describe('getBuyPrice method', () => {
        it('should return the value of the BuyPrice property of the instance', function() {
            expect(armor.getBuyPrice()).toBe(buyPrice);
        });
      });
      describe('getCount method', () => {
        it('should return the value of the Count property of the instance', () => {
          expect(armor.getCount()).toBe(count);
        });
      });
      describe('setCount method', () => {
        it('should set a new value to the Count property of the instance', () => {
          armor.setCount(7);
          expect(armor.getCount()).toBe(7);
        });
        it('should return the instance when executed', () => {
          expect(armor.setCount(7)).toBe(armor);
        });
        it('should not set a value if it isnt a number', () => {
          expect(armor.setCount("hola").getCount()).toBe(count);
        });
        it('should be able to set 0 as value', () => {
          expect(armor.setCount(0).getCount()).toBe(0);
        });
        it('should not set a value if the number is less than 0', () => {
          expect(armor.setCount(-1).getCount()).toBe(count);
        });
      });
      describe('getDescription method', () => {
        it('should return the value of the Description property of the instance', () => {
          expect(armor.getDescription()).toBe(description);
        });
      });
      describe('getID method', () => {
        it('should return the value of the ID property of the instance', () => {
          expect(armor.getID()).toBe(ID);
        });
      });
      describe('getName method', () => {
        it('should return the value of the Name property of the instance', () => {
          expect(armor.getName()).toBe(name);
        });
      });
      describe('getSellPrice method', () => {
        it('should return the value of the SellPrice property of the instance', () => {
          expect(armor.getSellPrice()).toBe(sellPrice);
        });
      });
      describe('getWeight method', () => {
        it('should return the value of the Weight property of the instance', () => {
          expect(armor.getWeight()).toBe(weight);
        });
      });
    });
  });
});
