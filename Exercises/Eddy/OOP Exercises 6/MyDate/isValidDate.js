/**
 * Created by jazielsama on 15/10/16.
 *
 */

"use strict";

let isLeapYear = require("./isLeapYear");

const	dayInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isValidYear(year) {
	return typeof year === "number" && Number.isInteger(year) && year >= 1 && year <= 9999;
}

function isValidMonth(month) {
	return typeof month === "number" && Number.isInteger(month) && month >= 1 && month <= 12;
}

function isValidDay(day, maxDays) {
	return typeof day === "number" && Number.isInteger(day) && day >= 1 && day <= maxDays;
}

function getMaxDay(month, year) {
	let max = dayInMonths[month - 1];
	max = month === 2 && isLeapYear(year) ? max + 1 : max;
	return max;
}

function isValidDate(year, month, day) {
	return !!(isValidYear(year) && isValidMonth(month) && isValidDay(day, getMaxDay(month, year)));

}

module.exports = isValidDate;
