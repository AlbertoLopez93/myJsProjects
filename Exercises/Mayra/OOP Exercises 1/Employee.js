"this strict";
function Employee(obj) {
    var id=obj.id,firstName=obj.firstName,lastName=obj.lastName,salary=obj.salary;
    this.getID=function getID() {
        return id;

    }

    this.getName=function getName() {
        return firstName+" "+lastName;

    }
    this.setFirstName=function setFirstName(newFirstName) {
        if (typeof newFirstName!=='string') {
            return this;
        }
        firstName=newFirstName;
        return this;
    }
    this.getFirstName=function getFirstName() {
        return firstName;

    }
    this.setLastName=function setLastName(newLastName) {
        if (typeof newLastName!=='string') {
            return this;
        }
        lastName=newLastName;
        return this;
    }
    this.getLastName=function getLastName() {
        return lastName;

    }
    this.getSalary=function getSalary() {
        return salary;

    }
    this.setSalary=function setSalary(newSalary) {
        if (typeof newSalary!=='number') {
            return this;
        }
        salary=newSalary;
        return this;
    }

}
Employee.prototype={};
Employee.prototype.getAnnualSalary=function getAnnualSalary() {
    var annualSalary=this.getSalary()*12;
    return annualSalary;
}
Employee.prototype.raiseSalary=function raiseSalary(porcentaje) {
    var raise=this.getSalary()+this.getSalary()*porcentaje/100;
    this.setSalary(raise);
    return this.getSalary();

}
Employee.prototype.toString=function toString() {
    var empleado="Employee[id="+this.getID()+", name="+this.getFirstName()+" "+this.getLastName()+", salary="+this.getSalary()+"]";
    return empleado;
}
var erik=new Employee({id:2323,firstName:"Erik",lastName:"Rodríguez",salary:13000})


module.exports = Employee;
