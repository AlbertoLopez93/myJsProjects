/****

timestamp: 1472838900000

****/

function createCoords(n){
  "use strict";
let largo = n;
let ary = [];
let v = ["",""];
let t0 =0;
let t1 = 0;
for(let i = 0; i<largo; i++){
      v[0]  = parseInt((Math.random()*100)+(t0+1));
      v[1] = parseInt(Math.random()*100);

      ary[ary.length] = v;
      t0 = v[0]
      v = ["",""];
      t1 = t0+100;
    }return ary;
}
