/**
 * Created by jazielsama on 30/09/16.
 */
"use strict";

let NewTime = require ("../NewTime");

describe ("Testing NewTime", function () {
	it ("Should create a NewTime", function () {
		let newTime = new NewTime ({hour: 20, minute: 25, second: 54});
		expect (newTime instanceof NewTime).toBe (true);
	});
	it ("Get methods should work", function () {
		let newTime = new NewTime ({hour: 20, minute: 25, second: 54});
		expect (newTime.getHour ()).toBe (20);
		expect (newTime.getMinute ()).toBe (25);
		expect (newTime.getSecond ()).toBe (54);
	});
	it ("Set methods should work", function () {
		let newTime = new NewTime ({hour: 20, minute: 25, second: 54});
		newTime.setHour (21);
		newTime.setMinute (33);
		newTime.setSecond (21);
		expect (newTime.getHour ()).toBe (21);
		expect (newTime.getMinute ()).toBe (33);
		expect (newTime.getSecond ()).toBe (21);
	});
	it ("Method setTime should work", function () {
		let newTime = new NewTime ({hour: 20, minute: 25, second: 54});
		newTime.setTime (17, 44, 54);
		expect (newTime.getHour ()).toBe (17);
		expect (newTime.getMinute ()).toBe (44);
		expect (newTime.getSecond ()).toBe (54);
	});
	it ("Method toString should work", function () {
		let newTime = new NewTime ({hour: 20, minute: 25, second: 54});
		let newTime2 = new NewTime ({hour: 7, minute: 8, second: 5});
		expect (newTime.toString ()).toBe ("20:25:54");
		expect (newTime2.toString ()).toBe ("07:08:05");
	});
	it ("Method nextSecond should work", function () {
		let newTime = new NewTime ({hour: 20, minute: 25, second: 54});
		let newTime2 = new NewTime ({hour: 23, minute: 59, second: 59});
		newTime.nextSecond ();
		newTime2.nextSecond ();
		expect (newTime.getHour ()).toBe (20);
		expect (newTime.getMinute ()).toBe (25);
		expect (newTime.getSecond ()).toBe (55);
		expect (newTime2.getHour ()).toBe;
		expect (newTime2.getMinute ()).toBe;
		expect (newTime2.getSecond ()).toBe;
	});
	it ("Method previousSecond should work", function () {
		let newTime = new NewTime ({hour: 20, minute: 25, second: 54});
		let newTime2 = new NewTime ({hour: 0, minute: 0, second: 0});
		newTime.previousSecond ();
		newTime2.previousSecond ();
		expect (newTime.getHour ()).toBe (20);
		expect (newTime.getMinute ()).toBe (25);
		expect (newTime.getSecond ()).toBe (53);
		expect (newTime2.getHour ()).toBe (23);
		expect (newTime2.getMinute ()).toBe (59);
		expect (newTime2.getSecond ()).toBe (59);
	});
	it ("should work with all its methods", function () {
		let time = new NewTime ({hour: 0, minute: 0, second: 0});
		expect (time.getSecond ()).toBe(0);
		expect (time.getMinute ()).toBe(0);
		expect (time.getHour ()).toBe(0);
		expect (time.toString ()).toBe ("00:00:00");
		time.setTime (23, 59, 59);
		expect (time.toString ()).toBe ("23:59:59");
		expect (time.nextSecond ().toString()).toBe('00:00:00' );
		expect (time.toString ()).toBe ("00:00:00");
		for (let i = 0; i < 7200; i++) {
			time.nextSecond ();
		}
		expect (time.toString ()).toBe ("02:00:00");
		expect (time.previousSecond ()).toBe;
		expect (time.toString ()).toBe ("01:59:59");
		for (let i = 0; i < 7200; i++) {
			time.previousSecond ();
		}
		expect (time.toString ()).toBe ("23:59:59");
		for (let i = 0; i < 3600; i++) {
			time.previousSecond ();
		}
		expect (time.toString ()).toBe ("22:59:59");
		for (let i = 0; i < 60; i++) {
			time.previousSecond ();
		}
		expect (time.toString ()).toBe ("22:58:59");
	});
});