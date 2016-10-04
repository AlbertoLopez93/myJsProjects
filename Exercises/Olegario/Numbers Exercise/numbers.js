function calc(str1,str2,str3) {
  //let n1=parseInt(str1),n2=parseInt(str2);
  let n1=+str1,n2=+str2,n3=+str3;
  let result;

  if (Number.isInteger(n1)&&Number.isInteger(n2)) {
      switch (str3) {
        case "+":
                 result=n1+n2;
                 break;
        case "-":
                 result=n1-n2;
                 break;
        case "*":
                 result=n1*n2;
                 break;
        case "/":
                 result=n1/n2;
                 break;
        default:result="Character Not Found";
      }
      return result;
     }
  else {
    return NaN;
  }
}


function howBigNumberIs(str1,str2,str3) {
  //let n1=parseInt(str1),n2=parseInt(str2),n3=parseInt(str3);
  let n1=+str1,n2=+str2,n3=+str3;
  let result;

  if (Number.isInteger(n1)&&Number.isInteger(n2)&&Number.isInteger(n3)) {
       if (n1>n2) {
             if (n1>n3) {
                  if (n2>n3) {
                     result=Math.pow(Math.pow(n1,n3),n2);
                    }
                  else
                     result=Math.pow(Math.pow(n1,n2),n3);
                }
             else {
                  result=Math.pow(Math.pow(n3,n2),n1);
                }
          }
       else {
            if (n1>n3) {
                result=Math.pow(Math.pow(n2,n3),n1);
               }
            else {
                if (n2>n3) {
                     result=Math.pow(Math.pow(n2,n1),n3);
                   }
                else
                    result=Math.pow(Math.pow(n3,n1),n2);
               }
          }
     }
  else
     result= NaN;

console.log(result+"\n");
if (Number.isSafeInteger(result)) {
    return "OK";
   }
else {
     if (Number.isFinite(result)) {
        return "Warning";
       }
     else {
       return "To much";
     }
   }
return result;
}

function sumPositivesAndNegatives(array) {
let positives=0,negatives=0,result=[];

for (var i = 0; i < array.length; i++) {
     if (typeof(array[i])=="number") {

       }
   }
}

module.exports = {
    calc: calc,
    howBigNumberIs: howBigNumberIs,
    sumPositivesAndNegatives: sumPositivesAndNegatives
}
