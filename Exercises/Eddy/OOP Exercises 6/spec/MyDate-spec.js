(function() {
	'use strict';

	let MyDate = require('../MyDate');

	describe('MyDate class', function() {
		let myDate1,
			myDate2,
			data1 = {
				year: 1987,
				month: 9,
				day: 27
			},
			data2 = {
				year: 2016,
				month: 10,
				day: 6
			};

		beforeEach(function() {
			myDate1 = new MyDate(data1.year, data1.month, data1.day);
			myDate2 = new MyDate(data2.year, data2.month, data2.day);
		});

		it('should be defined', function() {
			expect(MyDate).toBeDefined();
		});

		describe('Prototype', function() {
			describe('Descriptors', function() {
				let descriptors;
				it('should have descriptors', function() {
					descriptors = Object.getOwnPropertyDescriptor(MyDate, 'prototype');
					expect(descriptors).toBeDefined();
				});
				it('should NOT be writable', function() {
					//expect(descriptors.writable).toBeDefined();
					//expect(descriptors.writable).not.toBe(true);
				});
				it('should NOT be enumerable', function() {
					expect(descriptors.enumerable).toBeDefined();
					expect(descriptors.enumerable).not.toBe(true);
				});
				it('should NOT be configurable', function() {
					expect(descriptors.configurable).toBeDefined();
					expect(descriptors.configurable).not.toBe(true);
				});
			});
		});

		describe('Private properties', function() {
			it('should have "year" as private property', function() {
				expect(myDate1.year).toBeUndefined();
				expect(myDate1._year).toBeUndefined();
			});

			it('should have "month" as private property', function() {
				expect(myDate1.month).toBeUndefined();
				expect(myDate1._month).toBeUndefined();
			});

			it('should have "day" as private property', function() {
				expect(myDate1.day).toBeUndefined();
				expect(myDate1._day).toBeUndefined();
			});

			it('should have "strMonths" as private property', function() {
				expect(myDate1.strMonths).toBeUndefined();
			});

			it('should have "strDays" as private property', function() {
				expect(myDate1.strDays).toBeUndefined();
			});

			it('should have "dayInMonths" as private property', function() {
				expect(myDate1.dayInMonths).toBeUndefined();
			});
		});

		describe('Public Static Methods', function() {

			describe('isLeapYear(year)', function() {
				it('should be defined', function() {
					expect(myDate1.isLeapYear).toBeDefined();
					expect(typeof myDate1.isLeapYear).toBe('function');
				});
				it('should return true', function() {
					expect(myDate1.isLeapYear(4)).toBe(true);
					expect(myDate1.isLeapYear(400)).toBe(true);
					expect(myDate1.isLeapYear(1200)).toBe(true);
					expect(myDate1.isLeapYear(1904)).toBe(true);
					expect(myDate1.isLeapYear(1908)).toBe(true);
					expect(myDate1.isLeapYear(1992)).toBe(true);
					expect(myDate1.isLeapYear(1996)).toBe(true);
					expect(myDate1.isLeapYear(2000)).toBe(true);
					expect(myDate1.isLeapYear(2004)).toBe(true);
					expect(myDate1.isLeapYear(2016)).toBe(true);
					expect(myDate1.isLeapYear(2096)).toBe(true);
					expect(myDate1.isLeapYear(2400)).toBe(true);
				});
				it('should return false', function() {
					expect(myDate1.isLeapYear(3)).toBe(false);
					expect(myDate1.isLeapYear(100)).toBe(false);
					expect(myDate1.isLeapYear(1987)).toBe(false);
					expect(myDate1.isLeapYear(1700)).toBe(false);
					expect(myDate1.isLeapYear(1800)).toBe(false);
					expect(myDate1.isLeapYear(1900)).toBe(false);
					expect(myDate1.isLeapYear(2100)).toBe(false);
					expect(myDate1.isLeapYear(2200)).toBe(false);
					expect(myDate1.isLeapYear(2294)).toBe(false);
				});
			});

			describe('isValidDate(year, month, day)', function() {
				it('should be defined', function() {
					expect(myDate1.isValidDate).toBeDefined();
					expect(typeof myDate1.isValidDate).toBe('function');
				});

				describe('Validating Day', function() {
					it('should return true', function() {
						expect(myDate1.isValidDate(2016, 1, 1)).toBe(true);
						expect(myDate1.isValidDate(2016, 1, 31)).toBe(true);

						expect(myDate1.isValidDate(2016, 2, 1)).toBe(true);
						expect(myDate1.isValidDate(2016, 2, 29)).toBe(true);
						expect(myDate1.isValidDate(400, 2, 29)).toBe(true);
						expect(myDate1.isValidDate(2000, 2, 29)).toBe(true);
						expect(myDate1.isValidDate(2400, 2, 29)).toBe(true);
						expect(myDate1.isValidDate(1908, 2, 29)).toBe(true);
						expect(myDate1.isValidDate(2096, 2, 29)).toBe(true);
						expect(myDate1.isValidDate(1992, 2, 29)).toBe(true);

						expect(myDate1.isValidDate(2016, 3, 1)).toBe(true);
						expect(myDate1.isValidDate(2016, 3, 31)).toBe(true);

						expect(myDate1.isValidDate(2016, 4, 1)).toBe(true);
						expect(myDate1.isValidDate(2016, 4, 30)).toBe(true);

						expect(myDate1.isValidDate(2016, 5, 1)).toBe(true);
						expect(myDate1.isValidDate(2016, 5, 31)).toBe(true);

						expect(myDate1.isValidDate(2016, 6, 1)).toBe(true);
						expect(myDate1.isValidDate(2016, 6, 30)).toBe(true);

						expect(myDate1.isValidDate(2016, 7, 1)).toBe(true);
						expect(myDate1.isValidDate(2016, 7, 31)).toBe(true);

						expect(myDate1.isValidDate(2016, 8, 1)).toBe(true);
						expect(myDate1.isValidDate(2016, 8, 31)).toBe(true);

						expect(myDate1.isValidDate(2016, 9, 1)).toBe(true);
						expect(myDate1.isValidDate(2016, 9, 30)).toBe(true);

						expect(myDate1.isValidDate(2016, 10, 1)).toBe(true);
						expect(myDate1.isValidDate(2016, 10, 6)).toBe(true);
						expect(myDate1.isValidDate(2016, 10, 31)).toBe(true);

						expect(myDate1.isValidDate(2016, 11, 1)).toBe(true);
						expect(myDate1.isValidDate(2016, 11, 30)).toBe(true);

						expect(myDate1.isValidDate(2016, 12, 1)).toBe(true);
						expect(myDate1.isValidDate(2016, 12, 31)).toBe(true);
					});

					it('should return false', function() {
						expect(myDate1.isValidDate(2016, 1, 0)).toBe(false);
						expect(myDate1.isValidDate(2016, 1, 32)).toBe(false);

						expect(myDate1.isValidDate(2016, 2, 0)).toBe(false);
						expect(myDate1.isValidDate(2015, 2, 29)).toBe(false);
						expect(myDate1.isValidDate(1987, 2, 30)).toBe(false);
						expect(myDate1.isValidDate(1500, 2, 29)).toBe(false);
						expect(myDate1.isValidDate(1100, 2, 29)).toBe(false);
						expect(myDate1.isValidDate(2100, 2, 29)).toBe(false);
						expect(myDate1.isValidDate(3, 2, 29)).toBe(false);
						expect(myDate1.isValidDate(2294, 2, 29)).toBe(false);

						expect(myDate1.isValidDate(2016, 3, 0)).toBe(false);
						expect(myDate1.isValidDate(2016, 3, 32)).toBe(false);

						expect(myDate1.isValidDate(2016, 4, -1)).toBe(false);
						expect(myDate1.isValidDate(2016, 4, 33)).toBe(false);

						expect(myDate1.isValidDate(2016, 5, 0.1)).toBe(false);
						expect(myDate1.isValidDate(2016, 5, 320)).toBe(false);

						expect(myDate1.isValidDate(2016, 6, 1.5)).toBe(false);
						expect(myDate1.isValidDate(2016, 6, 15.5)).toBe(false);

						expect(myDate1.isValidDate(2016, 7, 'a')).toBe(false);
						expect(myDate1.isValidDate(2016, 7, 'b')).toBe(false);

						expect(myDate1.isValidDate(2016, 8, 0)).toBe(false);
						expect(myDate1.isValidDate(2016, 8, 32)).toBe(false);

						expect(myDate1.isValidDate(2016, 9, 0)).toBe(false);
						expect(myDate1.isValidDate(2016, 9, 31)).toBe(false);

						expect(myDate1.isValidDate(2016, 10, '1')).toBe(false);
						expect(myDate1.isValidDate(2016, 10, '31')).toBe(false);

						expect(myDate1.isValidDate(2016, 11, 0)).toBe(false);
						expect(myDate1.isValidDate(2016, 11, 31)).toBe(false);

						expect(myDate1.isValidDate(2016, 12, 0)).toBe(false);
						expect(myDate1.isValidDate(2016, 12, 32)).toBe(false);
					});
				});

				describe('Validating Month', function() {
					it('should return true', function() {
						expect(myDate1.isValidDate(2016, 1, 1)).toBe(true);
						expect(myDate1.isValidDate(2016, 2, 1)).toBe(true);
						expect(myDate1.isValidDate(2016, 3, 1)).toBe(true);
						expect(myDate1.isValidDate(2016, 4, 1)).toBe(true);
						expect(myDate1.isValidDate(2016, 5, 1)).toBe(true);
						expect(myDate1.isValidDate(2016, 6, 1)).toBe(true);
						expect(myDate1.isValidDate(2016, 7, 1)).toBe(true);
						expect(myDate1.isValidDate(2016, 8, 1)).toBe(true);
						expect(myDate1.isValidDate(2016, 9, 1)).toBe(true);
						expect(myDate1.isValidDate(2016, 10, 1)).toBe(true);
						expect(myDate1.isValidDate(2016, 11, 1)).toBe(true);
						expect(myDate1.isValidDate(2016, 12, 1)).toBe(true);
					});
					it('should return false', function() {
						expect(myDate1.isValidDate(2016, 0, 1)).toBe(false);
						expect(myDate1.isValidDate(2016, 13, 1)).toBe(false);
						expect(myDate1.isValidDate(2016, '1', 1)).toBe(false);
						expect(myDate1.isValidDate(2016, 'a', 1)).toBe(false);
						expect(myDate1.isValidDate(2016, -1, 1)).toBe(false);
						expect(myDate1.isValidDate(2016, 14, 1)).toBe(false);
					});
				});

				describe('Validating Year', function() {
					it('should return true', function() {
						expect(myDate1.isValidDate(1, 1, 1)).toBe(true);
						expect(myDate1.isValidDate(10, 1, 1)).toBe(true);
						expect(myDate1.isValidDate(100, 1, 1)).toBe(true);
						expect(myDate1.isValidDate(1000, 1, 1)).toBe(true);
						expect(myDate1.isValidDate(9000, 1, 1)).toBe(true);
						expect(myDate1.isValidDate(9999, 1, 1)).toBe(true);
					});
					it('should return false', function() {
						expect(myDate1.isValidDate(-1, 1, 1)).toBe(false);
						expect(myDate1.isValidDate(0, 1, 1)).toBe(false);
						expect(myDate1.isValidDate('1987', 1, 1)).toBe(false);
						expect(myDate1.isValidDate('a', 1, 1)).toBe(false);
						expect(myDate1.isValidDate(10000, 1, 1)).toBe(false);
					});
				});
			});

			describe('getDayOfWeek(year, month, day)', function() {
				it('should be defined', function() {
					expect(myDate1.getDayOfWeek).toBeDefined();
					expect(typeof myDate1.getDayOfWeek).toBe('function');
				});
				it('should return the day of the week', function() {
					expect(myDate1.getDayOfWeek(1987, 9, 27)).toBe(0);
					expect(myDate1.getDayOfWeek(2016, 10, 6)).toBe(4);

					expect(myDate1.getDayOfWeek(2000, 1, 1)).toBe(6);
					expect(myDate1.getDayOfWeek(2001, 2, 1)).toBe(4);
					expect(myDate1.getDayOfWeek(2002, 3, 1)).toBe(5);
					expect(myDate1.getDayOfWeek(2003, 4, 1)).toBe(2);
					expect(myDate1.getDayOfWeek(2004, 5, 1)).toBe(6);
					expect(myDate1.getDayOfWeek(2005, 6, 1)).toBe(3);
					expect(myDate1.getDayOfWeek(2006, 7, 1)).toBe(6);
					expect(myDate1.getDayOfWeek(2007, 8, 1)).toBe(3);
					expect(myDate1.getDayOfWeek(2008, 9, 1)).toBe(1);
					expect(myDate1.getDayOfWeek(2010, 10, 1)).toBe(5);
					expect(myDate1.getDayOfWeek(2011, 11, 1)).toBe(2);
					expect(myDate1.getDayOfWeek(2012, 10, 1)).toBe(1);
					// for (let year = 100; year <= 9999; year++) {
					//     expect(myDate1.getDayOfWeek(year, 1, 1)).toBe(new Date(year, 0, 1).getDay());
					// }
				});
			});

		});

		describe('Getters and Setters Methods', function() {

			describe('getYear()', function() {
				it('should be defined', function() {
					expect(myDate1.getYear).toBeDefined();
					expect(typeof myDate1.getYear).toBe('function');
				});
				it('should return the year', function() {
					expect(myDate1.getYear()).toBe(1987);
					expect(myDate2.getYear()).toBe(2016);
				});
			});

			describe('setYear()', function() {
				it('should be defined', function() {
					expect(myDate1.setYear).toBeDefined();
					expect(typeof myDate1.setYear).toBe('function');
				});
				it('should update the year', function() {
					expect(myDate1.setYear(2200)).toBeUndefined();
					expect(myDate1.getYear()).toBe(2200);
					expect(myDate2.setYear(1)).toBeUndefined();
					expect(myDate2.getYear()).toBe(1);
				});
				it('should NOT update the year', function() {
					expect(myDate1.setYear(0)).toBeUndefined();
					expect(myDate1.getYear()).toBe(1987);
					expect(myDate2.setYear(10000)).toBeUndefined();
					expect(myDate2.getYear()).toBe(2016);
				});
			});

			describe('getMonth()', function() {
				it('should be defined', function() {
					expect(myDate1.getMonth).toBeDefined();
					expect(typeof myDate1.getMonth).toBe('function');
				});
				it('should return the month', function() {
					expect(myDate1.getMonth()).toBe(9);
					expect(myDate2.getMonth()).toBe(10);
				});
			});

			describe('setMonth()', function() {
				it('should be defined', function() {
					expect(myDate1.setMonth).toBeDefined();
					expect(typeof myDate1.setMonth).toBe('function');
				});
				it('should update the month', function() {
					expect(myDate1.setMonth(1)).toBeUndefined();
					expect(myDate1.getMonth()).toBe(1);
					expect(myDate2.setMonth(12)).toBeUndefined();
					expect(myDate2.getMonth()).toBe(12);
				});
				it('should NOT update the month', function() {
					expect(myDate1.setMonth(0)).toBeUndefined();
					expect(myDate1.getMonth()).toBe(9);

					expect(myDate2.setMonth(13)).toBeUndefined();
					expect(myDate2.getMonth()).toBe(10);
				});
				it('should NOT update the month if the day doesn\'t match', function() {
					expect(myDate1.setDay(30)).toBeUndefined();
					expect(myDate1.getDay()).toBe(30);
					expect(myDate1.setMonth(2)).toBeUndefined();
					expect(myDate1.getMonth()).toBe(9);
				});
			});

			describe('getDay()', function() {
				it('should be defined', function() {
					expect(myDate1.getDay).toBeDefined();
					expect(typeof myDate1.getDay).toBe('function');
				});
				it('should return the day', function() {
					expect(myDate1.getDay()).toBe(27);
					expect(myDate2.getDay()).toBe(6);
				});
			});

			describe('setDay()', function() {
				it('should be defined', function() {
					expect(myDate1.setDay).toBeDefined();
					expect(typeof myDate1.setDay).toBe('function');
				});
				it('should update the day', function() {
					expect(myDate1.setDay(30)).toBeUndefined();
					expect(myDate1.getDay()).toBe(30);

					expect(myDate2.setDay(31)).toBeUndefined();
					expect(myDate2.getDay()).toBe(31);
				});
				it('should NOT update the day', function() {
					expect(myDate1.setDay(31)).toBeUndefined();
					expect(myDate1.getDay()).toBe(27);

					expect(myDate2.setDay(32)).toBeUndefined();
					expect(myDate2.getDay()).toBe(6);
				});
				it('should NOT update the day if the month doesn\'t match', function() {
					expect(myDate1.setMonth(2)).toBeUndefined();
					expect(myDate1.getMonth()).toBe(2);
					expect(myDate1.setDay(30)).toBeUndefined();
					expect(myDate1.getDay()).toBe(27);
				});
			});

		});

		describe('Public Methods', function() {

			describe('setDate(year, month, day)', function() {
				it('should be defined', function() {
					expect(myDate1.setDate).toBeDefined();
					expect(typeof myDate1.setDate).toBe('function');
				});
				it('should update the date', function() {
					expect(myDate1.setDate(2016, 12, 31)).toBeUndefined();
					expect(myDate1.getYear()).toBe(2016);
					expect(myDate1.getMonth()).toBe(12);
					expect(myDate1.getDay()).toBe(31);

					expect(myDate2.setDate(1800, 5, 15)).toBeUndefined();
					expect(myDate2.getYear()).toBe(1800);
					expect(myDate2.getMonth()).toBe(5);
					expect(myDate2.getDay()).toBe(15);
				});
				it('should NOT update the date', function() {
					expect(myDate1.setDate(2016, 13, 31)).toBeUndefined();
					expect(myDate1.getYear()).toBe(1987);
					expect(myDate1.getMonth()).toBe(9);
					expect(myDate1.getDay()).toBe(27);

					expect(myDate2.setDate(2015, 2, 29)).toBeUndefined();
					expect(myDate2.getYear()).toBe(2016);
					expect(myDate2.getMonth()).toBe(10);
					expect(myDate2.getDay()).toBe(6);

					expect(myDate2.setDate(0, 1, 1)).toBeUndefined();
					expect(myDate2.getYear()).toBe(2016);
					expect(myDate2.getMonth()).toBe(10);
					expect(myDate2.getDay()).toBe(6);
				});
			});

			describe('toString()', function() {
				it('should be defined', function() {
					expect(myDate1.toString).toBeDefined();
					expect(typeof myDate1.toString).toBe('function');
				});
				it('should return the date as string', function() {
					expect(myDate1.toString()).toBe('Sunday 27 Sep 1987');
					expect(myDate2.toString()).toBe('Thursday 6 Oct 2016');
				});
			});

			describe('nextYear()', function() {
				it('should be defined', function() {
					expect(myDate1.nextYear).toBeDefined();
					expect(typeof myDate1.nextYear).toBe('function');
				});
				it('should increment the year', function() {
					expect(myDate1.nextYear()).toBe(myDate1);
					expect(myDate1.getYear()).toBe(1988);

					expect(myDate2.nextYear()).toBe(myDate2);
					expect(myDate2.getYear()).toBe(2017);
				});
				it('should NOT increment the year', function() {
					expect(myDate1.setYear(9999)).toBeUndefined();
					expect(myDate1.getYear()).toBe(9999);
					expect(myDate1.nextYear()).toBe(myDate1);
					expect(myDate1.getYear()).toBe(9999);
				});
			});

			describe('nextMonth()', function() {
				it('should be defined', function() {
					expect(myDate1.nextMonth).toBeDefined();
					expect(typeof myDate1.nextMonth).toBe('function');
				});
				it('should increment the month', function() {
					expect(myDate1.nextMonth()).toBe(myDate1);
					expect(myDate1.getMonth()).toBe(10);

					expect(myDate2.nextMonth()).toBe(myDate2);
					expect(myDate2.getMonth()).toBe(11);
				});
				it('should increment the month and the year', function() {
					expect(myDate2.setMonth(12)).toBeUndefined();
					expect(myDate2.getMonth()).toBe(12);
					expect(myDate2.getYear()).toBe(2016);
					expect(myDate2.nextMonth()).toBe(myDate2);
					expect(myDate2.getMonth()).toBe(1);
					expect(myDate2.getYear()).toBe(2017);
				});
				it('should NOT increment the month nor the year', function() {
					expect(myDate2.setMonth(12)).toBeUndefined();
					expect(myDate2.setYear(9999)).toBeUndefined();
					expect(myDate2.getMonth()).toBe(12);
					expect(myDate2.getYear()).toBe(9999);
					expect(myDate2.nextMonth()).toBe(myDate2);
					expect(myDate2.getMonth()).toBe(12);
					expect(myDate2.getYear()).toBe(9999);
				});
			});

			describe('nextDay()', function() {
				it('should be defined', function() {
					expect(myDate1.nextDay).toBeDefined();
					expect(typeof myDate1.nextDay).toBe('function');
				});
				it('should increment the day', function() {
					expect(myDate1.nextDay()).toBe(myDate1);
					expect(myDate1.getDay()).toBe(28);

					expect(myDate2.nextDay()).toBe(myDate2);
					expect(myDate2.getDay()).toBe(7);
				});
				it('should increment the day and the month', function() {
					expect(myDate2.setDay(31)).toBeUndefined();
					expect(myDate2.getDay()).toBe(31);
					expect(myDate2.getMonth()).toBe(10);
					expect(myDate2.nextDay()).toBe(myDate2);
					expect(myDate2.getDay()).toBe(1);
					expect(myDate2.getMonth()).toBe(11);
				});
				it('should increment the day, the month and the year', function() {
					expect(myDate2.setDay(31)).toBeUndefined();
					expect(myDate2.setMonth(12)).toBeUndefined();
					expect(myDate2.getDay()).toBe(31);
					expect(myDate2.getMonth()).toBe(12);
					expect(myDate2.getYear()).toBe(2016);

					expect(myDate2.nextDay()).toBe(myDate2);
					expect(myDate2.getDay()).toBe(1);
					expect(myDate2.getMonth()).toBe(1);
					expect(myDate2.getYear()).toBe(2017);
				});
				it('should NOT increment the day nor the month nor the year', function() {
					expect(myDate2.setDay(31)).toBeUndefined();
					expect(myDate2.setMonth(12)).toBeUndefined();
					expect(myDate2.setYear(9999)).toBeUndefined();
					expect(myDate2.getDay()).toBe(31);
					expect(myDate2.getMonth()).toBe(12);
					expect(myDate2.getYear()).toBe(9999);

					expect(myDate2.nextDay()).toBe(myDate2);
					expect(myDate2.getDay()).toBe(31);
					expect(myDate2.getMonth()).toBe(12);
					expect(myDate2.getYear()).toBe(9999);
				});
			});

			describe('previousYear()', function() {
				it('should be defined', function() {
					expect(myDate1.previousYear).toBeDefined();
					expect(typeof myDate1.previousYear).toBe('function');
				});
				it('should decrement the year', function() {
					expect(myDate1.previousYear()).toBe(myDate1);
					expect(myDate1.getYear()).toBe(1986);

					expect(myDate2.previousYear()).toBe(myDate2);
					expect(myDate2.getYear()).toBe(2015);
				});
				it('should NOT decrement the year', function() {
					expect(myDate1.setYear(1)).toBeUndefined();
					expect(myDate1.getYear()).toBe(1);
					expect(myDate1.previousYear()).toBe(myDate1);
					expect(myDate1.getYear()).toBe(1);
				});
			});

			describe('previousMonth()', function() {
				it('should be defined', function() {
					expect(myDate1.previousMonth).toBeDefined();
					expect(typeof myDate1.previousMonth).toBe('function');
				});
				it('should decrement the month', function() {
					expect(myDate1.previousMonth()).toBe(myDate1);
					expect(myDate1.getMonth()).toBe(8);

					expect(myDate2.previousMonth()).toBe(myDate2);
					expect(myDate2.getMonth()).toBe(9);
				});
				it('should decrement the month and the year', function() {
					expect(myDate2.setMonth(1)).toBeUndefined();
					expect(myDate2.getMonth()).toBe(1);
					expect(myDate2.getYear()).toBe(2016);
					expect(myDate2.previousMonth()).toBe(myDate2);
					expect(myDate2.getMonth()).toBe(12);
					expect(myDate2.getYear()).toBe(2015);
				});
				it('should NOT decrement the month nor the year', function() {
					expect(myDate2.setMonth(1)).toBeUndefined();
					expect(myDate2.setYear(1)).toBeUndefined();
					expect(myDate2.getMonth()).toBe(1);
					expect(myDate2.getYear()).toBe(1);
					expect(myDate2.previousMonth()).toBe(myDate2);
					expect(myDate2.getMonth()).toBe(1);
					expect(myDate2.getYear()).toBe(1);
				});
			});

			describe('previousDay()', function() {
				it('should be defined', function() {
					expect(myDate1.previousDay).toBeDefined();
					expect(typeof myDate1.previousDay).toBe('function');
				});
				it('should decrement the day', function() {
					expect(myDate1.previousDay()).toBe(myDate1);
					expect(myDate1.getDay()).toBe(26);

					expect(myDate2.previousDay()).toBe(myDate2);
					expect(myDate2.getDay()).toBe(5);
				});
				it('should decrement the day and the month', function() {
					expect(myDate2.setDay(1)).toBeUndefined();
					expect(myDate2.getDay()).toBe(1);
					expect(myDate2.getMonth()).toBe(10);
					expect(myDate2.previousDay()).toBe(myDate2);
					expect(myDate2.getDay()).toBe(30);
					expect(myDate2.getMonth()).toBe(9);
				});
				it('should decrement the day, the month and the year', function() {
					expect(myDate2.setDay(1)).toBeUndefined();
					expect(myDate2.setMonth(1)).toBeUndefined();
					expect(myDate2.getDay()).toBe(1);
					expect(myDate2.getMonth()).toBe(1);
					expect(myDate2.getYear()).toBe(2016);

					expect(myDate2.previousDay()).toBe(myDate2);
					expect(myDate2.getDay()).toBe(31);
					expect(myDate2.getMonth()).toBe(12);
					expect(myDate2.getYear()).toBe(2015);
				});
				it('should NOT decrement the day nor the month nor the year', function() {
					expect(myDate2.setDay(1)).toBeUndefined();
					expect(myDate2.setMonth(1)).toBeUndefined();
					expect(myDate2.setYear(1)).toBeUndefined();
					expect(myDate2.getDay()).toBe(1);
					expect(myDate2.getMonth()).toBe(1);
					expect(myDate2.getYear()).toBe(1);

					expect(myDate2.previousDay()).toBe(myDate2);
					expect(myDate2.getDay()).toBe(1);
					expect(myDate2.getMonth()).toBe(1);
					expect(myDate2.getYear()).toBe(1);
				});
			});
		});
	});
}());