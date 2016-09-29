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
  };
  this.getLastName = function() {
    return lastName;
  };
  this.getSalary = function() {
    return salary;
  };
  this.setSalary = function(newSalary){
    if(typeof newSalary==='number'){
      salary = newSalary;
    }
  };
}
Employee.prototype.getAnnualSalary=function(){
  salary=this.getSalary();
  return salary*12;
}
Employee.prototype.raiseSalary=function(per){
  salary=this.getSalary();
  raise=salary*(per/100);
  this.setSalary(raise+salary);
  salary=salary+raise;
  return salary;
}
Employee.prototype.toString=function(){
  id=this.getID();
  firstName=this.getFirstName();
  lastName=this.getLastName();
  salary=this.getSalary();
  return "Employee[id="+id+", name="+firstName+" "+lastName+", salary="+salary+"]";
}
var c=new Employee({id:121212121,firstName:"Kate",lastName:"Moss",salary:10});
console.log(c.getId());
console.log(c.getFirstName());
console.log(c.getLastName());
console.log(c.getSalary());
console.log(c.getAnnualSalary());
console.log(c.raiseSalary(50));
console.log(c.getSalary());
console.log(c.toString());
