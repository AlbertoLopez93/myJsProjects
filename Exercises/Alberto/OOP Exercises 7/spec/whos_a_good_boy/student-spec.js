"use strict";

let Student = require("../../Student");
let student;
let proto;
let descriptor;

describe("Student Constructor Function", () => {
  describe("Constructor method", () => {
    it("should receive 5 arguments: name, address, program, year and fee and return a new instance of student", () => {
      let newStudent = new Student("John", "Av. Niños Héroes 118, Tepa", "Software Eng", 2016, 12.34);
      expect(newStudent instanceof Student).toBe(true);
    });
  });
  describe("Public methods", () => {
    beforeEach(() => {
      student = new Student("John", "Av. Niños Héroes 118, Tepa", "Software Eng", 2016, 12.34);
    });
    describe("Inherited methods", () => {
      describe("getName method", () => {
        it("should return the value of the name property of the instance", () => {
          expect(student.getName()).toBe("John");
        });
      });
      describe("getAddress method", () => {
        it("should return the value of the address property of the instance", () => {
          expect(student.getAddress()).toBe("Av. Niños Héroes 118, Tepa");
        });
      });
      describe("setAddress method", () => {
        it("it should set a new value to the address property of the instance", () => {
          expect(student.getAddress()).toBe("Av. Niños Héroes 118, Tepa");
          student.setAddress("Av. Niños Héroes 118, Guadalajara");
          expect(student.getAddress()).toBe("Av. Niños Héroes 118, Guadalajara");
        });
        it("should return undefined", function() {
          expect(student.setAddress("Av. Niños Héroes 118, Guadalajara")).toBeUndefined();
        });
      });
    });
    describe("Own methods", () => {
      describe("getProgram method", () => {
        it("should return the value of the program property of the instance", () => {
          expect(student.getProgram()).toBe("Software Eng");
        });
      });
      describe("setProgram method", () => {
        it("should set a new value to the program property of the instance", () => {
          expect(student.getProgram()).toBe("Software Eng");
          student.setProgram("Web Development");
          expect(student.getProgram()).toBe("Web Development");
        });
        it("should return undefined when called it", () => {
          expect(student.setProgram("Web Development")).toBeUndefined();
        });
      });
      describe("getYear method", () => {
        it("should return the value of the year property of the instance", () => {
          expect(student.getYear()).toBe(2016);
        });
      });
      describe("setYear method", () => {
        it("should set a new value to the year property of the instance", () => {
          expect(student.getYear()).toBe(2016);
          student.setYear(2017);
          expect(student.getYear()).toBe(2017);
        });
        it("should return undefined when called it", () => {
          expect(student.setYear(2017)).toBeUndefined();
        });
      });
      describe("getFee method", () => {
        it("should return the value of the fee property of the instance", () => {
          expect(student.getFee()).toBe(12.34);
        });
      });
      describe("setFee method", () => {
        it("should set a new value to the fee property of the instance", () => {
          expect(student.getFee()).toBe(12.34);
          student.setFee(43.21);
          expect(student.getFee()).toBe(43.21);
        });
        it("should return undefined when called it", () => {
          expect(student.setFee(43.21)).toBeUndefined();
        });
      });
      describe("toString method", () => {
        it("should return a string following the pattern: Student[Person[name=?,address=?],program=?,year=?,fee=?]", () => {
          expect(student.toString()).toBe("Student[Person[name=John,address=Av. Niños Héroes 118, Tepa],program=Software Eng,year=2016,fee=12.34]");
        });
      });
    });
  });
});