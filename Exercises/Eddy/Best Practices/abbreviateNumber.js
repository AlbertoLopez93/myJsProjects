"use strict";

function abbreviateNumber(num) {

	if(num >= 0) {
		return positive(num);
	} else {
		return "-" + positive(num * -1);
	}
}

function positive(num) {
	let keys = ['K', 'M'];                          // kilos & Megas
	let ran = [1000, 10000, 999500, 100000000];     //ranges
	let den = [1000, 1000000];                      // denomitors

	if(num < ran[0]) {
		num = num.toPrecision(2);
	} else if(num < ran[1]) {
		num = num.toPrecision(4);
		num = num.slice(0, 1) + ',' + num.slice(1);
	} else if(num < ran[2]) {
		num = (num / den[0]).toPrecision(3);
		num = num + keys[0];
	} else if(num < ran[3]) {
		num = (num / den[1]).toPrecision(3);
		num = num + keys[1];
	} else {
		num = Math.floor(num / den[1]) + keys[1];
	}

	return num;
}

module.exports = abbreviateNumber;

console.log(abbreviateNumber(999999));