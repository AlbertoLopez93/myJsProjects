"use strict"

function Course (course){
	this.name = course.name;
	this.grade = course.grade;
}

module.exports = {
	Course : Course
};