"use strict"

let Course = require('./course').Course;
let Friend = require('./friend').Friend;

function Student (student){
	this._id = student._id;
	this.name = student.name;
	this.isActive = student.isActive;
	this.age = student.age;
	this.eyeColor = student.eyeColor;
	this.email = student.email;
	this.phone = student.phone;
	this.address = student.address;
	this.courses = student.courses.map(function (course) {return new Course(course);});
	this.friends = student.friends.map(function (friend) {return new Friend(friend);});
}

module.exports = {
	Student: Student
};