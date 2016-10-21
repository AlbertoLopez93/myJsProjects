"use strict"

var Courses = require("./course");
var Friends = require("./friend");
var Human = require("./human");

var Student = function Student(student) {
  this.id = student.id;
  this.name = student.name;
  this.isActive = student.isActive;
  this.age = student.age;
  this.eyeColor = student.eyeColor;
  this.email = student.email;
  this.phone = student.phone;
  this.address = student.address;
  this.favoriteFruit = student.favoriteFruit;
  this.courses = student.courses.map(function(e) {return new Courses(e);});
  this.friends = student.friends.map(function(e) {return new Friends(e);});
  this.getGrade = function(){
    var total=this.courses.reduce(function(j,k){return j+k.grade;},0);
    total/=this.courses.length;
    return total;
  }
}
Student.prototype = new Human();
//Student.prototype.constructor = Student;

module.exports = Student;
