"use strict";

let NewDate = require("../NewDate");

describe("NewDate Class", function () {
    let data1 = {day: 1, month: 1, year: 1900};
    let data2 = {day: 11, month: 11, year: 2011};
    let newDate1;
    let newDate2;

    beforeEach(function () {
        newDate1 = new NewDate(data1);
        newDate2 = new NewDate(data2);
    });

    it("should be defined", function () {
        expect(NewDate).toBeDefined();
    });

    describe("Private properties", function () {
        it("should have a property day as private", function () {
            expect(newDate1.day).toBe(undefined);
        });
        it("should have a property month as private", function () {
            expect(newDate1.month).toBe(undefined);
        });
        it("should have a property year as private", function () {
            expect(newDate1.year).toBe(undefined);
        });
    });

    describe("Methods", function () {
        describe("getDay method", function () {
            it("should have a method called getDay", function () {
                expect(newDate1.getDay).toBeDefined();
                expect(typeof newDate1.getDay).toBe('function');
            });
            it("should return the day of the instance", function () {
                expect(newDate1.getDay()).toBe(1);
            });
        });
        describe("getMonth method", function () {
            it("should have a method called getMonth", function () {
                expect(newDate1.getMonth).toBeDefined();
                expect(typeof newDate1.getMonth).toBe('function');
            });
            it("should return the month of the instance", function () {
                expect(newDate1.getMonth()).toBe(1);
            });
        });
        describe("getYear method", function () {
            it("should have a method called getYear", function () {
                expect(newDate1.getYear).toBeDefined();
                expect(typeof newDate1.getYear).toBe('function');
            });
            it("should return the yearh of the instance", function () {
                expect(newDate1.getYear()).toBe(1900);
            });
        });
        describe("setDay method", function () {
            it("should have a method called setDay", function () {
                expect(newDate1.setDay).toBeDefined();
                expect(typeof newDate1.setDay).toBe('function');
            });
            it("should set a new day to the instance", function () {
                newDate1.setDay(2)
                expect(newDate1.getDay()).toBe(2);
            });
        });
        describe("setMonth method", function () {
            it("should have a method called setMonth", function () {
                expect(newDate1.setMonth).toBeDefined();
                expect(typeof newDate1.setMonth).toBe('function');
            });
            it("should set a new month to the instance", function () {
                newDate1.setMonth(2)
                expect(newDate1.getMonth()).toBe(2);
            });
        });
        describe("setYear method", function () {
            it("should have a method called setYear", function () {
                expect(newDate1.setYear).toBeDefined();
                expect(typeof newDate1.setYear).toBe('function');
            });
            it("should set a new month to the instance", function () {
                newDate1.setYear(2000)
                expect(newDate1.getYear()).toBe(2000);
            });
        });
        describe("setDate method", function () {
            it("should have a method called setDate", function () {
                expect(newDate1.setDate).toBeDefined();
                expect(typeof newDate1.setDate).toBe('function');
            });
            it("should set a new day, month and year to the instance", function () {
                newDate1.setDate(5, 5, 2015);
                expect(newDate1.getDay()).toBe(5);
                expect(newDate1.getMonth()).toBe(5);
                expect(newDate1.getYear()).toBe(2015);
            });
        });
        describe("toString method", function () {
            it("should have a method called toString", function () {
                expect(newDate1.toString).toBeDefined();
                expect(typeof newDate1.toString).toBe('function');
            });
            it("should return a string following the pattern: dd/mm/yyyy with leading zeros", function () {
                expect(newDate1.toString()).toBe("01/01/1900");
                expect(newDate2.toString()).toBe("11/11/2011");
            });
        });
    });
});
