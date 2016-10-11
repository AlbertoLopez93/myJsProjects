/**
 * Created by eddy velazquez on 10/10/16.
 *
 * this function returns the minimum ammout of visits
 * that are neccesary to get advantage of an annual pass
 * if the function return 0 means that is better to buy singles
 * passes instead of the annual pass.
 *
 */

"use strict";

function howManyTimes(anualPassPrice, singlePassPrice) {
	let visitsAmount = Math.floor(anualPassPrice / singlePassPrice + 1);

	if(visitsAmount >= 365 || anualPassPrice <= singlePassPrice) {
		visitsAmount = 0;
	}

	return visitsAmount;
}

module.exports = howManyTimes;
console.log(howManyTimes(1000, 50));