/****************************************************************************

Name: howManyTimes.js
Function: howManyTimes
Testing how many times you need to go for taking adventage
of an annual pass

****************************************************************************/

"use strict";

const howManyTimes = require("../howManyTimes");

describe("Testing howManyTimes function", function() {

    describe("Testing valid cases", function() {

        it("Should return 1 if the Anual Pass is cheaper than the Single Pass ", function() {
          expect(howManyTimes(10, 30)).toBe(1);
        });

        it("Should return 5 if the Anual Pass coasts 400 and the Single Pass 100", function() {
          expect(howManyTimes(400, 100)).toBe(5);
        });

        it("Should return 0 if the Anual Pass coasts 365 and the Single Pass 1", function() {
          expect(howManyTimes(365, 1)).toBe(0);
        });

        it("Should return 2 if the Anual Pass coasts 1000 and the Single Pass 999", function() {
          expect(howManyTimes(1000, 999)).toBe(2);
        });

        it("Should return 10 if the Anual Pass coasts 1000.50 and the Single Pass 100.92", function() {
          expect(howManyTimes(1000.50, 100.92)).toBe(10);
        });

        it("Should return 1 if the Anual Pass coasts 100 and the Single Pass 100", function() {
          expect(howManyTimes(100, 100)).toBe(2);
        });

        it("Should return 31 if the Anual Pass cost 600 and the Single Pass 20", function() {
          expect(howManyTimes(600, 20)).toBe(31);
        });

        it("Should return 0 if the Anual Pass cost 1000000 and the Single Pass 10", function() {
          expect(howManyTimes(1000000, 10)).toBe(0);
        });

        it("Should return 365 if the Anual Pass cost 364 and the Single Pass 1", function() {
          expect(howManyTimes(364, 1)).toBe(365);
        });

    });

    describe("Testing invalid cases", function() {

        it("Should return 0 if the Anual Pass cost -2000 and the Single Pass 1", function() {
          expect(howManyTimes(-2000, 1)).toBe(0);
        });

        it("Should return 0 if the Anual Pass cost 34 and the Single Pass -1", function() {
          expect(howManyTimes(34, -1)).toBe(0);
        });

        it("Should return 1 if the Anual Pass cost 0 and the Single Pass 0", function() {
          expect(howManyTimes(0, 0)).toBe(0);
        });

    });

});
