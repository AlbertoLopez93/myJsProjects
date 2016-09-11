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
