function Employee(data) {
    var id = data.id;
    this.getID = function(){
        return id;
    }
    var firstName = data.firstName;
    this.getFirstName = function(){
        return firstName;
    }
    var lastName = data.lastName;
    this.getLastName = function(){
        return lastName;
    }

    var salary = data.salary;
    this.getSalary = function(){
        return salary;
    }

    this.raiseSalary= function(int){
        var raise = (this.getSalary() * int) / 100;
        return salary = (this.getSalary() + raise);
    }
}

Employee.prototype.getAnnualSalary = function(){
    return this.getSalary() * 12;
}//:int return the salary of employee multiplied by 12
Employee.prototype.raiseSalary= function(int){
    var raise = (this.getSalary() * int) / 100;
    return this.setNewSalary(this.getSalary() + raise);
}//:int increase the current salary of the employee
//by the given percent and return the new salary.
Employee.prototype.toString = function(){
    return "Employee[id=" + this.getID() + ", name=" + this.getFirstName() + " " + this.getLastName() + ", salary=" + this.getSalary() + "]";
}//:string returns a string that will follow the pattern:
// “Employee[id=?, name=firstName lastName, salary=?]”

var employee = new Employee({id : "axel001", firstName : "Axel", lastName : "Nolasco", salary : 7000});
console.log(employee.raiseSalary(50));
console.log(employee.getSalary());
console.log(employee.getAnnualSalary());
console.log(employee.toString());
