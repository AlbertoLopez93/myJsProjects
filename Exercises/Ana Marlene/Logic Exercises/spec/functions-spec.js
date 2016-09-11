function Anhagram(str1,str2){
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

console.log(Anhagram("roma","amor"))

function convertSpaces(str1) {
  var strg1= str1.split("");
  var strg2="";
  for (var i = 0; i < strg1.length; i++) {

    if(strg1[i]===" "){

      strg1[i]="%20";

    }

    strg2=strg2+strg1[i];
  }

  return strg2;

}

console.log(convertSpaces("hola mundo"))
