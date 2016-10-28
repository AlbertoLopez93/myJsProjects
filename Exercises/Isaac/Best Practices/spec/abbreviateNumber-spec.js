"use strict";
/****************************************************************************
Name: abbreviateNumber.js
Search: label:interns {subject:"arrays ex 1" subject:"arrays ex1" subject:arraysex1}
Target: Exercises/$1/Arrays
Function: abbreviateNumber
****************************************************************************/

describe("Testing Large numbers exercise", function () {
    let abbreviateNumber = require("../abbreviateNumber"),
        numbers = [
            [101e7, "1010M"], //99,900,000
            [101e4, "1.01M"], // 1,010,000
            [1001e3, "1.00M"], // 1,001,000
            [1000500, "1.00M"], // 1,000,500
            [1e6, "1.00M"], // 1,000,000
            [999999, "1.00M"], // 999,999
            [999500, "1.00M"], // 999,500
            [999499, "999K"], // 999,499
            [999001, "999K"], // 999,001
            [1e4, "10.0K"], // 10,000
            [9999, "9,999"], // 9,999
            [888, "888"] // 888
        ];

    numbers.forEach(function (number) {
        it("The number is " + number[0], function () {
            expect(abbreviateNumber(number[0])).toBe(number[1]);
        });
    });
});