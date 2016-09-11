function isAnagram(str1,str2) {
var lista=[];
var espacio=new Boolean();
if(str1.length===str2.length){
  spl1=str1.split('');
  spl2=str2.split('');
  console.log(spl1);
  console.log(spl2);
  for (var i = 0; i < spl1.length; i++) {
    for (var j = 0; j < spl1.length; j++) {

      // var abecedario = {
      //   "A":"a",
      //   "B":"b",
      //   "C":"c",
      //   "D":"d",
      //   "E":"e",
      //   "F":"f",
      //   "G":"g",
      //   "H":"h",
      //   "I":"i",
      //   "J":"j",
      //   "K":"k",
      //   "L":"l",
      //   "M":"m",
      //   "N":"n",
      //   "Ñ":"ñ",
      //   "O":"o",
      //   "P":"p",
      //   "Q":"q",
      //   "R":"r",
      //   "S":"s",
      //   "T":"t",
      //   "U":"u",
      //   "V":"v",
      //   "W":"w",
      //   "X":"x",
      //   "Y":"y",
      //   "Z":"z"
      //
      // };
      // if(spl1[i]===abecedario["A"]){
      //   console.log("Letra encontrada");
      // }
      spl1=convert(spl1,spl1.length)
      spl2=convert(spl2,spl2.length)

      function convert(cad,long) {
        for (var l = 0; l < long; l++) {
          switch (cad[l]) {
            case "A":cad[l]="a"
              break;
            case "B":cad[l]="b"
              break;
            case "C":cad[l]="c"
                break;
            case "D":cad[l]="d"
                  break;
            case "E":cad[l]="e"
                    break;
            case "F":cad[l]="f"
                      break;
            case "G":cad[l]="a"
                      break;
            case "H":cad[l]="h"
                      break;
            case "I":cad[l]="i"
                      break;
            case "J":cad[l]="j"
                        break;
            case "K":cad[l]="k"
                        break;
            case "L":cad[l]="l"
                        break;
            case "M":cad[l]="m"
                        break;
            case "N":cad[l]="n"
                        break;
            case "O":cad[l]="o"
                        break;
            case "P":cad[l]="p"
                        break;
            case "Q":cad[l]="q"
                        break;
            case "R":cad[l]="r"
                        break;
            case "S":cad[l]="s"
                        break;
            case "T":cad[l]="t"
                        break;
            case "U":cad[l]="u"
                        break;
            case "V":cad[l]="v"
                        break;
            case "W":cad[l]="w"
                        break;
            case "X":cad[l]="x"
                        break;
            case "Y":cad[l]="y"
                        break;
            case "Z":cad[l]="z"
                        break;

          }

        }
        return cad;
      }
        if (spl1[i] === spl2[j]) {
            lista[i] = spl2[j];
        }
     }
        if (lista.length == spl1.length) {
            espacio = true
        }
        else{
            espacio == false;
          }
   }

}
else{
  console.log("las cadenas no tienen la misma longitud");
  espacio=false
}
return espacio;
}

console.log(isAnagram("AmOr","oMra"));


function convertSpaces(str) {
  var cadena2;
  for (var x=0; x < str.length; x++) {
    cadena2=str.split(' ');
    cadena2=cadena2.join('%');
  }
  return cadena2;
}
console.log(convertSpaces("Hola mundo ih   hola    "));


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
