function convertSpaces(str1) {
  var string1= str1.split("");
   string2="";
  for (var i = 0; i < string1.length; i++) {

    if(string1[i]===" "){

   string1[i]="%20";

     }

      string2=string2+string1[i];
  }

  return string2;

}

function getTotal(days){

  var total=0,resultado="";
if (days===1||days===2) {

  total=days*40
  resultado="$"+total;

  }
  var total=0,resultado="";
if (days===1||days===2) {
  total=days*40
  resultado="$"+total;

  }
  if (days>=3&&days<7) {
    total=days*40-20
    resultado="$"+total;
    }
    if (days>=7) {
      total=days*40-50
      resultado="$"+total;
      }

return resultado;
}

return resultado;
}


function squareSum(arg) {
  var ary=arg,suma=0,cuadrado=0;
  for (var i = 0; i < ary.length; i++) {
  cuadrado=ary[i]*ary[i];
  suma=suma+cuadrado;
  }
return suma;
}
