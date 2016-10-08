"use strict";
/****************************************************************************

Name: abbreviateNumber.js
Search: label:interns {subject:"arrays ex 1" subject:"arrays ex1" subject:arraysex1}
Target: Exercises/$1/Arrays
Function: abbreviateNumber

****************************************************************************/
describe("Testing Large numbers exercise",function(){
    const abbreviateNumber = require("../abbreviateNumber");
    const largeNumbers=[
        [  101e7,"1010M" ],
        [  101e4,"1.01M" ],
        [ 1001e3,"1.00M" ],
        [1000500,"1.00M" ],
        [    1e6,"1.00M" ],
        [ 999999,"1.00M" ],
        [ 999500,"1.00M" ],
        [ 999499,"999K"  ],
        [ 999001,"999K"  ],
        [    1e4,"10.0K" ],
        [   9999,"9,999" ],
        [    888,"888"   ]
    ];

    largeNumbers.forEach(function(largeNumbers){
        it("The number is " + largeNumbers[0],function(){
            expect(abbreviateNumber(largeNumbers[0])).toBe(largeNumbers[1]);
        });
    });
});
