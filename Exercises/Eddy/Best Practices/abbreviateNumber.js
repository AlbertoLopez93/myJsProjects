/**
 * Created by eddy velaquez on 7/10/16. BEST PRECTICES
 *
 */

"use strict";

function abbreviateNumber(num) {

	function positive() {

		num = num.toString();
		let len = num.length;
		if(len < 4) {
			return num;
		} else if(len < 5) {
			return num.slice(0, -3) + "," + num.slice(1);
		} else if(len < 6) {
			num = ((num / 1000).toFixed(1) * 1000).toString();
			return num.slice(0, -3) + "." + num.slice(2, 3) + "K";
		} else if(len < 7 && num < 999500) {
			num = ((num / 1000).toFixed(2) * 1000).toString();
			return num.slice(0, -3) + "K";
		} else if(len < 7) {
			num = ((num / 1000000).toFixed(2) * 1000000).toString();
			return "1.00M";
		} else if(len < 9) {
			return num.slice(0, -6) + "." + num.slice(-6, -4) + "M";
		} else {
			return num.slice(0, -6) + "M";
		}
	}

	if(num >= 0) {
		return positive();
	} else {
		num = num * -1;
		return "-" + positive();
	}
}

module.exports = abbreviateNumber;
