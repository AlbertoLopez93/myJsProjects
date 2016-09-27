"use strict"

let Course = require('./course').Course;
let Friend = require('./friend').Friend;
let Human = require('./human').Human;

function Student (student){
	this._id = student._id;
	this.firstName = student.name.first;
	this.lastName = student.name.last;
	this.isActive = student.isActive;
	this.age = student.age;
	this.eyeColor = student.eyeColor;
	this.email = student.email;
	this.phone = student.phone;
	this.address = student.address;
	this.courses = student.courses.map(function (course) {return new Course(course);});
	this.friends = student.friends.map(function (friend) {return new Friend(friend);});
}

Student.prototype = new Human();
Student.prototype.constructor = Student;
Student.prototype.getGrade = function getGrade(){
								var grades = this.courses.reduce(function (prev, current) {
									return prev + current.grade;
								}, 0);
								grades /= this.courses.length;
								return grades;
							};

module.exports = {
	Student: Student
};