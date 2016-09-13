/****

timestamp: 1473122385000

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

// var cont=0;      //moved insed the function
// var word = [];   //moved insed the function
function morseDec(morse){
  var cont=0;
  var word = [];
  if(Array.isArray(morse)){
    m = morse.join(" ");
    m = m.split(" ");
  }else{
    morse = morse.toUpperCase();
    m = morse.split(" ");
  }
  m.forEach(function(n){
    if(n === ""){
      cont++;
        if(cont === 4){
          word.push(" ");
          cont = 0;
        }
    }else{
      word.push(n);
    }
  });

  var newIndex = word.map(function (a){
    if(a === " "){
      return " ";
    }
    else{
      var index = MORSE.findIndex(function (obj){
        if(obj['morse'] === a){
          return true;
        }
        return false;
      });

      if(MORSE[index]){
        return MORSE[index].char;
      }
      else{
        return a;
      }
    }
  });

  newIndex = newIndex.join("");
  return newIndex;

}

//console.log(morseDec(['....', '---', '.-..', '.-','','','','', '','--', '..-','-.', '-..','---', '','','','', '','---', '.-.', '.-']));
console.log(morseDec('.... --- .-.. .-       -- ..- -. -.. ---    --- .-. .-'));

