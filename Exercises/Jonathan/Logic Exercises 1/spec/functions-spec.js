"use strict"

function isAnagram(str1, str2){

var lngth=0, lngth2=0, str3=[], str4=[], z=0;
var msg1= "Es anagrama", msg2="No es anagrama ", n=0, n1=0;

lngth=str1.length;

if(str1.length===str2.length){

    //console.log("son del mismo tamaño");
    for(var x=0; x<lngth; x++){
        str3[x]=str1[x];
        str4[x]=str2[x];
    }
    str3=convertir(str3, lngth);
    str4=convertir(str4, lngth);
    //console.log(str3, str4, lngth);
    for(var x=0; x<lngth; x++){
        for(var y=0; y<lngth; y++){
              if(str3[x]===str4[y]){
                  str4[y]="";
                  n++;
                  //console.log(str3[x], str4[y]);
                  //break;
                }
            }

          }

if(n===lngth){
  return msg1;
}else{
  return msg2;
}
  console.log(str3, str4, n);
  }
}


function convertir(str5, lngth3){

  for(var x=0; x<lngth3; x++){
      switch (str5[x]) {
        case "A": str5[x]="a";
          break;
        case "B": str5[x]="b";
          break;
        case "C": str5[x]="c";
          break;
        case "D": str5[x]="d";
          break;
        case "E": str5[x]="e";
          break;
        case "F": str5[x]="f";
          break;
        case "G": str5[x]="g";
          break;
        case "H": str5[x]="h";
          break;
        case "I": str5[x]="i";
          break;
        case "J": str5[x]="j";
          break;
        case "K": str5[x]="k";
          break;
        case "L": str5[x]="l";
          break;
        case "M": str5[x]="m";
          break;
        case "N": str5[x]="n";
          break;
        case "O": str5[x]="o";
          break;
        case "P": str5[x]="p";
          break;
        case "Q": str5[x]="q";
          break;
        case "R": str5[x]="r";
          break;
        case "S": str5[x]="s";
          break;
        case "T": str5[x]="t";
          break;
        case "U": str5[x]="u";
          break;
        case "V": str5[x]="v";
          break;
        case "W": str5[x]="w";
          break;
        case "X": str5[x]="x";
          break;
        case "Y": str5[x]="y";
          break;
        case "Z": str5[x]="z";
          break;
      }
  }
return str5;
}

console.log(isAnagram("raao","Amor"));

"use strict"

function convertSpaces(str){

var x=0, str2="", str3="", repS="%20", ary=[];

console.log(str.length, str);

for(var x=0; x<str.length; x++){
    if(str[x]===" "){
        str2+=repS;
    }else{
      str2+=str[x];
    }
}

return str2;
}


console.log(convertSpaces("hola mundo cruel te odio"));

"use strict"

function rounded(n){

var x, temp=0, ary=[], cont1=1, temp2=0;
n*=100;
x=n+"s";

for(var y=0; y < x.length; y++){
    if(x[y]!=="."){
      ary[y]=x[y];
    }else{
      break;
    }
}

for( var y=0; y<ary.length-1; y++){
    cont1*=10;
}

for(var y=0; y<ary.length; y++){
    temp+=ary[y]*cont1;
    cont1/=10;
}

 temp2=n-temp;

 if(temp2>=0.5&&temp2<=0.9){
    temp++;
    temp/=100;
 }else{
    temp/=100;
 }
return parseFloat(temp);
}

console.log(rounded(6.9939));

"use strict"

function squareSum(ary){

  var x = 0, temp=0, ary2=[];

  for(x=0; x<ary.length; x++){
      temp+=ary[x]*ary[x];
      ary2[x]=ary[x]*ary[x];
      //console.log(temp);
  }
console.log("The square of each element into the array: ", ary2);
return temp;
}

console.log("The sum of each element into the square array is: ",squareSum([1,2,2,4,5]));

"use strict"

function getTotal(days){

var total = 0, cost = 40, costOff1 = 20, costOff2=50;

if((days>0)&&(days<3)){
  total=days*cost;
}

if((days>=3)&&(days<7)){
  total=(days*cost)-costOff1;
  console.log("Your total cost is: $",(days*cost)," less $20 off");
}

if(days>=7){
  total=(days*cost)-costOff2;
  console.log("Your total cost is: $",(days*cost)," less $50 off");
}


return total;
}

console.log("The total cost of your rent is: $",getTotal(10));

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
