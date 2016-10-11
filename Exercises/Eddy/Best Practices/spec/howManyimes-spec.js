/**
 * Created by eddy velazquez on 10/10/16.
 *
 * name howManyTimes-spec.js
 *
 *
 * this spec  shows some test on howManyTimes function.
 * about which deals are good to take advantage in case
 * the gifted arguments are in the correct range, or return
 * o if the arguments are not a good price deal
 *
 */

"use strict";

const howManyTimes = require("../howManyTimes");

describe("Testing function howManyTimes  ", function() {

	it("Testing values that are good deals ", function() {
		expect(howManyTimes(1000, 50)).toBe(21);
		expect(howManyTimes(365, 2)).toBe(183);
		expect(howManyTimes(3650, 11)).toBe(332);
		expect(howManyTimes(36500, 110)).toBe(332);
		expect(howManyTimes(7000, 500)).toBe(15);
	});

	it("testing prices that are not good deals ", function() {
		expect(howManyTimes(365, 1)).toBe(0);
		expect(howManyTimes(365, 0.9)).toBe(0);
		expect(howManyTimes(3650, 10)).toBe(0);
		expect(howManyTimes(36500, 100)).toBe(0);
		expect(howManyTimes(0, 0)).toBe(0);
		expect(howManyTimes(1, 0)).toBe(0);
	});
});