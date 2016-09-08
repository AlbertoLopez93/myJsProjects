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

////// EXERCISE ONE //////

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

//////EXERCISE DOS //////

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

////////EXERCISE THREE  //////
function rounded(numer) {
let numero1 = numer;
if(typeof(numero1)==="string"){
  return false;
}
if(numero1>Number.MAX_VALUE){
  return Infinity;
}
if(numero1<-Number.MAX_VALUE){
  return -Infinity;
}
let strnum=numero1.toString();
let cad=strnum.split("."),r,round=0;
let flo=cad[1].split("");
let n1=cad[0]+flo[0]+flo[1];
if (flo[2]>=5) {
  r=parseInt(n1)+1;
  }else{
  r=parseInt(n1);
  }
  flo=r.toString().split(""); r="";
  for (let i = 0; i < flo.length; i++) {
    if (i===(flo.length-2)) {
      if (i===0) {
        r+="0";
      }
    r+=".";
  }
    r+=flo[i];;
  }
 return parseFloat(r);
}

/////// EXERCISE FOUR ////////
function getTotal(days){
  if(typeof(days)==="string"){
    return false;
  }
  if(days>Number.MAX_VALUE){
    return Infinity;
  }
  if(days<-Number.MAX_VALUE){
    return -Infinity;
  }
let r = 0;
  if(days<3){
    r = ((days)*40);
  }else if(days<7) {
    r = ((days*40)-20);
  }else{
    r = ((days*40)-50);
  }
  return r;
}

//////EXERCISE FIVE //////
function square(arr) {
  let r=false;
  if(typeof(arr)==="string"){
    return false;
  }
  if(typeof(arr)==="boolean"){
    return false;
  }
  if(arr>Number.MAX_VALUE){
    return Infinity;
  }
  if(arr<-Number.MAX_VALUE){
    return -Infinity;
  }
 if (Array.isArray(arr)) {
   r=0;
   for (var i = 0; i < arr.length; i++) {
    if(typeof(arr[i])==="string"){
       return false;
    }else if(arr[i]<=0) {
      return false
    }
    if(typeof(arr[i])==="boolean"){
      return false;
    }
    r+=arr[i]*arr[i];
   }
 }
 return r;
}
///////////EXERCISE SIX ////////



