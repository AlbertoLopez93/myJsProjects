/**
 * Created by EDDY on 30/08/2016.
 */
// #1 WRITE A FUNCTION THAT DCIDE IF 2 STRINGS ARE ANAGRAMS OR NOT
console.log (isAnagram ("chololonchon", "lonchoncholo"));
function isAnagram (strOne, strTwo) {
    var isAnagram = false;
    var listTwo = [];

    if (strOne.length === strTwo.length) {
        strOne = strOne.split ("");
        strOne = atoA (strOne);
        for (var i = 0; i < strOne.length; i++) {
        }
        strTwo = strTwo.split ("");
        strTwo = atoA (strTwo);
        for (var i = 0; i < strOne.length; i++) {
            for (var j = 0; j < strOne.length; j++) {
                if (strOne[i] === strTwo[j]) {
                    listTwo[i] = strTwo[j];
                }
            }
            if (listTwo.join (',') == strOne.join (',')) {
                isAnagram = true
            }
            
        }
        return isAnagram;
    }
}
function atoA (param) {
    var result = [];
    for (var i = 0; i < param.length; i++) {
        switch (true) {
            case param[i] == 'A':
                result[i] = 'a';
                break;
            case param[i] == 'B':
                result[i] = 'b';
                break;
            case param[i] == 'C':
                result[i] = 'c';
                break;
            case param[i] == 'D':
                result[i] = 'd';
                break;
            case param[i] == 'E':
                result[i] = 'e';
                break;
            case param[i] == 'F':
                result[i] = 'f';
                break;
            case param[i] == 'G':
                result[i] = 'g';
                break;
            case param[i] == 'H':
                result[i] = 'h';
                break;
            case param[i] == 'I':
                result[i] = 'i';
                break;
            case param[i] == 'J':
                result[i] = 'j';
                break;
            case param[i] == 'K':
                result[i] = 'k';
                break;
            case param[i] == 'L':
                result[i] = 'l';
                break;
            case param[i] == 'M':
                result[i] = 'm';
                break;
            case param[i] == 'N':
                result[i] = 'n';
                break;
            case param[i] == 'O':
                result[i] = 'o';
                break;
            case param[i] == 'P':
                result[i] = 'p';
                break;
            case param[i] == 'R':
                result[i] = 'r';
                break;
            case param[i] == 'S':
                result[i] = 's';
                break;
            case param[i] == 'T':
                result[i] = 't';
                break;
            case param[i] == 'U':
                result[i] = 'u';
                break;
            case param[i] == 'V':
                result[i] = 'v';
                break;
            case param[i] == 'W':
                result[i] = 'w';
                break;
            case param[i] == 'X':
                result[i] = 'x';
                break;
            case param[i] == 'Y':
                result[i] = 'y';
                break;
            case param[i] == 'Z':
                result[i] = 'z';
                break;
            case param[i] == 'Ñ':
                result[i] = 'ñ';
                break;
            default:
                result[i] = param[i];
        }
    }
    return result;
}

/**
 * Created by EDDY on 30/08/2016.
 */
//# 2 WRITE A FUNCTION THAT REPLACE ALL SPACES WITH THE STRING '%20'

console.log (convertSpaces ("hola mundo como estas ?"));
function convertSpaces (param) {
    var result = '';
    for (var i = 0; i < param.length; i++) {

        if (param[i] == ' ') {
            result += '%20';
            i++;
        }
        result += param[i];
    }
    return result;
}

/**
 * Created by EDDY on 30/08/2016.
 */
//#4 YOU WILL RENT A CAR EVERYDAY YOU RENT THE CAR COST $40 IF YOU RENT THE CAR FOR THREE OR MORE DAY YOU GET $20 OFF
// YOUR TOTAL IF YOU RENT A CAR FOR 7 OR MORE DAYS UOY GET A 50% OFF YOUR TOTAL WRITE A  FUNCTION THAT GIVES YOU THE
// TOTAL AMOUNT FOR ANY GIVEN DAY

console.log (getTotatl (6));
function getTotatl (param) {
    var result = 0;
    if (param <= 3 && param > 0) {
        result = param * 40;
    }

    if (param > 3 && param < 7) {
        result = (param * 40) - 20;
    }
    if (param >= 7) {
        result = (param * 40 * .50) - 20;
    }
    return result;
}

/**
 * Created by EDDY on 30/08/2016.
 */
//#5 WRITE A FUNCTION THAT RECEIVES AN ARRAY OF INTEGERS  AND RETURNS THE SUM  OF THE SQUARES OF EACH NUMBER
console.log (squareSum ([1, 2, 2, 1]))
function squareSum (param) {
    var result = 0;
    for (var i = 0; i < param.length; i++) {
        result += (param[i] * param[i])
    }
    return result;
}

// "use strict";

// var functions = require("../script");
var getTotal = getTotatl;

