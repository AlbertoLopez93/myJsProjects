/****

timestamp: 1473136427000

****/
const MORSE = [
    {
        "morse": ".-",
        "char": "A"
    },
    {
        "morse": "-...",
        "char": "B"
    },
    {
        "morse": "-.-.",
        "char": "C"
    },
    {
        "morse": "-..",
        "char": "D"
    },
    {
        "morse": ".",
        "char": "E"
    },
    {
        "morse": "..-.",
        "char": "F"
    },
    {
        "morse": "--.",
        "char": "G"
    },
    {
        "morse": "....",
        "char": "H"
    },
    {
        "morse": "..",
        "char": "I"
    },
    {
        "morse": ".---",
        "char": "J"
    },
    {
        "morse": "-.-",
        "char": "K"
    },
    {
        "morse": ".-..",
        "char": "L"
    },
    {
        "morse": "--",
        "char": "M"
    },
    {
        "morse": "-.",
        "char": "N"
    },
    {
        "morse": "---",
        "char": "O"
    },
    {
        "morse": ".--.",
        "char": "P"
    },
    {
        "morse": "--.-",
        "char": "Q"
    },
    {
        "morse": ".-.",
        "char": "R"
    },
    {
        "morse": "...",
        "char": "S"
    },
    {
        "morse": "-",
        "char": "T"
    },
    {
        "morse": "..-",
        "char": "U"
    },
    {
        "morse": "...-",
        "char": "V"
    },
    {
        "morse": ".--",
        "char": "W"
    },
    {
        "morse": "-..-",
        "char": "X"
    },
    {
        "morse": "-.--",
        "char": "Y"
    },
    {
        "morse": "--..",
        "char": "Z"
    },
    {
        "morse": "-----",
        "char": "0"
    },
    {
        "morse": ".----",
        "char": "1"
    },
    {
        "morse": "..---",
        "char": "2"
    },
    {
        "morse": "...--",
        "char": "3"
    },
    {
        "morse": "....-",
        "char": "4"
    },
    {
        "morse": ".....",
        "char": "5"
    },
    {
        "morse": "-....",
        "char": "6"
    },
    {
        "morse": "--...",
        "char": "7"
    },
    {
        "morse": "---..",
        "char": "8"
    },
    {
        "morse": "----.",
        "char": "9"
    }
];
var letra="";
function morseEnc(str) {
  if(typeof str==="object"){
  str=str.join("")
  }
  str=str.toUpperCase()
  str=str.split("");
  console.log(str);
  var temp=str.map(busqueda);
  var tempfinal=temp.join(" ")
  return tempfinal
}
function busqueda(elemento) {
  letra=elemento
  if(elemento===" "){
    return "   "
  }else{
var index=MORSE.findIndex(encontrada)
if(index===undefined){return "hey"}
return MORSE[index].morse
}
}

function encontrada(e,i,a) {
return e.char===letra
}
console.log(morseEnc("hol/ mundo"));
