/**
 * Created by jazielsama on 15/10/16.
 *
 */

"use strict";

let isLeapYear = require("./isLeapYear");
let daysInMonths = require("./constants").daysInMonths;

function nextDay() {
	if(isLeapYear(this.getYear())) {
		daysInMonths[1] = 29;
	} else {
		daysInMonths[1] = 28;
	}

	if(this.getDay() === 29 && this.getMonth() === 2) {
		this.setDate(this.getYear(), this.getMonth() + 1, 1);
	} else if(this.getDay() === daysInMonths[this.getMonth() - 1] && this.getMonth() < 12) {
		this.setDate(this.getYear(), this.getMonth() + 1, 1);
	} else if(this.getDay() ===
	          daysInMonths[this.getMonth() - 1] && this.getMonth() === 12 && this.getYear() === 9999) {
		return this;
	} else if(this.getDay() === daysInMonths[this.getMonth() - 1] && this.getMonth() === 12) {
		this.setDate(this.getYear() + 1, 1, 1);
	} else {
		this.setDay(this.getDay() + 1);
	}
	return this;

}

module.exports = nextDay;