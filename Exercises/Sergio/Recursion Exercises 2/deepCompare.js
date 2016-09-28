"use strict"
function deepCompare(obj1, obj2){

  if(typeof(obj1) !== "object" || typeof(obj2) !== "object"){
    return false;
  }
  var uno = Object.keys(obj1);
  var dos = Object.keys(obj2);
  let r;
  let r1;
  for(let i = 0; i<uno.length; i++){
    r = uno.includes(dos[i]);
    //r1 = uno.includes(dos[i].value)
  }
  console.log(r);
  if(r === false){
    return false;
  }
  else {
    for (var variable in obj1) {
      console.log(obj1[variable]);
      console.log(obj2[variable]);
      if(obj1[variable] === obj2[variable]){
        continue;
      }
      else {
        return false;
      }
    }
  }

}
console.log(deepCompare({'name':'sergio', 'apellido':'rivera','edad':29},
            {'name':'sergio','apellido':'rivera','edad':20})
          );
