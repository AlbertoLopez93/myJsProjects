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

function convertSpaces(str) {
  let result=false;
  if (typeof(str)==="string") {
    result="";
    for (var i = 0; i < str.length; i++) {
      if (str[i]===" ") {
        result+="%20";
      }
      else
       result+=str[i];
    }
  }
  return result;
}


function rounded(num) {
  let result= false;
  if (typeof(num)==="number") {
    if ((num!=NaN)&&(num!=-NaN)&&(num!=Infinity)&&(num!=-Infinity)&& (num%1)>0) {
      let strnum=num.toString();
      let cad=strnum.split("."),round=0;
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
      result=parseFloat(result);
    }
    else
      result=num;
  }
  return result;
}


function getTotal(days) {
  let total= false;
  if (typeof(days)==="number") {
    if ((days%1)===0) {
      total=days*40;
      if (days>=3) {
        if (days>=7)
          total+=-50;
        else
          total+=-20;
      }
    }
  }
  return total;
}



  describe("Testing For Anagrams",function(){//Conjunto de funciones de prueba
    it("Espero que Roma y aMor sea = true", function() {//Cada una de las pruebas
      var res=isAnagram("Roma","aMor");
      expect(res).toBe(true);
    });

   it("Espero que hola y olaH sea = true", function() {//Cada una de las pruebas
      var res=isAnagram("hola","olaH");
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

    it("Espero que Infinity y false = false", function() {//Cada una de las pruebas
      var res=isAnagram("Infinity",false);
      expect(res).toBe(false);
    });

    it("Espero que ole y ola = false", function() {//Cada una de las pruebas
      var res=isAnagram("ole","ola");
      expect(res).toBe(false);
    });

    it("Espero que function y function sea = false", function() {//Cada una de las pruebas
      var res=isAnagram(function(){},function(){});
      expect(res).toBe(false);
    });

    it("Espero que 0.2 y 0.1 sea = false", function() {//Cada una de las pruebas
      var res=isAnagram(0.2,0.1);
      expect(res).toBe(false);
    });

  });


  describe("Testing For Convert Spaces to %20",function(){//Conjunto de funciones de prueba
    it("Espero que Roma= Roma", function() {//Cada una de las pruebas
      var res=convertSpaces("Roma");
      expect(res).toBe("Roma");
    });

   it("Espero que hola Mundo sea = hola%20Mundo", function() {//Cada una de las pruebas
      var res=convertSpaces("hola Mundo");
      expect(res).toBe("hola%20Mundo");
   });

    it("Espero que 2 sea = false", function() {//Cada una de las pruebas
      var res=convertSpaces(2);
      expect(res).toBe(false);
    });

    it("Espero que []  sea = false", function() {//Cada una de las pruebas
      var res=convertSpaces([]);
      expect(res).toBe(false);
    });

    it("Espero que {} sea = false", function() {//Cada una de las pruebas
      var res=convertSpaces({});
      expect(res).toBe(false);
    });

    it("Espero que Infinity sea = false", function() {//Cada una de las pruebas
      var res=convertSpaces(Infinity);
      expect(res).toBe(false);
    });

    it("Espero que false = false", function() {//Cada una de las pruebas
      var res=convertSpaces(false);
      expect(res).toBe(false);
    });

    it("Espero que        sea=%20%20%20%20%20", function() {//Cada una de las pruebas
      var res=convertSpaces("     ");
      expect(res).toBe("%20%20%20%20%20");
    });

    it("Espero que function sea = false", function() {//Cada una de las pruebas
      var res=convertSpaces(function(){});
      expect(res).toBe(false);
    });

    it("Espero que 0.1 sea = false", function() {//Cada una de las pruebas
      var res=convertSpaces(0.1);
      expect(res).toBe(false);
    });

  });


  describe("Testing For Rounded a Number",function(){//Conjunto de funciones de prueba
    it("Espero que 0.999 sea = 1.00", function() {//Cada una de las pruebas
      var res=rounded(0.999);
      expect(res).toBe(1);
    });

   it("Espero que hola sea = false", function() {//Cada una de las pruebas
      var res=rounded("hola");
      expect(res).toBe(false);
   });

    it("Espero que 2 sea = 2", function() {//Cada una de las pruebas
      var res=rounded(2);
      expect(res).toBe(2);
    });

    it("Espero que []  sea = false", function() {//Cada una de las pruebas
      var res=rounded([]);
      expect(res).toBe(false);
    });

    it("Espero que {} sea = false", function() {//Cada una de las pruebas
      var res=rounded({});
      expect(res).toBe(false);
    });

    it("Espero que Infinity sea = Infinity", function() {//Cada una de las pruebas
      var res=rounded(Infinity);
      expect(res).toBe(Infinity);
    });

    it("Espero que false = false", function() {//Cada una de las pruebas
      var res=rounded(false);
      expect(res).toBe(false);
    });

    it("Espero que NaN sea = NaN", function() {//Cada una de las pruebas
      var res=rounded(NaN);
      expect(res).toBeNaN();
    });

    it("Espero que function sea = false", function() {//Cada una de las pruebas
      var res=rounded(function(){});
      expect(res).toBe(false);
    });

    it("Espero que 1.456 sea = 1.46", function() {//Cada una de las pruebas
      var res=rounded(1.456);
      expect(res).toBe(1.46);
    });

    it("Espero que 1.999 sea = 2.00", function() {//Cada una de las pruebas
      var res=rounded(1.999);
      expect(res).toBe(2.00);
    });

    it("Espero que -Infinity sea = -Infinity", function() {//Cada una de las pruebas
      var res=rounded(-Infinity);
      expect(res).toBe(-Infinity);
    });

  });


  describe("Testing For Rent a Car",function(){//Conjunto de funciones de prueba
    it("Espero que 1 sea = 40", function() {//Cada una de las pruebas
      var res=getTotal(1);
      expect(res).toBe(40);
    });

   it("Espero que 2 sea = 40", function() {//Cada una de las pruebas
      var res=getTotal(2);
      expect(res).toBe(80);
   });

    it("Espero que 3 sea = 100", function() {//Cada una de las pruebas
      var res=getTotal(3);
      expect(res).toBe(100);
    });

    it("Espero que 6  sea = 220", function() {//Cada una de las pruebas
      var res=getTotal(6);
      expect(res).toBe(220);
    });

    it("Espero que 7 sea = 230", function() {//Cada una de las pruebas
      var res=getTotal(7);
      expect(res).toBe(230);
    });

    it("Espero que 100 sea = 3950", function() {//Cada una de las pruebas
      var res=getTotal(100);
      expect(res).toBe(3950);
    });

    it("Espero que false = false", function() {//Cada una de las pruebas
      var res=getTotal(false);
      expect(res).toBe(false);
    });

    it("Espero que NaN sea=false", function() {//Cada una de las pruebas
      var res=getTotal(NaN);
      expect(res).toBe(false);
    });

    it("Espero que function sea = false", function() {//Cada una de las pruebas
      var res=getTotal(function(){});
      expect(res).toBe(false);
    });

    it("Espero que hola sea = false", function() {//Cada una de las pruebas
      var res=getTotal("hola");
      expect(res).toBe(false);
    });

    it("Espero que 1.999 sea = false", function() {//Cada una de las pruebas
      var res=getTotal(1.999);
      expect(res).toBe(false);
    });

    it("Espero que -Infinity sea = false", function() {//Cada una de las pruebas
      var res=getTotal(-Infinity);
      expect(res).toBe(false);
    });

  });
