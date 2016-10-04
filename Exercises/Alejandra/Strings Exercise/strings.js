function transformToUnicode(string){
var arreglo = [];
for(var i=0; i<string.length;i++){
  arreglo[i] = string.codePointAt(i)

}
return arreglo;


}

module.exports = {
    transformToUnicode: transformToUnicode
}
