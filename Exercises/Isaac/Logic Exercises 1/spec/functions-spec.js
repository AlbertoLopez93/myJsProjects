// Exercises Isaac Ramírez. 30/08/2016
(function () {
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

}());