describe("Testing Logic Exercises 1", function () {
    describe("isAnagram function", function () {
        // var isAnagram = functions.isAnagram;

        it("should be defined", function () {
            expect(isAnagram).toBeDefined();
        });
        it("should not work against arrays", function () {
            expect(isAnagram([], [])).toBe(false);
        });
        it("should not work against functions", function () {
            expect(isAnagram(function(){}, function(){})).toBe(false);
        });
        it("should not work against numbers", function () {
            expect(isAnagram(1,3)).toBe(false);
            expect(isAnagram(1.2,3.3)).toBe(false);
            expect(isAnagram(Infinity,Infinity)).toBe(false);
            expect(isAnagram(NaN,NaN)).toBe(false);
        });
        it("should not work against object", function () {
            expect(isAnagram({}, {})).toBe(false);
        });
        it("should not work against regex", function () {
            expect(isAnagram(/abc/, /abc/)).toBe(false);
        });
        it("should not work against booleans", function () {
            expect(isAnagram(true, true)).toBe(false);
        });
        it("should not work against nulls or undefined", function () {
            expect(isAnagram(null, null)).toBe(false);
            expect(isAnagram(undefined, undefined)).toBe(false);
        });
        it("should not work if there are spaces between any of the strings", function () {
            expect(isAnagram("hola mundo", "hola mundo")).toBe(false);
        })
        it("should return false for 2 strings with different lengths", function () {
            expect(isAnagram("hola", "mundo")).toBe(false);
        });
        it("should return false for 2 strings with equal lengths that are not anagrams", function () {
            expect(isAnagram("abcd", "efgh")).toBe(false);
        });
        it("should return true for 2 strings with equal lengths that are anagrams", function () {
            expect(isAnagram("roma", "amor")).toBe(true);
        });
        it("should return true for 2 strings that are the same", function () {
            expect(isAnagram("roma", "roma")).toBe(true);
        });
    });

    describe("convertSpaces function", function () {
        // var convertSpaces = functions.convertSpaces;

        it("should be defined", function () {
            expect(convertSpaces).toBeDefined();
        });
        it("should not work against arrays", function () {
            expect(convertSpaces([], [])).toBe(false);
        });
        it("should not work against functions", function () {
            expect(convertSpaces(function(){}, function(){})).toBe(false);
        });
        it("should not work against numbers", function () {
            expect(convertSpaces(1,3)).toBe(false);
            expect(convertSpaces(1.2,3.3)).toBe(false);
            expect(convertSpaces(Infinity,Infinity)).toBe(false);
            expect(convertSpaces(NaN,NaN)).toBe(false);
        });
        it("should not work against object", function () {
            expect(convertSpaces({}, {})).toBe(false);
        });
        it("should not work against regex", function () {
            expect(convertSpaces(/abc/, /abc/)).toBe(false);
        });
        it("should not work against booleans", function () {
            expect(convertSpaces(true)).toBe(false);
        });
        it("should not work against nulls or undefined", function () {
            expect(convertSpaces(null)).toBe(false);
            expect(convertSpaces(undefined)).toBe(false);
        });
        it("should convert one space to %20", function () {
            expect(convertSpaces("hola mundo")).toBe("hola%20mundo");
        });
        it("should convert many spaces to many %20", function () {
            expect(convertSpaces("    ")).toBe("%20%20%20%20");
        });
        it("should do nothing for an empty string", function () {
            expect(convertSpaces("")).toBe("");
        });
    });

    describe("rounded function", function () {
        // var rounded = functions.rounded;

        it("should be defined", function () {
            expect(rounded).toBeDefined();
        });
        it("should not work against arrays", function () {
            expect(rounded([])).toBe(false);
        });
        it("should not work against functions", function () {
            expect(rounded(function() {})).toBe(false);
        });
        it("should not work against strings", function () {
            expect(rounded("hola")).toBe(false);
        });
        it("should not work against objects", function () {
            expect(rounded({})).toBe(false);
        });
        it("should not work against regex", function () {
            expect(rounded(/abcd/)).toBe(false);
        });
        it("should not work against booleans", function () {
            expect(rounded(false)).toBe(false);
        });
        it("should not work against null or undefined", function () {
            expect(rounded(null)).toBe(false);
            expect(rounded(undefined)).toBe(false);
        });
        it("should not work against NaN", function () {
            expect(rounded(NaN)).toBe(false);
        });
        it("should work against Infinity", function () {
            expect(rounded(Infinity)).toBe(Infinity);
            expect(rounded(-Infinity)).toBe(-Infinity);
        });
        it("should work against integers", function () {
            expect(rounded(70)).toBe(70);
            expect(rounded(5)).toBe(5);
        });
        it("should work against numbers with 00 as decimal part", function () {
            expect(rounded(70.0)).toBe(70);
            expect(rounded(5.0000)).toBe(5);
        });
        it("should round up with 2 decimals positive numbers", function () {
            expect(rounded(5.5589)).toBe(5.56);
            expect(rounded(69.996)).toBe(70);
            expect(rounded(5.5550)).toBe(5.56);
        });
        it("should round down with 2 decimals positive numbers", function () {
            expect(rounded(3.3424)).toBe(3.34);
            expect(rounded(69.4924)).toBe(69.49);
            expect(rounded(5.5549)).toBe(5.55);
        });
        it("should round up with 2 decimals negative numbers", function () {
            expect(rounded(-5.5589)).toBe(-5.56);
            expect(rounded(-69.996)).toBe(-70);
            expect(rounded(-5.5550)).toBe(-5.56);
        });
        it("should round down with 2 decimals negative numbers", function () {
            expect(rounded(-3.3424)).toBe(-3.34);
            expect(rounded(-69.4924)).toBe(-69.49);
            expect(rounded(-5.5549)).toBe(-5.55);
        });
    });

    describe("getTotal function", function () {
        // var getTotal = functions.getTotal;

        it("should be defined", function () {
            expect(getTotal).toBeDefined();
        });
        it("should not work against arrays", function () {
            expect(getTotal([])).toBe(false);
        });
        it("should not work against functions", function () {
            expect(getTotal(function() {})).toBe(false);
        });
        it("should not work against strings", function () {
            expect(getTotal("hola")).toBe(false);
        });
        it("should not work against objects", function () {
            expect(getTotal({})).toBe(false);
        });
        it("should not work against regex", function () {
            expect(getTotal(/abcd/)).toBe(false);
        });
        it("should not work against booleans", function () {
            expect(getTotal(false)).toBe(false);
        });
        it("should not work against null or undefined", function () {
            expect(getTotal(null)).toBe(false);
            expect(getTotal(undefined)).toBe(false);
        });
        it("should not work against NaN", function () {
            expect(getTotal(NaN)).toBe(false);
        });
        it("should not work against negative Infinity", function () {
            expect(getTotal(-Infinity)).toBe(false);
        })
        it("should work against positive Infinity", function () {
            expect(getTotal(Infinity)).toBe(Infinity);
        });
        it("should not workg against floating points with decimals > X.00", function () {
            expect(getTotal(3.45)).toBe(false);
        });
        it("should not work against negative numbers", function () {
            expect(getTotal(-5)).toBe(false);
        });
        it("should work against positive integer numbers", function () {
            expect(getTotal(1)).toBe(40);
            expect(getTotal(2)).toBe(80);
            expect(getTotal(3)).toBe(100);
            expect(getTotal(5)).toBe(180);
            expect(getTotal(7)).toBe(230);
        });
        it("should work against positive float numbers numbers with decimals = X.00", function () {
            expect(getTotal(1.00)).toBe(40);
            expect(getTotal(2.00)).toBe(80);
            expect(getTotal(3.00)).toBe(100);
            expect(getTotal(5.00)).toBe(180);
            expect(getTotal(7.00)).toBe(230);
        });
    });

    describe("squareSum function", function () {
        // var squareSum = functions.squareSum;

        it("should be defined", function () {
            expect(squareSum).toBeDefined();
        });
        it("should not work against numbers", function () {
            expect(squareSum(1.50)).toBe(false);
            expect(squareSum(-1.50)).toBe(false);
            expect(squareSum(2)).toBe(false);
            expect(squareSum(-2)).toBe(false);
            expect(squareSum(NaN)).toBe(false);
            expect(squareSum(Infinity)).toBe(false);
            expect(squareSum(-Infinity)).toBe(false);
            expect(squareSum(0)).toBe(false);
        });
        it("should not work against functions", function () {
            expect(squareSum(function() {})).toBe(false);
        });
        it("should not work against strings", function () {
            expect(squareSum("hola mundo")).toBe(false);
        });
        it("should not work against objects", function () {
            expect(squareSum({})).toBe(false);
        });
        it("should not work against regex", function () {
            expect(squareSum(/abcd/)).toBe(false);
        });
        it("should not work against booleans", function () {
            expect(squareSum(false)).toBe(false);
            expect(squareSum(true)).toBe(false);
        });
        it("should not work against null or undefined", function () {
            expect(squareSum(null)).toBe(false);
            expect(squareSum(undefined)).toBe(false);
        });
        it("should work against arrays with positive integers", function () {
            var ary = [1, 2, 3];
            expect(squareSum(ary)).toBe(14);
            var ary2 = [1, 2, 3, Infinity];
            expect(squareSum(ary2)).toBe(Infinity);
        });
        it("should work against arrays with negative integers", function () {
            var ary = [-1, -2, -3];
            expect(squareSum(ary)).toBe(14);
            var ary2 = [-1, -2, -3, -Infinity];
            expect(squareSum(ary2)).toBe(Infinity);
        });
        it("should work against arrays of positive floats with a decimal part equal to zero", function () {
            var ary = [1.00, 2.00, 3.00];
            expect(squareSum(ary)).toBe(14);
        });
        it("should not work against arrays of positive floats with a decimal part greater than zero", function () {
            var ary = [1.15, 2.15, 3.15];
            expect(squareSum(ary)).toBe(false);
        });
        it("should not work against arrays of elements different than numbers", function () {
            var ary = [1, 2, 3, false, {}, []];
            expect(squareSum(ary)).toBe(false);
        });
    });
});
