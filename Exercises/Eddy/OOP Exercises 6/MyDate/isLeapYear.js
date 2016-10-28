/**
 * Created by jazielsama on 15/10/16.
 *
 */

"use strict";

function isLeapYear(year) {
	if(year % 4 === 0) {
		if(year % 100 === 0) {
			return year % 400 === 0;
		} else {
			return true;
		}
	}
	return false;
}

module.exports = isLeapYear;
