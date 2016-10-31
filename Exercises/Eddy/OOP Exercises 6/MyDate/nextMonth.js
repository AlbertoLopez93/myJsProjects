/**
 * Created by jazielsama on 15/10/16.
 *
 */

"use strict";

let daysInMonths = require("./constants").daysInMonths;
let isLeapYear = require("./isLeapYear");

function nextMonth() {

	if(isLeapYear(this.getYear()) && this.getMonth() === 1 && this.getDay() > 29) {
		this.setDate(this.getYear(), 2, 29);
	} else if(this.getMonth() === 1 && this.getDay() > 28) {
		this.setDate(this.getYear(), 2, 28);
	} else if(this.getMonth() === 12) {
		this.setDate(this.getYear() + 1, 1, this.getDay());
	} else if(this.getDay() > daysInMonths[this.getMonth()]) {
		this.setDate(this.getYear(), this.getMonth() + 1, this.getDay() - 1);
	} else {
		this.setDate(this.getYear(), this.getMonth() + 1, this.getDay());
	}
	return this;
}

module.exports = nextMonth;
