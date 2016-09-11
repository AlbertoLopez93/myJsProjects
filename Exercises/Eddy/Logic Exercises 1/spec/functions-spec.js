/**
 * Created by EDDY on 30/08/2016.
 */
// #1 WRITE A FUNCTION THAT DCIDE IF 2 STRINGS ARE ANAGRAMS OR NOT
console.log (isAnagram ("chololonchon", "lonchoncholo"));
function isAnagram (strOne, strTwo) {
    var isAnagram = false;
    var listTwo = [];

    if (strOne.length === strTwo.length) {
        strOne = strOne.split ("");
        strOne = atoA (strOne);
        for (var i = 0; i < strOne.length; i++) {
        }
        strTwo = strTwo.split ("");
        strTwo = atoA (strTwo);
        for (var i = 0; i < strOne.length; i++) {
            for (var j = 0; j < strOne.length; j++) {
                if (strOne[i] === strTwo[j]) {
                    listTwo[i] = strTwo[j];
                }
            }
            if (listTwo.join (',') == strOne.join (',')) {
                isAnagram = true
            }
            
        }
        return isAnagram;
    }
}
function atoA (param) {
    var result = [];
    for (var i = 0; i < param.length; i++) {
        switch (true) {
            case param[i] == 'A':
                result[i] = 'a';
                break;
            case param[i] == 'B':
                result[i] = 'b';
                break;
            case param[i] == 'C':
                result[i] = 'c';
                break;
            case param[i] == 'D':
                result[i] = 'd';
                break;
            case param[i] == 'E':
                result[i] = 'e';
                break;
            case param[i] == 'F':
                result[i] = 'f';
                break;
            case param[i] == 'G':
                result[i] = 'g';
                break;
            case param[i] == 'H':
                result[i] = 'h';
                break;
            case param[i] == 'I':
                result[i] = 'i';
                break;
            case param[i] == 'J':
                result[i] = 'j';
                break;
            case param[i] == 'K':
                result[i] = 'k';
                break;
            case param[i] == 'L':
                result[i] = 'l';
                break;
            case param[i] == 'M':
                result[i] = 'm';
                break;
            case param[i] == 'N':
                result[i] = 'n';
                break;
            case param[i] == 'O':
                result[i] = 'o';
                break;
            case param[i] == 'P':
                result[i] = 'p';
                break;
            case param[i] == 'R':
                result[i] = 'r';
                break;
            case param[i] == 'S':
                result[i] = 's';
                break;
            case param[i] == 'T':
                result[i] = 't';
                break;
            case param[i] == 'U':
                result[i] = 'u';
                break;
            case param[i] == 'V':
                result[i] = 'v';
                break;
            case param[i] == 'W':
                result[i] = 'w';
                break;
            case param[i] == 'X':
                result[i] = 'x';
                break;
            case param[i] == 'Y':
                result[i] = 'y';
                break;
            case param[i] == 'Z':
                result[i] = 'z';
                break;
            case param[i] == 'Ñ':
                result[i] = 'ñ';
                break;
            default:
                result[i] = param[i];
        }
    }
    return result;
}

/**
 * Created by EDDY on 30/08/2016.
 */
//# 2 WRITE A FUNCTION THAT REPLACE ALL SPACES WITH THE STRING '%20'

console.log (convertSpaces ("hola mundo como estas ?"));
function convertSpaces (param) {
    var result = '';
    for (var i = 0; i < param.length; i++) {

        if (param[i] == ' ') {
            result += '%20';
            i++;
        }
        result += param[i];
    }
    return result;
}

/**
 * Created by EDDY on 30/08/2016.
 */
//#4 YOU WILL RENT A CAR EVERYDAY YOU RENT THE CAR COST $40 IF YOU RENT THE CAR FOR THREE OR MORE DAY YOU GET $20 OFF
// YOUR TOTAL IF YOU RENT A CAR FOR 7 OR MORE DAYS UOY GET A 50% OFF YOUR TOTAL WRITE A  FUNCTION THAT GIVES YOU THE
// TOTAL AMOUNT FOR ANY GIVEN DAY

console.log (getTotatl (6));
function getTotatl (param) {
    var result = 0;
    if (param <= 3 && param > 0) {
        result = param * 40;
    }

    if (param > 3 && param < 7) {
        result = (param * 40) - 20;
    }
    if (param >= 7) {
        result = (param * 40 * .50) - 20;
    }
    return result;
}

/**
 * Created by EDDY on 30/08/2016.
 */
//#5 WRITE A FUNCTION THAT RECEIVES AN ARRAY OF INTEGERS  AND RETURNS THE SUM  OF THE SQUARES OF EACH NUMBER
console.log (squareSum ([1, 2, 2, 1]))
function squareSum (param) {
    var result = 0;
    for (var i = 0; i < param.length; i++) {
        result += (param[i] * param[i])
    }
    return result;
}