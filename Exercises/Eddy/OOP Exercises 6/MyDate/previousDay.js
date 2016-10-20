/**
 * Created by jazielsama on 15/10/16.
 *
 */

"use strict";
let isLeapYear = require("./isLeapYear");
let daysInMonths = require("./constants").daysInMonths;

function previoustDay() {
	if(isLeapYear(this.getYear())) {
		daysInMonths[1] = 29;
	} else {
		daysInMonths[1] = 28;
	}

	if(this.getDay() === 1 && this.getMonth() > 1) {
		this.setMonth(this.getMonth() - 1);
		this.setDay(daysInMonths[this.getMonth() - 1]);
	}

	else if(this.getDay() === 1 && this.getMonth() === 1 && this.getYear() > 1) {
		this.setMonth(12);
		this.setDay(daysInMonths[this.getMonth() - 1]);
		this.setYear(this.getYear() - 1);
	} else if(this.getDay() > 1) {
		this.setDay(this.getDay() - 1);
	} else {

	}
	return this;
}

module.exports = previoustDay;