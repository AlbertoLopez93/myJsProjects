"use strict";

let Animal = require("../Animal");
let animal;

let ID,
    name,
    currentHP,
    maxHP,
    hostileToPlayer,
    lootDropped,
    maxDmg,
    minDmg;

describe('Animal Class', () => {
  beforeEach(() => {
    ID = 100;
    name = "Lion";
    currentHP = 500;
    maxHP = 500;
    hostileToPlayer = true;
    lootDropped = 5;
    maxDmg = 10;
    minDmg = 1
    animal = new Animal(ID, name, currentHP, maxHP, hostileToPlayer, lootDropped, maxDmg, minDmg);
  });
  describe('Constructor function', () => {
    it('should create a new animal', () => {
      expect(animal instanceof Animal).toBe(true);
    });
  });
  describe('Public methods', () => {
    describe('Own methods', () => {
      describe('isItHostileToPlayer function', () => {
        it('should return the value of the HostileToPlayer property of the instance', () => {
          expect(animal.isItHostileToPlayer()).toBe(hostileToPlayer);
        });
      });
      describe('getLootDropped function', () => {
        it('should return the value of the LootDropper property of the instance', () => {
          expect(animal.getLootDropped()).toBe(lootDropped);
        });
      });
      describe('getMaxDmg function', () => {
        it('should return the value of the MaxDmg property of the instance', () => {
          expect(animal.getMaxDmg()).toBe(maxDmg);
        });
      });
      describe('getMinDmg function', () => {
        it('should return the value of the MinDmg property of the instance', () => {
          expect(animal.getMinDmg()).toBe(minDmg);
        });
      });
    });
    describe('Inherited methods', () => {
      describe('getID function', () => {
        it('should return the ID of the instance', () => {
          expect(animal.getID()).toBe(ID);
        });
      });
      describe('getName function', () => {
        it('should return the name of the instance', () => {
          expect(animal.getName()).toBe(name);
        });
      });
      describe('getCurrentHP function', () => {
        it('should return the value of the current HP of the instance', () => {
          expect(animal.getCurrentHP()).toBe(currentHP);
        });
      });
      describe('getMaxHP function', () => {
        it('should return the value of the maximum HP of the instance', function() {
          expect(animal.getMaxHP()).toBe(maxHP);
        });
      });
      describe('setCurrentHP function', () => {
        it('shold set a new value to the current HP of the instance', () => {
          animal.setCurrentHP(200);
          expect(animal.getCurrentHP()).toBe(200);
        });
        it('should return the instance when executed', () => {
          expect(animal.setCurrentHP(200)).toBe(animal);
        });
        it('should not set a new value if the value isnt a number', () => {
          animal.setCurrentHP("hola");
          expect(animal.getCurrentHP()).toBe(currentHP);
        });
        it('should set the MaxHP if the new value for currentHP is greater than the MaxHP', () => {
          animal.setCurrentHP(2000);
          expect(animal.getCurrentHP()).toBe(maxHP);
        });
        it('should be able to set current HP to 0', () => {
          expect(animal.setCurrentHP(0).getCurrentHP()).toBe(0);
        });
        xit('should set current HP to 0 if it receives a number lower than 0', () => {
          expect(animal.setCurrentHP(-100).getCurrentHP()).toBe(0);
        });
      });
      describe('setMax function', () => {
        it('should set a new value to the maximum HP of the instance', () => {
          animal.setMaxHP(5000);
          expect(animal.getMaxHP()).toBe(5000);
        });
        it('should return the instance when executed', () => {
          expect(animal.setMaxHP(5000)).toBe(animal);
        });
        it('should set a the value even if the max is lower than the currentHP', () => {
          expect(animal.setMaxHP(300).getMaxHP()).toBe(300);
        });
        it('should not set a new value if the value isnt a number', () => {
          animal.setMaxHP("Hola");
          expect(animal.getMaxHP()).toBe(maxHP);
        });
        it('should not set the value if the value is 0', () => {
          expect(animal.setMaxHP(0).getMaxHP()).toBe(maxHP);
        });
        xit('should not set the value if the value is lower than 0', () => {
          expect(animal.setMaxHP(-1).getMaxHP()).toBe(maxHP);
        });
        xit('should set currentHP to MaxHP if currentHP is lower than the new value of maxHP', () => {
          animal.setMaxHP(300);
          expect(animal.getMaxHP()).toBe(300);
          expect(animal.getCurrentHP()).toBe(300);
        });
      });
    });
  });
});
