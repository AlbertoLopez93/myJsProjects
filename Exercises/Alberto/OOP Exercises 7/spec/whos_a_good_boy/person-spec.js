"use strict";

let Person = require("../../Person");
let person;

describe("Person Constructor Function", () => {
  beforeEach(() => {
    person = new Person("John", "Av. Niños Héroes 118, Tepa")
  });
  describe("Public methods", () => {
    describe("getName method", () => {
      it("should return the value of the name property of the instance", () => {
        expect(person.getName()).toBe("John");
      });
    });
    describe("getAddress method", () => {
      it("should return the the value of the address property of the instance", () => {
        expect(person.getAddress()).toBe("Av. Niños Héroes 118, Tepa");
      });
    });
    describe("setAddress method", () => {
      it("it should set a new value to the address property of the instance", () => {
        expect(person.getAddress()).toBe("Av. Niños Héroes 118, Tepa");
        person.setAddress("Av. Niños Heroes 118, Guadalajara");
        expect(person.getAddress()).toBe("Av. Niños Heroes 118, Guadalajara");
      });
      it("should return undefined", function() {
        expect(person.setAddress("Av. Niños Heroes 118, Guadalajara")).toBeUndefined();
      });
    });
    describe("toString method", () => {
      it("should return a string following the pattern: Person[name=?,address=?]", () => {
        expect(person.toString()).toBe("Person[name=John,address=Av. Niños Héroes 118, Tepa]");
      });
    });
  });
});