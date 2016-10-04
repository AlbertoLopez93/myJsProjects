"use strict"
function isAnagram (str1, str2){
    var res = true;
    if ((typeof str1 === 'string' || (str1 instanceof String)) && (typeof str2 === 'string' || (str2 instanceof String))){
        if(str1.length != str2.length){
            res = false;
            return res;
        }
        var strArre1 = str1.split('');
        var strArre2 = str2.split('');
        var temp = '';
        strArre1 = convertToLowerCase(strArre1);
        strArre2 = convertToLowerCase(strArre2);
        for(var i = 0; i < strArre1.length; i++){
            for(var j = 0; j < strArre1.length; j++){
                if(strArre1[j] > strArre1[j+1]){
                    temp = strArre1[j];
                    strArre1[j] = strArre1[j+1];
                    strArre1[j+1] = temp;
                }
                if(strArre2[j] > strArre2[j+1]){
                    temp = strArre2[j];
                    strArre2[j] = strArre2[j+1];
                    strArre2[j+1] = temp;
                }
            }
        }
        for(var i = 0; i < strArre1.length; i++){
            if(strArre1[i] !== strArre2[i]){
                res = false;
            }
        }
    } else {
        res = false;
        return res;
    }
    return res;
}

function convertToLowerCase (str){
    for(var i = 0; i < str.length; i++){
        switch(true){
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

function convertSpaces(str){
    if ((typeof str === 'string' || (str instanceof String))){
        var arreStr = str.split('');
        str = '';
        for(var i = 0; i < arreStr.length; i++){
            if(arreStr[i] === ' '){
                arreStr[i] = '%20';
            }
            str += arreStr[i];
        }
    } else {
        return false;
    }
    return str;
}

function rounded (param){
    if(typeof param === 'number' || param instanceof Number){
        if(param === Infinity){
            return Infinity;
        }
        if(param === -Infinity){
            return -Infinity;
        }
        var paramStr = param + '';
        var paramAry = paramStr.split('.');
        var acum = 0;
        var paramRes = 0;
        paramStr = '';
        for(var i = 0; i < paramAry.length; i++){
            paramAry[i] = paramAry[i].split('');
        }
        for(var i = paramAry[1].length-1; i > 1 ; i--){
            paramAry[1][i] = paramAry[1][i] * 1 + acum;
            if(paramAry[1][i] >= 5){
                paramAry[1][i] = 0;
                acum = 1;
            } else {
                acum = 0;
            }
            if(i === 2 && acum > 0){
                paramAry[1][i-1] = paramAry[1][i-1] * 1 + acum;
                acum = 0;
                if(paramAry[1][i-1] === 10){
                    paramAry[1][i-1] = 0;
                    acum = 1;
                    paramAry[1][i-2] = paramAry[1][i-2] * 1 + acum;
                    if(paramAry[1][i-2] === 10){
                        paramAry[1][i-2] = 0;
                        acum = 1;
                    } else {
                        acum = 0;
                    }
                }
            }
        }
        paramAry[0][paramAry.length-1] = paramAry[0][paramAry.length-1] * 1 + acum;
        for(var i = 0; i < paramAry.length; i++){
            for(var j = 0; j < paramAry[i].length; j++){
                if(i > 0 && j > 1){
                    break;
                }
                paramStr += paramAry[i][j] + '';
            }
            if(i > 0){
                    break;
                }
            paramStr += '.';
        }
    } else {
        return false;
    }
    paramRes = parseFloat(paramStr);
    return paramRes;
}

function getTotal (days){
    if((typeof days === 'number' && Number.isInteger(days)) || days instanceof Number){
        var totalAmount = days * 40;
        if(days >= 3 && days < 7){
            totalAmount -= 20;
        } else if(days >= 7){
            totalAmount -= 50;
        }
    } else {
        return false;
    }
    return totalAmount;
}


function squareSum(arrNum){
    if(Array.isArray(arrNum)){
        if(arrNum.length < 1){
            return undefined;
        }
        var squareSum = 0;
        for(var i = 0; i < arrNum.length; i++){
            if(typeof arrNum[i] === 'number' || arrNum[i] instanceof Number){
                if(arrNum[i] === Infinity){
                    return Infinity;
                }
                if(arrNum[i] === -Infinity){
                    return -Infinity;
                }
                squareSum += arrNum[i] * arrNum[i];
            } else {
                return NaN;
            }
        }
    } else {
        return false;
    }
    return squareSum;
}

function isSubstring (str1, str2) {
    var flag = false;
    if (str1.length > str2.length) {
        for (var i = 0; i <= str1.length - str2.length; i++) {
            var res = '';
            for (var j = i; j < i + str2.length && j < str1.length && i + str2.length <= str1.length; j++) {
                res += str1[j];
            }
            if (res === str2) {
                flag = true;
                break;
            }
        }
    }
    return flag;
}

function isRotation (str1, str2) {
    if((typeof str1 === 'string' || str1 instanceof String) && (typeof str2 === 'string' || str2 instanceof String)){
        var flag = false;
        if (str1.length === str2.length) {
            str1 += str1;
            if (isSubstring (str1, str2)) {
                flag = true
                return flag;
            } else {
                return flag;
            }
        }
        return flag;
    } else {
        return false;
    }
}

function convertMatrix(matrix){
    if(Array.isArray(matrix)){
        var indexA = [];
        var indexB = [];
        var matRes = matrix;
        for(let i = 0; i < matrix.length; i++){
            if(Array.isArray(matrix[i])){
                for(let j = 0; j < matrix[i].length; j++){
                    if(matrix[i][j] === 0){
                        indexA[indexA.length] = i;
                        indexB[indexB.length] = j;
                    }
                }
            } else {
                return false;
            }
        }
        for(let i = 0; i < indexA.length; i++){
            for(let j = 0; j < matRes[i].length; j++){
                    matRes[indexA[i]][j] = 0;
                for(let k = 0; k < matRes.length; k++){
                    matRes[k][indexB[i]] = 0;
                }
            }
        }
    } else {
        return false;
    }
    return matRes;
}

function rotate (matrix){
    if(Array.isArray(matrix)){
        var str = [];
        var matRes = [];
        for(let i = 0; i < matrix.length; i++){
            if(matrix[i] === undefined || matrix[i] === null){
                return false;
            }
            if((matrix.length !== matrix[i].length)){
                return false;
            }
        }
        for(let i = 0; i < matrix.length; i++){
            matRes[i] = [];
            if(Array.isArray(matrix[i])){
                var indexA = i * (matrix.length);
                for(let j = matrix.length-1; j >= 0; j--){
                    str[indexA] = matrix[j][i];
                    indexA++;
                }
            } else {
                return false;
            }
        }
        for(let i = 0; i < matrix.length; i++){
            matRes[i] = [];
            for(let j = 0; j < matrix.length; j++){
                matRes[i][j] = str[j+(i*matrix.length)]; 
            }
        }
    } else {
        return false;
    }
    return matRes;
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
