"use strict";

let Person = require("../../Person");
let person;

describe("Person Constructor Function", () => {
  beforeEach(() => {
    person = new Person("John", "Av. Niños Héroes 118, Tepa")
  });
  describe("Private properties", () => {
    it("should have a private property called name", () => {
      expect(person.name).toBeUndefined();
    });
    it("should have private property called address", () => {
      expect(person.address).toBeUndefined();
    });
  });
  describe("Public methods", () => {
    let descriptor;
    let proto;
    describe("getName method", () => {
      beforeEach(() => {
        descriptor = Object.getOwnPropertyDescriptor(person, "getName");
      });
      it("should be defined", () => {
        expect(person.getName).toBeDefined();
      });
      it("should be a function", () => {
        expect(typeof person.getName).toBe("function");
      });
      it("should be a direct method of the instance", () => {
        expect(person.hasOwnProperty("getName")).toBe(true);
      });
      it("should not be configurable", () => {
        expect(descriptor.configurable).toBe(false);
      });
      it("should not be writable", () => {
        expect(descriptor.writable).toBe(false);
      });
      it("should be enumerable", () => {
        expect(descriptor.enumerable).toBe(true);
      });
      it("should return the value of the name property of the instance", () => {
        expect(person.getName()).toBe("John");
      });
    });
    describe("getAddress method", () => {
      beforeEach(() => {
        descriptor = Object.getOwnPropertyDescriptor(person, "getAddress");
      });
      it("should be defined", () => {
        expect(person.getAddress).toBeDefined();
      });
      it("should be a function", () => {
        expect(typeof person.getAddress).toBe("function");
      });
      it("should be a direct method of the instance", () => {
        expect(person.hasOwnProperty("getAddress")).toBe(true);
      });
      it("should not be configurable", () => {
        expect(descriptor.configurable).toBe(false);
      });
      it("should not be writable", () => {
        expect(descriptor.writable).toBe(false);
      });
      it("should be enumerable", () => {
        expect(descriptor.enumerable).toBe(true);
      });
      it("should return the the value of the address property of the instance", () => {
        expect(person.getAddress()).toBe("Av. Niños Héroes 118, Tepa");
      });
    });
    describe("setAddress method", () => {
      beforeEach(() => {
        descriptor = Object.getOwnPropertyDescriptor(person, "setAddress");
      });
      it("should be defined", () => {
        expect(person.setAddress).toBeDefined();
      });
      it("should be a function", () => {
        expect(typeof person.setAddress).toBe("function");
      });
      it("should be a direct method of the instance", () => {
        expect(person.hasOwnProperty("setAddress")).toBe(true);
      });
      it("should not be configurable", () => {
        expect(descriptor.configurable).toBe(false);
      });
      it("should not be writable", () => {
        expect(descriptor.writable).toBe(false);
      });
      it("should be enumerable", () => {
        expect(descriptor.enumerable).toBe(true);
      });
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
      beforeEach(() => {
        proto = Object.getPrototypeOf(person);
        descriptor = Object.getOwnPropertyDescriptor(proto, "toString");
      });
      it("should be defined", () => {
        expect(person.toString).toBeDefined();
      });
      it("should be a function", () => {
        expect(typeof person.toString).toBe("function");
      });
      it("should not be a direct method of the instance", () => {
        expect(person.hasOwnProperty("toString")).toBe(false);
      });
      it("should be a method in the prototype of the Constructor", () => {
        expect(proto.hasOwnProperty("toString")).toBe(true);
      });
      it("should not be configurable", () => {
        expect(descriptor.configurable).toBe(false);
      });
      it("should not be writable", () => {
        expect(descriptor.writable).toBe(false);
      });
      it("should be enumerable", () => {
        expect(descriptor.enumerable).toBe(true);
      });
      it("should return a string following the pattern: Person[name=?,address=?]", () => {
        expect(person.toString()).toBe("Person[name=John,address=Av. Niños Héroes 118, Tepa]");
      });
    });
  });
});