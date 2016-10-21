"use strict"

function Human(data) {
  this.getName = function getName(data) {
    return this.name.first;
  }
  this.getLastName = function getLastName(data) {
    return this.name.last;
  }
  this.getFullName = function getFullName(data) {
    return this.name.first+' '+this.name.last;
  }
}

module.exports = Human;
