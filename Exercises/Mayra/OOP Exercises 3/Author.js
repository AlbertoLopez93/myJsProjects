"use strict";
function Author(obj) {
    let name=obj.name,email=obj.email,gender=obj.gender;
    this.getName=function getName() {
        return name;
    }
    this.getEmail=function getEmail() {
        return email;
    }
    this.setEmail=function setEmail(newEmail) {
        if (typeof newEmail==="string") {
            email=newEmail;
        }
    }
    this.getGender=function getGender() {
        return gender;
    }
}

Author.prototype.toString = function toString() {
    let str="Author[name="+this.getName()+", email="+this.getEmail()+", gender="+this.getGender()+"]";
    return str;
};
var paulo=new Author({name:"Paulo",email:"email@email",gender:"m"})
/*console.log(paulo.getName());
console.log(paulo.getEmail());
paulo.setEmail("nuevomail@email")
console.log(paulo.getEmail());
console.log(paulo.getGender());
console.log(paulo.toString());*/
module.exports = Author;
