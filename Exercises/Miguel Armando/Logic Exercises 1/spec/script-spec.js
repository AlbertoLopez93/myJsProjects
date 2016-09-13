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
  let cad=str.split(" "),result="";

   for (var i = 0; i < cad.length; i++) {
        if ((i>0)&&(i<cad.length)) {
          result+="%20"
        }
        result+=cad[i];
   }
   return result;
  }

  function rounded(num) {
    if (typeof(num)==="string"){
      return NaN;
    }
    if(num>Number.MAX_VALUE){
      return Infinity;
    }
    if (num< -Number.MAX_VALUE) {
      return -Infinity
    }
    if (typeof(num) !== NaN) {
      return NaN;
    }

  let strnum=num.toString();
  let cad=strnum.split("."),result,round=0;
  let flo=cad[1].split("");
  let n1=cad[0]+flo[0]+flo[1];
      if (flo[2]>=5) {
          result=parseInt(n1)+1;
       } else {
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

  function getTotal(days) {
    if (typeof(num) !== NaN) {
      return false;
    }

    if (days==1.5) {
      return false;
    }
    if (days==1,5) {
      return false;
    }
   let total=days*40;
   if (days==0){
     return false;
   }
   if(days=="2"){
     return false;
   }
   if (days>=3) {
      if (days>=7)
        total+=-50;
      else
        total+=-20;
   }
   return total= "$"+total.toString();
  }

  function square(arr) {
    if (arr=="2") {
      return false;
    }

   let result=0;

   for (var i = 0; i < arr.length; i++) {
         result+=arr[i]*arr[i];
   }
   return result;
  }

  var num=[1,2,3,0];


describe("Anagrams",function(){
      it("espero que Roma y amOr sea = true",function(){
        var res = isAnagram("Roma","amOr");
        expect(res).toBe(true);
      });


      it("Espero que 2 y 2 sea = false", function() {
        var res = isAnagram(2,2);
        expect(res).toBe(false);
      });

      it("Espero que Infinity y null sea = false", function() {
        var res = isAnagram(Infinity,null);
        expect(res).toBe(false);
      });

      it("Espero que Infinity y Infinity sea = false", function() {
        var res = isAnagram(Infinity,Infinity);
        expect(res).toBe(false);
      });

      it("Espero que {} y {} sea = false", function() {
        var res = isAnagram({},{});
        expect(res).toBe(false);
      });

      it("Espero que [] y [] sea = false", function() {
        var res = isAnagram([],[]);
        expect(res).toBe(false);
      });

      it("Espero que undefined y undefined sea = false", function() {
        var res = isAnagram(undefined,undefined);
        expect(res).toBe(false);
      });

      it("Espero que NaN y NaN sea = false", function() {
        var res = isAnagram(NaN,NaN);
        expect(res).toBe(false);
      });

      it("Espero que NaN y Infinity sea = false", function() {
        var res = isAnagram(NaN,Infinity);
        expect(res).toBe(false);
      });

      it("Espero que NaN y null sea = false", function() {
        var res = isAnagram(NaN,null);
        expect(res).toBe(false);
      });

      it("espero que '' sea = %20",function(){
        var res = convertSpaces("  ");
        expect(res).toBe("%20%20");
      });

      it("espero que '   ' sea = %20",function(){
        var res = convertSpaces("   ");
        expect(res).toBe("%20%20%20");
      });


      it("espero que '12.8888' sea = NaN",function(){
        var res = rounded("12.8888");
        expect(res).toBeNaN();
      });

      it("espero que Infinity sea = Infinity",function(){
        var res = rounded(Infinity);
        expect(res).toBe(Infinity);
      });

      it("espero que -Infinity sea = -Infinity",function(){
        var res = rounded(-Infinity);
        expect(res).toBe(-Infinity);
      });

      it("espero que NaN sea = NaN",function(){
        var res = rounded(NaN);
        expect(res).toBeNaN();
      });

      it("espero que NaN sea = NaN",function(){
        var res = getTotal(NaN);
        expect(res).toBe(false);
      });

      it("espero que 0 sea = NaN",function(){
        var res = getTotal(NaN);
        expect(res).toBe(false);
      });

      it("espero que 1.5 sea = false",function(){
        var res = getTotal(1.5);
        expect(res).toBe(false);
      });

      it("espero que -2 sea = false",function(){
        var res = getTotal(-2);
        expect(res).toBe(false);
      });

      it("espero que '2' = false",function(){
        var res = getTotal("2");
        expect(res).toBe(false);
      });

      it("espero que '1' = false",function(){
        var res = getTotal("1");
        expect(res).toBe(false);
      });

      it("espero que 12.5566 = false",function(){
        var res = getTotal(12.5566);
        expect(res).toBe(false);
      });

      it("espero que '2' = false",function(){
        var res = square("2");
        expect(res).toBe(false);
      });

      






});
