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
