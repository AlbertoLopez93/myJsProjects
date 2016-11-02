var dateFunctions = require("../dates.js");

describe("Numbers functions exercise", function () {
    describe("isToday function", function () {
        let today = new Date();
        let lastYear = new Date(today.getFullYear()-1, today.getMonth(), today.getDate());
        it("should exist", function () {
            expect(dateFunctions.isToday).toBeDefined();
        });
        it("isToday test number 1", function () {
            expect(dateFunctions.isToday(today)).toBe(true);
        });
        it("isToday test number 2", function () {
            expect(dateFunctions.isToday(lastYear)).toBe(false);
        });
        it("isToday test number 3", function () {
            expect(dateFunctions.isToday(new Date(0))).toBe(false);
        });
    });

    describe("isBeerTime function", function () {
        let mondayFalse = new Date(2016, 8, 12, 20);
        let mondayTrue = new Date(2016, 8, 12, 20, 0, 0, 1);
        let tuesdayFalse = new Date(2016, 8, 13, 19);
        let tuesdayTrue = new Date(2016, 8, 13, 19, 0, 0, 1);
        let wednesdayFalse = new Date(2016, 8, 14, 18);
        let wednesdayTrue = new Date(2016, 8, 14, 18, 0, 0, 1);
        let thursdayFalse = new Date(2016, 8, 15, 17, 59);
        let thursdayTrue = new Date(2016, 8, 15, 17, 59, 0, 1);
        let fridayFalse = new Date(2016, 8, 16, 16);
        let fridayTrue = new Date(2016, 8, 16, 16, 0, 0, 1);
        let saturdayFalse = new Date(2016, 8, 17, 10);
        let saturdayTrue = new Date(2016, 8, 17, 10, 0, 0, 1);
        let sunday = new Date(2016, 8, 18, 0, 0, 0, 1);
        let sunday2 = new Date(2016, 8, 18, 23, 59, 59, 59);

        it("should exist", function () {
            expect(dateFunctions.isBeerTime).toBeDefined();
        });
        it("isBeerTime test number 1", function () {
            expect(dateFunctions.isBeerTime(mondayFalse)).toBe(false);
        });
        it("isBeerTime test number 2", function () {
            expect(dateFunctions.isBeerTime(mondayTrue)).toBe(true);
        });
        it("isBeerTime test number 3", function () {
            expect(dateFunctions.isBeerTime(tuesdayFalse)).toBe(false);
        });
        it("isBeerTime test number 4", function () {
            expect(dateFunctions.isBeerTime(tuesdayTrue)).toBe(true);
        });
        it("isBeerTime test number 5", function () {
            expect(dateFunctions.isBeerTime(wednesdayFalse)).toBe(false);
        });
        it("isBeerTime test number 6", function () {
            expect(dateFunctions.isBeerTime(wednesdayTrue)).toBe(true);
        });
        it("isBeerTime test number 7", function () {
            expect(dateFunctions.isBeerTime(thursdayFalse)).toBe(false);
        });
        it("isBeerTime test number 8", function () {
            expect(dateFunctions.isBeerTime(thursdayTrue)).toBe(true);
        });
        it("isBeerTime test number 9", function () {
            expect(dateFunctions.isBeerTime(fridayFalse)).toBe(false);
        });
        it("isBeerTime test number 10", function () {
            expect(dateFunctions.isBeerTime(fridayTrue)).toBe(true);
        });
        it("isBeerTime test number 11", function () {
            expect(dateFunctions.isBeerTime(saturdayFalse)).toBe(false);
        });
        it("isBeerTime test number 12", function () {
            expect(dateFunctions.isBeerTime(saturdayTrue)).toBe(true);
        });
        it("isBeerTime test number 13", function () {
            expect(dateFunctions.isBeerTime(sunday)).toBe(true);
        });
        it("isBeerTime test number 14", function () {
            expect(dateFunctions.isBeerTime(sunday2)).toBe(true);
        });
    });

    describe("whenIsNextFriday13 function", function () {
        let date1 = new Date(1473864272290);
        let date2 = new Date(0);
        it("should exist", function () {
            expect(dateFunctions.whenIsNextFriday13).toBeDefined();
        });
        it("whenIsNextFriday13 test number 1", function () {
            expect(dateFunctions.whenIsNextFriday13(date1).getTime()).toEqual(1484322272290);
        });
        it("whenIsNextFriday13 test number 1", function () {
            expect(dateFunctions.whenIsNextFriday13(date2).getTime()).toEqual(3801600000);
        });
    });
});
