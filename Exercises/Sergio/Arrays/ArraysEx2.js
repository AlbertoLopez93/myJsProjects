/****

timestamp: 1473037243000

****/

"use strict";

function isInLine(coo){
let A = []
A = coo;
let B = "";
let C = "";
let D = "";
let E = "";
let F = "";
let R = 0;
          D = Math.pow((A[0][0])-(A[A.length-1][0]),2)+Math.pow((A[0][1])-(A[A.length-1][1]),2);
          E = Math.sqrt(D);
          for (let i = 0; i < A.length-1; i++) {
            F =  Math.pow((A[i][0])-(A[i+1][0]),2)+Math.pow((A[i][1])-(A[i+1][1]),2);
            F = Math.sqrt(F);
              R+=F;
              F = 0;
          }
          R = R.toPrecision(12);
          E = E.toPrecision(12);
          if (E===R) {
            return true;
          }else {
            return false;
          }
}

