(function() {
    'use strict';

    var assert = require('./assert');

    function Employee(employee) {
        var id = employee.id;
        var firstName = employee.firstName;
        var lastName = employee.lastName;
        var salary = employee.salary;

        // getID():int returns the ID of the employee.
        this.getID = function getID() {
            return id;
        };

        // getFirstName():string returns the first name of the employee.
        this.getFirstName = function getFirstName() {
            return firstName;
        };

        // getLastName():string returns the last name of the employee.
        this.getLastName = function getLastName() {
            return lastName;
        };

        // getSalary():int returns the salary of the employee.
        this.getSalary = function getSalary() {
            return salary;
        };

        // raiseSalary(percent:int):int increase the current salary of the employee by the given percent and return the new salary.
        this.raiseSalary = function raiseSalary(percent) {
            if (assert.Number(percent)) {
                salary += salary * (percent / 100);
                return salary;
            }
        };
    }

    // getName():string returns first name and last name separated by a space.
    Employee.prototype.getName = function getName() {
        return this.getFirstName() + " " + this.getLastName();
    };

    // getAnnualSalary():int return the salary of employee multiplied by 12
    Employee.prototype.getAnnualSalary = function getAnnualSalary() {
        return this.getSalary() * 12;
    };

    // toString():string returns a string that will follow the pattern: “Employee[id=?, name=firstName lastName, salary=?]”
    Employee.prototype.toString = function toString() {
        return "Employee[id=" + this.getID() + ", name=" + this.getName() + ", salary=" +
            this.getSalary() + "]";
    };

    module.exports = Employee;
}());
