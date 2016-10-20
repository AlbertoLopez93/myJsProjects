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
  describe("Private properties", () => {
    beforeEach(() => {
      student = new Student("John", "Av. Niños Héroes 118, Tepa", "Software Eng", 2016, 12.34);
    });
    it("should have a private property called name", () => {
      expect(student.name).toBeUndefined();
    });
    it("should have a private property called address", () => {
      expect(student.address).toBeUndefined();
    });
    it("should have a private property called program", () => {
      expect(student.program).toBeUndefined();
    });
    it("should have a private property called year", () => {
      expect(student.year).toBeUndefined();
    });
    it("should have a private property called fee", () => {
      expect(student.fee).toBeUndefined();
    });
  });
  describe("Public methods", () => {
    beforeEach(() => {
      student = new Student("John", "Av. Niños Héroes 118, Tepa", "Software Eng", 2016, 12.34);
    });
    describe("Inherited methods", () => {
      describe("getName method", () => {
        beforeEach(() => {
          descriptor = Object.getOwnPropertyDescriptor(student, "getName");
        });
        it("should be defined", () => {
          expect(student.getName).toBeDefined();
        });
        it("should be a function", () => {
          expect(typeof student.getName).toBe("function");
        });
        it("should be a direct method of the instance", () => {
          expect(student.hasOwnProperty("getName")).toBe(true);
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
          expect(student.getName()).toBe("John");
        });
      });
      describe("getAddress method", () => {
        beforeEach(() => {
          descriptor = Object.getOwnPropertyDescriptor(student, "getAddress");
        });
        it("should be defined", () => {
          expect(student.getAddress).toBeDefined();
        });
        it("should be a function", () => {
          expect(typeof student.getAddress).toBe("function");
        });
        it("should be a direct method of the instance", () => {
          expect(student.hasOwnProperty("getAddress")).toBe(true);
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
          expect(student.getAddress()).toBe("Av. Niños Héroes 118, Tepa");
        });
      });
      describe("setAddress method", () => {
        beforeEach(() => {
          descriptor = Object.getOwnPropertyDescriptor(student, "setAddress");
        });
        it("should be defined", () => {
          expect(student.setAddress).toBeDefined();
        });
        it("should be a function", () => {
          expect(typeof student.setAddress).toBe("function");
        });
        it("should be a direct property of the instance", () => {
          expect(student.hasOwnProperty("setAddress")).toBe(true);
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
        beforeEach(() => {
          descriptor = Object.getOwnPropertyDescriptor(student, "getProgram");
        });
        it("should be defined", () => {
          expect(student.getProgram).toBeDefined();
        });
        it("should be a function", () => {
          expect(typeof student.getProgram).toBe("function");
        });
        it("should be a direct method of the instance", () => {
          expect(student.hasOwnProperty("getProgram")).toBe(true);
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
        it("should return the value of the program property of the instance", () => {
          expect(student.getProgram()).toBe("Software Eng");
        });
      });
      describe("setProgram method", () => {
        beforeEach(() => {
          descriptor = Object.getOwnPropertyDescriptor(student, "setProgram");
        });
        it("should be defined", () => {
          expect(student.setProgram).toBeDefined();
        });
        it("should be a function", () => {
          expect(typeof student.setProgram).toBe("function");
        });
        it("should be a direct method of the instance", () => {
          expect(student.hasOwnProperty("setProgram")).toBe(true);
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
        beforeEach(() => {
          descriptor = Object.getOwnPropertyDescriptor(student, "getYear");
        });
        it("should be defined", () => {
          expect(student.getYear).toBeDefined();
        });
        it("should be a function", () => {
          expect(typeof student.getYear).toBe("function");
        });
        it("should be a direct method of the instance", () => {
          expect(student.hasOwnProperty("getYear")).toBe(true);
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
        it("should return the value of the year property of the instance", () => {
          expect(student.getYear()).toBe(2016);
        });
      });
      describe("setYear method", () => {
        beforeEach(() => {
          descriptor = Object.getOwnPropertyDescriptor(student, "setYear");
        });
        it("should be defined", () => {
          expect(student.setYear).toBeDefined();
        });
        it("should be a function", () => {
          expect(typeof student.setYear).toBe("function");
        });
        it("should be a direct method of the instance", () => {
          expect(student.hasOwnProperty("setYear")).toBe(true);
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
        beforeEach(() => {
          descriptor = Object.getOwnPropertyDescriptor(student, "getFee");
        });
        it("should be defined", () => {
          expect(student.getFee).toBeDefined();
        });
        it("should be a function", () => {
          expect(typeof student.getFee).toBe("function");
        });
        it("should be a direct method of the instance", () => {
          expect(student.hasOwnProperty("getFee")).toBe(true);
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
        it("should return the value of the fee property of the instance", () => {
          expect(student.getFee()).toBe(12.34);
        });
      });
      describe("setFee method", () => {
        beforeEach(() => {
          descriptor = Object.getOwnPropertyDescriptor(student, "setFee");
        });
        it("should be defined", () => {
          expect(student.setFee).toBeDefined();
        });
        it("should be a function", () => {
          expect(typeof student.setFee).toBe("function");
        });
        it("should be a direct method of the instance", () => {
          expect(student.hasOwnProperty("setFee")).toBe(true);
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
        beforeEach(() => {
          proto = Object.getPrototypeOf(student);
          descriptor = Object.getOwnPropertyDescriptor(proto, "toString");
        });
        it("should be defined", () => {
          expect(student.toString).toBeDefined();
        });
        it("should be a function", () => {
          expect(typeof student.toString).toBe("function");
        });
        it("should not be a direct method of the instance", () => {
          expect(student.hasOwnProperty("toString")).toBe(false);
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
        it("should return a string following the pattern: Student[Person[name=?,address=?],program=?,year=?,fee=?]", () => {
          expect(student.toString()).toBe("Student[Person[name=John,address=Av. Niños Héroes 118, Tepa],program=Software Eng,year=2016,fee=12.34]");
        });
      });
    });
  });
});