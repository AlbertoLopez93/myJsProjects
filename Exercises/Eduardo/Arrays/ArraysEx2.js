/****

timestamp: 1473038229000

****/

function isInLine(coor) {
  var x=0
  var y=0
  var arreglisimo=[]
  var arreglisimoan=0
  var sumadearreglisimo=0;
  for(var i=coor.length-1;i>0;i--){
    arreglisimo[i-1]=general(coor[i],coor[i-1])
  }
  arreglisimoan=general(coor[0],coor[coor.length-1])
  //console.log(arreglisimoan);
  for (var j = 0; j < arreglisimo.length; j++) {
    sumadearreglisimo=sumadearreglisimo+arreglisimo[j]
  }
  //console.log(sumadearreglisimo);
  var sumadearreglisimo=sumadearreglisimo.toPrecision(12)
  var arreglisimoan=arreglisimoan.toPrecision(12)
  console.log(sumadearreglisimo);
  console.log(arreglisimoan);
  if(arreglisimoan===sumadearreglisimo)
  {return true}else{return false}
}
function  general(arry2,arry1){
  var tempx=0
  var tempy=0
  var resultado=0
tempx=Math.pow((arry2[0]-arry1[0]),2)
tempy=Math.pow((arry2[1]-arry1[1]),2)
resultado=Math.sqrt(tempx+tempy)
  return resultado
}
