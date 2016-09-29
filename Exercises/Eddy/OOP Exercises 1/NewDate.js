/**
 * Created by jazielsama on 28/09/16.
 */

/*
 * Create a class named NewDate, which will receive in the constructor:
 day:int [1..31]
 month:int [1..12]
 year:int [1900..9999]
 The NewDate class will also have the following methods:
 getDay():int returns the day of the newDate.
 getMonth():int returns the month of the newDate.
 getYear():int returns the year of the newDate.
 setDay(day:int):void sets a new day for the newDate instance.
 setMonth(month:int):void sets a new month for the newDate instance.
 setYear(year:int):void sets a new year for the newDate instance.
 setDate(day:int, month:int, year:int)void sets the day, month, and year of the newDate instance.
 toString():string returns a string that will follow the pattern: “dd/mm/yyyy”, with leading zeros (if day is 1, month is 5 and year is 2016, then the string should be: “01/05/2016”).
 */
var dat = {
	day: 1,
	month: 1,
	year: 1900
};
function NewDate (data) {
	var day = data.day;
	var month = data.month;
	var year = data.year;

	this.getDay = function getDay () {
		return day;
	};
	this.getMonth = function getDay () {
		return month;
	};
	this.getYear = function getDay () {
		return year;
	};
	this.setDay = function setDay (newDay) {
		return day = newDay;
	};
	this.setMonth = function setMonth (newMonth) {
		return month = newMonth;
	};
	this.setYear = function setYear (newYear) {
		return year = newYear;
	};

	this.setDate = function setDate (newDay, newMonth, newYear) {
		day = newDay;
		month = newMonth;
		year = newYear;
	};

}

NewDate.prototype.toString = function toSring () {
	var day;
	var month;
	if (this.getDay () < 10) {
		day = '0' + this.getDay ();
	} else {
		day = this.getDay ();
	}
	if (this.getMonth () < 10) {
		month = '0' + this.getMonth ();
	} else {
		month = this.getMonth ();
	}

	return '' + day + '/' + month + '/' + this.getYear ();
};

var newDate = new NewDate (dat);
console.log (newDate.getDay ());
console.log (newDate.getMonth ());
console.log (newDate.getYear ());
console.log (newDate.setDay (15));
console.log (newDate.setMonth (6));
console.log (newDate.setYear (1999));
console.log (newDate.getDay ());
console.log (newDate.getMonth ());
console.log (newDate.getYear ());
console.log (newDate.setDate (31, 12, 9999));
console.log (newDate.getDay ());
console.log (newDate.getMonth ());
console.log (newDate.getYear ());
console.log (newDate.toString ());