//1) Write a function that decides 2 strings are anagras or not
// example Amor Roma
// //function isAnagram(str1, str2){
//  return true ||| false
// }
"use strict"
console.log("\n\nEX 1 ***************************************************************************************");
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

console.log(isAnagram("amor", "roma"));

function bubble(x)
{
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


console.log("\n\nEX 2********************************************************************************************");
//write a function that replaces all spaces with the string '%20'

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
convertSpaces("Hola      Mundo!");


console.log("\n\nEX 3*******************************************************************************************");
//write a function that format and round a floating-point number to only have 2 decimals
//function rounded(5.55555){
//  return ?;
//}

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
rounded(0.994);




console.log("\n\nEX 4******************************************************************************************");
/*You will rent a car. Every day you rent the car cost $4.
if you rent the car for 3 or more days, you get $20 off your total.
If you rent the car 7 or more days you get $50 off your total 
Write a function that gives you the total amount for any given days*/

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
getTotal(10);

console.log("\n\nEX 5*****************************************************************\n\n");
/* white a function that receives an array of integers and return the sum of the 
squares of each number

function squareSum(ary){
    return ?;
} 
squareSum([1,2,2]); // 9
*/

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
squareSum([1,2,2]);

// "use strict";

// var functions = require("../script");


describe("Testing Logic Exercises 1", function () {
    describe("isAnagram function", function () {
        // var isAnagram = functions.isAnagram;

        it("should be defined", function () {
            expect(isAnagram).toBeDefined();
        });
        it("should not work against arrays", function () {
            expect(isAnagram([], [])).toBe(false);
        });
        it("should not work against functions", function () {
            expect(isAnagram(function(){}, function(){})).toBe(false);
        });
        it("should not work against numbers", function () {
            expect(isAnagram(1,3)).toBe(false);
            expect(isAnagram(1.2,3.3)).toBe(false);
            expect(isAnagram(Infinity,Infinity)).toBe(false);
            expect(isAnagram(NaN,NaN)).toBe(false);
        });
        it("should not work against object", function () {
            expect(isAnagram({}, {})).toBe(false);
        });
        it("should not work against regex", function () {
            expect(isAnagram(/abc/, /abc/)).toBe(false);
        });
        it("should not work against booleans", function () {
            expect(isAnagram(true, true)).toBe(false);
        });
        it("should not work against nulls or undefined", function () {
            expect(isAnagram(null, null)).toBe(false);
            expect(isAnagram(undefined, undefined)).toBe(false);
        });
        it("should not work if there are spaces between any of the strings", function () {
            expect(isAnagram("hola mundo", "hola mundo")).toBe(false);
        })
        it("should return false for 2 strings with different lengths", function () {
            expect(isAnagram("hola", "mundo")).toBe(false);
        });
        it("should return false for 2 strings with equal lengths that are not anagrams", function () {
            expect(isAnagram("abcd", "efgh")).toBe(false);
        });
        it("should return true for 2 strings with equal lengths that are anagrams", function () {
            expect(isAnagram("roma", "amor")).toBe(true);
        });
        it("should return true for 2 strings that are the same", function () {
            expect(isAnagram("roma", "roma")).toBe(true);
        });
    });

    describe("convertSpaces function", function () {
        // var convertSpaces = functions.convertSpaces;

        it("should be defined", function () {
            expect(convertSpaces).toBeDefined();
        });
        it("should not work against arrays", function () {
            expect(convertSpaces([], [])).toBe(false);
        });
        it("should not work against functions", function () {
            expect(convertSpaces(function(){}, function(){})).toBe(false);
        });
        it("should not work against numbers", function () {
            expect(convertSpaces(1,3)).toBe(false);
            expect(convertSpaces(1.2,3.3)).toBe(false);
            expect(convertSpaces(Infinity,Infinity)).toBe(false);
            expect(convertSpaces(NaN,NaN)).toBe(false);
        });
        it("should not work against object", function () {
            expect(convertSpaces({}, {})).toBe(false);
        });
        it("should not work against regex", function () {
            expect(convertSpaces(/abc/, /abc/)).toBe(false);
        });
        it("should not work against booleans", function () {
            expect(convertSpaces(true)).toBe(false);
        });
        it("should not work against nulls or undefined", function () {
            expect(convertSpaces(null)).toBe(false);
            expect(convertSpaces(undefined)).toBe(false);
        });
        it("should convert one space to %20", function () {
            expect(convertSpaces("hola mundo")).toBe("hola%20mundo");
        });
        it("should convert many spaces to many %20", function () {
            expect(convertSpaces("    ")).toBe("%20%20%20%20");
        });
        it("should do nothing for an empty string", function () {
            expect(convertSpaces("")).toBe("");
        });
    });

    describe("rounded function", function () {
        // var rounded = functions.rounded;

        it("should be defined", function () {
            expect(rounded).toBeDefined();
        });
        it("should not work against arrays", function () {
            expect(rounded([])).toBe(false);
        });
        it("should not work against functions", function () {
            expect(rounded(function() {})).toBe(false);
        });
        it("should not work against strings", function () {
            expect(rounded("hola")).toBe(false);
        });
        it("should not work against objects", function () {
            expect(rounded({})).toBe(false);
        });
        it("should not work against regex", function () {
            expect(rounded(/abcd/)).toBe(false);
        });
        it("should not work against booleans", function () {
            expect(rounded(false)).toBe(false);
        });
        it("should not work against null or undefined", function () {
            expect(rounded(null)).toBe(false);
            expect(rounded(undefined)).toBe(false);
        });
        it("should not work against NaN", function () {
            expect(rounded(NaN)).toBe(false);
        });
        it("should work against Infinity", function () {
            expect(rounded(Infinity)).toBe(Infinity);
            expect(rounded(-Infinity)).toBe(-Infinity);
        });
        it("should work against integers", function () {
            expect(rounded(70)).toBe(70);
            expect(rounded(5)).toBe(5);
        });
        it("should work against numbers with 00 as decimal part", function () {
            expect(rounded(70.0)).toBe(70);
            expect(rounded(5.0000)).toBe(5);
        });
        it("should round up with 2 decimals positive numbers", function () {
            expect(rounded(5.5589)).toBe(5.56);
            expect(rounded(69.996)).toBe(70);
            expect(rounded(5.5550)).toBe(5.56);
        });
        it("should round down with 2 decimals positive numbers", function () {
            expect(rounded(3.3424)).toBe(3.34);
            expect(rounded(69.4924)).toBe(69.49);
            expect(rounded(5.5549)).toBe(5.55);
        });
        it("should round up with 2 decimals negative numbers", function () {
            expect(rounded(-5.5589)).toBe(-5.56);
            expect(rounded(-69.996)).toBe(-70);
            expect(rounded(-5.5550)).toBe(-5.56);
        });
        it("should round down with 2 decimals negative numbers", function () {
            expect(rounded(-3.3424)).toBe(-3.34);
            expect(rounded(-69.4924)).toBe(-69.49);
            expect(rounded(-5.5549)).toBe(-5.55);
        });
    });

    describe("getTotal function", function () {
        // var getTotal = functions.getTotal;

        it("should be defined", function () {
            expect(getTotal).toBeDefined();
        });
        it("should not work against arrays", function () {
            expect(getTotal([])).toBe(false);
        });
        it("should not work against functions", function () {
            expect(getTotal(function() {})).toBe(false);
        });
        it("should not work against strings", function () {
            expect(getTotal("hola")).toBe(false);
        });
        it("should not work against objects", function () {
            expect(getTotal({})).toBe(false);
        });
        it("should not work against regex", function () {
            expect(getTotal(/abcd/)).toBe(false);
        });
        it("should not work against booleans", function () {
            expect(getTotal(false)).toBe(false);
        });
        it("should not work against null or undefined", function () {
            expect(getTotal(null)).toBe(false);
            expect(getTotal(undefined)).toBe(false);
        });
        it("should not work against NaN", function () {
            expect(getTotal(NaN)).toBe(false);
        });
        it("should not work against negative Infinity", function () {
            expect(getTotal(-Infinity)).toBe(false);
        })
        it("should work against positive Infinity", function () {
            expect(getTotal(Infinity)).toBe(Infinity);
        });
        it("should not workg against floating points with decimals > X.00", function () {
            expect(getTotal(3.45)).toBe(false);
        });
        it("should not work against negative numbers", function () {
            expect(getTotal(-5)).toBe(false);
        });
        it("should work against positive integer numbers", function () {
            expect(getTotal(1)).toBe(40);
            expect(getTotal(2)).toBe(80);
            expect(getTotal(3)).toBe(100);
            expect(getTotal(5)).toBe(180);
            expect(getTotal(7)).toBe(230);
        });
        it("should work against positive float numbers numbers with decimals = X.00", function () {
            expect(getTotal(1.00)).toBe(40);
            expect(getTotal(2.00)).toBe(80);
            expect(getTotal(3.00)).toBe(100);
            expect(getTotal(5.00)).toBe(180);
            expect(getTotal(7.00)).toBe(230);
        });
    });

    describe("squareSum function", function () {
        // var squareSum = functions.squareSum;

        it("should be defined", function () {
            expect(squareSum).toBeDefined();
        });
        it("should not work against numbers", function () {
            expect(squareSum(1.50)).toBe(false);
            expect(squareSum(-1.50)).toBe(false);
            expect(squareSum(2)).toBe(false);
            expect(squareSum(-2)).toBe(false);
            expect(squareSum(NaN)).toBe(false);
            expect(squareSum(Infinity)).toBe(false);
            expect(squareSum(-Infinity)).toBe(false);
            expect(squareSum(0)).toBe(false);
        });
        it("should not work against functions", function () {
            expect(squareSum(function() {})).toBe(false);
        });
        it("should not work against strings", function () {
            expect(squareSum("hola mundo")).toBe(false);
        });
        it("should not work against objects", function () {
            expect(squareSum({})).toBe(false);
        });
        it("should not work against regex", function () {
            expect(squareSum(/abcd/)).toBe(false);
        });
        it("should not work against booleans", function () {
            expect(squareSum(false)).toBe(false);
            expect(squareSum(true)).toBe(false);
        });
        it("should not work against null or undefined", function () {
            expect(squareSum(null)).toBe(false);
            expect(squareSum(undefined)).toBe(false);
        });
        it("should work against arrays with positive integers", function () {
            var ary = [1, 2, 3];
            expect(squareSum(ary)).toBe(14);
            var ary2 = [1, 2, 3, Infinity];
            expect(squareSum(ary2)).toBe(Infinity);
        });
        it("should work against arrays with negative integers", function () {
            var ary = [-1, -2, -3];
            expect(squareSum(ary)).toBe(14);
            var ary2 = [-1, -2, -3, -Infinity];
            expect(squareSum(ary2)).toBe(Infinity);
        });
        it("should work against arrays of positive floats with a decimal part equal to zero", function () {
            var ary = [1.00, 2.00, 3.00];
            expect(squareSum(ary)).toBe(14);
        });
        it("should not work against arrays of positive floats with a decimal part greater than zero", function () {
            var ary = [1.15, 2.15, 3.15];
            expect(squareSum(ary)).toBe(false);
        });
        it("should not work against arrays of elements different than numbers", function () {
            var ary = [1, 2, 3, false, {}, []];
            expect(squareSum(ary)).toBe(false);
        });
    });
});
