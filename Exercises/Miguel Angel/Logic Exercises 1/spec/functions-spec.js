function isAnagram (str1, str2){
    var res = false;
    var strArre1 = str1.split('');
    var strArre2 = str2.split('');
    var temp = '';
    strArre1 = convertToLowerCase(strArre1);
    strArre2 = convertToLowerCase(strArre2);
    if(str1.length != str2.length){
        res = false;
        return res;
    } else {
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
console.log(isAnagram('amar', 'rrma'));

function convertSpaces(str1){
    var arreStr = str1.split('');
    str1 = '';
    for(var i = 0; i < arreStr.length; i++){
        if(arreStr[i] === ' '){
            arreStr[i] = '%20';
        }
        str1 += arreStr[i];
    }
    return str1;
}

console.log(convertSpaces('hola mundo menespia'));

function rounded (param){
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
    console.log(param.toFixed(2));
    console.log(paramStr);
    paramRes = parseFloat(paramStr);
    return paramRes;
}
console.log(rounded(18.9982));

function getTotal (days){
    var totalAmount = days * 40;
    if(days >= 3 && days < 7){
        totalAmount -= 20;
    } else if(days >= 7){
        totalAmount -= 50;
    }
    return totalAmount;
}
console.log(getTotal(2));
console.log(getTotal(3));
console.log(getTotal(5));
console.log(getTotal(7));
console.log(getTotal(10));

function squareSum(arrNum){
    var squareSum = 0;
    for(var i = 0; i < arrNum.length; i++){
        squareSum += arrNum[i] * arrNum[i];
    }
    return squareSum;
}
console.log(squareSum([1,2,2]));