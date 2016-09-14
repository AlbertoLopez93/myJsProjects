"use strict"
function every(arr, func){
    if(arguments.length !== 2){
        return false;
    }
    if(!Array.isArray(arr)){
        return false;
    }
    if(typeof func !== "function"){
        return false;
    }

    for (var i = 0; i < arr.length; i++) {
        if(func(arr[i], i, arr) !== true){
                return false;
        }
    }
    return true;
}
function validateEvery(current, index, arr){
    if(Boolean(current) == false){
        return false;
    }
    else {
        return true;
    }
}
console.log(every([1,2,"9",4,5,6], validateEvery));



function some(arr, func){
    if(arguments.length !== 2){
        return false;
    }
    if(!Array.isArray(arr)){
        return false;
    }
    if(typeof func !== "function"){
        return false;
    }

    for (var i = 0; i < arr.length; i++) {
        if(func(arr[i], i, arr) === true){
                return true;
        }
    }
    return false;
}
function validateSome(current, index, array){
    if(Boolean(current) === true){
        return true;
    }
    else {
        return false;
    }
}
console.log(some([0,"",NaN,false,null, undefined], validateSome));



function find(arr, func){
    if(arguments.length !== 2){
        return false;
    }
    if(!Array.isArray(arr)){
        return false;
    }
    if(typeof func !== "function"){
        return false;
    }

    for (var i = 0; i < arr.length; i++) {
        if(func(arr[i], i, arr) === true){
                return arr[i];
        }
    }
    return undefined;
}
function validateFind(current, index, arr){
    if(Boolean(current) === true){
        return true;
    }
    else {
        return false;
    }
}
console.log(find([0,'1',NaN,false,null, undefined], validateFind));


function map(arr, func){
    var nuevoArray =  [];
    if(arguments.length !== 2){
        return false;
    }
    if(!Array.isArray(arr)){
        return false;
    }
    if(typeof func !== "function"){
        return false;
    }

    for (var i = 0; i < arr.length; i++) {
      nuevoArray.push(validateMap(arr[i], i, arr));
    }
    return nuevoArray;
}
function validateMap(current, index, arr){
        return current + 3;
}
console.log(map([1,2,3,3, undefined], validateMap));



function foreach(arr, func){
    let res = 0;
    if(arguments.length !== 2){
        return false;
    }
    if(!Array.isArray(arr)){
        return false;
    }
    if(typeof func !== "function"){
        return false;
    }

    for (var i = 0; i < arr.length; i++) {
        res = func(arr[i], i, arr);
    }
    console.log(res);
    return undefined;
}
function validateForEach(current, index, arr){
    return current + 1;
}
console.log(foreach([0,1,1,2,3,5], validateForEach));

function filter(arr, func){
    var newArr = [];
    if(arguments.length !== 2){
        return false;
    }
    if(!Array.isArray(arr)){
        return false;
    }
    if(typeof func !== "function"){
        return false;
    }

    for (var i = 0; i < arr.length; i++) {
        if(func(arr[i], i, arr) === true){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
function validateFilter(current, index, arr){
    if(Boolean(current) === true){
        return true;
    }
}
console.log(filter([0,'1',NaN,false,null, "Axel"], validateFilter));

function concat(){
    var first = arguments[0];
    let newArr = [];
    var aux = "";
    if(!Array.isArray(first)){
        return false;
    }
    for(let i = 0; i < first.length; i++){
        aux = first[i];
        newArr.push(aux);
    }
    aux = "";
    for(let i = 1; i < arguments.length; i++){
        if(Array.isArray(arguments[i])){
            var temp = arguments[i];
            for(let i = 0; i< temp.length; i++){
                newArr.push(temp[i])
            }
        } else {
            newArr.push(arguments[i]);
        }
    }
    return newArr;
}

console.log(concat([NaN],undefined,2,3,[1,2,[3]]));

function encrypt(str, num){
    if(str === ""){
        return "";
    }
    if(str === " "){
        return " ";
    }

    if(typeof str !== "string" || typeof num !== "number" || !isNaN(str) || isNaN(num)){
        return false
    }
    if(num === Infinity || num === -Infinity ){
        return Infinity;
    }

    var final = str;

    do{
        var first = "";
        var last = "";
        last += [final[0]];
        for (let i = 1; i < final.length; i++) {
            if( i % 2 == 1){
                first += final[i];
            } else {
                last += final[i];
            }
        }
        final = first + last;
        num--;
    }while(num>0)
    return final;
}
console.log(encrypt("Axel", 9));
