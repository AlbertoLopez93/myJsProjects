function transFrom(str){
var texto = str;
var n = "";
var cont=[];

  texto = texto.split(',');
  for( var i=0; i<texto.length; i++){
    n += texto[i];
  }
  texto=n

for(var ii =0; ii<texto.length;ii++){
n = texto.codePointAt(ii);

cont[ii] = n;
}
return cont;

}

module.exports = {
    transformToUnicode: transformToUnicode,
    returnAllIndex: returnAllIndex,
    capitalize: capitalize,
    closerIndex: closerIndex,
    reverseWords: reverseWords
}
