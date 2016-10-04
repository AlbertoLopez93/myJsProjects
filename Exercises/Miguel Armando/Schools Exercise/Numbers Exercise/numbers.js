function calc (num1, num2, operator){
 var res;
 if (Number.isNaN(+num1) || Number.isNaN(+num2)){
  return NaN;
 }
 switch(true){
  case operator === '*':
   res = ((Number.parseFloat(num1))*(Number.parseFloat(num2)));
   return res;
  case operator === '/':
   res = ((Number.parseFloat(num1))/(Number.parseFloat(num2)));
   return res;
  case operator === '+':
   res = ((Number.parseFloat(num1))+(Number.parseFloat(num2)));
   return res;
  case operator === '-':
   res = ((Number.parseFloat(num1))-(Number.parseFloat(num2)));
   return res;
  default:
   return 'Invalid parameter';
 }
}


function howBigNumberIs (num1, num2, num3){
 var res = 0;
 if (Number.isNaN(+num1) || Number.isNaN(+num2) || Number.isNaN(+num3)){
  return NaN;
 }
 if(+num1 >= +num2 && +num1 >= +num3){
  if(+num2 >= +num3){
   res = Math.pow(Number.parseFloat(num1), (Number.parseFloat(num3)));
   res = Math.pow(res, num2);
  } else {
   res = Math.pow(Number.parseFloat(num1), (Number.parseFloat(num2)));
   res = Math.pow(res, num3);
  }
 } else if(+num2 >= +num1 && +num2 >= +num3){
    if(+num1 >= +num3){
     res = Math.pow(Number.parseFloat(num2), (Number.parseFloat(num3)));
     res = Math.pow(res, num3);
    } else {
     res = Math.pow(Number.parseFloat(num2), (Number.parseFloat(num1)));
     res = Math.pow(res, num1);
    }
 } else if(+num3 >= +num2 && +num3 >= +num1){
    if(+num2 >= +num1){
     res = Math.pow(Number.parseFloat(num3), (Number.parseFloat(num1)));
     res = Math.pow(res, num2);
    } else {
     res = Math.pow(Number.parseFloat(num3), (Number.parseFloat(num2)));
     res = Math.pow(res, num1);
    }
 }
 if(Number.isSafeInteger(res)){
  return 'Ok';
 } else if(!(Number.isFinite(res))){
  return 'Too Much';
 } else {
  return 'Warning';
 }
}

function sumPositivesAndNegatives(arr){
 var sumPositives = 0;
 var sumNegatives = 0;
 var temp = 0;
 for(let i = 0; i < arr.length; i++){
  if (Number.isNaN(+arr[i])){
   continue;
  }
  if(arr[i] instanceof String){
   if(!(Number.isNaN(Number.parseFloat(arr[i])))){
    temp = Number.parseFloat(arr[i]);
    if(temp < 0){
     sumNegatives += temp;
     temp = 0;
    } else {
     sumPositives += temp;
     temp = 0;
    }
   }
  }
  if(arr[i] instanceof Number){
   if(!(Number.isNaN(Number.parseFloat(arr[i])))){
    temp = Number.parseFloat(arr[i]);
    if(temp < 0){
     sumNegatives += temp;
     temp = 0;
    } else {
     sumPositives += temp;
     temp = 0;
    }
   }
  }
  if(+(arr[i])){
   if(!(Number.isNaN(Number.parseFloat(arr[i])))){
    temp = Number.parseFloat(arr[i]);
    if(temp < 0){
     sumNegatives += temp;
     temp = 0;
    } else {
     sumPositives += temp;
     temp = 0;
    }
   }
  }
  if(arr[i]===true){
   sumPositives++;
  }
  if(arr[i] instanceof Array){
   for(let j = 0; j < arr[i].length; j++){
    if (Number.isNaN(Number.parseFloat(arr[i][j]))){
     continue;
    }
    if(arr[i][j] instanceof String){
     if(!(Number.isNaN(Number.parseFloat(arr[i][j])))){
      temp = Number.parseFloat(arr[i][j]);
      if(temp < 0){
       sumNegatives += temp;
       temp = 0;
      } else {
       sumPositives += temp;
       temp = 0;
      }
     }
    }
    if(arr[i][j] instanceof Number){
     if(!(Number.isNaN(Number.parseFloat(arr[i][j])))){
      temp = Number.parseFloat(arr[i][j]);
      if(temp < 0){
       sumNegatives += temp;
       temp = 0;
      } else {
       sumPositives += temp;
       temp = 0;
      }
     }
    }
    if(+(arr[i][j])){
     if(!(Number.isNaN(Number.parseFloat(arr[i][j])))){
      temp = Number.parseFloat(Number.parseFloat(arr[i][j]));
      if(temp < 0){
       sumNegatives += temp;
       temp = 0;
      } else {
       sumPositives += temp;
       temp = 0;
      }
     }
    }
    if(arr[i]===true){
     sumPositives++;
    }
   }
  }
 }
 var arrEnd = [sumPositives, sumNegatives];
 return arrEnd;
}

module.exports = {
    calc: calc,
    howBigNumberIs: howBigNumberIs,
    sumPositivesAndNegatives: sumPositivesAndNegatives
}
