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

// let isAnagram = functions.isAnagram;
// let convertSpaces = functions.convertSpaces;
// let rounded = functions.rounded;
// let getTotal = functions.getTotal;
// let squareSum = functions.squareSum;
// let isRotation = functions.isRotation;
// let convertMatrix = functions.convertMatrix;
// let rotate = functions.rotate;

describe("Testing Logic Exercises 1 Easy way", function () {
    describe("isAnagram function", function () {
        it("should return false for 2 strings that are not anagrams", function () {
            expect(isAnagram("abcd", "efgh")).toBe(false);
        });
        it("should return true for 2 strings that are anagrams", function () {
            expect(isAnagram("roma", "amor")).toBe(true);
        });
        it("should return true for 2 strings that are the same", function () {
            expect(isAnagram("roma", "roma")).toBe(true);
        });
    });

    describe("convertSpaces function", function () {
        it("should convert many spaces to %20", function () {
            expect(convertSpaces("    ")).toBe("%20%20%20%20");
        });
        it("should convert one space to %20", function () {
            expect(convertSpaces("hola mundo")).toBe("hola%20mundo");
        });
    });

    describe("rounded function", function () {
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
        it("should return 0 for 0 days", function () {
            expect(getTotal(0)).toBe(0);
        });
        it("should work against positive integer numbers", function () {
            expect(getTotal(1)).toBe(40);
            expect(getTotal(2)).toBe(80);
            expect(getTotal(3)).toBe(100);
            expect(getTotal(5)).toBe(180);
            expect(getTotal(7)).toBe(230);
        });
    });

    describe("squareSum function", function () {
        it("should return 0 for 0", function () {
            expect(squareSum([0])).toBe(0);
        });
        it("should return 0 for 0", function () {
            expect(squareSum([1])).toBe(1);
        });
        it("should return 5", function () {
            expect(squareSum([1, 2])).toBe(5);
        });
        it("should return 14 for [1, 2, 3]", function () {
            expect(squareSum([1, 2, 3])).toBe(14);
        });
    });

    describe("isRotation function", function () {
        it("should return true with strings that are rotation of each other", function () {
            expect(isRotation("waterbottle", "erbottlewat")).toBe(true);
        });
        it("should return false with strings that are not rotation of each other", function () {
            expect(isRotation("watermelon", "waterbottle")).toBe(false);
        });
        it("should return true with strings that are the same word", function () {
            expect(isRotation("watermelon", "watermelon")).toBe(true);
        });
    });

    describe("convertMatrix function", function () {
        it("should get [ [1, 1], [1, 1] ] for [ [1, 1], [1, 1] ]", function () {
            expect(convertMatrix([ [1, 1], [1, 1] ])).toEqual([ [1, 1], [1, 1] ]);
        });
        it("should get [ [1, 0], [0, 0] ] for [ [1, 1], [0, 0] ]", function () {
            expect(convertMatrix([ [1, 1], [1, 0] ])).toEqual([ [1, 0], [0, 0] ]);
        });
    });

    describe("rotate function", function () {
        it("should get [ [1, 1], [1, 1] ] for [ [1, 1], [1, 1] ]", function () {
            expect(rotate( [ [1, 1], [1, 1] ] )).toEqual([ [1, 1], [1, 1] ]);
        });
        it("should return [ [0, 0], [1, 1] ] for [ [0, 1], [0, 1] ]", function () {
            expect(rotate( [ [0, 1], [0, 1] ] )).toEqual([ [0, 0], [1, 1] ]);
        });
    });
});
