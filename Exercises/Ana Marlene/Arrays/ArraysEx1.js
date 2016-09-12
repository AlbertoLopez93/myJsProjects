/****

timestamp: 1473052023000

****/

function createCoords(n) {
  var ary=[],n,name="",x=0,y;
  for (var i = 0; i < n; i++) {
    y=x+100;
    name="coords"+[i];
    var name=[getRandom(x,y),getRandom(0,100),];

    ary[ary.length]=name;
    x=name[0]+1;
  }
  return ary;
  function getRandom(min, max) {
var a= parseInt(Math.random() * (max - min) + min);
  return a;
}
}

console.log(createCoords(3));
