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

module.exports = {
    isAnagram: isAnagram,
    convertSpaces: convertSpaces,
    rounded: rounded
};
