/****

timestamp: 1472811600000
skype

****/

"use strict";

function orderPeople(array) {
  return array.sort(
                     function(x,y){
                            let result=0;
                            let aux1=x.eyeColor+x.name,aux2=y.eyeColor+y.name;
                            if (aux1>aux2) 
                                      result=1;
                            else
                               result=-1;
                            return result;
                         }
                   );
}