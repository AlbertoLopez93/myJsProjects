/****

timestamp: 1472829060000
skype

****/

function comoQuieras(a, b){
var eye1 = a.eyeColor;
var eye2= b.eyeColor;
var name1 = a.name;
var name2= b.name;
if(eye1<eye2){
return -1;
}
else{
if(eye1>eye2){
return 1;
}
else{
if(name1>name2){
return 1;
}
else{
if(name1<name2){
return -1;
}
else{
return 0;
}
}
}
}
}
function orderPeople(a){
a.sort(comoQuieras);
return a;
}
// console.log(sort(a));

