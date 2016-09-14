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
console.log(subtract(new Date(2016, 8, 14, 01, 30), 2, "minutes"));
console.log(subtract(new Date(2016, 8, 14, 01, 30), 5, {4:4}));


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
