/****

timestamp: 1473114684000

****/

function morseEnc(dicc,a){
  var nuevo="";
  if(Array.isArray(a)===false){
    a=a.toUpperCase();
    a=Array.from(a);
  }
  else{
    a=a.join("");
    a=a.toUpperCase();
    a=Array.from(a);
  }
  a.map(function(char){
    dicc.forEach(function(entry) {
    if(entry.char===char){
       nuevo=nuevo+entry.morse+" ";
     }
    });
  if(char===" "){
       nuevo=nuevo+"    ";
  }
 });
 return nuevo;
}
console.log(morseEnc(MORSE,"m?h"));