function isAnagram(str1,str2){
  var astr1=[],astr2=[],c,c2=0;
  if(str1.length!==str2.length){
    return false;
  }
  else{
    astr1=isUpperCase(str1);
    astr2=isUpperCase(str2);
    for(var i=0;i<astr1.length;i++){
      c=0;
       for(var j=0;j<astr1.length;j++){
         if(astr1[i]===astr2[j]){
            if(c==0){
              c2++;
              c++;
            }
         }
     }
 }

    if(c2===astr1.length)
      return true;
    else {
      return false;
    }
  }
}



function isUpperCase(str){
  a=str.split("");
  may=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  min=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
  for(j=0;j<a.length;j++){
    for(var i=0;i<min.length;i++){
      if(a[j]===may[i]){
        a[j]=min[i];
    }
  }
}
  return a;
}
console.log(isAnagram("rrma","amar"));

function replaceSpaces(str){
  var a=str.split("");
  for(var i=0;i<a.length;i++){
    if(a[i]===" "){
      a[i]="%20"
    }
 }
 a=a.join("");
 return a;
}
console.log(replaceSpaces("   "));

function round(num){
  num=num*1000;
  str=num+"a",ent="",dec1="",dec2="";
  var punto,num2,final;
  for(i=0;i<str.length-1;i++){
    if(str[i]==="."){
      punto=i;
      break;
    }
    else{
      ent=ent+str[i];
    }
  }
  ent=parseInt(ent);
  dec1=str[punto+1];

 if(dec1>5)
   {
   ent++;
   dec1="0"
   }
num2=ent;
num2=num2*10;
num2=num2/100;
str=num2;
str=str+"a";
ent="";
for(i=0;i<str.length-1;i++){
  if(str[i]==="."){
    punto=i;
    break;
  }
  else{
    ent=ent+str[i];
  }
}
ent=parseInt(ent);
dec2=str[punto+1];
if(dec2>5)
  {
  ent++;
  dec2="0"
  }
  else {
    dec2=0;
  }
  ent=parseInt(ent);
  dec2=parseInt(dec2);
  final=ent+"."+dec2;
  final=parseFloat(final);
  final=final/100;
  console.log(final);

}
round(70.1256);

function rentACar(days){
  var tot=0;
  if(days>=7){
    tot=(days*40)-50;
    }
  else {
    if(days>=3){
      tot=(days*40)-20;
    }
    else {
      tot=days*40;
    }
  }
return tot;
}
console.log(rentACar(7));

var convertSpaces = replaceSpaces;
var rounded = round;
var getTotal = rentACar;

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
