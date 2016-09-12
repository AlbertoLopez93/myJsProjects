/****

timestamp: 1472807820000
skype

****/

function orderPeople (arrObj){
 arrObj.sort(function (el1, el2){
     return (el1.eyeColor + ' ' + el1.name > el2.eyeColor + ' ' + el2.name);
    });
 return arrObj;
}
// console.log(orderPeople(arrObj));
