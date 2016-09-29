"use strict"

function Employee(human) {
  var id = human.id;
  var firstName = human.firstName;
  var lastName = human.lastName;
  var salary = human.salary;

  this.getID = function() {
    return id;
  }
  this.getFirstName = function() {
    return firstName;
  }
  this.getLastName = function() {
    return lastName;
  }
  this.getName = function() {
    return firstName+" "+lastName;
  }
  this.getSalary = function() {
    return salary;
  }
  this.getAnnualSalary = function() {
    return 12* salary;
  }
  this.raiseSalary = function(percent) {
    salary += salary*(percent/100);
    return salary;
  }
}

Employee.prototype ={};
Employee.prototype.toString = function() {
  return "Employee [id="+this.getID()+", name="+this.getName()+", salary="+this.getSalary()+"]";
}

/*var worker = new Employee({id:45,firstName:'Peter',lastName:'Johnson',salary:450});
console.log(worker.getName());
console.log(worker.raiseSalary(10));
console.log(worker.getSalary());
console.log(worker.toString());*/

module.exports = Employee;
