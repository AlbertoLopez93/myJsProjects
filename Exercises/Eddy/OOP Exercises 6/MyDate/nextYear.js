/**
 * Created by jazielsama on 15/10/16.
 *
 */

"use strict";

let isLeapYear = require("./isLeapYear");

function nextYear() {
	if(!isLeapYear() && this.getMonth() !== 2 && this.getDay() !== 29) {
		this.setDate(this.getYear() + 1, this.getMonth(), this.getDay());
	} else {
		this.setDate(this.getYear() + 1, 2, 28);
	}
	return this;
}

module.exports = nextYear;