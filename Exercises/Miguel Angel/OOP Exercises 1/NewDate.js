"use strict"
function NewDate (date){
	var day = date.day;
	var month = date.month;
	var year = date.year;
	this.getDay = function getDay(){
		return day;
	}
	this.getMonth = function getMonth(){
		return month;
	}
	this.getYear = function getYear(){
		return year;
	}
	this.setDay = function setDay(newDay){
		day = newDay;
	}
	this.setMonth = function setMonth(newMonth){
		month = newMonth;
	}
	this.setYear = function setYear(newYear){
		year = newYear;
	}
}

NewDate.prototype.setDate = function setDate(day, month, year){
	this.setDay(day);
	this.setMonth(month);
	this.setYear(year);
};

NewDate.prototype.toString = function toString(){
	var result = '';
	if(this.getDay() < 10){
		result += '0' + this.getDay() + '/';
	} else {
		result += this.getDay() + '/';
	}
	if(this.getMonth() < 10){
		result += '0' + this.getMonth() + '/';
	} else {
		result += this.getMonth() + '/';
	}
	result += this.getYear();
	return result;
};


module.exports = NewDate;
