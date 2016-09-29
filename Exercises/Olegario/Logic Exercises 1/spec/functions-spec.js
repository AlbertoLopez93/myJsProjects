"use strict"

function change(str) {
  let result=[];
  for (var i = 0; i < str.length; i++) {
      switch (str[i]) {
        case "A":
                  result[result.length]="a";
                  break;
        case "B":
                  result[result.length]="b";
                  break;
        case "C":
                  result[result.length]="c";
                  break;
        case "D":
                  result[result.length]="d";
                  break;
        case "E":
                  result[result.length]="e";
                  break;
        case "F":
                  result[result.length]="f";
                  break;
        case "G":
                  result[result.length]="g";
                  break;
        case "H":
                  result[result.length]="h";
                  break;
        case "I":
                  result[result.length]="i";
                  break;
        case "J":
                  result[result.length]="j";
                  break;
        case "K":
                  result[result.length]="k";
                  break;
        case "L":
                  result[result.length]="l";
                  break;
        case "M":
                  result[result.length]="m";
                  break;
        case "N":
                  result[result.length]="n";
                  break;
        case "N":
                  result[result.length]="n";
                  break;
        case "O":
                  result[result.length]="o";
                  break;
        case "P":
                  result[result.length]="p";
                  break;
        case "Q":
                  result[result.length]="q";
                  break;
        case "R":
                  result[result.length]="r";
                  break;
        case "S":
                  result[result.length]="s";
                  break;
        case "T":
                  result[result.length]="t";
                  break;
        case "U":
                  result[result.length]="u";
                  break;
        case "V":
                  result[result.length]="v";
                  break;
        case "W":
                  result[result.length]="w";
                  break;
        case "X":
                  result[result.length]="x";
                  break;
        case "Y":
                  result[result.length]="y";
                  break;
        case "Z":
                  result[result.length]="z";
                  break;
        default:  result[result.length]=str[i];
      }
  }
  return result;
}


function isAnagram(str1,str2) {
 let cad1,cad2,aux,let2;
 cad1= change(str1.split(""));
 cad2= change(str2.split(""));
 if (cad1.length===cad2.length) {
       let cont=0, j=cad1.length-1;
       for (var i = 0; i < cad1.length; i++) {
             if (cad1[i]===cad2[j]) {
               cont++;
             }
             j--;
       }
       if (cont===cad1.length)
         console.log("This works are  Anagrams");
       else
         console.log("This works are not  anagrams");
      }
 else {
   console.log("This works are not  anagrams");
 }
}

console.log("Be Or Not Be Anagram:\n");
isAnagram("Roma","amOr");
console.log("\n\n");


function convertSpaces(str) {
let cad=str.split(" "),result="";

 for (var i = 0; i < cad.length; i++) {
      if ((i>0)&&(i<cad.length)) {
        result+="%20"
      }
      result+=cad[i];
 }
 return result;
}

console.log("Replace Spaces for %20:\n");
console.log(convertSpaces("Hola Camarada"));
console.log("\n\n");


function rounded(num) {
let strnum=num.toString();
let cad=strnum.split("."),result,round=0;
let flo=cad[1].split("");
let n1=cad[0]+flo[0]+flo[1];
    if (flo[2]>=5) {
        result=parseInt(n1)+1;
     }
    else {
        result=parseInt(n1);
    }
 flo=result.toString().split(""); result="";
 for (var i = 0; i < flo.length; i++) {
        if (i===(flo.length-2)) {
           if (i===0) {
              result+="0";
           }
           result+=".";
        }
      result+=flo[i];;
 }
 return result;
}

console.log("Ronded A Number To 2 Digits:\n");
console.log(rounded(3.5582));
console.log("\n\n");


function getTotal(days) {
 let total=days*40;
 if (days>=3) {
    if (days>=7)
      total+=-50;
    else
      total+=-20;
 }
 return total= "$"+total.toString();
}

console.log("Rent A Car:\n");
console.log(getTotal(10));
console.log("\n\n");


function square(arr) {
 let result=0;
 for (var i = 0; i < arr.length; i++) {
       result+=arr[i]*arr[i];
 }
 return result;
}

var num=[1,2,3,0];
console.log("Square Numbers:\n");
console.log(square(num));
console.log("\n\n");


function isRotation(str1,str2) {
let result="",coincide=0;
let pos, aux=0;
let tamstr1=str1.length, tamstr2=str2.length;
if (tamstr1===tamstr2) {
find: for (let i = 0; i < tamstr1; i++) {
           if (str1[0]===str2[i]) {
               if (i<tamstr1-1) {
                   if (str1[1]===str2[i+1]) {
                     pos=i; break find;
                     }
                 }
              else {
                   if (str1[1]===str2[0]) {
                     pos=i; break find;
                     }
               }
            }
         }
     while (aux<tamstr1) {
       if (str1[aux]===str2[pos]) {
           coincide++;
           if (pos===tamstr1-1) {
               pos=-1;
              }
          }
        pos++;
        aux++;
       }

       if (coincide==tamstr1) {
         result=true;
         }
       else {
         result=false;
       }
     }
else {
    result=false;
   }
return result;
}

console.log("Is  Rotation:\n");
console.log(isRotation("roma","arom"));
console.log("\n\n");

//waterbottle erbottlewat
function convertMatrix(mat) {
var tam=mat.length;
var result=new Array(tam);
for (let i = 0; i < tam; i++) {
    result[i]=new Array(mat[i].length);
    for (let j = 0; j < mat[i].length; j++) {
        result[i][j]=mat[i][j];
    }
}

  for (let i = 0; i < tam; i++) {
      for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j]===0) {
              for (let k = 0; k < mat[i].length; k++) {
                result[i][k]=0;
              }
              for (let k = 0; k < tam; k++) {
                result[k][j]=0;
              }
            }
      }
 }
 return result;

}

var matrix=[[7,0,8,],
            [1,10,7],
            [7,7,0],
            [1,1,1]];
console.log("Convert Matrix:\n");
console.log(convertMatrix(matrix));
console.log("\n\n");



function rotate(matrix) {
let tam=matrix.length,aux;;
let result= new Array(tam);
for (let i = 0; i < tam; i++) {
  result[i]= new Array(tam);
}
 aux=tam-1;
 for (let i = 0; i < tam; i++) {
    for (let j = 0; j < tam; j++) {
      result[j][aux]=matrix[i][j];
     }
    aux--;
 }
 return result;
}


var matrix=[[1,2,3],
            [4,5,6],
            [7,8,9]];
console.log("Rotate:\n");
console.log(rotate(matrix));
console.log("\n\n");


var squareSum = square;

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
