/****

timestamp: 1473121538000

****/

var letter,temp=0;
var copy=[];
function searchMorse(element)
    {
      return element.morse===letter;
    }

function parseMorse(element)
    { if (element===" ") {
            return " ";
         }
      else {
             letter=element;
             var aux=MORSE.findIndex(searchMorse);
             if (aux>=0) {
                  return MORSE[aux].char;
                }
             else
               return element;
           }
    }

function whiteSpaces(value) {
  if (value==="") {
        temp++;
        if (temp===4) {
                copy.push(" ");
                temp=0;
              }
       }
  else
      copy.push(value);
  }

function morseDec(element)
    { var result;
      if (Array.isArray(element)) {
            element=element.join("");
            var a=element.split(" ");
            a.forEach(whiteSpaces);
            result=copy;
            var result=result.map(parseMorse);
           }
      else {
            var a=element.split(" ");
            a.forEach(whiteSpaces);
            result=copy;
            var result=result.map(parseMorse);
           }
    return result.join("");
    }