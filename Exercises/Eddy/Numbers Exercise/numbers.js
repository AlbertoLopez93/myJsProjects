function calc (param1, param2, param3) {
 var potato = '';
 var numOne = parseInt (param1);
 var numTwo = parseInt (param2);
 if (!isNaN (numOne) && !isNaN (numTwo)) {
  switch (true) {
   case param3 == '+':
    potato = numOne + numTwo;
    break;
   case param3 == '-':
    potato = numOne + numTwo;
    break;
   case param3 == '*':
    potato = numOne * numTwo;
    break;
   case param3 == '/':
    potato = numOne / numTwo;
    break;

   default:
    potato = 'is not a valid aperation you need to use only these +,-,/,*'
  }
 }
 if (isNaN (numOne) || isNaN (numTwo)) {
  potato = 'is not a valid number only 0-9  '
 }
 return potato;
}


function howBigNumberIs (param1, param2, param3) {
 var potato = NaN;
 var numOne = parseInt (param1);
 var numTwo = parseInt (param2);
 var numThree = parseInt (param3);
 var result = 0;
 if (!isNaN (+numOne) && !isNaN (+numTwo) && !isNaN (+numThree)) {
  if (numOne >= numTwo && numOne >= numThree) {
   if (numTwo >= numThree) {
    result = Math.pow (numOne, numTwo);
    result = Math.pow (result, numThree);
    potato = result;
   } else {
    result = Math.pow (numOne, numThree);
    result = Math.pow (result, numTwo);
    potato = result;
   }
  }
  if (numTwo >= numThree && numTwo >= numOne) {
   if (numThree >= numOne) {
    result = Math.pow (numTwo, numOne);
    result = Math.pow (result, numThree);
    potato = result;
   } else {
    result = Math.pow (numTwo, numThree);
    result = Math.pow (result, numOne);
    potato = result;
   }
  }
  if (numThree >= numOne && numThree >= numTwo) {
   if (numOne >= numTwo) {
    result = Math.pow (numThree, numTwo);
    result = Math.pow (result, numOne);
    potato = result;
   }
   if (numTwo > numOne) {
    result = Math.pow (numThree, numOne);
    result = Math.pow (result, numTwo);
    potato = result;
   }

  }
 }
 if (Number.isNaN(potato)){
  return potato = NaN;
 }
 if ( Number.isSafeInteger(potato)){
  return potato = 'ok';
 }
 if (!Number.isFinite(potato)){
  return potato = 'warning'
 }

 return potato
}

function toOneDimension (param) {
 var sum = '';
 for (var i = 0; i < param.length; i++) {
  if (param[i] instanceof Object) {
   toOneDimension (param[i]);
   sum += param[i];
  }
 }
 return sum;
}
function sumPositivesAndNegatives (param) {
 var dimension = toOneDimension (param);
 var positive = [];
 var negative = [];
 var sumPositive = 0;
 var sumNegarive = 0;
 dimension = dimension.split (',');
 for (var i = 0; i < dimension.length; i++) {
  if (dimension[i] === 'true') {
   dimension[i] = 1;
  }
  if (dimension[i] === 'false') {
   dimension[i] = 0;
  }
  if (parseInt (dimension[i]) > 0) {
   positive[positive.length] = dimension[i];
  }
  if (parseInt (dimension[i]) < 0) {
   negative[negative.length] = dimension[i]
  }
 }
 for(var i = 0;i< positive.length;i++){
  sumPositive+=parseFloat(positive[i]);
 }
 for(var i = 0;i< negative.length;i++){
  sumNegarive+=parseFloat(negative[i]);
 }
 return [sumPositive, sumNegarive];
}


module.exports = {
    calc: calc,
    howBigNumberIs: howBigNumberIs
}