function isRotation(str1,str2) {
  let r= false;
  if ((typeof(str1)==="string")&&(typeof(str2)==="string")) {
    let coincide=0;
    let pos, aux=0;
    let tamstr1=str1.length, tamstr2=str2.length;
    if (tamstr1===tamstr2) {
      find: for (let i = 0; i < tamstr1; i++) {
        if (i<tamstr1-1) {
          if (str1[0]===str2[i]) {
            if (str1[1]===str2[i+1]) {
              pos=i; break find;
            }
          }
        }
        else {
          if ((str1[0]===str2[i])&&(str1[1]===str2[0])) {
            pos=i; break find;
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
        r=true;
      }
      else {
        r=false;
      }
    }
    else {
      r=false;
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
  it("Espero que 'olegario armario' sea = olegario%20armario", function() {//Cada una de las pruebas
    var res=convertSpaces("olegario  vive en el armario");
    expect(res).toBe("olegario%20%20vive%20en%20el%20armario");
  });
  it("Espero que 'olegario armario' sea = olegario%20armario", function() {//Cada una de las pruebas
    var res=convertSpaces("infiltrado    ");
    expect(res).toBe("infiltrado%20%20%20%20");
  });
  it("Espero que internado sea = internado", function() {//Cada una de las pruebas
    var res=convertSpaces("internado");
    expect(res).toBe("internado");
  });
  it("Espero que 29.5689 sea = 29.57", function() {//Cada una de las pruebas
    var res=rounded(29.5689);
    expect(res).toBe(29.57);
  });
  it("Espero que 29.5649 sea = 29.56", function() {//Cada una de las pruebas
    var res=rounded(29.5649);
    expect(res).toBe(29.56);
  });
  it("Espero que 29.5674765 sea = false", function() {//Cada una de las pruebas
    var res=rounded(29.5674765);
    expect(res).toBe(29.57);
  });
  it("Espero que '13.8888' sea = NaN", function() {//Cada una de las pruebas
    var res=rounded("13.8888");
    expect(res).toBe(false);
  });
  it("Espero que {13.9955} sea = NaN", function() {//Cada una de las pruebas
    var res=rounded("{13.9955}");
    expect(res).toBe(false);
  });
  it("Espero que Infinity sea = false", function() {//Cada una de las pruebas
    var res=rounded(Infinity);
    expect(res).toBe(Infinity);
  });
  it("Espero que Infinity sea = false", function() {//Cada una de las pruebas
    var res=rounded(-Infinity);
    expect(res).toBe(-Infinity);
  });
  //FOUR
  it("Espero que 29.5689 sea = 29.57", function() {//Cada una de las pruebas
    var res=getTotal(2);
    expect(res).toBe(80);
  });
  it("Espero que 3 sea = 100", function() {//Cada una de las pruebas
    var res=getTotal(3);
    expect(res).toBe(100);
  });
  it("Espero que 8 sea = 270", function() {//Cada una de las pruebas
    var res=getTotal(8);
    expect(res).toBe(270);
  });
  it("Espero que '13.8888' sea = NaN", function() {//Cada una de las pruebas
    var res=getTotal("13.8888");
    expect(res).toBe(false);
  });
  it("Espero que {13.9955} sea = NaN", function() {//Cada una de las pruebas
    var res=getTotal("{13.9955}");
    expect(res).toBe(false);
  });
  it("Espero que Infinity sea = Infinity", function() {//Cada una de las pruebas
    var res=getTotal(Infinity);
    expect(res).toBe(Infinity);
  });
  it("Espero que Infinity sea = -Infinity", function() {//Cada una de las pruebas
    var res=getTotal(-Infinity);
    expect(res).toBe(-Infinity);
  });
  it("Espero que [1,2,3,4,5] = 30", function() {//Cada una de las pruebas
    var res=square([1,2,3,4,5]);
    expect(res).toBe(55);
  });
  it("Espero que [1,2,'3',4,5] = 30", function() {//Cada una de las pruebas
    var res=square([1,2,"3",4,5]);
    expect(res).toBe(false);
  });
  it("Espero que '1,2,3,4,5' = false", function() {//Cada una de las pruebas
    var res=square("1,2,3,4,5");
    expect(res).toBe(false);
  });
  it("Espero que 'boolean' = false", function() {//Cada una de las pruebas
    var res=square(true);
    expect(res).toBe(false);
  });
  it("Espero que [true] = false", function() {//Cada una de las pruebas
    var res=square([true]);
    expect(res).toBe(false);
  });
  it("Espero que {} = false", function() {//Cada una de las pruebas
    var res=square({});
    expect(res).toBe(false);
  });
  it("Espero que [1,2,3,4,5] = 55", function() {//Cada una de las pruebas
    var res=square([1,2,3,4,5]);
    expect(res).toBe(55);
  });
  it("Espero que 'holamundo' = true", function() {//Cada una de las pruebas
    var res=isRotation("holamundo","ndoholamu");
    expect(res).toBe(true);
  });
  it("Espero que 'holamundo' = false", function() {//Cada una de las pruebas
    var res=isRotation("holamundo","ndoholmu");
    expect(res).toBe(false);
  });
  it("Espero que '4' = false", function() {//Cada una de las pruebas
    var res=isRotation(4,"ndoholmu");
    expect(res).toBe(false);
  });
  it("Espero que '[]' = false", function() {//Cada una de las pruebas
    var res=isRotation([],"ndoholmu");
    expect(res).toBe(false);
  });
  it("Espero que {} = false", function() {//Cada una de las pruebas
    var res=isRotation({},"ndoholmu");
    expect(res).toBe(false);
  });
  it("Espero que 'holamundo ' = true", function() {//Cada una de las pruebas
    var res=isRotation("holamundo "," ndoholmu");
    expect(res).toBe(false);
  });
  it("Espero que 'holamundo ' = true", function() {//Cada una de las pruebas
    var res=isRotation("holamundo","ndoholamu");
    expect(res).toBe(true);
  });
});
