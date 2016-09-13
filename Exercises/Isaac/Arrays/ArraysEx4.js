/****

timestamp: 1472810160000
skype

****/

function sortByEyeColorAndName(a, b) {
    if (a.eyeColor + a.name < b.eyeColor + b.name) {
        return -1;
    } else if (a.eyeColor + a.name > b.eyeColor + b.name) {
        return 1;
    }
    return 0;
}

function orderPeople(people) {
    people.sort(sortByEyeColorAndName);
}