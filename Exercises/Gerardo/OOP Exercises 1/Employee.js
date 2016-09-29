function Employee(data) {
  var id = data.id;
  var firstName = data.firstName;
  var lastName = data.lastName;
  var salary = data.salary;
  this.getID = function getID() {
    return id;
  }
  this.getFirstName = function getFirstName() {
    return firstName;
  }
  this.getLastName = function getLastName() {
    return lastName;
  }
  this.getName = function getName() {
    return firstName + " " + lastName;
  }
  this.getSalary = function getSalary() {
    return salary;
  }
  this.getAnnualSalary = function getAnnualSalary() {
    return salary * 12;
  }
  this.raiseSalary = function raiseSalary(percent) {
    salary *= (1 + percent/100);
    return salary;
  }
  this.toString = function toString() {
    return "Employee[id=" + id + ", name=" + firstName + " " + lastName + ", salary=" + salary + "]";
  }
}

module.exports = Employee;
