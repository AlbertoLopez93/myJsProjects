/****

timestamp: 1472811660000
skype

****/


function orderPeople(obj){
  var val=0, a, b, val1=0;
  obj=obj.sort(orden);
  obj=obj.sort(orden2)
return obj;
}
// var x=ord();
// console.log(x);


function orden(a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  return 0;
}

function orden2(a, b) {
  if (a.eyeColor > b.eyeColor) {
    return 1;
  }
  if (a.eyeColor < b.eyeColor) {
    return -1;
  }
  return 0;
}