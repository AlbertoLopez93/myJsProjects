/****

timestamp: 1473107640000

****/

"use strict";

module.exports = function(MORSE) {

let A;
let B;
let C;
function buscaM(texto){
    return texto.char===B;
}

function morseP (texto){
      if(texto===" "){
        return "   ";
      }else {
        B = texto;
        C = MORSE.findIndex(buscaM);
        if(C>=0){
              return MORSE[C].morse+" ";
        }
      }
}
function morseEnc(texto){
    "use strict";
    texto = texto.toUpperCase();
    let r1 = Array.from(texto);
    let r2 =  r1.map(morseP);
    return r2.join("");
}

  return morseEnc;
}