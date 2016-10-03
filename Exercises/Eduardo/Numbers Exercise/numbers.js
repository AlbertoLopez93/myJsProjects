function calc(num1,num2,operator) {
var ope=0;
num1=parseInt(num1)
num2=parseInt(num2)
if(operator==="+"||operator==="*"||operator==="-"||operator==="/"){
if(!isNaN(num1)||(!isNaN(num2))){
if(operator==="+"){ope=num1+num2}
if(operator==="-"){ope=num1-num2}
if(operator==="*"){ope=num1*num2}
if(operator==="/"){ope=num1/num2}
}if(isNaN(ope)){
return NaN
}
}else {
return "Invalid parameter"
}
return ope
}



function howBigNumberIs(num1,num2,num3) {
mayor=0
menor=0
medio=0
resul=0
num1=parseInt(num1)
num2=parseInt(num2)
num3=parseInt(num3)
if(!isNaN(num1)&&(!isNaN(num2))&&(!isNaN(num3))){
//console.log("los tres son numeros");
if(num1>num2&&num1>num3){
if(num2>num3){
mayor=num1
medio=num2
menor=num3
resul=Math.pow(Math.pow(num1,num3),num2);
console.log(resul);
if(Number.isSafeInteger(resul)){
return "Ok"
}else{
if(Number.isFinite(resul)){
return "Warning"
}
else{
return "Too much"
}
}
}if(num3>num2){
mayor=num1
medio=num3
menor=num2
resul=Math.pow(Math.pow(num1,num2),num3);
console.log(resul);
if(Number.isSafeInteger(resul)){
return "Ok"
}else{
if(Number.isFinite(resul)){
return "Warning"
}
else{
return "Too much"
}
}
}
}
if(num2>num1&&num2>num3){
if(num1>num3){
mayor=num2
medio=num1
menor=num3
resul=Math.pow(Math.pow(num2,num3),num1);
console.log(resul);
if(Number.isSafeInteger(resul)){
return "Ok"
}else{
if(Number.isFinite(resul)){
return "Warning"
}
else{
return "Too much"
}
}
}if(num3>num1){
mayor=num2
medio=num3
menor=num1
resul=Math.pow(Math.pow(num2,num1),num3);
console.log(resul);
if(Number.isSafeInteger(resul)){
return "Ok"
}else{
if(Number.isFinite(resul)){
return "Warning"
}
else{
return "Too much"
}
}
}
}
if(num3>num1&&num3>num2){
if(num1>num2){
mayor=num3
medio=num1
menor=num2
resul=Math.pow(Math.pow(num3,num2),num1);
console.log(resul);
if(Number.isSafeInteger(resul)){
return "Ok"
}else{
if(Number.isFinite(resul)){
return "Warning"
}
else{
return "Too much"
}
}
}else{
mayor=num3
medio=num2
menir=num1
resul=Math.pow(Math.pow(num3,num1),num2);
console.log(resul);
if(Number.isSafeInteger(resul)){
return "Ok"
}else{
if(Number.isFinite(resul)){
return "Warning"
}
else{
return "Too much"
}
}
}
}
}else{return NaN}
}

module.exports = {
    calc: calc,
    howBigNumberIs: howBigNumberIs
}
