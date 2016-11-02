"use strict;"
function Employee(object){
  var id=object.id;
  var firstName=object.firstName;
  var lastName=object.lastName;
  var salary=object.salary;
  this.getID = function() {
    return id;
  };
  this.getFirstName = function() {
    return firstName;
  }
  this.getLastName = function() {
    return lastName;
  }
  this.getSalary = function() {
    return salary;
  }
  this.setSalary = function(newSalary){
    if(typeof newSalary==='number'){
      salary = newSalary;
    }
  }
}
Employee.prototype.getAnnualSalary=function(){
  var salary=this.getSalary();
  return salary*12;
}
Employee.prototype.raiseSalary=function(per){
  var salary=this.getSalary();
  var raise=salary*(per/100);
  this.setSalary(raise+salary);
  salary=salary+raise;
  return salary;
}
Employee.prototype.getName=function(){
  var firstName=this.getFirstName();
  var lastName=this.getLastName();
  return firstName+" "+lastName;
}
Employee.prototype.toString=function(){
  var id=this.getID();
  var firstName=this.getFirstName();
  var lastName=this.getLastName();
  var salary=this.getSalary();
  return "Employee[id="+id+", name="+firstName+" "+lastName+", salary="+salary+"]";
}
var c=new Employee({id:121212121,firstName:"Kate",lastName:"Moss",salary:10});
module.exports = Employee;
