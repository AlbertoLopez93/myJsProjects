/**
 * Created by jazielsama on 6/10/16.
 *
 */

"use strict";
/*jshint esversion: 6 */

function MyDate (year, month, day) {

	var len = arguments.length;
	if (len === 3) {
		var fYear;
		var fMonth;
		var fDay;
		var strMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		var strDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		var daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

		if (Number.isInteger (year) && year <= 9999 && year >= 1) {
			fYear = year;
			if (year % 4 === 0) {
				if (year % 100 === 0) {
					if (year % 400 === 0) {
						daysInMonths[1] = 29;
					} else {
						daysInMonths[1] = 28;
					}
				} else {
					daysInMonths[1] = 29;
				}
			}
			daysInMonths[1] = 28;
		}
		if (Number.isInteger (month) && month > 0 && month <= 12) {
			fMonth = month;
		}
		if (Number.isInteger (day) && day > 0 && day <= daysInMonths[month - 1]) {
			fDay = day;
		}
	}
	Object.defineProperty (this, "getYear", {
		value: function getYear () {
			return fYear;
		}, enumerable: true
	});
	Object.defineProperty (this, "getMonth", {
		value: function getMonth () {
			return fMonth;
		}, enumerable: true
	});
	Object.defineProperty (this, "getDay", {
		value: function getDay () {
			return fDay;
		}, enumerable: true
	});
	Object.defineProperty (this, "isLeapYear", {
		value: function isLeapYear (leapYear) {
			if (leapYear % 4 === 0) {
				if (leapYear % 100 === 0) {
					return leapYear % 400 === 0;
				} else {
					return true;
				}
			}
			return false;
		}, enumerable: true
	});
}

Object.defineProperty (MyDate.prototype, "isValidDate", {
	value: function isValidDate (year, month, day) {
		var isValid = new MyDate (year, month, day);
		if (isValid.getYear () && isValid.getMonth () && isValid.getDay ()) {
			return true;
		}
		return false;
	}, enumerable: true
});
module.exports = MyDate;

var date = new MyDate (2000, 2, 28);
console.log (date.getYear ());
console.log (date.getMonth ());
console.log (date.getDay ());
console.log (date.isLeapYear (2001));
console.log (date.isValidDate (2000, 2, 29));