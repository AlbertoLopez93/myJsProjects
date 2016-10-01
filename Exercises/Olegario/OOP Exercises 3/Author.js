"use strict"

function Author(instancia) {
  let name = instancia.name;
  let email = instancia.email;
  let gender = instancia.gender;

  this.getName = function () {
    return name;
  };
  this.getEmail = function () {
    return email;
  };
  this.setEmail = function (newEmail) {
    if (typeof(newEmail) === "string") {
      email = newEmail;
    }
  };
  this.getGender = function () {
    return gender;
  };
}

Author.prototype.toString = function () {
  return "Author[name="+this.getName()+", email="+this.getEmail()+", gender="+this.getGender()+"]";
};


var x = {
  name : "olegario",
  email : "ole.com",
  gender : "m"
};

var w = new Author(x);
/*
console.log(w.getName(), w.getEmail(), w.getGender());
console.log(w.setEmail(0));
console.log(w.getName(), w.getEmail(), w.getGender());
console.log(w.toString());
console.log(w.setEmail("otro.com"));
console.log(w.getName(), w.getEmail(), w.getGender());
console.log(w.toString());*/

module.exports = Author;
