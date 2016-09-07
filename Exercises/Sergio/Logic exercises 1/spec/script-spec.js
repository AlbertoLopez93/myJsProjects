"use strict"

function change(str) {
  let r=[];
  for (let k = 0; k < str.length; k++) {
      switch (str[k]) {
        case "A":
                  r[r.length]="a";
                  break;
        case "B":
                  r[r.length]="b";
                  break;
        case "C":
                  r[r.length]="c";
                  break;
        case "D":
                  r[r.length]="d";
                  break;
        case "E":
                  r[r.length]="e";
                  break;
        case "F":
                  r[r.length]="f";
                  break;
        case "G":
                  r[r.length]="g";
                  break;
        case "H":
                  r[r.length]="h";
                  break;
        case "I":
                  r[r.length]="i";
                  break;
        case "J":
                  r[r.length]="j";
                  break;
        case "K":
                  r[r.length]="k";
                  break;
        case "L":
                  r[r.length]="l";
                  break;
        case "M":
                  r[r.length]="m";
                  break;
        case "N":
                  r[r.length]="n";
                  break;
        case "N":
                  r[r.length]="n";
                  break;
        case "O":
                  r[r.length]="o";
                  break;
        case "P":
                  r[r.length]="p";
                  break;
        case "Q":
                  r[r.length]="q";
                  break;
        case "R":
                  r[r.length]="r";
                  break;
        case "S":
                  r[r.length]="s";
                  break;
        case "T":
                  r[r.length]="t";
                  break;
        case "U":
                  r[r.length]="u";
                  break;
        case "V":
                  r[r.length]="v";
                  break;
        case "W":
                  r[r.length]="w";
                  break;
        case "X":
                  r[r.length]="x";
                  break;
        case "Y":
                  r[r.length]="y";
                  break;
        case "Z":
                  r[r.length]="z";
                  break;
        default:  r[r.length]=str[k];
      }
  }
  return r;
}


function isAnagram(str1,str2) {
  let cad1,cad2,r=false;
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
         r=true;
       }
       }
    }
  return r;
  }


  describe("Testing For Anagrams",function(){//Conjunto de funciones de prueba
    it("Espero que Roma y amOr sea = true", function() {//Cada una de las pruebas
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
    it("Espero que '' y '' sea = false", function() {//Cada una de las pruebas
      var res=isAnagram('','');
      expect(res).toBe(true);
    });
    it("Espero que null y '' sea = false", function() {//Cada una de las pruebas
      var res=isAnagram(null,'');
      expect(res).toBe(false);
    });
    it("Espero que 'Infiltrado' y 'Infiltrada' sea = false", function() {//Cada una de las pruebas
      var res=isAnagram("Infiltrado","Infiltrada");
      expect(res).toBe(false);
    });

  });
