"use strict";

let Staff = require("../../Staff");
let staff;
let proto;
let descriptor;

describe('Staff Class', () => {
  describe('Name of the group', () => {
    it('should receive 4 arguments: name, address, school, pay and return an new instance of staff', () => {
      let newStaff = new Staff("John", "Hipster St, SF CA", "SFTech", 123.45);
      expect(newStaff instanceof Staff).toBe(true);
    });
  });
  describe('Private properties', () => {
    beforeEach(() => {
      staff = new Staff("John", "Hipster St, SF CA", "SFTech", 123.45);
    });
    it("should have a private property called name", () => {
      expect(staff.name).toBeUndefined();
    });
    it("should have a private property called address", () => {
      expect(staff.address).toBeUndefined();
    });
    it('should have a private property called school', () => {
      expect(staff.school).toBeUndefined();
    });
    it('should have a private property called pay', () => {
      expect(staff.pay).toBeUndefined();
    });
  });
  describe('Public methods', () => {
    beforeEach(() => {
      staff = new Staff("John", "Av. Niños Héroes 118, Tepa", "SFTech", 123.45);
    });
    describe("Inherited methods", () => {
      describe("getName method", () => {
        beforeEach(() => {
          descriptor = Object.getOwnPropertyDescriptor(staff, "getName");
        });
        it("should be defined", () => {
          expect(staff.getName).toBeDefined();
        });
        it("should be a function", () => {
          expect(typeof staff.getName).toBe("function");
        });
        it("should be a direct method of the instance", () => {
          expect(staff.hasOwnProperty("getName")).toBe(true);
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
          expect(staff.getName()).toBe("John");
        });
      });
      describe("getAddress method", () => {
        beforeEach(() => {
          descriptor = Object.getOwnPropertyDescriptor(staff, "getAddress");
        });
        it("should be defined", () => {
          expect(staff.getAddress).toBeDefined();
        });
        it("should be a function", () => {
          expect(typeof staff.getAddress).toBe("function");
        });
        it("should be a direct method of the instance", () => {
          expect(staff.hasOwnProperty("getAddress")).toBe(true);
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
        it("should return the value of the address property of the instance", () => {
          expect(staff.getAddress()).toBe("Av. Niños Héroes 118, Tepa");
        });
      });
      describe("setAddress method", () => {
        beforeEach(() => {
          descriptor = Object.getOwnPropertyDescriptor(staff, "setAddress");
        });
        it("should be defined", () => {
          expect(staff.setAddress).toBeDefined();
        });
        it("should be a function", () => {
          expect(typeof staff.setAddress).toBe("function");
        });
        it("should be a direct property of the instance", () => {
          expect(staff.hasOwnProperty("setAddress")).toBe(true);
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
          expect(staff.getAddress()).toBe("Av. Niños Héroes 118, Tepa");
          staff.setAddress("Av. Niños Héroes 118, Guadalajara");
          expect(staff.getAddress()).toBe("Av. Niños Héroes 118, Guadalajara");
        });
        it("should return undefined", function() {
          expect(staff.setAddress("Av. Niños Héroes 118, Guadalajara")).toBeUndefined();
        });
      });
    });
    describe('Own methods', () => {
      describe('getSchool method', () => {
        beforeEach(() => {
          descriptor = Object.getOwnPropertyDescriptor(staff, "getSchool");
        });
        it('should be defined', () => {
          expect(staff.getSchool).toBeDefined();
        });
        it('should be a function', () => {
          expect(typeof staff.getSchool).toBe('function');
        });
        it('should be a direct method of the instance', () => {
          expect(staff.hasOwnProperty("getSchool")).toBe(true);
        });
        it('should not be configurable', () => {
          expect(descriptor.configurable).toBe(false);
        });
        it('should not be writable', () => {
          expect(descriptor.writable).toBe(false);
        });
        it('should be enumerable', () => {
          expect(descriptor.enumerable).toBe(true);
        });
        it('should return the value of the school property of the instance', () => {
          expect(staff.getSchool()).toBe("SFTech");
        });
      });
      describe('setSchool method', () => {
        beforeEach(() => {
          descriptor = Object.getOwnPropertyDescriptor(staff, "setSchool");
        });
        it('should be defined', () => {
          expect(staff.setSchool).toBeDefined();
        });
        it('should be a function', () => {
          expect(typeof staff.setSchool).toBe('function');
        });
        it('should be a direct method of the instance', () => {
          expect(staff.hasOwnProperty("setSchool")).toBe(true);
        });
        it('should not be configurable', () => {
          expect(descriptor.configurable).toBe(false);
        });
        it('should not be writable', () => {
          expect(descriptor.writable).toBe(false);
        });
        it('should be enumerable', () => {
          expect(descriptor.enumerable).toBe(true);
        });
        it('should set a new value to the school property of the instance', () => {
          staff.setSchool("MIT");
          expect(staff.getSchool()).toBe("MIT");
        });
        it('should return undefined when called it', () => {
          expect(staff.setSchool("MIT")).toBeUndefined();
        });
      });
      describe('getPay method', () => {
        beforeEach(() => {
          descriptor = Object.getOwnPropertyDescriptor(staff, "getPay");
        });
        it('should be defined', () => {
          expect(staff.getPay).toBeDefined();
        });
        it('should be a function', () => {
          expect(typeof staff.getPay).toBe('function');
        });
        it('should be a direct method of the instance', () => {
          expect(staff.hasOwnProperty("getPay")).toBe(true);
        });
        it('should not be configurable', () => {
          expect(descriptor.configurable).toBe(false);
        });
        it('should not be writable', () => {
          expect(descriptor.writable).toBe(false);
        });
        it('should be enumerable', () => {
          expect(descriptor.enumerable).toBe(true);
        });
        it('should return the value of the pay property of the instance', () => {
          expect(staff.getPay()).toBe(123.45);
        });
      });
      describe('setPay method', () => {
        beforeEach(() => {
          descriptor = Object.getOwnPropertyDescriptor(staff, "setPay");
        });
        it('should be defined', () => {
          expect(staff.setPay).toBeDefined();
        });
        it('should be a function', () => {
          expect(typeof staff.setPay).toBe('function');
        });
        it('should be a direct method of the instance', () => {
          expect(staff.hasOwnProperty("setPay")).toBe(true);
        });
        it('should not be configurable', () => {
          expect(descriptor.configurable).toBe(false);
        });
        it('should not be writable', () => {
          expect(descriptor.writable).toBe(false);
        });
        it('should be enumerable', () => {
          expect(descriptor.enumerable).toBe(true);
        });
        it('should set a new value to the pay property of the instance', () => {
          staff.setPay(999.99);
          expect(staff.getPay()).toBe(999.99);
        });
        it('should return undefined when called it', () => {
          expect(staff.setPay(999.99)).toBeUndefined();
        });
      });
      describe("toString method", () => {
        beforeEach(() => {
          proto = Object.getPrototypeOf(staff);
          descriptor = Object.getOwnPropertyDescriptor(proto, "toString");
        });
        it("should be defined", () => {
          expect(staff.toString).toBeDefined();
        });
        it("should be a function", () => {
          expect(typeof staff.toString).toBe("function");
        });
        it("should not be a direct method of the instance", () => {
          expect(staff.hasOwnProperty("toString")).toBe(false);
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
        it("should return a string following the pattern: Staff[Person[name=?,address=?],school=?,pay=?]", () => {
          expect(staff.toString()).toBe("Staff[Person[name=John,address=Av. Niños Héroes 118, Tepa],school=SFTech,pay=123.45]");
        });
      });
    });
  });
});