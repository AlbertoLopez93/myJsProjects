/****

timestamp: 1472807880000
skype

****/

function play (param1, param2, param3, param4) {
 var original = param1.concat(param2,param3,param4);
 var potato = param1.slice ();
 potato.splice (param4[0], 0, param4[1]);
 potato.unshift (param2);
 potato.push (param3);
 return [potato,original];
}
console.log (play ([1, 2, 3], 'al inicio', 'al final', [2, 'yolo, trololo loy']));