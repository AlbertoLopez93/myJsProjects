/****

timestamp: 1472811120000
skype

****/

function orderBy (a, b) {
 if (a.eyeColor + ' ' + a.name < b.eyeColor + ' ' + b.name) {
  return -1;
 } else if (b.eyeColor + ' ' + b.name < a.eyeColor + ' ' + a.name) {
  return 1;
 }
 return (0);
}

function orderPeople(people) {
 people.sort(orderBy);
}