(function () {
    'use strict';

    // 1) Write a function that decides if 2 strings are anagrams or not.
    function isAnagram(str1, str2) {
        let _abc = 'abcdefghijklmnñopqrstuvwxyz'.split("");
        let _ABC = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split("");
        let ABC = {},
            abc = {};
        if ((typeof str1 === 'string' || str1 instanceof String) && (typeof str2 === 'string' || str2 instanceof String)) {

            // Create dictionaries {'A': 'a', 'B': 'b', ...} and {'a': 0, 'b':0, ...}
            for (let i = 0; i < _ABC.length; i++) {
                ABC[_ABC[i]] = _abc[i];
                abc[_abc[i]] = 0;
            }

            // If they have different length, then they are different.
            if (str1.length === str2.length) {
                // Convert to lower case.
                str1 = convertToLower(str1);
                str2 = convertToLower(str2);

                // Count letters from str1
                for (let i = 0; i < str1.length; i++) {
                    abc[str1[i]]++;
                }
                // Subtract letters from str2
                for (let i = 0; i < str2.length; i++) {
                    abc[str2[i]]--;
                }

                // All letters have to have a count of 0 to be the same
                for (let c in abc) {
                    if (abc[c] !== 0) {
                        return false;
                    }
                }
                return true;
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
                if (ABC[char]) {
                    char = ABC[char];
                }
                lower += char;
            }
            return lower;
        }
    }

    // 2) Write a function that replaces all spaces with the string '%20'
    function convertSpaces(str1) {
        if (typeof str1 === 'string' || str1 instanceof String) {
            let str = '';
            for (let i = 0; i < str1.length; i++) {
                str += str1[i] === ' ' ? '%20' : str1[i];
            }
            return str;
        }
        return false;
    }

    // 3) Write a function that formats and rounds a floating-point number to only have 2 decimals.
    function rounded(number) {
        if (typeof number !== 'number' && !(number instanceof Number)) {
            return false;
        }
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
        return Number(result);
    }

    // 4) You will rent a car. Every day you rent the car costs $40. If you rent the car for 3 or more days, 
    // you get $20 off your total. If you rent the car 7 or more days you get $50 off your total. 
    // Wirte a function that gives your the total amount for any given days.
    function getTotal(days) {
        if (typeof days === 'number' || days instanceof Number) {
            if (days < 0 || !Number.isInteger(days)) {
                return false;
            }
            const rentCost = 40;
            let total = days * rentCost;
            if (days >= 7) {
                total -= 50;
            } else if (days >= 3) {
                total -= 20;
            }
            return total;
        }
        return false;
    }

    // 5) Write a function that receives an array of integers and returns the sum of the squares of each number. 
    function squareSum(arg) {
        if (arg instanceof Array) {
            let total = 0;
            for (let i = 0; i < arg.length; i++) {
                total += arg[i] * arg[i];
            }
            return total;
        }
        return false;
    }

    // 6) Assume you have a method 'isSubstring' which checks if one word is a substring of another given word. 
    // Given two strings s1 y s2, write a function that check if s2 is a rotation of s1 using only one call to the isSubstring method.
    function isSubstring(str1, str2) {
        if ((typeof str1 === 'string' || str1 instanceof String) && (typeof str2 === 'string' || str2 instanceof String)) {
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
        }
        return false;
    }

    function isRotation(str1, str2) {
        if ((typeof str1 === 'string' || str1 instanceof String) && (typeof str2 === 'string' || str2 instanceof String)) {
            if (str1.length !== str2.length) {
                return false;
            }
            // Duplicates the size of the string;
            str2 += str2;
            return isSubstring(str2, str1);
        }
        return false;
    }

    // 7) Write a function that receives a matrix M x N, and that returns a new matrix following the next rules:
    // - If any element of the [M][N] matrix is a 0 (zero), then that entire column and row is set to 0 (zero).
    function convertMatrix(matrix) {
        if (matrix instanceof Array) {
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
        return false;
    }

    // 8) Given an image represented by a NxN matrix, write a function that rotate the image by 90 degrees
    function rotate(matrix) {
        if (matrix instanceof Array) {
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
        }
        return false;
    }

    // Tests
    describe("Testing Logic Exercises 1", function () {
        // 1) isAngram
        describe("Testing isAnagram function", function () {
            it("should exists", function () {
                expect(isAnagram).toBeDefined();
            });

            describe("Testing isAngram with invalid inputs", function () {

                it("should NOT work with numbers", function () {
                    expect(isAnagram('a', 1)).toBe(false);
                    expect(isAnagram(1, 'a')).toBe(false);
                    expect(isAnagram(1, 1)).toBe(false);
                });

                it("should NOT work with floating points", function () {
                    expect(isAnagram('a', 1.1)).toBe(false);
                    expect(isAnagram(1.1, 'a')).toBe(false);
                    expect(isAnagram(1.1, 1.1)).toBe(false);
                });

                it("should NOT work with booleans", function () {
                    expect(isAnagram('a', true)).toBe(false);
                    expect(isAnagram(true, 'a')).toBe(false);
                    expect(isAnagram(true, true)).toBe(false);
                });

                it("should NOT work with arrays", function () {
                    expect(isAnagram('a', ['a'])).toBe(false);
                    expect(isAnagram(['a'], 'a')).toBe(false);
                    expect(isAnagram(['a'], ['a'])).toBe(false);
                });

                it("should NOT work with nulls", function () {
                    expect(isAnagram('a', null)).toBe(false);
                    expect(isAnagram(null, 'a')).toBe(false);
                    expect(isAnagram(null, null)).toBe(false);
                });

                it("should NOT work with undefineds", function () {
                    expect(isAnagram('a', undefined)).toBe(false);
                    expect(isAnagram(undefined, 'a')).toBe(false);
                    expect(isAnagram(undefined, undefined)).toBe(false);
                });

                it("should NOT work with objects", function () {
                    expect(isAnagram('a', {
                        'a': 'a'
                    })).toBe(false);
                    expect(isAnagram({
                        'a': 'a'
                    }, 'a')).toBe(false);
                    expect(isAnagram({
                        'a': 'a'
                    }, {
                        'a': 'a'
                    })).toBe(false);
                });

                it("should NOT work with functions", function () {
                    expect(isAnagram('a', function () {})).toBe(false);
                    expect(isAnagram(function () {}, 'a')).toBe(false);
                    expect(isAnagram(function () {}, function () {})).toBe(false);
                });

            });

            describe("Testing isAngram with valid inputs", function () {
                it("should return true", function () {
                    expect(isAnagram('Amor', 'Roma')).toBe(true);
                    expect(isAnagram('Amooooooor', 'oaomoRoooo')).toBe(true);
                });

                it("should return false", function () {
                    expect(isAnagram('Amms', 'Roma')).toBe(false);
                    expect(isAnagram('Limo', 'Roma')).toBe(false);
                });
            });
        });

        // 2) convertSpaces
        describe("Testing convertSpaces function", function () {
            it("should exists", function () {
                expect(convertSpaces).toBeDefined();
            });

            describe("Testing convertSpaces with invalid inputs", function () {

                it("should NOT work with numbers", function () {
                    expect(convertSpaces(1)).toBe(false);
                });

                it("should NOT work with floating points", function () {
                    expect(convertSpaces(1.1)).toBe(false);
                });

                it("should NOT work with booleans", function () {
                    expect(convertSpaces(true)).toBe(false);
                });

                it("should NOT work with arrays", function () {
                    expect(convertSpaces(['a'])).toBe(false);
                });

                it("should NOT work with nulls", function () {
                    expect(convertSpaces(null)).toBe(false);
                });

                it("should NOT work with undefineds", function () {
                    expect(convertSpaces(undefined)).toBe(false);
                });

                it("should NOT work with objects", function () {
                    expect(convertSpaces({
                        'a': 'a'
                    })).toBe(false);
                });

                it("should NOT work with functions", function () {
                    expect(convertSpaces(function () {})).toBe(false);
                });

            });

            describe("Testing convertSpaces with valid inputs", function () {
                it("should convert spaces", function () {
                    expect(convertSpaces('Hola mundo')).toBe('Hola%20mundo');
                    expect(convertSpaces('Hola mundo maravilloso')).toBe('Hola%20mundo%20maravilloso');
                });

                it("should do nothing", function () {
                    expect(convertSpaces('HolaMundo')).toBe('HolaMundo');
                    expect(convertSpaces('Hola-Mundo')).toBe('Hola-Mundo');
                });
            });
        });

        // 3) rounded
        describe("Testing rounded function", function () {
            it("should exists", function () {
                expect(rounded).toBeDefined();
            });

            describe("Testing rounded with invalid inputs", function () {

                it("should NOT work with strings", function () {
                    expect(rounded('1.3666')).toBe(false);
                });

                it("should NOT work with booleans", function () {
                    expect(rounded(true)).toBe(false);
                });

                it("should NOT work with arrays", function () {
                    expect(rounded(['a'])).toBe(false);
                });

                it("should NOT work with nulls", function () {
                    expect(rounded(null)).toBe(false);
                });

                it("should NOT work with undefineds", function () {
                    expect(rounded(undefined)).toBe(false);
                });

                it("should NOT work with objects", function () {
                    expect(rounded({
                        'a': 'a'
                    })).toBe(false);
                });

                it("should NOT work with functions", function () {
                    expect(rounded(function () {})).toBe(false);
                });

            });

            describe("Testing rounded with valid inputs", function () {
                it("should round decimals", function () {
                    expect(rounded(1.5688)).toBe(Number((1.5688).toFixed(2)));
                    expect(rounded(3.9982)).toBe(Number((3.9982).toFixed(2)));
                    expect(rounded(3.3424)).toBe(Number((3.3424).toFixed(2)));
                    expect(rounded(5.5589)).toBe(Number((5.5589).toFixed(2)));
                    expect(rounded(18.9782)).toBe(Number((18.9782).toFixed(2)));
                });
            });
        });

        // 4) getTotal
        describe("Testing getTotal function", function () {
            it("should exists", function () {
                expect(getTotal).toBeDefined();
            });

            describe("Testing getTotal with invalid inputs", function () {

                it("should NOT work with strings", function () {
                    expect(getTotal('1.3666')).toBe(false);
                });

                it("should NOT work with floating points", function () {
                    expect(getTotal(1.3666)).toBe(false);
                });

                it("should NOT work with negative integers", function () {
                    expect(getTotal(-1)).toBe(false);
                });

                it("should NOT work with booleans", function () {
                    expect(getTotal(true)).toBe(false);
                });

                it("should NOT work with arrays", function () {
                    expect(getTotal(['a'])).toBe(false);
                });

                it("should NOT work with nulls", function () {
                    expect(getTotal(null)).toBe(false);
                });

                it("should NOT work with undefineds", function () {
                    expect(getTotal(undefined)).toBe(false);
                });

                it("should NOT work with objects", function () {
                    expect(getTotal({
                        'a': 'a'
                    })).toBe(false);
                });

                it("should NOT work with functions", function () {
                    expect(getTotal(function () {})).toBe(false);
                });

            });

            describe("Testing getTotal with valid inputs", function () {

                it("should calculate total", function () {
                    expect(getTotal(0)).toBe(0);
                    expect(getTotal(1)).toBe(40);
                    expect(getTotal(2)).toBe(80);
                    expect(getTotal(3)).toBe(100);
                    expect(getTotal(4)).toBe(140);
                    expect(getTotal(7)).toBe(230);
                    expect(getTotal(8)).toBe(270);
                    expect(getTotal(10)).toBe(350);
                });
            });
        });

        // 5) squareSum
        describe("Testing squareSum function", function () {
            it("should exists", function () {
                expect(squareSum).toBeDefined();
            });

            describe("Testing squareSum with invalid inputs", function () {

                it("should NOT work with strings", function () {
                    expect(squareSum('1.3666')).toBe(false);
                });

                it("should NOT work with floating points", function () {
                    expect(squareSum(1.3666)).toBe(false);
                });

                it("should NOT work with integers", function () {
                    expect(squareSum(1)).toBe(false);
                });

                it("should NOT work with booleans", function () {
                    expect(squareSum(true)).toBe(false);
                });

                it("should NOT work with nulls", function () {
                    expect(squareSum(null)).toBe(false);
                });

                it("should NOT work with undefineds", function () {
                    expect(squareSum(undefined)).toBe(false);
                });

                it("should NOT work with objects", function () {
                    expect(squareSum({
                        'a': 'a'
                    })).toBe(false);
                });

                it("should NOT work with functions", function () {
                    expect(squareSum(function () {})).toBe(false);
                });

            });

            describe("Testing squareSum with valid inputs: Arrays", function () {
                it("should calculate square sum", function () {
                    expect(squareSum([1, 2, 2])).toBe(9);
                    expect(squareSum([1, 2, 3])).toBe(14);
                });
            });
        });

        // 6) isSubstring
        describe("Testing isSubstring function", function () {
            it("should exists", function () {
                expect(isSubstring).toBeDefined();
            });

            describe("Testing isSubstring with invalid inputs", function () {

                it("should NOT work with one string", function () {
                    expect(isSubstring('1.3666')).toBe(false);
                });

                it("should NOT work with floating points", function () {
                    expect(isSubstring(1.3666, 3.22)).toBe(false);
                });

                it("should NOT work with integers", function () {
                    expect(isSubstring(1, 1)).toBe(false);
                });

                it("should NOT work with arrays", function () {
                    expect(isSubstring(['a'])).toBe(false);
                });

                it("should NOT work with booleans", function () {
                    expect(isSubstring(true, false)).toBe(false);
                });

                it("should NOT work with nulls", function () {
                    expect(isSubstring(null, null)).toBe(false);
                });

                it("should NOT work with undefineds", function () {
                    expect(isSubstring(undefined, undefined)).toBe(false);
                });

                it("should NOT work with objects", function () {
                    expect(isSubstring({
                        'a': 'a'
                    }, {
                        'a': 'a'
                    })).toBe(false);
                });

                it("should NOT work with functions", function () {
                    expect(isSubstring(function () {}, function () {})).toBe(false);
                });

            });

            describe("Testing isSubstring with valid inputs", function () {
                it("should return true", function () {
                    expect(isSubstring('roma', 'ma')).toBe(true);
                    expect(isSubstring('erbottlewaterbottlewat', 'waterbottle')).toBe(true);
                    expect(isSubstring('aslkjdfhlasdhisaackjhlkjhas', 'isaac')).toBe(true);
                    expect(isSubstring('abcdefg', 'd')).toBe(true);
                    expect(isSubstring('a', 'a')).toBe(true);
                });

                it("should return false", function () {
                    expect(isSubstring('nadaquever', 'hola')).toBe(false);
                    expect(isSubstring('nadaholuever', 'hola')).toBe(false);
                    expect(isSubstring('a', 'abcde')).toBe(false);
                });
            });
        });

        // 6) isRotation
        describe("Testing isRotation function", function () {
            it("should exists", function () {
                expect(isRotation).toBeDefined();
            });

            describe("Testing isRotation with invalid inputs", function () {

                it("should NOT work with one string", function () {
                    expect(isRotation('asddds')).toBe(false);
                });

                it("should NOT work with floating points", function () {
                    expect(isRotation(1.3666, 3.22)).toBe(false);
                });

                it("should NOT work with integers", function () {
                    expect(isRotation(1, 1)).toBe(false);
                });

                it("should NOT work with arrays", function () {
                    expect(isRotation(['a'], ['a'])).toBe(false);
                });

                it("should NOT work with booleans", function () {
                    expect(isRotation(true, false)).toBe(false);
                });

                it("should NOT work with nulls", function () {
                    expect(isRotation(null, null)).toBe(false);
                });

                it("should NOT work with undefineds", function () {
                    expect(isRotation(undefined, undefined)).toBe(false);
                });

                it("should NOT work with objects", function () {
                    expect(isRotation({
                        'a': 'a'
                    }, {
                        'a': 'a'
                    })).toBe(false);
                });

                it("should NOT work with functions", function () {
                    expect(isRotation(function () {}, function () {})).toBe(false);
                });

            });

            describe("Testing isRotation with valid inputs: 2 strings", function () {

                it("should return true", function () {
                    expect(isRotation('waterbottle', 'erbottlewat')).toBe(true);
                    expect(isRotation('pikachu', 'achupik')).toBe(true);
                });

                it("should return false", function () {
                    expect(isRotation('pikachu', 'achuppik')).toBe(false);
                    expect(isRotation('pokemon', 'mompoke')).toBe(false);
                });
            });
        });

        // 7) convertMatrix
        describe("Testing convertMatrix function", function () {
            it("should exists", function () {
                expect(convertMatrix).toBeDefined();
            });

            describe("Testing convertMatrix with invalid inputs", function () {

                it("should NOT work with one string", function () {
                    expect(convertMatrix('asddds')).toBe(false);
                });

                it("should NOT work with floating points", function () {
                    expect(convertMatrix(1.3666)).toBe(false);
                });

                it("should NOT work with integers", function () {
                    expect(convertMatrix(1)).toBe(false);
                });

                it("should NOT work with booleans", function () {
                    expect(convertMatrix(true)).toBe(false);
                });

                it("should NOT work with nulls", function () {
                    expect(convertMatrix(null)).toBe(false);
                });

                it("should NOT work with undefineds", function () {
                    expect(convertMatrix(undefined)).toBe(false);
                });

                it("should NOT work with objects", function () {
                    expect(convertMatrix({
                        'a': 'a'
                    })).toBe(false);
                });

                it("should NOT work with functions", function () {
                    expect(convertMatrix(function () {})).toBe(false);
                });

            });

            describe("Testing convertMatrix with valid inputs", function () {

                it("should convert the matrix", function () {
                    expect(convertMatrix([[7, 0, 8], [1, 10, 7], [7, 7, 0]])).toEqual([[0, 0, 0], [1, 0, 0], [0, 0, 0]]);
                    expect(convertMatrix([[1, 2, 3], [4, 0, 6], [7, 8, 9]])).toEqual([[1, 0, 3], [0, 0, 0], [7, 0, 9]]);
                });
            });
        });

        // 8) rotate
        describe("Testing rotate function", function () {
            it("should exists", function () {
                expect(rotate).toBeDefined();
            });

            describe("Testing rotate with invalid inputs", function () {

                it("should NOT work with one string", function () {
                    expect(rotate('asddds')).toBe(false);
                });

                it("should NOT work with floating points", function () {
                    expect(rotate(1.3666)).toBe(false);
                });

                it("should NOT work with integers", function () {
                    expect(rotate(1)).toBe(false);
                });

                it("should NOT work with booleans", function () {
                    expect(rotate(true)).toBe(false);
                });

                it("should NOT work with nulls", function () {
                    expect(rotate(null)).toBe(false);
                });

                it("should NOT work with undefineds", function () {
                    expect(rotate(undefined)).toBe(false);
                });

                it("should NOT work with objects", function () {
                    expect(rotate({
                        'a': 'a'
                    })).toBe(false);
                });

                it("should NOT work with functions", function () {
                    expect(rotate(function () {})).toBe(false);
                });

            });

            describe("Testing rotate with valid inputs", function () {

                it("should return false", function () {
                    expect(rotate([[1, 2], [0]])).toBe(false);
                    expect(rotate([[1, 2], [0, 0], [1, 2]])).toBe(false);
                    expect(rotate([])).toBe(false);
                    expect(rotate([], [1, 2])).toBe(false);
                });

                it("should rotate the matrix", function () {
                    expect(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual([[7, 4, 1], [8, 5, 2], [9, 6, 3]]);
                    expect(rotate([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]])).toEqual([[13, 9, 5, 1], [14, 10, 6, 2], [15, 11, 7, 3], [16, 12, 8, 4]]);
                });
            });
        });
    });
}());