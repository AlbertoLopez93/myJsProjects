(function() {
    'use strict';

    var NewDate = require('../NewDate');

    describe("Testing NewDate class", function() {
        it("Should be defined", function() {
            expect(NewDate).toBeDefined();
        });
        it("Should work with all its methods", function() {
            var date = new NewDate({
                day: 1,
                month: 2,
                year: 1900
            });

            expect(date.getDay()).toBe(1); // 1
            expect(date.getMonth()).toBe(2); // 2
            expect(date.getYear()).toBe(1900); // 1900
            expect(date.toString()).toBe("01/02/1900"); // "01/02/1900"
            date.setDay(31);
            date.setMonth(12);
            date.setYear(2016);
            expect(date.toString()).toBe("31/12/2016"); // "31/12/2016"
            date.setDate(27, 9, 1987);
            expect(date.toString()).toBe("27/09/1987"); // "27/09/1987"
        });
    });
}());
