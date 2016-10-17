"use strict";

let MyDate = require("../MyDate");
let leapDate;
let noLeapDate;
let validDate;

describe('MyDate class', () => {
  beforeEach(() => {
    leapDate = new MyDate(2016, 2, 29);
    noLeapDate = new MyDate(2015, 12, 31);
    validDate = new MyDate(2016, 10, 14);
  });
  describe('Private properties', () => {
    it('should have a private property called year', () => {
      expect(validDate.year).toBeUndefined();
    });
    it('should have a private property called month', () => {
      expect(validDate.month).toBeUndefined();
    });
    it('should have a private property called day', () => {
      expect(validDate.day).toBeUndefined();
    });
    it('should have a private property called strMonths', () => {
      expect(validDate.strMonths).toBeUndefined();
    });
    it('should have a private property called strDays', () => {
      expect(validDate.strDays).toBeUndefined();
    });
    it('should have a private property called daysInMonths', () => {
      expect(validDate.daysInMonths).toBeUndefined();
    });
  });
  describe('Public static methods', () => {
    let proto;
    let descriptor;
    beforeEach(() => {
      proto = Object.getPrototypeOf(validDate);
    });
    describe('isLeapYear method', () => {
      beforeEach(() => {
        descriptor = Object.getOwnPropertyDescriptor(MyDate, "isLeapYear");
      });
      it('should not be part of the instance', () => {
        expect(validDate.hasOwnProperty("isLeapYear")).toBe(false);
      });
      it('should not be part of the prototype of the instance', () => {
        expect(proto.hasOwnProperty("isLeapYear")).toBe(false);
      });
      it('should be defined in the Constructor Function', () => {
        expect(MyDate.isLeapYear).toBeDefined();
      });
      it('should be a function', () => {
        expect(typeof MyDate.isLeapYear).toBe('function');
      });
      it("should not be configurable", () => {
        expect(descriptor.configurable).toBe(false);
      });
      it("should not be writable", () => {
        expect(descriptor.writable).toBe(false);
      });
      it("should be enumerable", () => {
        expect(descriptor.enumerable).toBe(true);
      });
      it('should return true if the given year as argument is a leap year', () => {
        expect(MyDate.isLeapYear(2016)).toBe(true);
      });
      it('should return false if the given year as argument is not a leap year', function() {
        expect(MyDate.isLeapYear(2015)).toBe(false);
      });
      it('should return false if its called without argument', function() {
        expect(MyDate.isLeapYear()).toBe(false);
      });
    });
    describe('isValidDate method', () => {
      beforeEach(() => {
        descriptor = Object.getOwnPropertyDescriptor(MyDate, "isValidDate");
      });
      it('should not be part of the instance', () => {
        expect(validDate.hasOwnProperty("isValidDate")).toBe(false);
      });
      it('should not be part of the prototype of the instance', () => {
        expect(proto.hasOwnProperty("isValidDate")).toBe(false);
      });
      it('should be defined in the Constructor Function', () => {
        expect(MyDate.isValidDate).toBeDefined();
      });
      it('should be a function', () => {
        expect(typeof MyDate.isValidDate).toBe('function');
      });
      it('should not be configurable', () => {
        expect(descriptor.configurable).toBe(false);
      });
      it('should not be writable', () => {
        expect(descriptor.writable).toBe(false);
      });
      it('should be enumerable', () => {
        expect(descriptor.enumerable).toBe(true);
      });
      it('should return false if called without any arguments', () => {
        expect(MyDate.isValidDate()).toBe(false);
      });
      it('should return true if called with 3 arguments and those 3 arguments make a valid date', () => {
        expect(MyDate.isValidDate(2016, 2, 29)).toBe(true);
        expect(MyDate.isValidDate(2015, 2, 28)).toBe(true);
        expect(MyDate.isValidDate(2016, 12, 31)).toBe(true);
        expect(MyDate.isValidDate(2016, 4, 30)).toBe(true);
      });
      it('should return false if called with 3 arguments and those 3 arguments dont make a valid date', () => {
        expect(MyDate.isValidDate(2016, 2, 30)).toBe(false);
        expect(MyDate.isValidDate(2016, 4, 31)).toBe(false);
        expect(MyDate.isValidDate(2016, 13, 5)).toBe(false);
        expect(MyDate.isValidDate(0, 0, 0)).toBe(false);
        expect(MyDate.isValidDate(10000, 13, 32)).toBe(false);
      });
    });
    describe('getDayOfWeek method', () => {
      beforeEach(() => {
        descriptor = Object.getOwnPropertyDescriptor(MyDate, "getDayOfWeek");
      });
      it('should not be part of the instance', function() {
        expect(validDate.hasOwnProperty("getDayOfWeek")).toBe(false);
      });
      it('should not be part of the prototype of the instance', () => {
        expect(proto.hasOwnProperty("getDayOfWeek")).toBe(false);
      });
      it('should be defined in the Constructor Function', () => {
        expect(MyDate.getDayOfWeek).toBeDefined();
      });
      it('should be a function', () => {
        expect(typeof MyDate.getDayOfWeek).toBe('function');
      });
      it('should not be configurable', () => {
        expect(descriptor.configurable).toBe(false);
      });
      it('should not be writable', () => {
        expect(descriptor.writable).toBe(false);
      });
      it('should be enumerable', () => {
        expect(descriptor.enumerable).toBe(true);
      });
      it('should return the correct number of the day 0 for Sun until 6 for Sat', () => {
        expect(MyDate.getDayOfWeek(2012, 2, 17)).toBe(5);
        expect(MyDate.getDayOfWeek(1883, 1, 31)).toBe(3);
        expect(MyDate.getDayOfWeek(2016, 10, 13)).toBe(4);
      });
    });
  });
  describe('Private static properties', () => {
    let proto;
    let descriptor;

    beforeEach(() => {
      proto = Object.getPrototypeOf(validDate);
    });
    describe('strMonths property', () => {
      beforeEach(() => {
        descriptor = Object.getOwnPropertyDescriptor(MyDate, "strMonths");
      });
      it('should not be part of the instance', () => {
        expect(validDate.hasOwnProperty("strMonths")).toBe(false);
      });
      it('should not be part of the prototype of the instance', () => {
        expect(proto.hasOwnProperty("strMonths")).toBe(false);
      });
      it('should be defined in the Constructor Function', () => {
        expect(MyDate.strMonths).toBeDefined();
      });
      it('should not be configurable', () => {
        expect(descriptor.configurable).toBe(false);
      });
      it('should not be writable', () => {
        expect(descriptor.writable).toBe(false);
      });
      it('should not be enumerable', () => {
        expect(descriptor.enumerable).toBe(false);
      });
      it('should be an array', () => {
        expect(Array.isArray(MyDate.strMonths)).toBe(true);
      });
      it('should have a length of 12, months in a year', () => {
        expect(MyDate.strMonths.length).toBe(12);
      });
      it('should have the Jan string for the first month, position 0 of the array', () => {
        expect(MyDate.strMonths[0]).toBe("Jan");
      });
      it('should have the Feb string for the first month, position 1 of the array', () => {
        expect(MyDate.strMonths[1]).toBe("Feb");
      });
      it('should have the Mar string for the first month, position 2 of the array', () => {
        expect(MyDate.strMonths[2]).toBe("Mar");
      });
      it('should have the Apr string for the first month, position 3 of the array', () => {
        expect(MyDate.strMonths[3]).toBe("Apr");
      });
      it('should have the May string for the first month, position 4 of the array', () => {
        expect(MyDate.strMonths[4]).toBe("May");
      });
      it('should have the Jun string for the first month, position 5 of the array', () => {
        expect(MyDate.strMonths[5]).toBe("Jun");
      });
      it('should have the Jul string for the first month, position 6 of the array', () => {
        expect(MyDate.strMonths[6]).toBe("Jul");
      });
      it('should have the Aug string for the first month, position 7 of the array', () => {
        expect(MyDate.strMonths[7]).toBe("Aug");
      });
      it('should have the Sep string for the first month, position 8 of the array', () => {
        expect(MyDate.strMonths[8]).toBe("Sep");
      });
      it('should have the Oct string for the first month, position 9 of the array', () => {
        expect(MyDate.strMonths[9]).toBe("Oct");
      });
      it('should have the Nov string for the first month, position 10 of the array', () => {
        expect(MyDate.strMonths[10]).toBe("Nov");
      });
      it('should have the Dec string for the first month, position 11 of the array', () => {
        expect(MyDate.strMonths[11]).toBe("Dec");
      });
    });
    describe('strDays property', () => {
      beforeEach(() => {
        descriptor = Object.getOwnPropertyDescriptor(MyDate, "strDays");
      });
      it('should not be part of the instance', () => {
        expect(validDate.hasOwnProperty("strDays")).toBe(false);
      });
      it('should not be part of the prototype of the instance', () => {
        expect(proto.hasOwnProperty("strDays")).toBe(false);
      });
      it('should be defined in the Constructor Function', () => {
        expect(MyDate.strDays).toBeDefined();
      });
      it('should not be configurable', () => {
        expect(descriptor.configurable).toBe(false);
      });
      it('should not be writable', () => {
        expect(descriptor.writable).toBe(false);
      });
      it('should not be enumerable', () => {
        expect(descriptor.enumerable).toBe(false);
      });
      it('should be an array', () => {
        expect(Array.isArray(MyDate.strDays)).toBe(true);
      });
      it('should have a length of 7, days in a week', function() {
        expect(MyDate.strDays.length).toBe(7);
      });
      it('should have the string Sunday for the first day, position 0', () => {
        expect(MyDate.strDays[0]).toBe("Sunday");
      });
      it('should have the string Monday for the first day, position 1', () => {
        expect(MyDate.strDays[1]).toBe("Monday");
      });
      it('should have the string Tuesday for the first day, position 2', () => {
        expect(MyDate.strDays[2]).toBe("Tuesday");
      });
      it('should have the string Wednesday for the first day, position 3', () => {
        expect(MyDate.strDays[3]).toBe("Wednesday");
      });
      it('should have the string Thursday for the first day, position 4', () => {
        expect(MyDate.strDays[4]).toBe("Thursday");
      });
      it('should have the string Friday for the first day, position 5', () => {
        expect(MyDate.strDays[5]).toBe("Friday");
      });
      it('should have the string Saturday for the first day, position 6', () => {
        expect(MyDate.strDays[6]).toBe("Saturday");
      });
    });
    describe('daysInMonths property', () => {
      beforeEach(() => {
        descriptor = Object.getOwnPropertyDescriptor(MyDate, "daysInMonths");
      });
      it('should not be part of the instance', () => {
        expect(validDate.hasOwnProperty("daysInMonths")).toBe(false);
      });
      it('should not be part of the prototype of the instance', () => {
        expect(proto.hasOwnProperty("daysInMonths")).toBe(false);
      });
      it('should be defined in the Constructor Function', () => {
        expect(MyDate.daysInMonths).toBeDefined();
      });
      it('should not be configurable', () => {
        expect(descriptor.configurable).toBe(false);
      });
      it('should not be writable', () => {
        expect(descriptor.writable).toBe(false);
      });
      it('should not be enumerable', () => {
        expect(descriptor.enumerable).toBe(false);
      });
      it('should be an array', () => {
        expect(Array.isArray(MyDate.daysInMonths)).toBe(true);
      });
      it('should have a length of 12, months in a year', function() {
        expect(MyDate.daysInMonths.length).toBe(12);
      });
      it('should have 31 as value for the month in the position 0, January has 31 days', () => {
        expect(MyDate.daysInMonths[0]).toBe(31);
      });
      it('should have 31 as value for the month in the position 2, March has 31 days', () => {
        expect(MyDate.daysInMonths[2]).toBe(31);
      });
      it('should have 31 as value for the month in the position 4, May has 31 days', () => {
        expect(MyDate.daysInMonths[4]).toBe(31);
      });
      it('should have 31 as value for the month in the position 6, July has 31 days', () => {
        expect(MyDate.daysInMonths[6]).toBe(31);
      });
      it('should have 31 as value for the month in the position 7, August has 31 days', () => {
        expect(MyDate.daysInMonths[7]).toBe(31);
      });
      it('should have 31 as value for the month in the position 9, October has 31 days', () => {
        expect(MyDate.daysInMonths[9]).toBe(31);
      });
      it('should have 31 as value for the month in the position 11, December has 31 days', () => {
        expect(MyDate.daysInMonths[11]).toBe(31);
      });
      it('should have 30 as value for the month in the position 3, April has 30 days', () => {
        expect(MyDate.daysInMonths[3]).toBe(30);
      });
      it('should have 30 as value for the month in the position 5, June has 30 days', () => {
        expect(MyDate.daysInMonths[5]).toBe(30);
      });
      it('should have 30 as value for the month in the position 8, September has 30 days', () => {
        expect(MyDate.daysInMonths[8]).toBe(30);
      });
      it('should have 30 as value for the month in the position 10, November has 30 days', () => {
        expect(MyDate.daysInMonths[10]).toBe(30);
      });
      it('should have 28 as value for the month in the position 1, February has 28 days', () => {
        expect(MyDate.daysInMonths[1]).toBe(28);
      });
    });
  });
  describe('Constructor', () => {
    it('should create a new instance when its called with 3 arguments: year, month, day', () => {
      expect(new MyDate(2016, 12, 31) instanceof MyDate).toBe(true);
    });
  });
  describe('Getters', () => {
    let descriptor;
    describe('getYear method', () => {
      beforeEach(() => {
        descriptor = Object.getOwnPropertyDescriptor(validDate, "getYear");
      });
      it('should be defined', () => {
        expect(validDate.getYear).toBeDefined();
      });
      it('should be a function', () => {
        expect(typeof validDate.getYear).toBe('function');
      });
      it("should not be configurable", () => {
        expect(descriptor.configurable).toBe(false);
      });
      it("should not be writable", () => {
        expect(descriptor.writable).toBe(false);
      });
      it("should be enumerable", () => {
        expect(descriptor.enumerable).toBe(true);
      });
      it("should be a direct property of the instance", () => {
        expect(validDate.hasOwnProperty("getYear")).toBe(true);
      });
      it('should return the year of the instance', () => {
        expect(validDate.getYear()).toBe(2016);
      });
    });
    describe('getMonth method', () => {
      beforeEach(() => {
        descriptor = Object.getOwnPropertyDescriptor(validDate, "getMonth");
      });
      it('should be defined', () => {
        expect(validDate.getMonth).toBeDefined();
      });
      it('should be a function', () => {
        expect(typeof validDate.getMonth).toBe('function');
      });
      it("should not be configurable", () => {
        expect(descriptor.configurable).toBe(false);
      });
      it("should not be writable", () => {
        expect(descriptor.writable).toBe(false);
      });
      it("should be enumerable", () => {
        expect(descriptor.enumerable).toBe(true);
      });
      it("should be a direct property of the instance", () => {
        expect(validDate.hasOwnProperty("getMonth")).toBe(true);
      });
      it('should return the year of the instance', () => {
        expect(validDate.getMonth()).toBe(10);
      });
    });
    describe('getDay method', () => {
      beforeEach(() => {
        descriptor = Object.getOwnPropertyDescriptor(validDate, "getDay");
      });
      it('should be defined', () => {
        expect(validDate.getDay).toBeDefined();
      });
      it('should be a function', () => {
        expect(typeof validDate.getDay).toBe('function');
      });
      it("should not be configurable", () => {
        expect(descriptor.configurable).toBe(false);
      });
      it("should not be writable", () => {
        expect(descriptor.writable).toBe(false);
      });
      it("should be enumerable", () => {
        expect(descriptor.enumerable).toBe(true);
      });
      it("should be a direct property of the instance", () => {
        expect(validDate.hasOwnProperty("getDay")).toBe(true);
      });
      it('should return the year of the instance', () => {
        expect(validDate.getDay()).toBe(14);
      });
    });
  });
  describe('Setters', () => {
    let descriptor;
    let proto;
    describe('setYear method', () => {
      beforeEach(() => {
        descriptor = Object.getOwnPropertyDescriptor(validDate, "setYear");
      });
      it('should be defined', () => {
        expect(validDate.setYear).toBeDefined();
      });
      it('should be a function', () => {
        expect(typeof validDate.setYear).toBe('function');
      });
      it('should be a direct property of the instance', function() {
        expect(validDate.hasOwnProperty("setYear")).toBe(true);
      });
      it('should not be configurable', () => {
        expect(descriptor.configurable).toBe(false);
      });
      it('should not be writable', () => {
        expect(descriptor.writable).toBe(false);
      });
      it('should be enumerable', () => {
        expect(descriptor.enumerable).toBe(true);
      });
      it('should return undefined when called it', () => {
        expect(validDate.setYear(1000)).toBeUndefined();
      });
      it('should set a new year to the instance if the given argument is a valid year', () => {
        let myDate = new MyDate(2016, 10, 13);
        expect(myDate.getYear()).toBe(2016);
        myDate.setYear(2015);
        expect(myDate.getYear()).toBe(2015);
      });
      it('should not set a new year to the instance if the given argument is an invalid year', () => {
        let myDate = new MyDate(2016, 10, 13);
        expect(myDate.getYear()).toBe(2016);
        myDate.setYear(10000);
        expect(myDate.getYear()).toBe(2016);
        myDate.setYear(0);
        expect(myDate.getYear()).toBe(2016);
      });
      it('should not set a new year to the instance if the given argument results in an invalid date', () => {
        expect(validDate.getYear()).toBe(2016);
        validDate.setYear(2015);
        expect(validDate.getYear()).toBe(2015);
      });
    });
    describe('setMonth method', () => {
      beforeEach(() => {
        descriptor = Object.getOwnPropertyDescriptor(validDate, "setMonth");
      });
      it('should be defined', function() {
        expect(validDate.setMonth).toBeDefined();
      });
      it('should be a function', () => {
        expect(typeof validDate.setMonth).toBe('function');
      });
      it('should be a direct property of the instance', () => {
        expect(validDate.hasOwnProperty("setMonth")).toBe(true);
      });
      it('should not be configurable', () => {
        expect(descriptor.configurable).toBe(false);
      });
      it('should not be writable', () => {
        expect(descriptor.writable).toBe(false);
      });
      it('should be enumerable', () => {
        expect(descriptor.enumerable).toBe(true);
      });
      it('should return undefined when called it', () => {
        expect(validDate.setMonth(100)).toBeUndefined();
      });
      it('should set a new month to the instance if the given argument is a valid month', () => {
        let myDate = new MyDate(2016, 10, 13);
        expect(myDate.getMonth()).toBe(10);
        myDate.setMonth(9);
        expect(myDate.getMonth()).toBe(9);
      });
      it('should not set a new month to the instance if the given argument is an invalid month', () => {
        let myDate = new MyDate(2016, 10, 13);
        expect(myDate.getMonth()).toBe(10);
        myDate.setMonth(100);
        expect(myDate.getMonth()).toBe(10);
      });
      it('should not set a new month to the instance if the given argument results in an invalid date', function() {
        let myDate = new MyDate(2016, 12, 31);
        expect(myDate.getMonth()).toBe(12);
        myDate.setMonth(11);
        expect(myDate.getMonth()).toBe(12);
      });
    });
    describe('setDay method', () => {
      beforeEach(() => {
        descriptor = Object.getOwnPropertyDescriptor(validDate, "setDay");
      });
      it('should be defined', () => {
        expect(validDate.setDay).toBeDefined();
      });
      it('should be a function', () => {
        expect(typeof validDate.setDay).toBe('function');
      });
      it('should be a direct property of the instance', function() {
        expect(validDate.hasOwnProperty("setDay")).toBe(true);
      });
      it('should not be configurable', () => {
        expect(descriptor.configurable).toBe(false);
      });
      it('should not be writable', () => {
        expect(descriptor.writable).toBe(false);
      });
      it('should be enumerable', () => {
        expect(descriptor.enumerable).toBe(true);
      });
      it('should return undefined when called it', () => {
        expect(validDate.setDay(100)).toBeUndefined();
      });
      it('should set a new day to the instance if the given argument is a valid day', () => {
        let myDate = new MyDate(2016, 10, 13);
        expect(myDate.getDay()).toBe(13);
        myDate.setDay(14);
        expect(myDate.getDay()).toBe(14);
      });
      it('should not set a new day to the instance if the given argument is an invalid day ', function() {
        let myDate = new MyDate(2016, 10, 13);
        expect(myDate.getDay()).toBe(13);
        myDate.setDay(100);
        expect(myDate.getDay()).toBe(13);
      });
      it('should not set a new day to the instance if the given argument results in an invalid date', () => {
        expect(validDate.getDay()).toBe(14);
        validDate.setDay(30);
        expect(validDate.getDay()).toBe(30);
      });
    });
    describe('setDate method', () => {
      beforeEach(() => {
        descriptor = Object.getOwnPropertyDescriptor(validDate, "setDate");
      });
      it('should be defined', () => {
        expect(validDate.setDate).toBeDefined();
      });
      it('should be a function', function() {
        expect(typeof validDate.setDate).toBe('function');
      });
      it('should be direct property of the instance', function() {
        expect(validDate.hasOwnProperty("setDate")).toBe(true);
      });
      it('should not be configurable', () => {
        expect(descriptor.configurable).toBe(false);
      });
      it('should not be writable', () => {
        expect(descriptor.writable).toBe(false);
      });
      it('should be enumerable', () => {
        expect(descriptor.enumerable).toBe(true);
      });
      it('should set a new year, month and day if the given arguments are a valid year, month and day', () => {
        let myDate = new MyDate(2016, 10, 13);
        expect(myDate.getYear()).toBe(2016);
        expect(myDate.getMonth()).toBe(10);
        expect(myDate.getDay()).toBe(13);
        myDate.setDate(2015, 11, 14);
        expect(myDate.getYear()).toBe(2015);
        expect(myDate.getMonth()).toBe(11);
        expect(myDate.getDay()).toBe(14);
      });
      it('should not set a new year, month and day if the given arguments are invalid year, month and day', function() {
        let myDate = new MyDate(2016, 10, 13);
        expect(myDate.getYear()).toBe(2016);
        expect(myDate.getMonth()).toBe(10);
        expect(myDate.getDay()).toBe(13);
        myDate.setDate(10000, 100, 100);
        expect(myDate.getYear()).toBe(2016);
        expect(myDate.getMonth()).toBe(10);
        expect(myDate.getDay()).toBe(13);
      });
    });
  });
  describe('Other methods', () => {
    let descriptor;
    let proto;
    beforeEach(() => {
      proto = Object.getPrototypeOf(validDate);
    });
    describe('toString method', () => {
      beforeEach(() => {
        descriptor = Object.getOwnPropertyDescriptor(proto, "toString");
      });
      it('should be defined', () => {
        expect(validDate.toString).toBeDefined();
      });
      it('should be a function', () => {
        expect(typeof validDate.toString).toBe('function');
      });
      it('should not be a direct method of the instance', () => {
        expect(validDate.hasOwnProperty("toString")).toBe(false);
      });
      it('should be a property of the prototype of the constructor', () => {
        expect(proto.hasOwnProperty("toString")).toBe(true);
      });
      it('should not be configurable', function() {
        expect(descriptor.configurable).toBe(false);
      });
      it('should not be writable', function() {
        expect(descriptor.writable).toBe(false);
      });
      it('should be enumerable', function() {
        expect(descriptor.enumerable).toBe(true);
      });
      it('should return a string when called it', () => {
        expect(typeof validDate.toString()).toBe('string');
      });
      it('should have a format xxxday d mmm yyyy, like Tuesday 14 Feb 2012', function() {
        expect(validDate.toString()).toBe("Friday 14 Oct 2016");
      });
    });
    describe('nextYear method', () => {
      beforeEach(() => {
        descriptor = Object.getOwnPropertyDescriptor(proto, "nextYear");
      });
      it('should be defined', () => {
        expect(validDate.nextYear).toBeDefined();
      });
      it('should be a function', () => {
        expect(typeof validDate.nextYear).toBe('function');
      });
      it('should not be a direct method of the instance', () => {
        expect(validDate.hasOwnProperty("nextYear")).toBe(false);
      });
      it('should be a property of the prototype of the constructor', () => {
        expect(proto.hasOwnProperty("nextYear")).toBe(true);
      });
      it('should not be configurable', () => {
        expect(descriptor.configurable).toBe(false);
      });
      it('should not be writable', () => {
        expect(descriptor.writable).toBe(false);
      });
      it('should be enumerable', () => {
        expect(descriptor.enumerable).toBe(true);
      });
      it('should return the instance when called it', () => {
        expect(validDate.nextYear()).toBe(validDate);
      });
      it('should update the instance to the next year', () => {
        expect(validDate.nextYear().getYear()).toBe(2017);
      });
      it('should update the date if the next year will end up into an invalid date due to leapDate', () => {
        expect(leapDate.getYear()).toBe(2016);
        expect(leapDate.getMonth()).toBe(2);
        expect(leapDate.getDay()).toBe(29);
        leapDate.nextYear();
        expect(leapDate.getYear()).toBe(2017);
        expect(leapDate.getMonth()).toBe(2);
        expect(leapDate.getDay()).toBe(28);
      });
      it('should not update the instance if the next year give us an out of range year', function() {
        let myDate = new MyDate(9999, 12, 31);
        myDate.nextYear();
        expect(myDate.getYear()).toBe(9999);
        expect(myDate.getMonth()).toBe(12);
        expect(myDate.getDay()).toBe(31);
      });
    });
    describe('previousYear method', () => {
      beforeEach(() => {
        descriptor = Object.getOwnPropertyDescriptor(proto, "previousYear");
      });
      it('should be defined', () => {
        expect(validDate.previousYear).toBeDefined();
      });
      it('should be a function', () => {
        expect(typeof validDate.previousYear).toBe('function');
      });
      it('should not be a direct method of the instance', () => {
        expect(validDate.hasOwnProperty("previousYear")).toBe(false);
      });
      it('should be a property of the prototype of the constructor', () => {
        expect(proto.hasOwnProperty("previousYear")).toBe(true);
      });
      it('should not be configurable', () => {
        expect(descriptor.configurable).toBe(false);
      });
      it('should not be writable', () => {
        expect(descriptor.writable).toBe(false);
      });
      it('should be enumerable', () => {
        expect(descriptor.enumerable).toBe(true);
      });
      it('should return the instance when called it', () => {
        expect(validDate.previousYear()).toBe(validDate);
      });
      it('should update the instance to the previous year', () => {
        expect(validDate.previousYear().getYear()).toBe(2015);
      });
      it('should update the date of the previous year will end up into an invalid date due to leapDate', () => {
        expect(leapDate.getYear()).toBe(2016);
        expect(leapDate.getMonth()).toBe(2);
        expect(leapDate.getDay()).toBe(29);
        leapDate.previousYear();
        expect(leapDate.getYear()).toBe(2015);
        expect(leapDate.getMonth()).toBe(2);
        expect(leapDate.getDay()).toBe(28);
      });
      it('should not update the instance if the previous year give us an out of range year', () => {
        let myDate = new MyDate(1, 1, 1);
        myDate.previousYear();
        expect(myDate.getYear()).toBe(1);
        expect(myDate.getMonth()).toBe(1);
        expect(myDate.getDay()).toBe(1);
      });
    });
    describe('nextMonth method', () => {
      beforeEach(() => {
        descriptor = Object.getOwnPropertyDescriptor(proto, "nextMonth");
      });
      it('should be defined', () => {
        expect(validDate.nextMonth).toBeDefined();
      });
      it('should be a function', () => {
        expect(typeof validDate.nextMonth).toBe('function');
      });
      it('should not be a direct method of the instance', () => {
        expect(validDate.hasOwnProperty("nextMonth")).toBe(false);
      });
      it('should be a property of the prototype of the constructor', () => {
        expect(proto.hasOwnProperty("nextMonth")).toBe(true);
      });
      it('should not be configurable', () => {
        expect(descriptor.configurable).toBe(false);
      });
      it('should not be writable', () => {
        expect(descriptor.writable).toBe(false);
      });
      it('should be enumerable', () => {
        expect(descriptor.enumerable).toBe(true);
      });
      it('should return the instance when called it', () => {
        expect(validDate.nextMonth()).toBe(validDate);
      });
      it('should update the instance to the next month', () => {
        expect(validDate.nextMonth().getMonth()).toBe(11);
        expect(validDate.getDay()).toBe(14);
      });
      it('should update the date if the next month will end up into an invalid date due to a month with less days than the current', function() {
        let myDate = new MyDate(2016, 10, 31);
        myDate.nextMonth();
        expect(myDate.getYear()).toBe(2016);
        expect(myDate.getMonth()).toBe(11);
        expect(myDate.getDay()).toBe(30);

        let leapJanuary = new MyDate(2016, 1, 31);
        leapJanuary.nextMonth();
        expect(leapJanuary.getYear()).toBe(2016);
        expect(leapJanuary.getMonth()).toBe(2);
        expect(leapJanuary.getDay()).toBe(29);

        let anotherLeapJanuary = new MyDate(2016, 1, 30);
        anotherLeapJanuary.nextMonth();
        expect(anotherLeapJanuary.getYear()).toBe(2016);
        expect(anotherLeapJanuary.getMonth()).toBe(2);
        expect(anotherLeapJanuary.getDay()).toBe(29);

        let noLeapJanuary = new MyDate(2015, 1, 31);
        noLeapJanuary.nextMonth();
        expect(noLeapJanuary.getYear()).toBe(2015);
        expect(noLeapJanuary.getMonth()).toBe(2);
        expect(noLeapJanuary.getDay()).toBe(28);

        let anotherNoLeapJanuary = new MyDate(2015, 1, 30);
        anotherNoLeapJanuary.nextMonth();
        expect(anotherNoLeapJanuary.getYear()).toBe(2015);
        expect(anotherNoLeapJanuary.getMonth()).toBe(2);
        expect(anotherNoLeapJanuary.getDay()).toBe(28);

        let anotherDate = new MyDate(2015, 12, 31);
        anotherDate.nextMonth().nextMonth();
        expect(anotherDate.getYear()).toBe(2016);
        expect(anotherDate.getMonth()).toBe(2);
        expect(anotherDate.getDay()).toBe(29);
      });
      it('should update the date if the increasing the month by 1 give us a new year', () => {
        noLeapDate.nextMonth();
        expect(noLeapDate.getYear()).toBe(2016);
        expect(noLeapDate.getMonth()).toBe(1);
        expect(noLeapDate.getDay()).toBe(31);
      });
      it('should not update the instance if incresing the month by 1 give us an out of range year', function() {
        let myDate = new MyDate(9999, 12, 31);
        myDate.nextMonth();
        expect(myDate.getYear()).toBe(9999);
        expect(myDate.getMonth()).toBe(12);
        expect(myDate.getDay()).toBe(31);
      });
    });
    describe('previousMonth method', () => {
      beforeEach(() => {
        descriptor = Object.getOwnPropertyDescriptor(proto, "previousMonth");
      });
      it('should be defined', () => {
        expect(validDate.previousMonth).toBeDefined();
      });
      it('should be a function', () => {
        expect(typeof validDate.previousMonth).toBe('function');
      });
      it('should not be a direct method of the instance', () => {
        expect(validDate.hasOwnProperty("previousMonth")).toBe(false);
      });
      it('should be a property of the prototype of the constructor', () => {
        expect(proto.hasOwnProperty("previousMonth")).toBe(true);
      });
      it('should not be configurable', () => {
        expect(descriptor.configurable).toBe(false);
      });
      it('should not be writable', () => {
        expect(descriptor.writable).toBe(false);
      });
      it('should be enumerable', () => {
        expect(descriptor.enumerable).toBe(true);
      });
      it('should return the instance when called it', () => {
        expect(validDate.previousMonth()).toBe(validDate);
      });
      it('should update the instance to the previous month', () => {
        expect(validDate.previousMonth().getMonth()).toBe(9);
        expect(validDate.getDay()).toBe(14);
      });
      xit('should update the date if the previous month will end up into an invalid date due to a month with less days than the current', () => {
        let myDate = new MyDate(2016, 10, 31);
        myDate.previousMonth();
        expect(myDate.getYear()).toBe(2016);
        expect(myDate.getMonth()).toBe(9);
        expect(myDate.getDay()).toBe(30);

        let leapMarch = new MyDate(2016, 3, 31);
        leapMarch.previousMonth();
        expect(leapMarch.getYear()).toBe(2016);
        expect(leapMarch.getMonth()).toBe(2);
        expect(leapMarch.getDay()).toBe(29);

        let anotherLeapMarch = new MyDate(2016, 3, 30);
        anotherLeapMarch.previousMonth();
        expect(anotherLeapMarch.getYear()).toBe(2016);
        expect(anotherLeapMarch.getMonth()).toBe(2);
        expect(anotherLeapMarch.getDay()).toBe(29);

        let noLeapMarch = new MyDate(2015, 3, 31);
        noLeapMarch.previousMonth();
        expect(noLeapMarch.getYear()).toBe(2015);
        expect(noLeapMarch.getMonth()).toBe(2);
        expect(noLeapMarch.getDay()).toBe(28);

        let anotherNoLeapMarch = new MyDate(2015, 3, 30);
        anotherNoLeapMarch.previousMonth();
        expect(anotherNoLeapMarch.getYear()).toBe(2015);
        expect(anotherNoLeapMarch.getMonth()).toBe(2);
        expect(anotherNoLeapMarch.getDay()).toBe(28);

        let anotherDate = new MyDate(2016, 4, 30);
        anotherDate.previousMonth().previousMonth();
        expect(anotherDate.getYear()).toBe(2016);
        expect(anotherDate.getMonth()).toBe(2);
        expect(anotherDate.getDay()).toBe(29);
      });
      it('should update the date if the decreasing of the month by 1 give us the previous yer', () => {
        let myDate = new MyDate(2016, 1, 31);
        myDate.previousMonth();
        expect(myDate.getYear()).toBe(2015);
        expect(myDate.getMonth()).toBe(12);
        expect(myDate.getDay()).toBe(31);
      });
      it('should not update the instance if decreasing the month by 1 give us an out of range year', () => {
        let myDate = new MyDate(1, 1, 1);
        myDate.previousMonth();
        expect(myDate.getYear()).toBe(1);
        expect(myDate.getMonth()).toBe(1);
        expect(myDate.getDay()).toBe(1);
      });
    });
    describe('nextDay method', () => {
      beforeEach(() => {
        descriptor = Object.getOwnPropertyDescriptor(proto, "nextDay");
      });
      it('should be defined', () => {
        expect(validDate.nextDay).toBeDefined();
      });
      it('should be a function', () => {
        expect(typeof validDate.nextDay).toBe('function');
      });
      it('should not be a direct method of the instance', () => {
        expect(validDate.hasOwnProperty("nextDay")).toBe(false);
      });
      it('should be a property of the prototype of the constructor', () => {
        expect(proto.hasOwnProperty("nextDay")).toBe(true);
      });
      it('should not be configurable', () => {
        expect(descriptor.configurable).toBe(false);
      });
      it('should not be writable', () => {
        expect(descriptor.writable).toBe(false);
      });
      it('should be enumerable', () => {
        expect(descriptor.enumerable).toBe(true);
      });
      it('should return the instance when called it', () => {
        expect(validDate.nextDay()).toBe(validDate);
      });
      it('should update the instance to the next day', () => {
        validDate.nextDay();
        expect(validDate.getYear()).toBe(2016);
        expect(validDate.getMonth()).toBe(10);
        expect(validDate.getDay()).toBe(15);
      });
      it('should upate the date if the next day will end up into a day giving us a new month or a new year', () => {
        let myDate = new MyDate(2016, 10, 31);
        myDate.nextDay();
        expect(myDate.getYear()).toBe(2016);
        expect(myDate.getMonth()).toBe(11);
        expect(myDate.getDay()).toBe(1);

        let anotherDate = new MyDate(2016, 12, 31);
        anotherDate.nextDay();
        expect(anotherDate.getYear()).toBe(2017);
        expect(anotherDate.getMonth()).toBe(1);
        expect(anotherDate.getDay()).toBe(1);

        let leapFebruary = new MyDate(2016, 2, 29);
        leapFebruary.nextDay();
        expect(leapFebruary.getYear()).toBe(2016);
        expect(leapFebruary.getMonth()).toBe(3);
        expect(leapFebruary.getDay()).toBe(1);

        let anotherLeapFebruary = new MyDate(2016, 2, 28);
        anotherLeapFebruary.nextDay();
        expect(anotherLeapFebruary.getYear()).toBe(2016);
        expect(anotherLeapFebruary.getMonth()).toBe(2);
        expect(anotherLeapFebruary.getDay()).toBe(29);

        let noLeapFebruary = new MyDate(2015, 2, 28);
        noLeapFebruary.nextDay();
        expect(noLeapFebruary.getYear()).toBe(2015);
        expect(noLeapFebruary.getMonth()).toBe(3);
        expect(noLeapFebruary.getDay()).toBe(1);
      });
      it('should not increase the day by one if the new day will give us an out of range year', () => {
        let myDate = new MyDate(9999, 12, 31);
        myDate.nextDay();
        expect(myDate.getYear()).toBe(9999);
        expect(myDate.getMonth()).toBe(12);
        expect(myDate.getDay()).toBe(31);
      });
    });
    describe('previousDay method', () => {
      beforeEach(() => {
        descriptor = Object.getOwnPropertyDescriptor(proto, "previousDay");
      });
      it('should be defined', () => {
        expect(validDate.previousDay).toBeDefined();
      });
      it('should be a function', () => {
        expect(typeof validDate.previousDay).toBe('function');
      });
      it('should not be a direct method of the instance', () => {
        expect(validDate.hasOwnProperty("previousDay")).toBe(false);
      });
      it('should be a property of the prototype of the constructor', () => {
        expect(proto.hasOwnProperty("previousDay")).toBe(true);
      });
      it('should not be configurable', () => {
        expect(descriptor.configurable).toBe(false);
      });
      it('should not be writable', () => {
        expect(descriptor.writable).toBe(false);
      });
      it('should be enumerable', () => {
        expect(descriptor.enumerable).toBe(true);
      });
      it('should return the instance when called it', () => {
        expect(validDate.previousDay()).toBe(validDate);
      });
      it('should update the instance to the previous day', function() {
        validDate.previousDay();
        expect(validDate.getYear()).toBe(2016);
        expect(validDate.getMonth()).toBe(10);
        expect(validDate.getDay()).toBe(13);
      });
      it('should upate the date if the previous day will end up into a day giving us a new month or a new year', () => {
        let myDate = new MyDate(2016, 12, 1);
        myDate.previousDay();
        expect(myDate.getYear()).toBe(2016);
        expect(myDate.getMonth()).toBe(11);
        expect(myDate.getDay()).toBe(30);

        let anotherDate = new MyDate(2016, 1, 1);
        anotherDate.previousDay();
        expect(anotherDate.getYear()).toBe(2015);
        expect(anotherDate.getMonth()).toBe(12);
        expect(anotherDate.getDay()).toBe(31);

        let learpMarch = new MyDate(2016, 3, 1);
        learpMarch.previousDay();
        expect(learpMarch.getYear()).toBe(2016);
        expect(learpMarch.getMonth()).toBe(2);
        expect(learpMarch.getDay()).toBe(29);

        let anotherLeapFebruary = new MyDate(2016, 2, 29);
        anotherLeapFebruary.previousDay();
        expect(anotherLeapFebruary.getYear()).toBe(2016);
        expect(anotherLeapFebruary.getMonth()).toBe(2);
        expect(anotherLeapFebruary.getDay()).toBe(28);

        let noLeapMarch = new MyDate(2015, 3, 1);
        noLeapMarch.previousDay();
        expect(noLeapMarch.getYear()).toBe(2015);
        expect(noLeapMarch.getMonth()).toBe(2);
        expect(noLeapMarch.getDay()).toBe(28);
      });
      it('should not decrease the day by one if the new day will give us an out of range year', () => {
        let myDate = new MyDate(1, 1, 1);
        myDate.previousDay();
        expect(myDate.getYear()).toBe(1);
        expect(myDate.getMonth()).toBe(1);
        expect(myDate.getDay()).toBe(1);
      });
    });
  });
});
