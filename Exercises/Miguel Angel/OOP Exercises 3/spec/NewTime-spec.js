"use strict"

let NewTime = require("../NewTime");

describe("Testing NewTime", function (){
	let newTime = new NewTime({hour: 20, minute: 25, second: 54});
	it("Should create a NewTime", function(){
		expect(newTime instanceof NewTime).toBe(true);
	});
	it("Get methods should work", function(){
		expect(newTime.getHour()).toBe(20);
		expect(newTime.getMinute()).toBe(25);
		expect(newTime.getSecond()).toBe(54);
	});
	it("Set methods should work", function(){
		newTime.setHour(21);
		newTime.setMinute(33);
		newTime.setSecond(21);
		expect(newTime.getHour()).toBe(21);
		expect(newTime.getMinute()).toBe(33);
		expect(newTime.getSecond()).toBe(21);
	});
	it("Method setTime should work", function(){
		newTime.setTime(17, 44, 54);
		expect(newTime.getHour()).toBe(17);
		expect(newTime.getMinute()).toBe(44);
		expect(newTime.getSecond()).toBe(54);
	});
	it("Method toString should work", function(){
		let newTime2 = new NewTime({hour: 7, minute: 8, second: 5});
		expect(newTime.toString()).toBe("17:44:54");
		expect(newTime2.toString()).toBe("07:08:05");
	});
	it("Method nextSecond should work", function(){
		let newTime2 = new NewTime({hour: 23, minute: 59, second: 59});
		newTime.nextSecond();
		newTime2.nextSecond();
		expect(newTime.getHour()).toBe(17);
		expect(newTime.getMinute()).toBe(44);
		expect(newTime.getSecond()).toBe(55);
		expect(newTime2.getHour()).toBe(0);
		expect(newTime2.getMinute()).toBe(0);
		expect(newTime2.getSecond()).toBe(0);
	});
	it("Method previousSecond should work", function(){
		let newTime2 = new NewTime({hour: 0, minute: 0, second: 0});
		newTime.previousSecond();
		newTime2.previousSecond();
		expect(newTime.getHour()).toBe(17);
		expect(newTime.getMinute()).toBe(44);
		expect(newTime.getSecond()).toBe(54);
		expect(newTime2.getHour()).toBe(23);
		expect(newTime2.getMinute()).toBe(59);
		expect(newTime2.getSecond()).toBe(59);
	});
});

