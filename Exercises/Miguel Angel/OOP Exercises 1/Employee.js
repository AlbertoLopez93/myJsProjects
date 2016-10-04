"use strict"
function Employee(employee){
	var id = employee.id;
	var firstName = employee.firstName;
	var lastName = employee.lastName;
	var salary = employee.salary;
	this.getID = function getID(){
		return id;
	}
	this.getFirstName = function getFirstName(){
		return firstName;
	}
	this.getLastName = function getLastName(){
		return lastName;
	}
	this.getSalary = function getSalary(){
		return salary;
	}
	this.raiseSalary = function raiseSalary(percent){
		return salary += salary * percent / 100; 
	}
}

Employee.prototype.getName = function getName(){
	return this.getFirstName() + " " + this.getLastName();
}

Employee.prototype.getAnnualSalary = function getAnnualSalary(){
	return this.getSalary() * 12;
}

Employee.prototype.toString = function toString(){
	var result = "Employee[id=" + this.getID() + ", name=" + this.getName() + ", salary=" + this.getSalary() + "]";
	return result;
}


module.exports = Employee;
