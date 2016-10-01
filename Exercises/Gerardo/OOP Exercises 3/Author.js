"use strict"

function Author(data) {
  let name = data.name;
  let email = data.email;
  let gender = data.gender;
  this.getName = function getName() {
    return name;
  }
  this.getEmail = function getEmail() {
    return email;
  }
  this.setEmail = function setEmail(newEmail) {
    email = newEmail;
  }
  this.getGender = function getGender() {
    return gender;
  }
}

Author.prototype.toString = function toString() {
  return "Author[name=" + this.getName() + ", email=" + this.getEmail() + ", gender=" + this.getEmail() + "]";
}

module.exports = Author;
