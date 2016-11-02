"use strict";

let Weapon = require("../Weapon");
let weapon;
let buyPrice = 100;
let count = 5;
let description = "A really dangerous dagger";
let ID = 10;
let name = "The Dagger";
let sellPrice = 50;
let weight = 5.5;
let isOneHanded = true;
let maxDmg = 50;
let minDmg = 40;
let strReq = 10;

describe('Weapon class', () => {
  describe('Constructor function', () => {
    it('should create a new weapon', () => {
        weapon = new Weapon(buyPrice, count, description, ID, name, sellPrice, weight, isOneHanded, maxDmg, minDmg, strReq);
        expect(weapon instanceof Weapon).toBe(true);
    });
  });
  describe('Public methods', () => {
    beforeEach(() => {
        weapon = new Weapon(buyPrice, count, description, ID, name, sellPrice, weight, isOneHanded, maxDmg, minDmg, strReq);
    });
    describe('Own methods', () => {
      describe('isItEnchanted method', () => {
        it('should return the value of the IsEnchanted property of the instance', () => {
          expect(weapon.isItEnchanted()).toBe(false);
        });
      });
      describe('enchant method', () => {
        it('should enchant the weapon and set the IsEnchanted property to true', () => {
          weapon.enchant();
          expect(weapon.isItEnchanted()).toBe(true);
        });
      });
      describe('isItOneHanded method', () => {
        it('should return true if value of the IsOneHanded property of the instance is true', () => {
          expect(weapon.isItOneHanded()).toBe(true);
        });
      });
      describe('isItUpgraded method', () => {
        it('should return true if value of the IsUpgraded property of the instance is true', () => {
          expect(weapon.isItUpgraded()).toBe(false);
        });
      });
      describe('upgrade method', () => {
        it('should upgrade the weapon and set the IsUpgraded property to true', () => {
          weapon.upgrade();
          expect(weapon.isItUpgraded()).toBe(true);
        });
      });
      describe('getMaxDmg method', () => {
        it('should return the value of the MaxDmg property of the instance', () => {
          expect(weapon.getMaxDmg()).toBe(maxDmg);
        });
      });
      describe('setMaxDmg method', () => {
        it('should set a new value to the MaxDmg property of the instance', () => {
          let newMaxDmg = weapon.getMaxDmg() + 10;
          weapon.setMaxDmg(newMaxDmg);
          expect(weapon.getMaxDmg()).toBe(newMaxDmg);
        });
        it('should return the instance when executed', () => {
          expect(weapon.setMaxDmg(100)).toBe(weapon);
        });
        it('should not set a new value if the value isnt a number', () => {
          expect(weapon.setMaxDmg("hola").getMaxDmg()).toBe(maxDmg);
        });
        it('should be able to set a 0 as value for MaxDmg', () => {
          expect(weapon.setMaxDmg(0).getMaxDmg()).toBe(0);
        });
        xit('should not set a new value if it is lower than 0', () => {
          expect(weapon.setMaxDmg(-1).getMaxDmg()).toBe(maxDmg);
        });
      });
      describe('getMinDmg method', () => {
        it('should return the value of the MinDmg property of the instance', () => {
          expect(weapon.getMinDmg()).toBe(minDmg);
        });
      });
      describe('setMinDmg method', () => {
        it('should set a new value to the MinDmg property of the instance', () => {
          let newMinDmg = weapon.getMinDmg() - 10;
          weapon.setMinDmg(newMinDmg);
          expect(weapon.getMinDmg()).toBe(newMinDmg);
        });
        it('should return the instance when executed', () => {
          expect(weapon.setMinDmg(30)).toBe(weapon);
        });
        it('should not set a new value if the value isnt a number', () => {
          expect(weapon.setMinDmg("hola").getMinDmg()).toBe(minDmg);
        });
        it('should be able to set a 0 as value for MinDmg', () => {
          expect(weapon.setMinDmg(0).getMinDmg()).toBe(0);
        });
        xit('should not set a new value if it is lower than 0', () => {
          expect(weapon.setMinDmg(-1).getMinDmg()).toBe(maxDmg);
        });
      });
      describe('getStrReq method', () => {
        it('should return the value of the StrReq property of the instance', () => {
          expect(weapon.getStrReq()).toBe(strReq);
        });
      });
    });
    describe('Inherited methods', () => {
      beforeEach(() => {
        weapon = new Weapon(buyPrice, count, description, ID, name, sellPrice, weight, isOneHanded, maxDmg, minDmg, strReq);
      });
      describe('getBuyPrice method', () => {
        it('should return the value of the BuyPrice property of the instance', function() {
            expect(weapon.getBuyPrice()).toBe(buyPrice);
        });
      });
      describe('getCount method', () => {
        it('should return the value of the Count property of the instance', () => {
          expect(weapon.getCount()).toBe(count);
        });
      });
      describe('setCount method', () => {
        it('should set a new value to the Count property of the instance', () => {
          weapon.setCount(7);
          expect(weapon.getCount()).toBe(7);
        });
        it('should return the instance when executed', () => {
          expect(weapon.setCount(7)).toBe(weapon);
        });
        it('should not set a value if it isnt a number', () => {
          expect(weapon.setCount("hola").getCount()).toBe(count);
        });
        it('should be able to set 0 as value', () => {
          expect(weapon.setCount(0).getCount()).toBe(0);
        });
        it('should not set a value if the number is less than 0', () => {
          expect(weapon.setCount(-1).getCount()).toBe(count);
        });
      });
      describe('getDescription method', () => {
        it('should return the value of the Description property of the instance', () => {
          expect(weapon.getDescription()).toBe(description);
        });
      });
      describe('getID method', () => {
        it('should return the value of the ID property of the instance', () => {
          expect(weapon.getID()).toBe(ID);
        });
      });
      describe('getName method', () => {
        it('should return the value of the Name property of the instance', () => {
          expect(weapon.getName()).toBe(name);
        });
      });
      describe('getSellPrice method', () => {
        it('should return the value of the SellPrice property of the instance', () => {
          expect(weapon.getSellPrice()).toBe(sellPrice);
        });
      });
      describe('getWeight method', () => {
        it('should return the value of the Weight property of the instance', () => {
          expect(weapon.getWeight()).toBe(weight);
        });
      });
    });
  });
});
