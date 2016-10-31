/**
 * Created by jazielsama on 15/10/16.
 *
 */

"use strict";
let isValidDate = require("./isValidDate");

function getDAyOfWeek(year, month, day) {
	let validDate = isValidDate(year, month, day);
	if(!validDate) {
		return false;
	}
	let a = Math.floor((14 - month) / 12);
	let y = year - a;
	let m = month + 12 * a - 2;
	return (day +
	        y +
	        Math.floor(y / 4) -
	        Math.floor(y / 100) +
	        Math.floor(y / 400) +
	        Math.floor((31 * m) / 12)) % 7;
}

module.exports = getDAyOfWeek;
