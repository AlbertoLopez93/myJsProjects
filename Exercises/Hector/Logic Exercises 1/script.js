"use strict";

function isAnagram(str1, str2){
    var x = [], y = [];
    x = str1.split("");
    y = str2.split("");

    
    if(str1.length !== str2.length){
        return false;
    }

    x = toNum(x);  
    y = toNum(y);
    x = bubble(x);
    y = bubble(y);

    for(let i=0; i<x.length;i++){
        if(x[i]!==y[i]){
            return false;
        }
    }
    return true;
}

function bubble(x){
    var inter;
    do {
        inter = false;
        for (var i=0; i < x.length-1; i++) {
            if (x[i] > x[i+1]) {
                var temp = x[i];
                x[i] = x[i+1];
                x[i+1] = temp;
                inter = true;
            }
        }
    } while (inter);

    return x;
}

function toNum(x){
    for(let i=0; i<x.length; i++){
        switch (x[i]){
            case 'A':
            case 'a':
                x[i] = 1;
                break;
            case 'B':
            case 'b':
                x[i] = 2;
                break;
            case 'C':
            case 'c':
                x[i] = 3;
                break;
            case 'D':
            case 'd':
                x[i] = 4;
                break;
            case 'E': 
            case 'e':
                x[i] = 5;
                break;
            case 'F':
            case 'f':
                x[i] = 6;
                break;
            case 'G':
            case 'g':
                x[i] = 7;
                break;
            case 'H':
            case 'h':
                x[i] = 8;
                break;
            case 'I':
            case 'i':
                x[i] = 9;
                break;
            case 'J':
            case 'j':
                x[i] = 10;
                break;
            case 'K':
            case 'k':
                x[i] = 11;
                break;
            case 'L':
            case 'l':
                x[i] = 12;
                break;
            case 'M':
            case 'm':
                x[i] = 13;
                break;
            case 'N':
            case 'n':
                x[i] = 14;
                break;
            case 'Ñ':
            case 'ñ':
                x[i] = 15;
                break;
            case 'O':
            case 'o':
                x[i] = 16;
                break;
            case 'P':
            case 'p':
                x[i] = 17;
                break;
            case 'Q':
            case 'q':
                x[i] = 18;
                break;
            case 'R': 
            case 'r':
                x[i] = 19;
                break;
            case 'S':
            case 's':
                x[i] = 20;
                break;
            case 'T':
            case 't':
                x[i] = 21;
                break;
            case 'U':
            case 'u':
                x[i] = 22;
                break;
            case 'V':
            case 'v':
                x[i] = 23;
                break;
            case 'W':
            case 'w':
                x[i] = 24;
                break;
            case 'X':
            case 'x':
                x[i] = 25;
                break;
            case 'Y':
            case 'y':
                x[i] = 26;
                break;
            case 'Z':
            case 'z':
                x[i] = 27;
                break;
            default:
                break;
        }
    }
    return x;
}

function convertSpaces(str){
    var s;
    s = str.split("");
    for(let i=0; i<s.length-1; i++){
        if(s[i] === " "){
            s[i] = "%20";
        }
    }
    var res = "";
    for(let i=0; i<s.length; i++){
        res += s[i];
    }   
    return res;
}

function rounded(num){
    num = num.toString();
    var n = num.split("");
    var max = n.length;
    var point = 0;
    var nueva = []; 
    var last;
    var number = "";
    var res = 0;

    for(let i=0; i<max; i++){
        if(n[i]=== "."){
            point = i;
        }
    }

    for(let i=0; i<point+4; i++){
        nueva[i] = n[i]; 
    }

    last = nueva[nueva.length-1];
    if(last >= 5){
        for(let i=0; i<nueva.length; i++){
            number += nueva[i];
        }
        last = 10 - last;
        last = ".00" + last;
        res = Number(number) + Number(last);
        if(res.length===3){
            res += "0";
        }
        if(res%1===0){
            res += ".00"
        }
        return res;
    }else{
        for(let i=0; i<nueva.length-1; i++){
            number += nueva[i];
        }

        return number;
    }   
}

function getTotal(days){
    var total = days * 40;
    if(days >= 3 && days < 7){
        total -= 20;
    }
    if(days >= 7){
        total -= 50;
    }

    return total;
}

function squareSum(ary){
    var x = [];
    x = ary;
    var total = 0;
    var sum = 0;
    for(let i=0; i<x.length; i++){
        sum = ary[i] * ary[i];
        total += sum;
    }
    return total;
}

function isRotation() {}

function convertMatrix() {}

function rotate() {}

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
