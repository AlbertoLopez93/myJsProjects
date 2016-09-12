/****

timestamp: 1472847067000

****/

"use strict"

function isInLine(array) {
 let tam=array.length,result,distg,distt=0;
 let dist1=[];
if (tam>1) {
      let xx= Math.pow(array[tam-1][0]-array[0][0],2);
      let yy= Math.pow(array[tam-1][1]-array[0][1],2);
      distg=parseFloat(Math.sqrt(xx+yy));
    for (var i = 0; i < tam-1; i++) {
              let x= Math.pow(array[i+1][0]-array[i][0],2);
              let y= Math.pow(array[i+1][1]-array[i][1],2);
              dist1[dist1.length]=parseFloat( Math.sqrt(x+y));
        }
   }
else {
      if (tam===1) {
          result="Se requiere mas de una coordenada";
         }
      else {
          result="Se requieren coordenadas";
         }
   }

for (let i = 0; i < dist1.length; i++) {
     distt+=dist1[i];
}
if (distt.toPrecision(12)===distg.toPrecision(12)) {
    result=true;
   }
else {
    result=false;
   }

return result;
}
