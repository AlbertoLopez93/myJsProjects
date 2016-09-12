/****

timestamp: 1472807880000
skype

****/

function play(a,str1,str2,pos){
var na=a,position,cad;
na.unshift("al inicio");
na.push("al final");
position=parseInt(pos[0]);
cad=pos[1];
cad=cad+"";
na.splice(position,1,pos[1])
return na;
}
console.log(play([1,2,3,9],"al inicio","al final",[1,"hola"]));