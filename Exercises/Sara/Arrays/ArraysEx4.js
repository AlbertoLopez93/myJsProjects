/****

timestamp: 1472811240000
skype

****/

function sortEyeColor(personas, personas2){
var x = personas.eyeColor;
var y = personas2.eyeColor;
var z = personas.name;
var a = personas2.name;
if(x<y){
return -1;
}
else{
if(x>y){
return 1;
}
else{
if(z>a){
return 1;
}
else{
if(z<a){
return -1;
}
else{
return 0;
}
}
}
}
}
function orderPeople(personas){
personas.sort(sortEyeColor);
return personas;
}
// console.log(orderPeople(personas));

