/****

timestamp: 1472812380000
skype

****/

function compareSortEyeColor(parametro1,parametro2) {
if (parametro1.eyeColor == parametro2.eyeColor)
return 0;
if (parametro1.eyeColor < parametro2.eyeColor)
return -1;
else
return 1;
}
function compareSortName(parametro1,parametro2) {
if (parametro1.name == parametro2.name)
return 0;
if (parametro1.name < parametro2.name)
return -1;
else
return 1;
}
// console.log(personas.sort(compareSortName).sort(compareSortEyeColor));

function orderPeople(people) {
  people.sort(compareSortName).sort(compareSortEyeColor)
}
