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
			} else {
				daysInMonths[1] = 28;
			}
		} else {
			fDay = undefined;
			fMonth = undefined;
			fYear = undefined;

		}
		if (Number.isInteger (month) && month > 0 && month <= 12) {
			fMonth = month;
		} else {
			fDay = undefined;
			fMonth = undefined;
			fYear = undefined;
		}

		if (Number.isInteger (day) && day > 0 && day <= daysInMonths[month - 1]) {
			fDay = day;
			//daysInMonths[1] = 28;
		} else {
			fDay = undefined;
			fMonth = undefined;
			fYear = undefined;
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

	Object.defineProperty (this, "setYear", {
		value: function setYear (newYear) {
			if (this.getDay () && this.getMonth ()) {
				if (Number.isInteger (newYear) && newYear <= 9999 && newYear >= 1) {
					fYear = newYear;
				}
			}
		}, enumerable: true
	});

	Object.defineProperty (this, "setMonth", {
		value: function setMonth (newMonth) {
			if (this.getYear () && this.getDay () <= daysInMonths[newMonth - 1] && newMonth > 0 && newMonth < 13) {
				fMonth = newMonth;
			}
		}, enumerable: true
	});

	Object.defineProperty (this, "setDay", {
		value: function setDay (newDay) {
			if (this.getYear () && this.getMonth ()) {
				if (this.getMonth () === 2 && newDay === 29 && this.isLeapYear () && newDay > 0) {
					fDay = newDay;
				} else if (this.getMonth () === 2 && newDay < 29 && !this.isLeapYear () && newDay > 0) {
					fDay = newDay;
				} else if (this.getMonth () === 1 || this.getMonth () === 3 || this.getMonth () === 5 || this.getMonth () === 7 || this.getMonth () === 8 || this.getMonth () === 10 || this.getMonth () === 12 && newDay > 0) {
					if (newDay <= 31) {
						fDay = newDay;
					}
				} else if (this.getMonth () === 4 || this.getMonth () === 6 || this.getMonth () === 9 || this.getMonth () === 11 && newDay > 0) {
					if (newDay <= 30) {
						fDay = newDay;
					}
				}
			}

		}, enumerable: true
	});

	Object.defineProperty (this, "setDate", {
		value: function setDate (newYear, newMonth, newDay) {
			if (this.isValidDate (newYear, newMonth, newDay)) {
				this.setYear (newYear);
				this.setMonth (newMonth);
				this.setDay (newDay);
			}
			console.log ("Invalid year, month, or day!");
		}, enumerable: true, configurable: false, writable: false
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

	Object.defineProperty (this, "toString", {
		value: function () {
			return strDays[this.getDayOfWeek (this.getYear (), this.getMonth (), this.getDay ())] + ' ' + this.getDay () + ' ' + strMonths[this.getMonth () - 1] + ' ' + this.getYear ();
		}, enumerable: true
	});

	Object.defineProperty (this, "nextYear", {
		value: function () {
			if (this.getMonth () === 2 && this.getDay () === 29) {
				this.setYear (this.getYear () + 1);
				this.setMonth (3);
				this.setDay (1);
			} else {
				this.setYear (this.getYear () + 1);
			}
			return this;
		}, enumerable: true
	});

	Object.defineProperty (this, "previousYear", {
		value: function () {
			if (this.getMonth () === 2 && this.getDay () === 29) {
				this.setYear (this.getYear () - 1);
				this.setMonth (2);
				this.setDay (28);
			} else {
				this.setYear (this.getYear () - 1);
			}
			return this;
		}, enumerable: true
	});

	Object.defineProperty (this, "nextMonth", {
		value: function () {
			if (this.getMonth () === 12 && this.getYear () !== 9999) {
				this.setMonth (1);
				this.setYear (this.getYear () + 1);
			} else {
				this.setMonth (this.getMonth () + 1);
				if (this.getDay () < daysInMonths[this.getMonth ()]) {

				} else {
					this.setDay (daysInMonths[this.getMonth ()]);
				}
			}
			return this;
		}, enumerable: true
	});

	Object.defineProperty (this, "previousMonth", {
		value: function () {
			if (this.getMonth () === 1 && this.getYear () !== 1) {
				this.setMonth (12);
				this.setYear (this.getYear () - 1);
			} else {
				this.setMonth (this.getMonth () - 1);
			}
			return this;
		}, enumerable: true
	});

	Object.defineProperty (this, "nextDay", {
		value: function nextDay () {
			if (this.getDay () === 29 && this.getMonth () === 2) {
				this.setDay (1);
				this.setMonth (3);
			} else if (this.getDay () === daysInMonths[this.getMonth () - 1] && this.getMonth () !== 12) {
				this.setMonth (this.getMonth () + 1);
				this.setDay (1);
			} else if (this.getDay () === daysInMonths[this.getMonth () - 1] && this.getMonth () === 12) {
				this.setYear (this.getYear () + 1);
				this.setMonth (this.getMonth () + 1);
				this.setDay (1);

			} else if (this.getDay () < daysInMonths[this.getMonth ()-1]) {
				if (this.getDay () < daysInMonths[this.getMonth ()]) {
					this.setDay (this.getDay () + 1);
				}else {
					this.setDay (daysInMonths[this.getMonth]);
				}
			}
			return this;
		}, enumerable: true
	});

	Object.defineProperty (this, "previousDay", {
		value: function previousDay () {
			return this;
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
	}, enumerable: true, configurable: false, writable: false
});

Object.defineProperty (MyDate.prototype, "getDayOfWeek", {
	value: function (year, month, day) {
		var validDate = this.isValidDate (year, month, day);
		if (!validDate) {
			return false;
		}
		var a = Math.floor ((14 - month) / 12);
		var y = year - a;
		var m = month + 12 * a - 2;
		var d = (day + y + Math.floor (y / 4) - Math.floor (y / 100) + Math.floor (y / 400) + Math.floor ((31 * m) / 12)) % 7;
		return d;

	}, enumerable: true, configurable: false, writable: false
});

module.exports = MyDate;

var date = new MyDate (2000, 10, 31);

console.log (date.nextDay ().toString ());
/*
 for (var i = 0; i < 60; i++) {
 date.nextDay ();
 console.log (date.toString ());
 }
 */
