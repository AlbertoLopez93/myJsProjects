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

describe("Testing basic functions", function () {

    describe("Testing Anagram", function () {
        it("should exists", function () {
            expect(isAnagram).toBeDefined();
        });
        describe("Tests against values that are not numbers", function () {
            it("Should not work with strings", function () {
                expect(isNaN(suma("hola", "mundo"))).toBe(true);
            });
            it("Should not work with booleans", function () {
                expect(isNaN(suma(false, false))).toBe(true);
                expect(isNaN(suma(true, true))).toBe(true);
                expect(isNaN(suma(false, true))).toBe(true);
                expect(isNaN(suma(true, false))).toBe(true);
                expect(isNaN(suma(true, 1))).toBe(true);
                expect(isNaN(suma(false, 1))).toBe(true);
            });
});
