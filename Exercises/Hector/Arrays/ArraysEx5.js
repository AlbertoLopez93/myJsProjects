/****

timestamp: 1473122336000

****/

// const MORSE = [
//     {
//         "morse": ".-",
//         "char": "A"
//     },
//     {
//         "morse": "-...",
//         "char": "B"
//     },
//     {
//         "morse": "-.-.",
//         "char": "C"
//     },
//     {
//         "morse": "-..",
//         "char": "D"
//     },
//     {
//         "morse": ".",
//         "char": "E"
//     },
//     {
//         "morse": "..-.",
//         "char": "F"
//     },
//     {
//         "morse": "--.",
//         "char": "G"
//     },
//     {
//         "morse": "....",
//         "char": "H"
//     },
//     {
//         "morse": "..",
//         "char": "I"
//     },
//     {
//         "morse": ".---",
//         "char": "J"
//     },
//     {
//         "morse": "-.-",
//         "char": "K"
//     },
//     {
//         "morse": ".-..",
//         "char": "L"
//     },
//     {
//         "morse": "--",
//         "char": "M"
//     },
//     {
//         "morse": "-.",
//         "char": "N"
//     },
//     {
//         "morse": "---",
//         "char": "O"
//     },
//     {
//         "morse": ".--.",
//         "char": "P"
//     },
//     {
//         "morse": "--.-",
//         "char": "Q"
//     },
//     {
//         "morse": ".-.",
//         "char": "R"
//     },
//     {
//         "morse": "...",
//         "char": "S"
//     },
//     {
//         "morse": "-",
//         "char": "T"
//     },
//     {
//         "morse": "..-",
//         "char": "U"
//     },
//     {
//         "morse": "...-",
//         "char": "V"
//     },
//     {
//         "morse": ".--",
//         "char": "W"
//     },
//     {
//         "morse": "-..-",
//         "char": "X"
//     },
//     {
//         "morse": "-.--",
//         "char": "Y"
//     },
//     {
//         "morse": "--..",
//         "char": "Z"
//     },
//     {
//         "morse": "-----",
//         "char": "0"
//     },
//     {
//         "morse": ".----",
//         "char": "1"
//     },
//     {
//         "morse": "..---",
//         "char": "2"
//     },
//     {
//         "morse": "...--",
//         "char": "3"
//     },
//     {
//         "morse": "....-",
//         "char": "4"
//     },
//     {
//         "morse": ".....",
//         "char": "5"
//     },
//     {
//         "morse": "-....",
//         "char": "6"
//     },
//     {
//         "morse": "--...",
//         "char": "7"
//     },
//     {
//         "morse": "---..",
//         "char": "8"
//     },
//     {
//         "morse": "----.",
//         "char": "9"
//     }
// ];

var text = ["Hola"," ", "Mundo"];
//var text = "Hola Mundo";


function morseEnc(text){
  if(Array.isArray(text)){
    a = text.join("");
    a = a.toUpperCase();
    a = a.split("");
    console.log(a);
  }else{
    text = text.toUpperCase();
    a = text.split("");
  }



  var b = 0;
  var b = a.map(function(n){
    if(n === " " && b == 0){
      b = 1;
      return " ";
    }
    if(n === " " && b == 1){
      return false;
    }
    else {
      b = 0;
      return n;
    }
  });

  b = b.filter(Boolean);

  var newIndex = b.map(function (a){
    if(a === " "){
      return "   ";
    }
    else{
      var index = MORSE.findIndex(function (obj){
        if(obj['char'] === a){
          return true;
        }
        return false;
      });

      if(MORSE[index]){
        return MORSE[index].morse;
      }
      else{
        return a;
      }
    }
  });

  newIndex = newIndex.join(' ');
  return newIndex;
}

console.log(morseEnc(text));
