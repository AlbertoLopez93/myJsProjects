/****

timestamp: 1472811360000
skype

****/

function sortByName (a, b) {
  if (a.name < b.name) {
    return -1;
  } else if (a.name > b.name) {
    return 1;
  }
  return 0;
}

function sortByColor (a, b) {
  if (a.eyeColor < b.eyeColor) {
    return -1;
  } else if (a.eyeColor > b.eyeColor) {
    return 1;
  }
  return 0;
}

function orderPeople (array) {
  var sorted = [];
  sorted[0] = array.sort(sortByColor);
  sorted[1] = array.sort(sortByName);
  return sorted;
}