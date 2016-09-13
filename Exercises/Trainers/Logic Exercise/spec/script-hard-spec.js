"use strict";

var functions = require("../script");


describe("Testing Logic Exercises 1", function () {
    describe("isAnagram function", function () {
        var isAnagram = functions.isAnagram;

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
        var convertSpaces = functions.convertSpaces;
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
        var rounded = functions.rounded;

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
        var getTotal = functions.getTotal;

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
        it("should return 0 for 0 days", function () {
            expect(getTotal(0)).toBe(0);
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
        var squareSum = functions.squareSum;

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

    describe("isRotation function", function () {
        var isRotation = functions.isRotation;

        it("should be defined", function () {
            expect(isRotation).toBeDefined();
        });
        it("should not work against numbers", function () {
            expect(isRotation(1.50, 1.50)).toBe(false);
            expect(isRotation(-1.50, -1.50)).toBe(false);
            expect(isRotation(2,2)).toBe(false);
            expect(isRotation(-2, -2)).toBe(false);
            expect(isRotation(NaN, NaN)).toBe(false);
            expect(isRotation(Infinity, Infinity)).toBe(false);
            expect(isRotation(-Infinity, -Infinity)).toBe(false);
            expect(isRotation(0, 0)).toBe(false);
        });
        it("should not work against functions", function () {
            expect(isRotation(function () {}, function() {})).toBe(false);
        });
        it("should not work against objects", function () {
            expect(isRotation({},{})).toBe(false);
        });
        it("should not work against regex", function () {
            expect(isRotation(/abcd/, /abcd/)).toBe(false);
        });
        it("should not work against booleans", function () {
            expect(isRotation(true, true)).toBe(false);
        });
        it("should not work against null or undefined", function () {
            expect(isRotation(null, null)).toBe(false);
            expect(isRotation(undefined, undefined)).toBe(false);
        });
        it("should not work against arrays", function () {
            expect(isRotation([], [])).toBe(false);
        });
        it("should return true with strings that are rotation of each other", function () {
            expect(isRotation("waterbottle", "erbottlewat")).toBe(true);
        });
        it("should return false with strings that are not rotation of each other", function () {
            expect(isRotation("watermelon", "waterbottle")).toBe(false);
        });
        it("should return true with strings that are the same word", function () {
            expect(isRotation("watermelon", "watermelon")).toBe(true);
        });
    });

    describe("convertMatrix function", function () {
        var convertMatrix = functions.convertMatrix;

        it("should be defined", function () {
            expect(convertMatrix).toBeDefined();
        });
        it("should not work against numbers", function () {
            expect(convertMatrix(1.50)).toBe(false);
            expect(convertMatrix(-1.50)).toBe(false);
            expect(convertMatrix(2)).toBe(false);
            expect(convertMatrix(-2)).toBe(false);
            expect(convertMatrix(NaN)).toBe(false);
            expect(convertMatrix(Infinity)).toBe(false);
            expect(convertMatrix(-Infinity)).toBe(false);
            expect(convertMatrix(0)).toBe(false);
        });
        it("should not work against functions", function () {
            expect(convertMatrix(function() {})).toBe(false);
        });
        it("should not work against strings", function () {
            expect(convertMatrix("hola mundo")).toBe(false);
        });
        it("should not work against objects", function () {
            expect(convertMatrix({})).toBe(false);
        });
        it("should not work against regex", function () {
            expect(convertMatrix(/abcd/)).toBe(false);
        });
        it("should not work against booleans", function () {
            expect(convertMatrix(false)).toBe(false);
            expect(convertMatrix(true)).toBe(false);
        });
        it("should not work against null or undefined", function () {
            expect(convertMatrix(null)).toBe(false);
            expect(convertMatrix(undefined)).toBe(false);
        });
        it("should work against arrays", function () {
            expect(convertMatrix([])).toEqual([]);
            expect(convertMatrix([0])).toEqual([0]);
            expect(convertMatrix([1])).toEqual([1]);
            expect(convertMatrix([1, 0])).toEqual([0, 0]);
            expect(convertMatrix([ [1, 1], [1, 1] ])).toEqual([ [1, 1], [1, 1] ]);
            expect(convertMatrix([ [1, 1], [1, 0] ])).toEqual([ [1, 0], [0, 0] ]);
            expect(convertMatrix([ [0, 1], [1, 1] ])).toEqual([ [0, 0], [0, 1] ]);
            expect(convertMatrix([ [1, 1, 1], [1, 0, 1], [1, 1, 1] ])).toEqual([ [1, 0, 1], [0, 0, 0], [1, 0, 1] ]);
        });
    });

    describe("rotate function", function () {
        var rotate = functions.rotate;

        it("should be defined", function () {
            expect(rotate).toBeDefined();
        });
        it("should not work against numbers", function () {
            expect(rotate(1.50)).toBe(false);
            expect(rotate(-1.50)).toBe(false);
            expect(rotate(2)).toBe(false);
            expect(rotate(-2)).toBe(false);
            expect(rotate(NaN)).toBe(false);
            expect(rotate(Infinity)).toBe(false);
            expect(rotate(-Infinity)).toBe(false);
            expect(rotate(0)).toBe(false);
        });
        it("should not work against functions", function () {
            expect(rotate(function() {})).toBe(false);
        });
        it("should not work against strings", function () {
            expect(rotate("hola mundo")).toBe(false);
        });
        it("should not work against objects", function () {
            expect(rotate({})).toBe(false);
        });
        it("should not work against regex", function () {
            expect(rotate(/abcd/)).toBe(false);
        });
        it("should not work against booleans", function () {
            expect(rotate(false)).toBe(false);
            expect(rotate(true)).toBe(false);
        });
        it("should not work against null or undefined", function () {
            expect(rotate(null)).toBe(false);
            expect(rotate(undefined)).toBe(false);
        });
        it("should not work against not against non square matrix", function () {
            expect(rotate([1, 2, 3])).toBe(false);
            expect(rotate([ [1, 2, 3], [1, 2, 3]])).toBe(false);
        });
        it("should work against square matrix", function () {
            expect(rotate( [ [1, 1], [1, 1] ] )).toEqual([ [1, 1], [1, 1] ]);
            expect(rotate( [ [0, 1], [0, 1] ] )).toEqual([ [0, 0], [1, 1] ]);
        });
    })
});
