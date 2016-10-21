"use strict"
function transformToUnicode(word)
{
    var exi=[];
    for(var u=0; u<word.length; u++)
    {
      exi[u]=word.charCodeAt(u);
    }
    return exi;
}

function returnAllIndex(word,subs)
{
  var ar=[];
  for(var k=0; k<word.length; k++)
  {
    var p=word.indexOf(subs,k);
    ar[ar.length]=p;
    if(p>=0)
      k=p;
  }
  return ar;
}

function capitalize(sentence)
{
  var cadena=sentence.split(" ");
  var out='';
  for(var i=0; i<cadena.length; i++)
  {
    var word='';
    word=cadena[i];
    var palabra=word[0].toUpperCase();
    for(var k=1; k<word.length; k++)
    {
      palabra+=word[k];
    }
    out=out+' '+palabra;
    palabra='';
  }
  return out;
}

function closerIndex(stringy, element)
{
  var first=stringy.indexOf(element);
  var last=stringy.indexOf(element);
  last=stringy.length-1-last;
  if(!first) //undefined
  {
    return first;
  }
  if(last<first)
  {
    last=(-last);
    return last;
  }
  return first;
}

function closerIndex(stringy, element)
{
  var first=stringy.indexOf(element);
  var last=stringy.indexOf(element);
  last=stringy.length-1-last;
  if(!first) //undefined
  {
    return first;
  }
  if(last<first)
  {
    last=(-last);
    return last;
  }
  return first;
}

function rempNum(word)
{
  var newword='';
  for(var w=0; w<word.length; w++)
  {
    if(word[w]=='1')
    {
      newword+='ONE';
    }
    else if(word[w]=='2')
    {
      newword+='TWO';
    }
    else if(word[w]=='3')
    {
      newword+='THREE';
    }
    else if(word[w]=='4')
    {
      newword+='FOUR';
    }
    else if(word[w]=='5')
    {
      newword+='FIVE';
    }
    else if(word[w]=='6')
    {
      newword+='SIX';
    }
    else if(word[w]=='7')
    {
      newword+='SEVEN';
    }
    else if(word[w]=='8')
    {
      newword+='EIGHT';
    }
    else if(word[w]=='9')
    {
      newword+='NINE';
    }
    else if(word[w]=='0')
    {
      newword+='ZERO';
    }
    else
    {
      newword+=word[w];
    }
  }
  return newword;
}

function reverseWords(word)
{
  var any=rempNum(word);
  var array=any.split(" ");
  var cadena='';
  for(var x=0; x<array.length; x++)
  {
    var y=array[x].length-1;
    while(y>=0)
    {
      cadena+=array[x][y];
      y--;
    }
    cadena+=' ';
  }
  return cadena;
}


module.exports = {
    transformToUnicode: transformToUnicode,
    returnAllIndex: returnAllIndex,
    capitalize: capitalize,
    closerIndex: closerIndex,
    reverseWords: reverseWords
}
