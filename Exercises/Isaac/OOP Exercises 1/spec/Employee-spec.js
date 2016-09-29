(function() {
    'use strict';

    var Employee = require('../Employee');

    describe("Testing Employee class", function() {
        it("Should be defined", function() {
            expect(Employee).toBeDefined();
        });
        it("Should work with all its methods", function() {
            var employee = new Employee({
                id: 100,
                firstName: "Isaac",
                lastName: "Ramirez",
                salary: 50000
            });

            expect(employee.getID()).toBe(100); // 100
            expect(employee.getFirstName()).toBe("Isaac"); // "Isaac"
            expect(employee.getLastName()).toBe("Ramirez"); // "Ramirez"
            expect(employee.getSalary()).toBe(50000); // 50000
            expect(employee.getName()).toBe("Isaac Ramirez"); // "Isaac Ramirez"
            expect(employee.getAnnualSalary()).toBe(600000); // 600000
            expect(employee.raiseSalary(10)).toBe(55000); // 55000
            expect(employee.getSalary()).toBe(55000); // 55000
            expect(employee.toString()).toBe("Employee[id=100, name=Isaac Ramirez, salary=55000]"); // Employee[id=100, name=Isaac Ramirez, salary=55000]
        });
    });
}());
