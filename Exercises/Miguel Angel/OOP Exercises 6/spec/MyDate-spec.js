"use strict"

let MyDate = require('../MyDate');

describe('MyDate class', function () {
	let newDate = new MyDate(1992, 8, 9);
	let newDate1 = new MyDate(1993, 12, 11);
	describe('Private properties', function () {
		it('Should have a private property called year', function () {
			expect(newDate.year).toBeUndefined();	
		});
		it('Should have a private property called month', function () {
			expect(newDate.month).toBeUndefined();	
		});
		it('Should have a private property called day', function () {
			expect(newDate.day).toBeUndefined();	
		});
		it('Should have a private property called strMonths', function () {
			expect(newDate.strMonths).toBeUndefined();	
		});
		it('Should have a private property called strDays', function () {
			expect(newDate.strDays).toBeUndefined();	
		});
		it('Should have a private property called dayInMonths', function () {
			expect(newDate.dayInMonths).toBeUndefined();
		});
	});
	describe('Methods', function () {
		describe('Is methods', function () {
			describe('isLeapYear method', function () {
				it('Should be defined', function () {
					expect(newDate.isLeapYear).toBeDefined();
					expect(typeof newDate.isLeapYear).toBe("function");
				});
				it('Should return true if its leap year and false otherwise', function () {
					expect(newDate.isLeapYear()).toBe(true);
					expect(newDate1.isLeapYear()).toBe(false);
				});
			});
			describe('isValidDate', function () {
				it('Should be defined', function () {
					expect(newDate.isValidDate).toBeDefined();
					expect(typeof newDate.isValidDate).toBe("function");
				});
				it('Should return true if its a valid date and false otherwise', function () {
					expect(newDate.isValidDate()).toBe(true);
				});
			});
		});
	})
});