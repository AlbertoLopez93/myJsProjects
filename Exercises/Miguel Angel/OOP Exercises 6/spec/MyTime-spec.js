"use strict"

let MyTime = require("../MyTime");

xdescribe('MyTime class', function () {
	let newTime1 = new MyTime(10, 23, 11);
	let newTime2 = new MyTime();
	describe('Private properties', function () {
		it('Should have a private propertie called hour', function () {
			expect(newTime1.hour).toBeUndefined();
		});
		it('Should have a private propertie called minute', function () {
			expect(newTime1.minute).toBeUndefined();
		});
		it('Should have a private propertie called second', function () {
			expect(newTime1.second).toBeUndefined();
		});
	});
	describe('Methods', function () {
		describe('Get methods', function () {
			describe('getHour method', function () {
				it('Should be defined', function () {
					expect(newTime1.getHour).toBeDefined();
					expect(typeof newTime1.getHour).toBe("function");
				});
				it('Should return the hour of the instance', function () {
					expect(newTime1.getHour()).toBe(10);
					expect(newTime2.getHour()).toBe(0);
				});
			});
			describe('getMinute method', function () {
				it('Should be defined', function () {
					expect(newTime1.getMinute).toBeDefined();
					expect(typeof newTime1.getMinute).toBe("function");
				});
				it('Should return the minute of the instance', function () {
					expect(newTime1.getMinute()).toBe(23);
					expect(newTime2.getMinute()).toBe(0);
				});
			});
			describe('getSecond method', function () {
				it('Should be defined', function () {
					expect(newTime1.getSecond).toBeDefined();
					expect(typeof newTime1.getSecond).toBe("function");
				});
				it('Should return the second of the instance', function () {
					expect(newTime1.getSecond()).toBe(11);
					expect(newTime2.getSecond()).toBe(0);
				});
			});
		});
		describe('Set Methods', function () {
			describe('setHour method', function () {
				it('Shoudl be defined', function () {
					expect(newTime1.setHour).toBeDefined();
					expect(typeof newTime1.setHour).toBe("function");
				});
				it('Should set a new hour of the instance', function () {
					newTime1.setHour(21);
					expect(newTime1.getHour()).toBe(21);
				});
				it("Shouldn't change the hour if it's over 23", function () {
					newTime1.setHour(24);
					expect(newTime1.getHour()).toBe(21);
				});
			});
			describe('setMinute method', function () {
				it('Shoudl be defined', function () {
					expect(newTime1.setMinute).toBeDefined();
					expect(typeof newTime1.setMinute).toBe("function");
				});
				it('Should set a new minute of the instance', function () {
					newTime1.setMinute(43);
					expect(newTime1.getMinute()).toBe(43);
				});
				it("Shouldn't change the minute if it's over 59", function () {
					newTime1.setHour(60);
					expect(newTime1.getMinute()).toBe(43);
				});
			});
			describe('setSecond method', function () {
				it('Shoudl be defined', function () {
					expect(newTime1.setSecond).toBeDefined();
					expect(typeof newTime1.setSecond).toBe("function");
				});
				it('Should set a new minute of the instance', function () {
					newTime1.setSecond(33);
					expect(newTime1.getSecond()).toBe(33);
				});
				it("Shouldn't change the second if it's over 59", function () {
					newTime1.setSecond(60);
					expect(newTime1.getSecond()).toBe(33);
				});
			});
			describe('setTime method', function () {
				it('Shoudl be defined', function () {
					expect(newTime1.setTime).toBeDefined();
					expect(typeof newTime1.setTime).toBe("function");
				});
				it('Should set a new time of the instance', function () {
					newTime1.setTime(8, 6, 4);
					expect(newTime1.getHour()).toBe(8);
					expect(newTime1.getMinute()).toBe(6);
					expect(newTime1.getSecond()).toBe(4);
				});
				it("Shouldn't change the hour, minute and second if they are bigger than 23, 59 and 59", function () {
					newTime1.setTime(24, 60, 60);
					expect(newTime1.getHour()).toBe(8);
					expect(newTime1.getMinute()).toBe(6);
					expect(newTime1.getSecond()).toBe(4);
				});
			});
		});
		describe('Next methods', function () {
			describe('nextSecond method', function () {
				it('Should be defined', function () {
					expect(newTime1.nextSecond).toBeDefined();
					expect(typeof newTime1.nextSecond).toBe("function");
				});
				it('Should return an instance of MyTime', function () {
					expect(newTime1.nextSecond() instanceof MyTime).toBe(true);
				});
				it('Should set the time of the instance in the next second', function () {
					let newTime1 = new MyTime(23, 59, 59);
					newTime1.nextSecond();
					expect(newTime1.getHour()).toBe(0);
					expect(newTime1.getMinute()).toBe(0);
					expect(newTime1.getSecond()).toBe(0);
				});
			});
			describe('nextMinute method', function () {
				it('Should be defined', function () {
					expect(newTime1.nextMinute).toBeDefined();
					expect(typeof newTime1.nextMinute).toBe("function");
				});
				it('Should return an instance of MyTime', function () {
					expect(newTime1.nextMinute() instanceof MyTime).toBe(true);
				});
				it('Should set the time of the instance in the next minute', function () {
					let newTime1 = new MyTime(23, 59, 59);
					newTime1.nextMinute();
					expect(newTime1.getHour()).toBe(0);
					expect(newTime1.getMinute()).toBe(0);
					expect(newTime1.getSecond()).toBe(59);
				});
			});
			describe('nextHour method', function () {
				it('Should be defined', function () {
					expect(newTime1.nextHour).toBeDefined();
					expect(typeof newTime1.nextHour).toBe("function");
				});
				it('Should return an instance of MyTime', function () {
					expect(newTime1.nextHour() instanceof MyTime).toBe(true);
				});
				it('Should set the time of the instance in the next hour', function () {
					let newTime1 = new MyTime(23, 59, 59);
					newTime1.nextHour();
					expect(newTime1.getHour()).toBe(0);
					expect(newTime1.getMinute()).toBe(59);
					expect(newTime1.getSecond()).toBe(59);
				});
			});
		});
		describe('Previous methods', function () {
			describe('previousSecond method', function () {
				it('Should be defined', function () {
					expect(newTime1.previousSecond).toBeDefined();
					expect(typeof newTime1.previousSecond).toBe("function");
				});
				it('Should return an instance of MyTime', function () {
					expect(newTime1.previousSecond() instanceof MyTime).toBe(true);
				});
				it('Should set the time of the instance in the previous second', function () {
					let newTime1 = new MyTime();
					newTime1.previousSecond();
					expect(newTime1.getHour()).toBe(23);
					expect(newTime1.getMinute()).toBe(59);
					expect(newTime1.getSecond()).toBe(59);
				});
			});
			describe('previousMinute method', function () {
				it('Should be defined', function () {
					expect(newTime1.previousMinute).toBeDefined();
					expect(typeof newTime1.previousMinute).toBe("function");
				});
				it('Should return an instance of MyTime', function () {
					expect(newTime1.previousMinute() instanceof MyTime).toBe(true);
				});
				it('Should set the time of the instance in the previous minute', function () {
					let newTime1 = new MyTime();
					newTime1.previousMinute();
					expect(newTime1.getHour()).toBe(23);
					expect(newTime1.getMinute()).toBe(59);
					expect(newTime1.getSecond()).toBe(0);
				});
			});
			describe('previousHour method', function () {
				it('Should be defined', function () {
					expect(newTime1.previousHour).toBeDefined();
					expect(typeof newTime1.previousHour).toBe("function");
				});
				it('Should return an instance of MyTime', function () {
					expect(newTime1.previousHour() instanceof MyTime).toBe(true);
				});
				it('Should set the time of the instance in the previous hour', function () {
					let newTime1 = new MyTime();
					newTime1.previousHour();
					expect(newTime1.getHour()).toBe(23);
					expect(newTime1.getMinute()).toBe(0);
					expect(newTime1.getSecond()).toBe(0);
				});
			});
		});
		describe('toString method', function () {
			it('Should be defined', function () {
				expect(newTime1.toString).toBeDefined();
				expect(typeof newTime1.toString).toBe("function");
			});
			it('Should return a string with the pattern 00:00:00', function () {
				let newTime = new MyTime(23, 59, 59);
				expect(newTime.toString()).toBe("23:59:59");
				expect(newTime1.toString()).toBe("08:06:04");
				expect(newTime2.toString()).toBe("00:00:00");
			});
		});
	});
});