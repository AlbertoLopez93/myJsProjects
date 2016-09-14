"use strict"
function deepReverse(arr){
    if(!Array.isArray(arr)){
        return false;
    }
    var newArr = [];
    if(arr.length === 1 ){
        return arr;
    }
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            newArr.push(deepReverse(arr[i]));
        }
        else{
            newArr.push(arr[i]);
        }
    }
    var a = newArr.reverse();
    return a;
}

console.log(deepReverse([[1,2],[3,4]]));
console.log(deepReverse([[9,8,7],[6,5,4],[3,2,1]]));
console.log(deepReverse([[50,51,[52,53]],[[54,55],56,57]]));

// if(obj1 instanceof Object && obj2 instanceof Object){
//     var keys1 = Object.keys(obj1);
//     var keys2 = Object.keys(obj2);
//     for(var i = 0; i < 10; i++){
//         if(keys1[i] !== keys2[i]){
//             validator = false;
//             return false;
//         } else {
//             continue;
//         }
//     }
//     if (validator == true) {
//         var max = Object.keys(obj1).length;
//     }
// }
// //star to compare the elements
// for(var i = 0; i < max; i++) {
//     if(Array.isArray(obj1[keys1[i]]) && Array.isArray(obj2[keys1[i]])){
//         if(obj1[keys1[i]].length !== obj2[keys2[i]].length){
//             return false;
//         } else {
//             let max = obj1[keys1[i]].length;
//             for(let j = 0; j < max; j++){
//                 if(obj1[keys1[i]][j] !== obj2[keys2[i]][j]){
//                     return false;
//                 }
//             }
//         }
//     }else if (obj1[keys1[i]] instanceof Object && obj2[keys2[i]] instanceof Object) {
//         return deepCompare(obj1[keys1[i]], obj2[keys2[i]]);
//     } else {
//         if(obj1[keys1[i]] !== obj2[keys2[i]]){
//             return false;
//         }
//     }
// }
