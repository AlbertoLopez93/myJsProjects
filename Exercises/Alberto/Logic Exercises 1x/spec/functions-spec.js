"use strict"

function isAnagram(one,two)
{
  var lower=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
  var capital=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var oneh=[], twoh=[], aux;
  if(one.length!=two.length) //must not be an anagram
  {
    return false;
  }

  for(var i=0; i<one.length; i++)
  {
    for(var j=0; j<28; j++)
    {
      if((one[i]==lower[j])||(one[i]==capital[j]))
        oneh[i]=capital[j]; //convert to capital letter
    }
  }
  for(i=0; i<two.length; i++)
  {
    for(j=0; j<28; j++)
    {
      if((two[i]==lower[j])||(two[i]==capital[j]))
        twoh[i]=capital[j]; //convert to capital letter
    }
  }

  //order letters in two arrays by improved bubble
  for(i=oneh.length-1; i>0; i-=1)
  {
    for(j=oneh.length-1; j>0; j-=1)
    {
      if(oneh[j]<oneh[j-1])
      {
        aux=oneh[j-1];
        oneh[j-1]=oneh[j];
        oneh[j]=aux;
      }
      if(twoh[j]<twoh[j-1])
      {
        aux=twoh[j-1];
        twoh[j-1]=twoh[j];
        twoh[j]=aux;
      }
    }
  }
  for(i=0; i<oneh.length; i++)
  {
    if(oneh[i]!=twoh[i])
      return false;
  }
  return true;
}

function convertSpace(str)
{
  var out='', k=0;
  while(str[k])
  {
    if(str[k]!=' ')
      out+=str[k];
    else
    {
      out+='%20';
    }
    k+=1;
  }
  return out;
}

function rounded(num)
{
  var number=num+'.000'; //.000 if user enter an integer, 'a' only for convert to string
  var p=0, result='';
  while(number[p]!='.')
  {
    result+=number[p];
    p++;
  }
  var fraction=number[p+1]+number[p+2]; //digits after '.'
  if(number[p+3]>=5)
  {
    if(fraction==99)
    {
      if(result[0]=='-')
        result--;
      else
        result++;
      fraction='00';
    }
    else
      fraction++;
  }
  result=result+'.'+fraction;
  //result=parseFloat(result);
  return result;
}

function getTotal(days)
{
  var prize=40*days;
  if (days>=7)
  {
    prize-=50;
    return prize;
  }
  if (days>=3)
    prize-=20;
  return prize;
}

function squareSum(array)
{
  var sum=0;
  for (var k=0; k<array.length; k++)
  {
    var power2=array[k]*array[k];
    sum+=power2;
  }
  return sum;
}

function convertMatrix(matrix)
{
  var other=matrix;
  for(var g=0; g<matrix.length; g++)
  {
    for(var h=0; h<matrix[0].length; h++)
    {
      if(matrix[g][h]==0)
      {
        for(var i=0; i<matrix.length; i++)
        {
          other[g][i]=0;
          other[i][h]=0;
        }
      }
    }
  }
  return other;
}

function rotate(matrix)
{
  var mat=[], matrow=[];
  for(var i=0; i<matrix.length; i+=1)
  {
    for(var j=0; j<matrix[0].length; j+=1)
    {
      matrow[j]=matrix[matrix.length-1-j][i];
    }
    mat[i]=matrow;
    matrow=[];
  }
  return mat;
}

function isSubstring(str,sub)
{
  for(var d=0; d<str.length; d+=1)
  {
    if(str[d]==sub[0]) //first element in string
    {
      proc: for(var e=0; e<sub.length; e+=1)
      {
        if(str[d+e]!=sub[e]) { break proc; }
      }
      if(e==sub.length) //complete verify substring
        return true;
    }
  }
  return false; //ther isn't match with all substring
}

function isRotation(word1, word2)
{
  if(word1.length!=word2.length)
    return false;

  word1+=word1;
  if(isSubstring(word1,word2))
    return true;
  else
    return false;
}

console.log(isAnagram('DoroTeo','Teodoro'));
console.log(convertSpace("Hello my  friends"));
console.log(rounded(-15.9959));
console.log(getTotal(10));
console.log(squareSum([-3,4,2]));
console.log(isRotation('waterbottle','bottlewater'));
var matrix=[[9,4,6],[7,0,5],[2,5,0]];
console.log(convertMatrix(matrix));
var m=[[1,2,3],[4,5,6],[7,8,9]];
console.log(rotate(m));


var convertSpaces = convertSpace;

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

