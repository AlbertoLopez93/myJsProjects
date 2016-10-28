/**
 * Created by jazielsama on 15/10/16.
 *
 */

"use strict";

let isLeapYear = require("./isLeapYear");
let daysInMonths = require("./constants").daysInMonths;

function previousMonth() {
	if(this.getMonth() === 1) {
		this.setDate(this.getYear() - 1, 12, this.getDay());
	} else if(isLeapYear(this.getYear()) && this.getMonth() === 3) {
		if(this.getDay() > 29) {
			this.setDate(this.getYear(), 2, 29);
		}
	} else if(this.getMonth() === 3) {
		if(this.getDay() > 28) {
			this.setDate(this.getYear(), 2, 28);
		}
	} else if(this.getDay() > daysInMonths[this.getMonth() - 2]) {
		this.setDate(this.getYear(), this.getMonth() - 1, daysInMonths[this.getMonth() - 2]);
	} else {
		this.setDate(this.getYear(), this.getMonth() - 1, this.getDay());
	}
	return this;
}

module.exports = previousMonth;