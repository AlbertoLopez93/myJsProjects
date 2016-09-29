/**
 * Created by jazielsama on 28/09/16.
 */
/*
 Create a class named Employee, that will received in the constructor:
 id:int
 firstName:string
 lastName:string
 salary:int
 The Employee class will also have the next methods:
 getID():int returns the ID of the employee.
 getFirstName():string returns the first name of the employee.
 getLastName():string returns the last name of the employee.
 getName():string returns first name and last name separated by a space.
 getSalary():int returns the salary of the employee.
 getAnnualSalary():int return the salary of employee multiplied by 12
 raiseSalary(percent:int):int increase the current salary of the employee by the given percent and return the new salary.
 toString():string returns a string that will follow the pattern: “Employee[id=?, name=firstName lastName, salary=?]”

 * */
var emp = {
	id: 123,
	firstName: 'string',
	lastName: 'stringson',
	salary: 10000
};

function Employee (data) {
	var id = data.id;
	var firstName = data.firstName;
	var lastName = data.lastName;
	var salary = data.salary;

	this.getID = function getID () {
		return id;
	};

	this.getFirstName = function getFirstName () {
		return firstName;
	};

	this.getLastName = function getLastName () {
		return lastName;
	};

	this.getSalary = function () {
		return salary;
	};

	this.raiseSalary = function raiseSalary (raise) {
		salary += salary * raise / 100;
		return salary;
	};

	this.toString = function toString () {
		return 'Employee[id=' + this.getID () + ', name=' + this.getName () + ', salary=' + this.getSalary () + ']'
	}
}

Employee.prototype.getName = function getName () {

	return '' + this.getFirstName () + ' ' + this.getLastName ();
};

Employee.prototype.getAnnualSalary = function () {
	return this.getSalary () * 12;
};

Employee.prototype.toString = function toString () {
	return 'Employee[id=' + this.getID () + ', name=' + this.getName () + ', salary=' + this.getSalary () + ']'
};

var employee1 = new Employee (emp);

console.log (employee1.getID ());
console.log (employee1.getFirstName ());
console.log (employee1.getLastName ());
console.log (employee1.getName ());
console.log (employee1.getSalary ());
console.log (employee1.getAnnualSalary ());
console.log (employee1.raiseSalary (10));
console.log (employee1.getSalary ());
console.log (employee1.toString());