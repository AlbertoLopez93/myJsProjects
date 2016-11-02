/****

timestamp: 1473112119000

****/

function morseDec(morse)
{
  "use strict";
  
  let q=typeof(morse);
  if(q=='string')
  {
    morse=morse.split(' '); //separates each char code, but adds empty chars
  }

  let newary=morse.map(mapeo);
  function mapeo(a)
  {
    if(a=='')
    {
      let i=morse.indexOf('');
      morse.splice(i,4,' '); //for quit empty chars and remplace with white space
      a=' ';
    }
    if(a=='   ') //if receive an array, receive white spaces as 3 spaces
    {
      a=' ';
    }
    return a;
  }

  let character=newary.map(mapeoMorse); //compare each element
  function mapeoMorse(code) //find letter in MORSE and return morse code
  {
    if(' '==code)
    {
      return ' ';
    }
    else
    {
      let m=MORSE.find(found);
      function found(b)
      {
        return code==b.morse;
      }
      if(m==undefined)
      {return '';}
      return m.char;
    }
  }
  let strin=character.join('');
  return strin;
}