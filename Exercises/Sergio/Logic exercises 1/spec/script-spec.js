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
  let cad1,cad2,result=false;
  if ((typeof(str1)==="string")&& (typeof(str2)==="string")) {
    cad1= change(str1.split(""));
    cad2= change(str2.split(""));
    if (cad1.length===cad2.length) {
       let cont=0;
       for (var i = 0; i < cad2.length; i++) {
         find:for (var j = 0; j < cad1.length; j++) {
           if (cad2[i]===cad1[j]) {
              cad1[j]=""; cont++;break find;
           }
         }
         }
       if (cont=== str1.length) {
         result=true;
       }
       }
    }
  return result;
  }


  describe("Testing For Anagrams",function(){//Conjunto de funciones de prueba
    it("Espero que Roma y aMor sea = true", function() {//Cada una de las pruebas
      var res=isAnagram("Roma","aMor");
      expect(res).toBe(true);
    });

    it("Espero que 2 y 2 sea = false", function() {//Cada una de las pruebas
      var res=isAnagram(2,2);
      expect(res).toBe(false);
    });

    it("Espero que [] y [] sea = false", function() {//Cada una de las pruebas
      var res=isAnagram([],[]);
      expect(res).toBe(false);
    });

    it("Espero que {} y {} sea = false", function() {//Cada una de las pruebas
      var res=isAnagram({},{});
      expect(res).toBe(false);
    });

    it("Espero que Infinity y null sea = false", function() {//Cada una de las pruebas
      var res=isAnagram(Infinity,null);
      expect(res).toBe(false);
    });

  });
