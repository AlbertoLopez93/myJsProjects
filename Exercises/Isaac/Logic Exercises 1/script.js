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

module.exports = {
    isAnagram: isAnagram,
    convertSpaces: convertSpaces,
    rounded: rounded,
    getTotal: getTotal,
    squareSum: squareSum,
    isRotation: isRotation,
    convertMatrix: convertMatrix,
    rotate: rotate
};
