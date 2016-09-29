"use strict";

let Employee = require("../Employee");

xdescribe("Employee Class", function () {
    let data = {id: 1, firstName: "John", lastName: "Doe", salary: 100};
    let employee;

    beforeEach(function () {
        employee = new Employee(data);
    });

    it("should be defined", function () {
        expect(Employee).toBeDefined();
    });

    describe("Private properties", function () {
        it("should have an id property as private", function () {
            expect(employee.id).toBe(undefined);
        });
        it("should have an firstName property as private", function () {
            expect(employee.firstName).toBe(undefined);
        });
        it("should have an lastName property as private", function () {
            expect(employee.lastName).toBe(undefined);
        });
        it("should have an salary property as private", function () {
            expect(employee.salary).toBe(undefined);
        });
    });

    describe("Methods", function () {
        describe("getID method", function () {
            it("should have a method called getID", function () {
                expect(employee.getID).toBeDefined();
                expect(typeof employee.getID).toBe('function');
            });
            it("should return the ID of the instance", function () {
                expect(employee.getID()).toBe(1);
            });
        });
        describe("getFirstName method", function () {
            it("should have a method called getFirstName", function () {
                expect(employee.getFirstName).toBeDefined();
                expect(typeof employee.getFirstName).toBe('function');
            });
            it("should return the firstName of the instance", function () {
                expect(employee.getFirstName()).toBe("John");
            });
        });
        describe("getLastName method", function () {
            it("should have a method called getLastName", function () {
                expect(employee.getLastName).toBeDefined();
                expect(typeof employee.getLastName).toBe('function');
            });
            it("should return the lastName of the instance", function () {
                expect(employee.getLastName()).toBe("Doe");
            });
        });
        describe("getName method", function () {
            it("should have a method called getName", function () {
                expect(employee.getName).toBeDefined();
                expect(typeof employee.getName).toBe('function');
            });
            it("should return the first name and last name of the instance, separated by a space.", function () {
                expect(employee.getName()).toBe("John Doe");
            });
        });
        describe("getSalary method", function () {
            it("should have a method called getSalary", function () {
                expect(employee.getSalary).toBeDefined();
                expect(typeof employee.getSalary).toBe('function');
            });
            it("should return the salary of the instance", function () {
                expect(employee.getSalary()).toBe(100);
            });
        });
        describe("getAnnualSalary method", function () {
            it("should have a method called getAnnualSalary", function () {
                expect(employee.getAnnualSalary).toBeDefined();
                expect(typeof employee.getAnnualSalary).toBe('function');
            });
            it("should return the salary multiplied by 12 of the instance", function () {
                expect(employee.getAnnualSalary()).toBe(1200);
            });
        });
        describe("raiseSalary method", function () {
            it("should have a method called raiseSalary", function () {
                expect(employee.raiseSalary).toBeDefined();
                expect(typeof employee.raiseSalary).toBe('function');
            });
            it("should increase the current salary of the instance by the given percent and return the new salary.", function () {
                expect(Math.round(employee.raiseSalary(10))).toBe(110);
            });
        });
        describe("toString method", function () {
            it("should have a method called toString", function () {
                expect(employee.toString).toBeDefined();
                expect(typeof employee.toString).toBe('function');
            });
            it("should return a string following the pattern: Employee[id=?, name=firstName lastName, salary=?]", function () {
                expect(employee.toString()).toBe("Employee[id=1, name=John Doe, salary=100]");
            });
        });
    });
});
