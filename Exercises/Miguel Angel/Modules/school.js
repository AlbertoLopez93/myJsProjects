"use strict"

let Student = require('./student').Student;

function School(school){
	this._id = school._id;
	this.index = school.index;
	this.name = school.name;
	this.phone = school.phone;
	this.address = school.address;
	this.students = school.students.map(function (student) {return new Student(student);});
}

module.exports = {
	School: School
};