"use strict";
/**
 * Created by EDDY on 07/09/2016.
 */
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#1 isAnagram start
function isAnagram (strOne, strTwo) {
    var res = true;
    if ((typeof strOne === 'string' || strOne instanceof String) && (typeof strTwo === 'string' || strTwo instanceof String)) {
        if (strOne.length != strTwo.length) {
            res = false;
            return res;
        }
        strOne = strOne.split ('');
        strTwo = strTwo.split ('');
        var temp = '';
        strOne = convertToLowerCase (strOne);
        strTwo = convertToLowerCase (strTwo);
        for (var i = 0; i < strOne.length; i++) {
            for (var j = 0; j < strOne.length; j++) {
                if (strOne[j] > strOne[j + 1]) {
                    temp = strOne[j];
                    strOne[j] = strOne[j + 1];
                    strOne[j + 1] = temp;
                }
                if (strTwo[j] > strTwo[j + 1]) {
                    temp = strTwo[j];
                    strTwo[j] = strTwo[j + 1];
                    strTwo[j + 1] = temp;
                }
            }
        }
        for (var j = 0; j < strOne.length; j++) {
            if (strOne[j] !== strTwo[j]) {
                res = false;
            }
        }
    } else {
        res = false;
        return res;
    }
    return res;
}

function convertToLowerCase (str) {
    for (var i = 0; i < str.length; i++) {
        switch (true) {
            case str[i] == 'A' :
                str[i] = 'a';
                break;
            case str[i] === 'B' :
                str[i] = 'b';
                break;
            case str[i] === 'C' :
                str[i] = 'c';
                break;
            case str[i] === 'D' :
                str[i] = 'd';
                break;
            case str[i] === 'E' :
                str[i] = 'e';
                break;
            case str[i] === 'F' :
                str[i] = 'f';
                break;
            case str[i] === 'G' :
                str[i] = 'g';
                break;
            case str[i] === 'H' :
                str[i] = 'h';
                break;
            case str[i] === 'I' :
                str[i] = 'i';
                break;
            case str[i] === 'J' :
                str[i] = 'j';
                break;
            case str[i] === 'K' :
                str[i] = 'k';
                break;
            case str[i] === 'L' :
                str[i] = 'l';
                break;
            case str[i] === 'M' :
                str[i] = 'm';
                break;
            case str[i] === 'N' :
                str[i] = 'n';
                break;
            case str[i] === 'Ñ' :
                str[i] = 'ñ';
                break;
            case str[i] === 'O' :
                str[i] = 'o';
                break;
            case str[i] === 'P' :
                str[i] = 'p';
                break;
            case str[i] === 'Q' :
                str[i] = 'q';
                break;
            case str[i] === 'R' :
                str[i] = 'r';
                break;
            case str[i] === 'S' :
                str[i] = 's';
                break;
            case str[i] === 'T' :
                str[i] = 't';
                break;
            case str[i] === 'U' :
                str[i] = 'u';
                break;
            case str[i] === 'V' :
                str[i] = 'v';
                break;
            case str[i] === 'W' :
                str[i] = 'w';
                break;
            case str[i] === 'X' :
                str[i] = 'x';
                break;
            case str[i] === 'Y' :
                str[i] = 'y';
                break;
            case str[i] === 'Z' :
                str[i] = 'z';
                break;
            default:
        }
    }
    return str;
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#1 isAnagram end
//
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#2 convertSpaces start
function convertSpaces (param) {
    var result = false;
    if (param) {
        if (typeof param === 'string' || param instanceof String === true) {

            result = '';
            for (var i = 0; i < param.length; i++) {

                if (param[i] == ' ') {
                    result += '%20';
                    i++;
                }
                result += param[i];
            }
        }
    }
    return result;
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#2 convertSpaces end
//
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#3 rounded start
function rounded (param) {
    var numberString = false;
    if (param && param instanceof Array !== true) {
        if (!isNaN (param)) {
            if (typeof parseFloat (param) === 'number' || param instanceof Number === true) {
                param = param.toString ();
                if (typeof param === 'string' || param instanceof String === true) {
                    var numberCopy = param.split ('.');
                    numberCopy[1] = numberCopy[1].split ('');
                    numberCopy[1].length = 3;
                    for (var i = numberCopy[1].length - 1; i > 1; i--) {
                        if (numberCopy[1][i] >= 5) {
                            numberCopy[1][i - 1] = Number (numberCopy[1][i - 1]) + Number (1);
                            numberCopy[1].length = numberCopy[1].length - 1;
                        }
                        if (numberCopy[1][i] < 5) {
                            numberCopy[1][i] = Number (0);
                            numberCopy[1].length = numberCopy[1].length - 1;
                        }
                        numberString = numberCopy[0].toString () + '.';
                        for (var j = 0; j < numberCopy[1].length; j++) {
                            numberString += numberCopy[1][j];
                        }
                    }
                }
                numberString = parseFloat (numberString);
            }
        }
    }
    return numberString;
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#3 rounded end
//
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++#4 getTotal start
function getTotal (param) {
    var result = false;
    if (param && param instanceof Array !== true) {
        if (!isNaN (param)) {
            if (typeof parseFloat (param) === 'number' || param instanceof Number === true) {
                result = 0;
                if (param <= 3 && param > 0) {
                    result = param * 40;
                }
                if (param > 3 && param < 7) {
                    result = (param * 40) - 20;
                }
                if (param >= 7) {
                    result = param * 40 - 50;
                }
            }
            result = parseFloat (result);
        }
    }
    return result;
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++#4 getTotal end
//
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++#5 squareSum start
function squareSum (param) {
    if (param instanceof Array) {
        for (var i = 0; i < param.length; i++) {
            if (isNaN (param[i]) || typeof param[i] !== 'number') {
                return false;
            }
        }
        var restult = 0;
        for (var j = 0; j < param.length; j++) {
            restult += param[j] * param[j];
        }
        return restult;
    }
    return false;
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++#5 squareSum end
//
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#6 isRotation start
function isSubstring (strOne, strTwo) {
    if (strOne && strTwo) {
        if (typeof strOne === 'string' || strOne instanceof String === true) {
            if (typeof strTwo === 'string' || strTwo instanceof String === true) {
                var potato = false;
                var lenOne = strOne.length;
                var lenTwo = strTwo.length;
                if (lenOne > lenTwo) {
                    for (var i = 0; i <= lenOne - lenTwo; i++) {
                        var search = '';
                        for (var j = i; j < i + lenTwo && j < lenOne && i + lenTwo <= lenOne; j++) {
                            search += strOne[j];
                        }
                        if (search === strTwo) {
                            potato = true;
                            break
                        }
                    }
                }
                return potato;
            }
        }
    }
}

function isRotation (strOne, strTwo) {
    if (strOne && strTwo) {
        if (typeof strOne === 'string' || strOne instanceof String === true) {
            if (typeof strTwo === 'string' || strTwo instanceof String === true) {
                if (strOne.length === strTwo.length) {
                    strOne += strOne;
                    if (isSubstring (strOne, strTwo)) {
                        return true;
                    }
                    return false;
                }
            }
        }
    }

    return false;
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#6 isRotation end
//
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++#7 convertMatrix start
function convertMatrix(param){
    if(param instanceof Array){
        var indexA = [];
        var indexB = [];
        var result = param;
        for(var i = 0; i < param.length; i++){
            if(Array.isArray(param[i])){
                for(var j = 0; j < param[i].length; j++){
                    if(param[i][j] === 0){
                        indexA[indexA.length] = i;
                        indexB[indexB.length] = j;
                    }
                }
            } else {
                return false;
            }
        }
        for(i = 0; i < indexA.length; i++){
            for(j = 0; j < result[i].length; j++){
                result[indexA[i]][j] = 0;
                for(var k = 0; k < result.length; k++){
                    result[k][indexB[i]] = 0;
                }
            }
        }
    } else {
        return false;
    }
    return result;
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++#7 convertMatrix end
//
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++#8 rotate start
function rotate (param) {
    if (param instanceof Array) {
        var paLen = param.length;
        if (paLen > 0) {
            for (var i = 0; i < paLen; i++) {
                if (param[i].length !== paLen) {
                    return false;
                }
            }
            var rotated = [];
            for (var x = 0; x < paLen; x++) {
                rotated[x] = [];
                for (var y = paLen - 1; y >= 0; y--) {
                    rotated[x][paLen - 1 - y] = param[y][x];
                }
            }
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
