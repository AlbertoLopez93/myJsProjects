function transformToUnicode(str){
var a=[];
for(i=0;i<str.length;i++){
a[i]=str.codePointAt(i);
}
return a;
}


function returnAllIndex(lookinto,str){
var r,length,a=[];
length=str.length;
for(var i=0;i<lookinto.length;i=i+length){
r=lookinto.indexOf(str,i);
if(r!==-1){
a[a.length]=r;
}
}
if(r===-1){
return -1;
}
else{
return a;
}
}


function capitalize(str){
var a=[],res="",temp,temp2="";
a=str.split(" ");
for(var i=0;i<a.length;i++){
a[i]=a[i].toString();
}
for(var i=0;i<a.length;i++){
temp=a[i].charCodeAt(0);
if(temp>=97 && temp<=122){
temp2=String.fromCharCode(temp-32);
a[i]=a[i].substring(0, 0) +temp2+a[i].substring(1,a[i].length);
res=res+a[i]+" ";
}
else{
res=res+a[i]+" ";
}
}
return res;
}


function reverseWords(str){
var p,reves="",nueva="";
a=str.split(" ");
for(var i=0;i<a.length;i++){
for(var j=a[i].length-1;j>=0;j--){
reves=reves+a[i][j];
}
reves=reves+" ";
}
a=reves.split(" ");
for(i=0;i<a.length;i++){
a[i]=a[i].toString();
}
for(i=0;i<a.length;i++){
for(var j=0;j<a[i].length;j++){
p=isNaN(a[i][j]);
if(p===false){
switch(a[i][j]){
case '0':
a[i]=a[i].replace("0", "ZERO");
break;
case '1':
a[i]=a[i].replace("1", "ONE");
break;
case '2':
a[i]=a[i].replace("2", "TWO");
break;
case '3':
a[i]=a[i].replace("3", "THREE");
break;
case '4':
a[i]=a[i].replace("4", "FOUR");
break;
case '5':
a[i]=a[i].replace("5", "FIVE");
break;
case '6':
a[i]=a[i].replace("6", "SIX");
break;
case '7':
a[i]=a[i].replace("7", "SEVEN");
break;
case '8':
a[i]=a[i].replace("8", "EIGHT");
break;
case '9':
a[i]=a[i].replace("9", "NINE");
break;
}
}
}
}
for(i=0;i<a.length;i++){
for(j=0;j<a[i].length;j++){
nueva=nueva+a[i][j];
}
nueva=nueva+" ";
}
return nueva;
}



module.exports = {
    transformToUnicode: transformToUnicode,
    returnAllIndex: returnAllIndex,
    capitalize: capitalize,
    closerIndex: closerIndex,
    reverseWords: reverseWords
}
