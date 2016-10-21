/****

timestamp: 1473108209000

****/


function morseEnc(word)
{
  "use strict";
  let aray=Array.from(word); //convert to array
  aray=aray.map(caps);
  function caps(e)
  {
    return e.toUpperCase(); //convert to capital letters
  }

  let morseAray=aray.map(mapeoMorse); //compare each element
  function mapeoMorse(cap) //find letter in MORSE and return morse code
  {
    if(' '==cap)
    {
      return '   ';
    }
    else
    {
      let m=MORSE.find(found);
      function found(b)
      {
        return cap==b.char;
      }
      if(m==undefined)
      {return '';}
      return m.morse;
    }
  }
  let code=morseAray.filter(quitEmpty); //empty was added in invalids chars
  function quitEmpty(x)
  {
    return x; //quit empty chars because are false
  }
  let morseCode=code.join(' '); //convert to string separing with whitespace
  return morseCode;
}