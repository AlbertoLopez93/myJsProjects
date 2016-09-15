"use strict"

function add(date, num, str){
    if (arguments.length !== 3){
        return false;
    }
    if (date instanceof Date === false) {
        return false;
    }
    if(typeof date === 'boolean' || typeof date === 'string' || typeof date === "number" || Array.isArray(date)){
        return false;
    }
    if(typeof num !== "number" || isNaN(num) || num === Infinity || num === -Infinity ){
        return false;
    }
    if(num % 1 !== 0 || num < 0){
        return false;
    }
    if(typeof str !== "string"){
        return false;
    }
    var date = date;
    var num = num;
    var str = str.toLowerCase();
    var msDate = date.getTime();//here I have the mls since 1970 to the date
    var newDateMS = 0;
    var newDate;
    switch (str) {
        case 'milliseconds':
            newDateMS = msDate + num;
            break;
        case 'seconds':
            newDateMS = msDate + (num * 1000);
        break;
        case 'minutes':
            newDateMS = msDate + (num * 60000);
        break;
        case 'hours':
            newDateMS = msDate + (num * 3600000);
        break;
        case 'days':
            newDateMS = msDate + (num * 86400000);
        break;
        case 'months':
            newDateMS = msDate + (num * 2678400000);
        break;
        case 'quarters':
            newDateMS = msDate + (num * 8035200000);
        break;
        case 'years':
            newDateMS = msDate + (num * 32140800000);
        break;
        default:
        return false;
    }
    date.setTime(newDateMS);
    return date;
}


function subtract(date, num, str){
    if (arguments.length !== 3){
        return false;
    }
    if (date instanceof Date === false) {
        return false;
    }
    if(typeof date === 'boolean' || typeof date === 'string' || typeof date === "number" || Array.isArray(date)){
        return false;
    }
    if(typeof num !== "number" || isNaN(num) || num === Infinity || num === -Infinity ){
        return false;
    }
    if(num % 1 !== 0 || num < 0){
        return false;
    }
    if(typeof str !== "string"){
        return false;
    }
    var date = date;
    var num = num;
    var str = str.toLowerCase();
    var msDate = date.getTime();//here I have the mls since 1970 to the date
    var newDateMS = 0;
    var newDate;
    switch (str) {
        case 'milliseconds':
            newDateMS = msDate - num;
            break;
        case 'seconds':
            newDateMS = msDate - (num * 1000);
        break;
        case 'minutes':
            newDateMS = msDate - (num * 60000);
        break;
        case 'hours':
            newDateMS = msDate - (num * 3600000);
        break;
        case 'days':
            newDateMS = msDate - (num * 86400000);
        break;
        case 'months':
            newDateMS = msDate - (num * 2678400000);
        break;
        case 'quarters':
            newDateMS = msDate - (num * 8035200000);
        break;
        case 'years':
            newDateMS = msDate - (num * 32140800000);
        break;
        default:
        return false;
    }
    date.setTime(newDateMS);
    return date;
}
// console.log(subtract(new Date(2016, 8, 14, 01, 30), 2, "minutes"));
// console.log(subtract(new Date(2016, 8, 14, 01, 30), 5, {4:4}));


// "use strict"
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
// "use strict"

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
// console.log(every([1,2,"9",4,5,6], validateEvery));

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
// console.log(some([0,"",NaN,false,null, undefined], validateSome));

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
// console.log(find([0,'1',NaN,false,null, undefined], validateFind));

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
// console.log(map([1,2,3,3, undefined], validateMap));

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
// console.log(foreach([0,1,1,2,3,5], validateForEach));

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
// console.log(filter([0,'1',NaN,false,null, "Axel"], validateFilter));

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
// console.log(concat([NaN],undefined,2,3,[1,2,[3]]));

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
// console.log(encrypt("Axel", 9));


