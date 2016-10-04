/****

timestamp: 1472839020000

****/
"use strict";

let c=0;
function createCoords(n){
  var x=0, y=0, ary=new Array(), i=0, j=0, temp=0;
  for(x=0; x<n; x++){
      if(x===0){
          i=Math.round(Math.random()*100);
          j=Math.round(Math.random()*100)
          ary[x]="[" + i + "," + j + "]";
          temp=i;
      }
      if(x>0){
        i=(Math.round(Math.random()*100))+temp+1;
        j=Math.round(Math.random()*100);
        ary[x]="[" + i + "," + j + "]";
        temp=i;
      }
      y++;
  }
return ary;
}
c=createCoords(20);
console.log(c);
