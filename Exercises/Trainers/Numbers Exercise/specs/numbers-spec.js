var numFunctions = require("../numbers.js");

describe("Numbers functions exercise", function () {
    describe("cal function", function () {
        it("should exist", function () {
            expect(numFunctions.cal).toBeDefined();
        });
        it("cal test number 1", function () {
            expect(numFunctions.cal('1','2','+')).toBe(3);
        });
        it("cal test number 2", function () {
            expect(numFunctions.cal('1','2','*')).toBe(2);
        });
        it("cal test number 3", function () {
            expect(numFunctions.cal('1','2','/')).toBe(0.5);
        });
        it("cal test number 4", function () {
            expect(numFunctions.cal('1','2','-')).toBe(-1);
        });
        it("cal test number 5", function () {
            expect(Number.isNaN(numFunctions.cal('1','2a','-'))).toBe(true);
        });
        it("cal test number 6", function () {
            expect(Number.isNaN(numFunctions.cal('1a','2','-'))).toBe(true);
        });
    });

    describe("howBigNumberIs function", function () {
        it("should exist", function () {
            expect(numFunctions.howBigNumberIs).toBeDefined();
        });
        it("howBigNumberIs test number 1", function () {
            expect(numFunctions.howBigNumberIs('12','3','5')).toBe('Warning');
        });
        it("howBigNumberIs test number 2", function () {
            expect(numFunctions.howBigNumberIs('2','3','5')).toBe('Ok');
        });
        it("howBigNumberIs test number 3", function () {
            expect(numFunctions.howBigNumberIs('0','0','Infinity')).toBe('Ok');
        });
        it("howBigNumberIs test number 4", function () {
            expect(numFunctions.howBigNumberIs('12','12','1254')).toBe('To much');
        });
        it("howBigNumberIs test number 5", function () {
            expect(Number.isNaN(numFunctions.howBigNumberIs('a','b','c'))).toBe(true);
        });
        it("howBigNumberIs test number 6", function () {
            expect(Number.isNaN(numFunctions.howBigNumberIs('12','12aa','1254'))).toBe(true);
        });
    });

    describe("sumPositivesAndNegatives function", function () {
        it("should exist", function () {
            expect(numFunctions.sumPositivesAndNegatives).toBeDefined();
        });
        it("sumPositivesAndNegatives test number 1", function () {
            expect(numFunctions.sumPositivesAndNegatives([1,2,3,4,-1,-2,-3,-4,new Number(5), new Date(), new String('s'), [1,2,3,-1,-1]])).toEqual([21, -12]);
        });
        it("sumPositivesAndNegatives test number 2", function () {
            expect(numFunctions.sumPositivesAndNegatives([1, -2, new Number(1), new String(-22), [1, -6, -2], true])).toEqual([4, -32]);
        });
        it("sumPositivesAndNegatives test number 3", function () {
            expect(numFunctions.sumPositivesAndNegatives([[1,-1]])).toEqual([1, -1]);
        });
        it("sumPositivesAndNegatives test number 4", function () {
            expect(numFunctions.sumPositivesAndNegatives([[],[],[]])).toEqual([0, 0]);
        });
    });
});
