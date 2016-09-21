"use strict";

function add(date, num, str){
    if(date instanceof Date && (typeof num === 'number' || num instanceof Number) && (typeof str === 'string' || str instanceof String)){
        if(!Number.isInteger(num) || num < 0){
            return false;
        }
        str.toLowerCase();
        switch(true){
            case str === 'years':
                var years = date.getFullYear();
                date.setFullYear(years + num);
                return date;
            case str === 'quarters':
                var quarter = date.getMonth();
                num *= 3;
                date.setMonth(quarter + num);
                return date;
            case str === 'months':
                var month = date.getMonth();
                date.setMonth(month + num);
                return date;
            case str === 'days':
                var day = date.getDate();
                date.setDate(day + num);
                return date;
            case str === 'hours':
                var hours = date.getHours();
                date.setHours(hours + num);
                return date;
            case str === 'minutes':
                var minutes = date.getMinutes();
                date.setMinutes(minutes + num);
                return date;
            case str === 'seconds':
                var seconds = date.getSeconds();
                date.setSeconds(seconds + num);
                return date;
            case str === 'milliseconds':
                var milliseconds = date.getMilliseconds();
                date.setMilliseconds(milliseconds + num);
                return date;
            default:
                return false;
        }
    } else {
        return false;
    }
}

function subtract(date, num, str){
    if(date instanceof Date && (typeof num === 'number' || num instanceof Number) && (typeof str === 'string' || str instanceof String)){
        if(!Number.isInteger(num) || num < 0){
            return false;
        }
        str.toLowerCase();
        switch(true){
            case str === 'years':
                var years = date.getFullYear();
                date.setFullYear(years - num);
                return date;
            case str === 'quarters':
                var quarter = date.getMonth();
                num *= 3;
                date.setMonth(quarter - num);
                return date;
            case str === 'months':
                var month = date.getMonth();
                date.setMonth(month - num);
                return date;
            case str === 'days':
                var day = date.getDate();
                date.setDate(day - num);
                return date;
            case str === 'hours':
                var hours = date.getHours();
                date.setHours(hours - num);
                return date;
            case str === 'minutes':
                var minutes = date.getMinutes();
                date.setMinutes(minutes - num);
                return date;
            case str === 'seconds':
                var seconds = date.getSeconds();
                date.setSeconds(seconds - num);
                return date;
            case str === 'milliseconds':
                var milliseconds = date.getMilliseconds();
                date.setMilliseconds(milliseconds - num);
                return date;
            default:
                return false;
        }
    } else {
        return false;
    }
}

function deepReverse (arr){
    if(!Array.isArray(arr)){
        return false;
    }
    var len = arr.length-1;
    var resArr = [];
    for(let i = len; i >= 0; i--){
        if(Array.isArray(arr[i])){
            resArr.push(deepReverse(arr[i]));
        } else {
            resArr.push(arr[i]);
        }
    }
    
    return resArr;
}

function every (arr, callback){
    if(Array.isArray(arr) && (callback instanceof Function)){
        var flag = true;
        for(let i = 0; i < arr.length; i++){
            flag = callback(arr[i], i, arr);
            if(!flag || isNaN(flag)){
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}

function some (arr, callback){
    if(Array.isArray(arr) && (callback instanceof Function)){
        var flag = true;
        for(let i = 0; i < arr.length; i++){
            flag = callback(arr[i], i, arr);
            if(flag){
                return true;
            }
        }
        return false;
    } else {
        return false;
    }
}

function find (arr, callback){
    if(Array.isArray(arr) && (callback instanceof Function)){
        var flag = true;
        for(let i = 0; i < arr.length; i++){
            flag = callback(arr[i], i, arr);
            if(flag){
                return arr[i];
            }
        }
        return undefined;
    } else {
        return false;
    }
}

function map (arr, callback){
    if(Array.isArray(arr) && (callback instanceof Function)){
        var resArray = [];
        for(let i = 0; i < arr.length; i++){
            resArray[i] = callback(arr[i], i, arr);
        }
        return resArray;
    } else {
        return false;
    }
}

function foreach (arr, callback){
    if(Array.isArray(arr) && (callback instanceof Function)){
        for(let i = 0; i < arr.length; i++){
            callback(arr[i], i, arr);
        }
    } else {
        return false;
    }
}

function filter (arr, callback){
    if(Array.isArray(arr) && (callback instanceof Function)){
        var resArray = [];
        for(let i = 0; i < arr.length; i++){
            var flag = callback(arr[i], i, arr);
            if(flag){
                resArray.push(arr[i]);
            }
        }
        return resArray;
    } else {
        return false;
    }
}

function concat(arr){
    if(!Array.isArray(arr)){
        return false;
    }
    var args = Array.from(arguments);
    args.shift();
    var newArr = Array.from(arr);
    for(let i = 0; i < args.length; i++){
        if(Array.isArray(args[i])){
            for(let j = 0; j < args[i].length; j++){
                newArr.push(args[i][j]);
            }
        } else {
            newArr.push(args[i]);
        }
    }
    return newArr;
}

function encrypt(str, num){
    var res1 = '';
    var res2 = '';
    if((typeof str === 'string' || str instanceof String) && (typeof num === 'number' || num instanceof Number)){
        if(!Number.isInteger(num) || num < 0){
            return false;
        }
        if(num === 0 || str.length === 0){
            return str;
        }
        if(num > 1){
            str = encrypt(str, num-1);
        }
        for(let i = 0; i < str.length; i++){
            if(i%2 === 0){
                res2 += str[i];
            } else {
                res1 += str[i]
            }
        }
        res1 += res2;
        return res1;
    } else {
        return false;
    }
}


module.exports = {
    every: every,
    some: some,
    find: find,
    map: map,
    foreach: foreach,
    filter: filter,
    concat: concat,
    add: add,
    subtract: subtract,
    encrypt: encrypt,
    deepReverse: deepReverse
};
