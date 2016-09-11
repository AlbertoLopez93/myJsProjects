"use strict";

let lowerCaseDict = {
    A: "a",
    B: "b",
    C: "c",
    D: "d",
    E: "e",
    F: "f",
    G: "g",
    H: "h",
    I: "i",
    J: "j",
    K: "k",
    L: "l",
    M: "m",
    N: "n",
    Ñ: "ñ",
    O: "o",
    P: "p",
    Q: "q",
    R: "r",
    S: "s",
    T: "t",
    U: "u",
    V: "v",
    W: "w",
    X: "x",
    Y: "y",
    Z: "z"
};

// Write a method to decide if two strings are anagrams or not.
function isAnagram(str1, str2) {
    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
        return false;
    }
    if (str1.length !== str2.length) {
        return false;
    }

    str1 = str1.toLowerCase().split("").sort().join("");
    str2 = str2.toLowerCase().split("").sort().join("");

    if (str1[0] === " " || str2[0] === " ") {
        return false;
    }

    if (str1 !== str2) {
        return false;
    }

    return true;
}

// Write a method to replace all spaces in a string with '%20'.
function convertSpaces(str) {
    if (typeof str !== 'string') {
        return false;
    }
    return str.replace(/ /g, "%20");
}

// Write a method to round up number up to 2 decimals
function rounded(number) {
    if (typeof number !== 'number') {
        return false;
    }

    if (isNaN(number)) {
        return false;
    }

    if (number === Infinity) {
        return Infinity;
    }

    if (number === -Infinity) {
        return -Infinity;
    }

    let numberAsString = number + "";
    let numberAsArray = numberAsString.split(".")
    let digitsAsString = numberAsArray[0];
    let decimalsAsString = numberAsArray[1];
    let result = 0;

    if (decimalsAsString === undefined || decimalsAsString.length < 3) {
        return number;
    }

    if (decimalsAsString[2] >= 5) {
        result = parseFloat([digitsAsString, decimalsAsString.slice(0, 2)].join("."));
        if (number > 0) {
            result = result + 0.01;
        } else {
            result = result - 0.01;
        }
    } else {
        result = parseFloat([digitsAsString, decimalsAsString.slice(0, 2)].join("."));
    }
    return result;
}

// Write a method that get the total price for a rent car
function getTotal(days) {
    let quotePerDay = 40;

    if (typeof days !== 'number') {
        return false;
    }

    if (isNaN(days)) {
        return false;
    }

    if (days === -Infinity) {
        return false;
    }

    if (days === Infinity) {
        return Infinity;
    }

    if (days < 0) {
        return false;
    }

    let daysAsString = days + "";
    let daysAsArray = daysAsString.split(".");
    let digitsAsString = daysAsArray[0];
    let decimalsAsString = daysAsArray[1];

    if (parseInt(decimalsAsString, 10) > 0) {
        return false;
    }

    let subtotal = days * quotePerDay;
    let total;
    if (days >= 7) {
        total = subtotal - 50;
    } else if (days >= 3) {
        total = subtotal -20;
    } else {
        total = subtotal;
    }

    return total;
}

// Write a function that return the sum of the squares of all elements
function squareSum(ary) {
    if (!Array.isArray(ary)) {
        return false;
    }

    let result = ary.reduce( function(prev, current) {
        return prev + (current * current);
    }, 0);

    if (isNaN(result)) {
        return false;
    }

    if (result === Infinity) {
        return Infinity;
    }

    if (parseInt(result, 10) !== result) {
        return false;
    }

    return result;
}

module.exports = {
    isAnagram: isAnagram,
    convertSpaces: convertSpaces,
    rounded: rounded,
    getTotal: getTotal,
    squareSum: squareSum
};
