/****

timestamp: 1472807880000
skype

****/

function play (array1, str1, str2, array2) {
  var res = array1.slice();
  res.unshift(str1);
  res.push(str2);
  res.splice(array2[0],0,array2[1]);
  console.log(array1);
  console.log(res);
  return res;
}