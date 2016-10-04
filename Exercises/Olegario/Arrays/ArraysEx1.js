/****

timestamp: 1472847038000

****/

"use strict"

function createCoords(n) {
 let result=[],aux;
 for (let i = 0; i < n; i++) {
     if (result.length>0) {
         let x=result[i-1][0]+parseInt(Math.random()*100)+1, y=parseInt(Math.random()*100);
         let cor=[x,y];
         result[result.length]=cor;
       }
     else {
         let x=parseInt(Math.random()*100), y=parseInt(Math.random()*100);
         let cor=[x,y];
         result[0]=cor;
       }
   }
return result;
}