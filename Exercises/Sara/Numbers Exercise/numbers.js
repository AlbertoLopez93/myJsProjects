function calc(n1,n2,ope){
var res;
if(isNaN(n1)===true || isNaN(n2)===true){
return NaN;
}
n1=parseInt(n1);
n2=parseInt(n2);
switch(ope){
case "*":
r=n1*n2;
break;
case "/":
r=n1/n2;
break;
case "+":
r=n1+n2;
break;
case "-":
r=n1-n2;
break;
default:
return "Invalid parameter, not an operator.";
}
return r;
}

module.exports = {
    calc: calc,
    howBigNumberIs: howBigNumberIs,
    sumPositivesAndNegatives: sumPositivesAndNegatives
}
