"use strict";

let Character = require("../Character");
let character;

let ID,
    name,
    currentHP,
    maxHP;

describe('Character Class', () => {
  beforeEach(() => {
    ID = 100;
    name = "John";
    maxHP = 1000;
    currentHP = 500;
    character = new Character(ID, name, maxHP, currentHP);
  });
  describe('Constructor function', () => {
    it('should create a new character', () => {
      expect(character instanceof Character).toBe(true);
    });
  });
  describe('Public methods', () => {
    describe('Own methods', () => {
      describe('getID function', () => {
        it('should return the ID of the instance', () => {
          expect(character.getID()).toBe(ID);
        });
      });
      describe('getName function', () => {
        it('should return the name of the instance', () => {
          expect(character.getName()).toBe(name);
        });
      });
      describe('getCurrentHP function', () => {
        it('should return the value of the current HP of the instance', () => {
          expect(character.getCurrentHP()).toBe(currentHP);
        });
      });
      describe('getMaxHP function', () => {
        it('should return the value of the maximum HP of the instance', function() {
          expect(character.getMaxHP()).toBe(maxHP);
        });
      });
      describe('setCurrentHP function', () => {
        it('shold set a new value to the current HP of the instance', () => {
          character.setCurrentHP(200);
          expect(character.getCurrentHP()).toBe(200);
        });
        it('should return the instance when executed', () => {
          expect(character.setCurrentHP(200)).toBe(character);
        });
        it('should not set a new value if the value isnt a number', () => {
          character.setCurrentHP("hola");
          expect(character.getCurrentHP()).toBe(currentHP);
        });
        it('should set the MaxHP if the new value for currentHP is greater than the MaxHP', () => {
          character.setCurrentHP(2000);
          expect(character.getCurrentHP()).toBe(maxHP);
        });
        it('should be able to set current HP to 0', () => {
          expect(character.setCurrentHP(0).getCurrentHP()).toBe(0);
        });
        xit('should set current HP to 0 if it receives a number lower than 0', () => {
          expect(character.setCurrentHP(-100).getCurrentHP()).toBe(0);
        });
      });
      describe('setMaxHP function', () => {
        it('should set a new value to the maximum HP of the instance', () => {
          character.setMaxHP(5000);
          expect(character.getMaxHP()).toBe(5000);
        });
        it('should return the instance when executed', () => {
          expect(character.setMaxHP(5000)).toBe(character);
        });
        it('should set a the value even if the max is lower than the currentHP', () => {
          expect(character.setMaxHP(300).getMaxHP()).toBe(300);
        });
        it('should not set a new value if the value isnt a number', () => {
          character.setMaxHP("Hola");
          expect(character.getMaxHP()).toBe(maxHP);
        });
        it('should not set the value if the value is 0', () => {
          expect(character.setMaxHP(0).getMaxHP()).toBe(maxHP);
        });
        xit('should not set the value if the value is lower than 0', () => {
          expect(character.setMaxHP(-1).getMaxHP()).toBe(maxHP);
        });
        xit('should set currentHP to MaxHP if currentHP is lower than the new value of maxHP', () => {
          character.setMaxHP(300);
          expect(character.getMaxHP()).toBe(300);
          expect(character.getCurrentHP()).toBe(300);
        });
      });
    });
  });
});
