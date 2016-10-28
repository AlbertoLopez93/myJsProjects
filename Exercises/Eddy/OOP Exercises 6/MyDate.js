/**
 * Created by jazielsama on 6/10/16.
 *
 */

"use strict";

/* constants*/
let strDays = require("./MyDate/constants").strDays;
let strMonths = require("./MyDate/constants").srtMonths;
let daysInMonths = require("./MyDate/constants").daysInMonths;

/*functions*/
let isLeapYear = require("./MyDate/isLeapYear");
let getDayOfWeek = require("./MyDate/getDayOfWeek");
let isValidDate = require("./MyDate/isValidDate");
let nextDay = require("./MyDate/nextDay");
let previousDay = require("./MyDate/previousDay");
let nextMonth = require("./MyDate/nextMonth");
let previousMonth = require("./MyDate/previousMonth");
let nextYear = require("./MyDate/nextYear");
let previousYear = require("./MyDate/previousYear");

/*My Date Class Constructor*/
function MyDate(year, month, day) {
	let _year, _month, _day;

	let setDate = function setDate(year, month, day) {
		if(isValidDate(year, month, day)) {
			_year = year;
			_month = month;
			_day = day;
		} else {
			console.log("Invalid year, month, or day!");
		}
	};

	/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ setters and getters*/
	setDate(year, month, day);

	let setYear = function setYear(year) {
		if(isValidDate(year, _month, _day)) {
			_year = year;
		} else {
			console.log("Invalid year!");
		}
	};

	let setMonth = function setMonth(month) {
		if(isValidDate(_year, month, _day)) {
			_month = month;

		} else {
			console.log("Invalid month!");
		}
	};

	let setDay = function setDay(day) {
		if(isValidDate(_year, _month, day)) {
			_day = day;
		} else {
			console.log("Invalid day!");
		}
	};

	/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ getters */

	let getYear = function getYear() {
		return _year;
	};

	let getMonth = function getMonth() {
		return _month;
	};

	let getDay = function getDay() {
		return _day;
	};

	/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ end setters and getters */

	Object.defineProperties(this, {
		setDate: {
			value: setDate,
			enumerable: true
		},
		setYear: {
			value: setYear,
			enumerable: true
		},
		getYear: {
			value: getYear,
			enumerable: true
		},
		setMonth: {
			value: setMonth,
			enumerable: true
		},
		getMonth: {
			value: getMonth,
			enumerable: true
		},
		setDay: {
			value: setDay,
			enumerable: true
		},
		getDay: {
			value: getDay,
			enumerable: true
		}
	});

}
/*static variables and methods*/
Object.defineProperties(MyDate, {
	strMonths: {
		value: strMonths,
		enumerable: false
	},

	strDays: {
		value: strDays,
		enumerable: false
	},

	daysInMonths: {
		value: daysInMonths,
		enumerable: false
	},

	isLeapYear: {
		value: isLeapYear,
		enumerable: true
	},

	isValidDate: {
		value: isValidDate,
		enumerable: true
	},

	getDayOfWeek: {
		value: getDayOfWeek,
		enumerable: true
	}

});

/*protptype methods*/
Object.defineProperty(MyDate.prototype, "toString", {
	value: function toString() {
		return strDays[MyDate.getDayOfWeek(this.getYear(), this.getMonth(), this.getDay())] +
		       " " +
		       this.getDay() +
		       " " +
		       strMonths[this.getMonth() - 1] +
		       " " +
		       this.getYear();
		//example "Tuesday 14 Feb 2012"
	},
	enumerable: true
});

Object.defineProperty(MyDate.prototype, "nextDay", {
	value: nextDay,
	enumerable: true
});

Object.defineProperty(MyDate.prototype, "previousDay", {
	value: previousDay,
	enumerable: true
});

Object.defineProperty(MyDate.prototype, "nextMonth", {
	value: nextMonth,
	enumerable: true
});

Object.defineProperty(MyDate.prototype, "previousMonth", {
	value: previousMonth,
	enumerable: true
});

Object.defineProperty(MyDate.prototype, "nextYear", {
	value: nextYear,
	enumerable: true
});

Object.defineProperty(MyDate.prototype, "previousYear", {
	value: previousYear,
	enumerable: true
});

module.exports = MyDate;


