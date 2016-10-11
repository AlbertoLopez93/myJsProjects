(function() {
    "use strict";

    let howManyTimes = require("../howManyTimes");

    let convinientPrices = [
            [200, 20, 11],
            [400, 2, 201],
            [360, 1, 361],
            [1000, 100, 11],
            [2500, 150, 18],
            [5000, 100, 51]
        ],
        notConvinientPrices = [
            [365, 1],
            [400, 1],
            [750, 2],
            [1000, 2.5],
            [5000, 10],
            [7000, 19],
        ];

    describe("Testing 'howManyTimes' function", function() {

        it("should be defined", function() {
            expect(howManyTimes).toBeDefined();
            expect(typeof howManyTimes).toBe("function");
        });

        describe("Testing convinient prices", function() {
            convinientPrices.forEach(function(price, index) {
                it((index + 1) + ". For Anual: " + price[0] + " and Day: " + price[1] + ", you should go " + price[2] + " days.", function() {
                    expect(howManyTimes(price[0], price[1])).toBe(price[2]);
                });
            });
        });

        describe("Testing NOT convinient prices", function() {
            notConvinientPrices.forEach(function(price, index) {
                it((index + 1) + ". For Anual: " + price[0] + " and Day: " + price[1] + ", is not convenient.", function() {
                    expect(howManyTimes(price[0], price[1])).toBe(0);
                });
            });
        });
    });
}());
