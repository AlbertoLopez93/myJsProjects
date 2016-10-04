function transformToUnicode(str){
var arre=str.split('')
console.log(arre);
for (var i = 0; i < arre.length; i++) {
arre[i]=str[i].codePointAt(arre[i]);
// console.log(arre[i]);
//console.log(result);
}
return arre
}


function returnAllIndex(str1,str2) {
var x=0
var i=-1
var cadena=""
var resul=[]
while((i=str1.indexOf(str2, i+1)) >0){
resul[x] = i;
x++;
}
if(resul == ""){
return -1;
}
else {
return resul;
}
}


function capitalize(str1) {
var resul=""
str1=str1.split(' ')
for(var i=0;i<str1.length;i++){
//console.log(str1[i]);
//console.log(str1[i].charAt(0).toUpperCase()+str1[i].slice(1));
resul=resul+str1[i].charAt(0).toUpperCase()+str1[i].slice(1)+" ";
//console.log(resul[i]=str1[i].substr(0,1).toUpperCase()+str1[i].substr(1,str1.length).toLowerCase());
}
return resul
}


function closerIndex(str1,str2) {
inicio=""
final=""
if(str2.length>1){
primerCaracter=str2[0];
ultimoCaracter=str2.charAt(str2.length-1);
//console.log(ultimoCaracter);
}
if(str2.length===1){
primerCaracter=str2[0];
ultimoCaracter=str2[0];
}
if (str1.includes(str2)) {
if(str1.indexOf(primerCaracter)==(str1.length-(str1.lastIndexOf(ultimoCaracter)+str2.length))&&str2.length<= 1){
			return 0;
		}
if(str1.indexOf(primerCaracter)===str1.length-(str1.indexOf(str2)+str2.length)&&str2.length>1){
			return 0;
		}
		if(str1.indexOf(primerCaracter)<str1.length-(str1.indexOf(str2)+str2.length)){
			return 1;
		}
		if(str1.indexOf(primerCaracter)>str1.length-(str1.indexOf(str2)+str2.length)){
			return -1;
		}
}
else{
return undefined
}
}


function reverseWords(str1) {
var resul="";
d=str1.split(" ");
for (var i = 0; i < d.length; i++) {
for (var j=  d[i].length-1; j >= 0; j--) {
resul= resul +[d[i][j]];
}
resul=resul + " "
}
resul=converter(resul)
resul=resul.join("")
return resul;
}
function converter (param) {
var result = [];
for (var i = 0; i < param.length; i++) {
switch (true) {
case param[i] == '0':
result[i] = 'ZERO';
break;
case param[i] == '1':
result[i] = 'ONE';
break;
case param[i] == '2':
result[i] = 'TWO';
break;
case param[i] == '3':
result[i] = 'THREE';
break;
case param[i] == '4':
result[i] = 'FOUR';
break;
case param[i] == '5':
result[i] = 'FIVE';
break;
case param[i] == '6':
result[i] = 'SIX';
break;
case param[i] == '7':
result[i] = 'SEVEN';
break;
case param[i] == '8':
result[i] = 'EIGTH';
break;
case param[i] == '9':
result[i] = 'NINE';
break;
default:
result[i] = param[i];
}
}return result;
}


module.exports = {
    transformToUnicode: transformToUnicode,
    returnAllIndex: returnAllIndex,
    capitalize: capitalize,
    closerIndex: closerIndex,
    reverseWords: reverseWords
}
