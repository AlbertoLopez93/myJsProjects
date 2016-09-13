/****

timestamp: 1473136427000

****/

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

return MORSE[index].morse
}
}

function encontrada(e,i,a) {
return e.char===letra
}

