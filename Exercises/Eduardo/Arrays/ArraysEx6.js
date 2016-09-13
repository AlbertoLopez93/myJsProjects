/****

timestamp: 1473264936000

****/

var letra="";
function morseEnc(morse) {
  morse=morse.split(" ")
  console.log(morse);
  var temp=morse.map(busqueda);
  var tempfinal=temp.join("")
  tempfinal=tempfinal.split("  ")
  tempfinal=tempfinal.join(" ")
  return tempfinal
}
function busqueda(elemento) {
  letra=elemento
  if(elemento===""){
    return " "
  }else{
var index=MORSE.findIndex(encontrada)

return MORSE[index].char
}
}

function encontrada(e,i,a) {
return e.morse===letra
}
