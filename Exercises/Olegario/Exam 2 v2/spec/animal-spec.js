"use strict";

let Animal = require("../Animal");
let animal;

describe("Animal Class", () => {
  describe("Constructor", () => {
    it("should work when called without areguments", () => {
      expect(new Animal() instanceof Animal).toBe(true);
    });
    it("should work when called with arguments", () => {
      expect(new Animal(44, "juan", 5, 1, true, 3, 5, 1) instanceof Animal).toBe(true);
    });
  });
  describe("Public methods", () => {
      animal = new Animal(44, "juan", 5, 1, true, 3, 5, 1);
    describe("getID method", () => {
      it("should return the ID of the instance", () => {
        expect(animal.getID()).toBe(44);
      });
      it("should return undefined by default when invoked constructor with no arguments", () => {
        expect(new Animal().getID()).toBe(undefined);
      });
    });
    describe("setID", () => {
      animal = new Animal(44, "juan", 5, 1, true, 3, 5, 1);
      it("don´t should set a new ID to the instance", () => {
        animal.id = 32;
        expect(animal.getID()).toBe(44);
      });
    });

      animal = new Animal(44, "juan", 5, 1, true, 3, 5, 1);
    describe("getName method", () => {
      it("should return the Name of the instance", () => {
        expect(animal.getName()).toBe("juan");
      });
      it("should return undefined by default when invoked constructor with no arguments", () => {
        expect(new Animal().getName()).toBe(undefined);
      });
    });
    describe("setName", () => {
      animal = new Animal(44, "juan", 5, 1, true, 3, 5, 1);
      it("don´t should set a new Name to the instance", () => {
        animal.Name = "hola";
        expect(animal.getName()).toBe("juan");
      });
    });

      animal = new Animal(44, "juan", 5, 1, true, 3, 5, 1);
    describe("getCurrentHP method", () => {
      it("should return the CurrentHP of the instance", () => {
        expect(animal.getCurrentHP()).toBe(1);
      });
      it("should return undefined by default when invoked constructor with no arguments", () => {
        expect(new Animal().getCurrentHP()).toBe(undefined);
      });
    });
    describe("setCurrentHP", () => {
      animal = new Animal(44, "juan", 5, 1, true, 3, 5, 1);
      it("should set a new CurrentHP to the instance", () => {
        animal.setCurrentHP(32);
        expect(animal.getCurrentHP()).toBe(5);
      });
    });

      animal = new Animal(44, "juan", 5, 1, true, 3, 5, 1);
    describe("getMaxHP method", () => {
      it("should return the MaxHP of the instance", () => {
        expect(animal.getMaxHP()).toBe(5);
      });
      it("should return undefined by default when invoked constructor with no arguments", () => {
        expect(new Animal().getMaxHP()).toBe(undefined);
      });
    });
    describe("setMaxHP", () => {
      animal = new Animal(44, "juan", 5, 1, true, 3, 5, 1);
      it("should set a new MaxHP to the instance", () => {
        animal.setMaxHP(32);
        expect(animal.getMaxHP()).toBe(32);
      });
    });

  });
});
