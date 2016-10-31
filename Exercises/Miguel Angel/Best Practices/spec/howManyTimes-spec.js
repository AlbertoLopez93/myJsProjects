"use strict";

/*
Function 'howManyTimes' receives the price of an annual pass and a single pass
and returns the minnimun amount of days that a person have to use the annual
pass to take advantage of it.
Tests of function 'howManyTimes'
*/

const howManyTimes = require("../howManyTimes");

describe("Testing howManyTimes function", function () {

    describe("Should return 0 if there isn't advantage on the annual pass", function () {

        it("If the price of the annual pass is 365 and the single pass is 1, should return 0", function () {
            expect(howManyTimes(365, 1)).toBe(0);
        });

        it("If the price of the annual pass is 1000 and the single pass is 2, should return 0", function () {
            expect(howManyTimes(1000, 2)).toBe(0);
        });

        it("If the price of the annual pass is 3650 and the single pass is 10, should return 0", function () {
            expect(howManyTimes(3650, 10)).toBe(0);
        });

        it("If the price of the annual pass is 10000 and the single pass is 20, should return 0", function () {
            expect(howManyTimes(10000, 20)).toBe(0);
        });

        it("If the price of the annual pass is 5000 and the single pass is 3, should return 0", function () {
            expect(howManyTimes(5000, 3)).toBe(0);
        });

        it("If the price of the annual pass is 100 and the single pass is 0.2, should return 0", function () {
            expect(howManyTimes(100, 0.2)).toBe(0);
        });

        it("If the price of the annual pass is 2000 and the single pass is 5, should return 0", function () {
            expect(howManyTimes(2000, 5)).toBe(0);
        });

        it("If the price of the annual pass is 20000 and the single pass is 50, should return 0", function () {
            expect(howManyTimes(20000, 50)).toBe(0);
        });

        it("If the price of the annual pass is 100 and the single pass is 1000, should return 0", function () {
            expect(howManyTimes(100, 1000)).toBe(0);
        });

        it("If the price of the annual pass is 100 and the single pass is 100, should return 0", function () {
            expect(howManyTimes(100, 100)).toBe(0);
        });
    });

    describe("Should return the amount of days if there is advantage on the annual pass", function () {

        it("If the price of the annual pass is 200 and the single pass is 20, should return 11", function () {
            expect(howManyTimes(200, 20)).toBe(11);
        });

        it("If the price of the annual pass is 400 and the single pass is 20, should return 21", function () {
            expect(howManyTimes(400, 20)).toBe(21);
        });

        it("If the price of the annual pass is 10000 and the single pass is 100, should return 21", function () {
            expect(howManyTimes(10000, 100)).toBe(101);
        });

        it("If the price of the annual pass is 5000 and the single pass is 100, should return 51", function () {
            expect(howManyTimes(5000, 100)).toBe(51);
        });

        it("If the price of the annual pass is 40 and the single pass is 1, should return 41", function () {
            expect(howManyTimes(40, 1)).toBe(41);
        });

        it("If the price of the annual pass is 8000 and the single pass is 200, should return 41", function () {
            expect(howManyTimes(8000, 200)).toBe(41);
        });

        it("If the price of the annual pass is 1400 and the single pass is 120, should return 12", function () {
            expect(howManyTimes(1400, 120)).toBe(12);
        });

        it("If the price of the annual pass is 4200 and the single pass is 220, should return 20", function () {
            expect(howManyTimes(4200, 220)).toBe(20);
        });

        it("If the price of the annual pass is 1300 and the single pass is 12, should return 109", function () {
            expect(howManyTimes(1300, 12)).toBe(109);
        });

        it("If the price of the annual pass is 3210 and the single pass is 210, should return 16", function () {
            expect(howManyTimes(3210, 210)).toBe(16);
        });

    });

});
