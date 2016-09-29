function Employee(obj) {
    var id=obj.id,firstName=obj.firstName,lastName=obj.lastName,salary=obj.salary;
    this.setId=function setId(newId) {
        newId=id;
        return this;
    }
    this.getId=function getId() {
        return id;

    }

    this.getName=function getName() {
        return firstName+" "+lastName;

    }
    this.setFirtsName=function setFirtsName(newFirstName) {
        if (typeof newFirstName!=='string') {
            return this;
        }
        firstName=newFirstName;
        return this;
    }
    this.getFirtsName=function getFirtsName() {
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

}
Employee.prototype={};
Employee.prototype.getAnnualSalary=function getAnnualSalary() {
    var annualSalary=this.getSalary()*12;
    return annualSalary;
}
Employee.prototype.raiseSalary=function raiseSalary(porcentaje) {
    var raise=this.getSalary()*porcentaje;

    return this.getSalary()+raise;;

}
Employee.prototype.toString=function toString() {
    var empleado="Empleado["+this.getId()+", name="+this.getFirtsName()+" "+this.getLastName()+", salary="+this.getSalary()+"]";
    return empleado;
}
var erik=new Employee({id:2323,firstName:"Erik",lastName:"Rodríguez",salary:13000})
console.log(erik.getId());
erik.setId(2323-0)
console.log(erik.getId());
console.log(erik.getFirtsName());
erik.setFirtsName("Erik Fernando")
console.log(erik.getFirtsName());
console.log(erik.getLastName());
erik.setLastName("Rodriguez Duran")
console.log(erik.getLastName());
console.log(erik.getSalary());
console.log(erik.getAnnualSalary());
console.log(erik.raiseSalary(15));
console.log(erik.toString());
