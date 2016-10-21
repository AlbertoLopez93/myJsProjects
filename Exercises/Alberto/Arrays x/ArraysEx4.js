/****

timestamp: 1472811360000

from skype

****/

function orderPeople(json)
{
  var obj=json.sort(sortName);
  obj=obj.sort(sortEyes);
  return obj;
}

function sortName(a,b)
{
  if(a.name<b.name)
    return -1;
  if(a.name>b.name)
    return 1;
  else
    return 0;
}

function sortEyes(a,b)
{
  if(a.eyeColor<b.eyeColor)
    return -1;
  if(a.eyeColor>b.eyeColor)
    return 1;
  else
    return 0;
}