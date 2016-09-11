// Exercises Isaac Ramírez. 30/08/2016
// (function () {
    'use strict';

    function assert(nameTest, val, expected) {
        console.log(nameTest, '->', val === expected);
    }

    function assertMatrix(nameTest, matrix1, matrix2) {
        let equal = true;
        for (let y = 0; y < matrix1.length; y++) {
            for (let x = 0; x < matrix1[y].length; x++) {
                if (matrix1[y][x] !== matrix2[y][x]) {
                    equal = false;
                    break;
                }
            }
        }
        console.log(nameTest, '->', equal);
    }

    // 1) Write a function that decides if 2 strings are anagrams or not.
    function isAnagram(str1, str2) {
        let abc = 'abcdefghijklmnñopqrstuvwxyz'.split("");
        let ABC = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split("");

        // If they have different length, then they are different.
        if (str1.length === str2.length) {
            // Convert to lower case.
            str1 = convertToLower(str1);
            str2 = convertToLower(str2);
            // Count the letters of str1
            let obj1 = countLetters(str1);
            let obj2 = countLetters(str2);

            let same = true;

            // Compare the first object with the second object.
            for (let k1 in obj1) {
                if (obj1[k1] && obj2[k1]) {
                    if (obj1[k1] !== obj2[k1]) {
                        same = false;
                    }
                } else {
                    same = false;
                }
            }
            // If the first comparison past, then compares second object with the first object.
            if (same) {
                for (let k2 in obj2) {
                    if (obj2[k2] && obj1[k2]) {
                        if (obj2[k2] !== obj1[k2]) {
                            same = false;
                        }
                    } else {
                        same = false;
                    }
                }
                // Returns the final result.
                return same;
            } else {
                return false;
            }
        }
        return false;

        /*
         * Converts a String to lowerCase.
         */
        function convertToLower(str) {
            let lower = '';
            for (let i = 0, char; i < str.length; i++) {
                char = str[i];
                for (let c = 0; c < ABC.length; c++) {
                    if (str[i] === ABC[c]) {
                        char = abc[c];
                        break;
                    }
                }
                lower += char;
            }
            return lower;
        }

        /*
         * Returns an object with the count of the letters.
         */
        function countLetters(str) {
            let obj = {};
            for (let i = 0; i < str.length; i++) {
                if (obj[str[i]] === undefined) {
                    obj[str[i]] = 0;
                }
                obj[str[i]]++;
            }
            return obj;
        }
    }

    assert('isAngram', isAnagram('Amor', 'Roma'), true);
    assert('isAngram', isAnagram('Amms', 'Roma'), false);
    assert('isAngram', isAnagram('Limo', 'Roma'), false);
    assert('isAngram', isAnagram('Amooooooor', 'oaomoRoooo'), true);
    console.log('\n');


    // 2) Write a function that replaces all spaces with the string '%20'
    function convertSpaces(str1) {
        let str = '';
        for (let i = 0; i < str1.length; i++) {
            str += str1[i] === ' ' ? '%20' : str1[i];
        }
        return str;
    }

    assert('convertSpaces', convertSpaces('Hola mundo'), 'Hola%20mundo');
    assert('convertSpaces', convertSpaces('Hola mundo maravilloso'), 'Hola%20mundo%20maravilloso');
    assert('convertSpaces', convertSpaces('HolaMundo'), 'HolaMundo');
    assert('convertSpaces', convertSpaces('Hola-Mundo'), 'Hola-Mundo');
    console.log('\n');


    // 3) Write a function that formats and rounds a floating-point number to only have 2 decimals.
    function rounded(number) {
        let numStr = ("" + number).split('.');
        let decimals = numStr[1].split('');
        let acumulado = 0;
        for (let i = decimals.length - 2; i >= 1; i--) {
            if (+decimals[i + 1] >= 5) {
                decimals[i] = (+decimals[i]) + 1 + acumulado;
                if (decimals[i] === 10) {
                    decimals[i] = 0;
                    acumulado = 1;
                } else {
                    acumulado = 0;
                }
            }
        }
        decimals[0] = (+decimals[0]) + acumulado;
        if (decimals[0] === 10) {
            decimals[0] = 0;
            acumulado = 1;
        } else {
            acumulado = 0;
        }
        numStr[0] = (+numStr[0]) + acumulado;
        let result = numStr[0] + '.' + decimals[0] + decimals[1];
        return result;
    }

    assert('rounded', rounded(1.5688), (1.5688).toFixed(2));
    assert('rounded', rounded(3.9982), (3.9982).toFixed(2));
    assert('rounded', rounded(3.3424), (3.3424).toFixed(2));
    assert('rounded', rounded(5.5589), (5.5589).toFixed(2));
    assert('rounded', rounded(18.9782), (18.9782).toFixed(2));
    //console.log(rounded(18.9782));
    console.log('\n');

    // 4) You will rent a car. Every day you rent the car costs $40. If you rent the car for 3 or more days, you get $20 off
    // your total. If you rent the car 7 or more days you get $50 off your total. Wirte a function that gives your the total
    // amount for any given days.
    function getTotal(days) {
        const rentCost = 40;
        let total = days * rentCost;
        if (days >= 7) {
            total -= 50;
        } else if (days >= 3) {
            total -= 20;
        }
        return total;
    }
    assert('getTotal', getTotal(1), 40);
    assert('getTotal', getTotal(2), 80);
    assert('getTotal', getTotal(3), 100);
    assert('getTotal', getTotal(4), 140);
    assert('getTotal', getTotal(7), 230);
    assert('getTotal', getTotal(8), 270);
    assert('getTotal', getTotal(10), 350);
    console.log('\n');

    // 5) Write a function that receives an array of integers and returns the sum of the squares of each number. 
    function squareSum(arg) {
        let total = 0;
        for (let i = 0; i < arg.length; i++) {
            total += arg[i] * arg[i];
        }
        return total;
    }
    assert('squareSum', squareSum([1, 2, 2]), 9);
    assert('squareSum', squareSum([1, 2, 3]), 14);
    console.log('\n');

    // 6) Assume you have a method 'isSubstring' which checks if one word is a substring of another given word. 
    // Given two strings s1 y s2, write a function that check if s2 is a rotation of s1 using only one call to the isSubstring method.
    function isSubstring(str1, str2) {
        if (str2.length <= str1.length) {
            for (let i = 0; i < str1.length; i++) {
                if (str1.length - i < str2.length) {
                    return false;
                }
                if (str1[i] === str2[0]) {
                    for (let j = 0; j < str2.length; j++) {
                        if (str1[i + j] !== str2[j]) {
                            break;
                        }
                        if (j === str2.length - 1) {
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    }

    assert('isSubstring', isSubstring('roma', 'ma'), true);
    assert('isSubstring', isSubstring('erbottlewaterbottlewat', 'waterbottle'), true);
    assert('isSubstring', isSubstring('aslkjdfhlasdhisaackjhlkjhas', 'isaac'), true);
    assert('isSubstring', isSubstring('nadaquever', 'hola'), false);
    assert('isSubstring', isSubstring('nadaholuever', 'hola'), false);
    assert('isSubstring', isSubstring('abcdefg', 'd'), true);
    assert('isSubstring', isSubstring('a', 'abcde'), false);
    assert('isSubstring', isSubstring('a', 'a'), true);
    console.log('\n');

    function isRotation(str1, str2) {
        if (str1.length !== str2.length) {
            return false;
        }
        // Duplicates the size of the string;
        str2 += str2;
        return isSubstring(str2, str1);
    }
    assert('isRotation', isRotation('waterbottle', 'erbottlewat'), true);
    assert('isRotation', isRotation('pikachu', 'achupik'), true);
    assert('isRotation', isRotation('pikachu', 'achuppik'), false);
    assert('isRotation', isRotation('pokemon', 'mompoke'), false);
    console.log('\n');


    // 7) Write a function that receives a matrix M x N, and that returns a new matrix following the next rules:
    // - If any element of the [M][N] matrix is a 0 (zero), then that entire column and row is set to 0 (zero).
    function convertMatrix(matrix) {
        let result = [];
        // copy the matrix
        let indexes = [];
        for (let y = 0; y < matrix.length; y++) {
            result[y] = [];
            for (let x = 0; x < matrix[y].length; x++) {
                result[y][x] = matrix[y][x];
                // Save the indexes with 0
                if (result[y][x] === 0) {
                    indexes.push({
                        x: x,
                        y: y
                    });
                }
            }
        }
        // Clean the matrix
        for (let i = 0, index; i < indexes.length; i++) {
            index = indexes[i];
            // Cleans rows
            for (let x = 0; x < result[index.y].length; x++) {
                result[index.y][x] = 0;
            }
            // Cleans columns
            for (let y = 0; y < result.length; y++) {
                result[y][index.x] = 0;
            }
        }
        //console.log(result);
        return result;
    }
    assertMatrix('convertMatrix', convertMatrix([[7, 0, 8], [1, 10, 7], [7, 7, 0]]), [[0, 0, 0], [1, 0, 0], [0, 0, 0]]);
    assertMatrix('convertMatrix', convertMatrix([[1, 2, 3], [4, 0, 6], [7, 8, 9]]), [[1, 0, 3], [0, 0, 0], [7, 0, 9]]);
    console.log('\n');

    // 8) Given an image represented by a NxN matrix, write a function that rotate the image by 90 degrees
    function rotate(matrix) {
        let n = matrix.length;
        if (n > 0) {
            // Validates all rows have the same length as matrix
            for (let i = 0; i < n; i++) {
                if (matrix[i].length !== n) {
                    return false;
                }
            }
            // start rotation
            let rotated = [];
            for (let x = 0; x < n; x++) {
                rotated[x] = [];
                for (let y = n - 1; y >= 0; y--) {
                    rotated[x][n - 1 - y] = matrix[y][x];
                }
            }
            //console.log(rotated);
            //return true;
            return rotated;
        }
        return false;
    }

    assert('rotate', rotate([[1, 2], [0]]), false);
    assert('rotate', rotate([[1, 2], [0]]), false);
    assert('rotate', rotate([[1, 2], [0, 0], [1, 2]]), false);
    assert('rotate', rotate([]), false);
    assert('rotate', rotate([], [1, 2]), false);
    assertMatrix('rotateMatrix', rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [[7, 4, 1], [8, 5, 2], [9, 6, 3]]);
    assertMatrix('rotateMatrix', rotate([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]), [[13, 9, 5, 1], [14, 10, 6, 2], [15, 11, 7, 3], [16, 12, 8, 4]]);
    console.log('\n');

// }());


// "use strict";

// var functions = require("../script");


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
