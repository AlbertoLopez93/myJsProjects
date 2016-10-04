/****

timestamp: 1472940229000

****/

"use strict";

let c;
function isInLine(ary){
var i=0, aryt=[], d=0, temp=0;
  for(i=ary.length-1; i>0; i--){
      aryt[i-1]=calSegm(ary[i], ary[i-1]);
   }
   d=calSegm(ary[0], ary[ary.length-1]);

   for(i=0; i<aryt.length; i++){
        temp+=aryt[i];
   }

   temp=temp.toFixed(2);
   d=d.toFixed(2);
      //console.log(temp, d);

      if(temp===d){
          return true;
      }else{
        return false;
      }
}

c=isInLine([[1,1],[2,2],[3,3],[4,5]]);

console.log(c);

function calSegm(ary2, ary1){
  var tempx=0, tempy=0, result=0;

      tempx=Math.pow(ary2[0]-ary1[0],2);
      tempy=Math.pow(ary2[1]-ary1[1],2);
      result=Math.sqrt(tempx+tempy);

      return result;
}
