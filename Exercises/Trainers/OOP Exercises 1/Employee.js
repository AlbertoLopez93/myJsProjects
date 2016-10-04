"use strict";

function Employee(data) {
    let id = data.id;
    let firstName = data.firstName;
    let lastName = data.lastName;
    let salary = data.salary;

    this.getID = function getID() {
        return id;
    };

    this.getFirstName = function getFirstName() {
        return firstName;
    };

    this.getLastName = function getLastName() {
        return lastName;
    };

    this.getSalary = function getSalary() {
        return salary;
    };

    this.raiseSalary = function raiseSalary(percent) {
        salary = salary * (1 + percent/100);
        return salary;
    };
}

Employee.prototype.getName = function getName() {
    return this.getFirstName() + " " + this.getLastName();
};

Employee.prototype.getAnnualSalary = function getAnnualSalary() {
    return this.getSalary() * 12;
};

Employee.prototype.toString = function toString() {
    return "Employee[id=" + this.getID() + ", name=" + this.getName() +", salary=" + this.getSalary() + "]";
};

module.exports = Employee;
