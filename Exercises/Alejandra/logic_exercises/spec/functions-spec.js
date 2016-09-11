"use strict"

function isAnagram(str1,str2){
var arreglo=str1.split("");
var arreglo2=str2.split("");
var a=[];
var con=0;
if(str1.length=== str2.length){
//var str2="";
  var abc= {"a":"A","b":"B","c":"C","d":"D","e":"E","f":"F","g":"G","h":"H","i":"I","j":"J","k":"K","l":"L","m":"M","n":"N","o":"O","p":"P","q":"Q","r":"R","s":"S","t":"T","u":"U","v":"V","w":"W","x":"X","y":"Y","z":"Z"}
 for(var i=0; i<str1.length; i++){
     for (var aux in abc) {
       if(arreglo[i]===aux){
         arreglo[i]=abc[aux];
         break;
       }
     }
     }
     for(var i=0; i<str2.length; i++){
         for (var aux in abc) {
           if(arreglo2[i]===aux){
             arreglo2[i]=abc[aux];
             break;
           }
         }
         }
            for(var i=0; i<str1.length; i++){
              for(var j=0; j<str2.length; j++){
              if(arreglo[i]===arreglo2[j]){
               con++;
              }

            }
}
}
if(con===str1.length){
  return true;
}
else{
  return "no es anagram";
}
}

console.log(isAnagram("roma","amor"))


function convertSpaces(str1)
 {
  var stri= str1.split("");
   var string="";
  for (var i = 0; i < stri.length; i++) {//for que recorrera tod mi arreglo

    if(stri[i]===" "){//si en toda mi cadena de stri existe un espacio basio

   stri[i]="%20";//coloca %20 en ese espacio

     }

      string=string+stri[i];//guardalo en variable string
  }

  return string;
}
console.log(convertSpaces("hola mundo"));

// "use strict"
//retorna la suma, del cuadrado de cada nùmero

function squareSum(arg){
  var arry=arg, suma = 0, pot = 0,z=0; //declaraciòn de variables
  for(var x=0; x<arry.length; x++){//for que va a recorrer mi arreglo, cada elemento de ellos

    pot = arry[x] * arry[x]
    suma += pot
  }

return suma;
}
console.log(squareSum([1,2,3]));
