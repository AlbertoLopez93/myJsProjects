"use strict"

var Students = require("./student");

var School = function School(stu) {
  this._id = stu._id;
  this.index = stu.index;
  this.name = stu.name;
  this.phone = stu.phone;
  this.address = stu.address;
  this.students = stu.students.map(function(e) {return new Students(e);});
}

module.exports = School;
