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
  describe('Public methods', () => {
    beforeEach(() => {
      staff = new Staff("John", "Av. Niños Héroes 118, Tepa", "SFTech", 123.45);
    });
    describe("Inherited methods", () => {
      describe("getName method", () => {
        it("should return the value of the name property of the instance", () => {
          expect(staff.getName()).toBe("John");
        });
      });
      describe("getAddress method", () => {
        it("should return the value of the address property of the instance", () => {
          expect(staff.getAddress()).toBe("Av. Niños Héroes 118, Tepa");
        });
      });
      describe("setAddress method", () => {
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
        it('should return the value of the school property of the instance', () => {
          expect(staff.getSchool()).toBe("SFTech");
        });
      });
      describe('setSchool method', () => {
        it('should set a new value to the school property of the instance', () => {
          staff.setSchool("MIT");
          expect(staff.getSchool()).toBe("MIT");
        });
        it('should return undefined when called it', () => {
          expect(staff.setSchool("MIT")).toBeUndefined();
        });
      });
      describe('getPay method', () => {
        it('should return the value of the pay property of the instance', () => {
          expect(staff.getPay()).toBe(123.45);
        });
      });
      describe('setPay method', () => {
        it('should set a new value to the pay property of the instance', () => {
          staff.setPay(999.99);
          expect(staff.getPay()).toBe(999.99);
        });
        it('should return undefined when called it', () => {
          expect(staff.setPay(999.99)).toBeUndefined();
        });
      });
      describe("toString method", () => {
        it("should return a string following the pattern: Staff[Person[name=?,address=?],school=?,pay=?]", () => {
          expect(staff.toString()).toBe("Staff[Person[name=John,address=Av. Niños Héroes 118, Tepa],school=SFTech,pay=123.45]");
        });
      });
    });
  });
});