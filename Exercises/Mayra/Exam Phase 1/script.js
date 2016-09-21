"use strict";

function add(date,quantity,key) {
    let aux=0;

    if (date instanceof Date===false) {
        return false;
    }
    if (typeof(quantity)!=="number"||quantity===Infinity||quantity<0||Number.isInteger(quantity)===false) {
        return false;
    }
    if (typeof(key)!=="string") {
        return false;
    }
    switch (key) {
        case "years":
        aux=date.getFullYear()+quantity;
        date.setFullYear(aux);
            break;
        case "quarters":
        quantity*=3;
        aux=date.getMonth()+quantity;
        date.setMonth(aux);
            break;
        case "months":
        quantity*=31;
        aux=date.getDate()+quantity;
        date.setDate(aux);
            break;
        case "days":
        aux=date.getDate()+quantity;
        date.setDate(aux);
            break;
        case "hours":
        aux=date.getHours()+quantity;
        date.setHours(aux);
            break;
        case "minutes":
        aux=date.getMinutes()+quantity;
        date.setMinutes(aux);
            break;
        case "seconds":
        aux=date.getSeconds()+quantity;
        date.setSeconds(aux);
            break;
        case "milliseconds":
        aux=date.getMilliseconds()+quantity;
        date.setMilliseconds(aux);
            break;
        default:
        return false;

    }
    return date;
}

function subtract(date,quantity,key) {
    let aux=0;

    if (date instanceof Date===false) {
        return false;
    }
    if (typeof(quantity)!=="number"||quantity===Infinity||quantity<0||Number.isInteger(quantity)===false) {
        return false;
    }
    if (typeof(key)!=="string") {
        return false;
    }
    switch (key) {
        case "years":
        aux=date.getFullYear()-quantity;
        date.setFullYear(aux);
            break;
        case "quarters":
        quantity*=3;
        aux=date.getMonth()-quantity;
        date.setMonth(aux);
            break;
        case "months":
        quantity*=31;
        aux=date.getDate()-quantity;
        date.setDate(aux);
            break;
        case "days":
        aux=date.getDate()-quantity;
        date.setDate(aux);
            break;
        case "hours":
        aux=date.getHours()-quantity;
        date.setHours(aux);
            break;
        case "minutes":
        aux=date.getMinutes()-quantity;
        date.setMinutes(aux);
            break;
        case "seconds":
        aux=date.getSeconds()-quantity;
        date.setSeconds(aux);
            break;
        case "milliseconds":
        aux=date.getMilliseconds()-quantity;
        date.setMilliseconds(aux);
            break;
        default:
        return false;

    }
    return date;
}

function deepReverse(arg){

    if(Array.isArray(arg)===false){
        return false;
    }
    if (arg.length===0) {
        return [];
    }

    for(var i=0; i<arg.length; i++){
        if (Array.isArray(arg[i])===true) {
            deepReverse(arg[i]);

        }
    }
    arg.reverse();
    return arg;
}

function every(arg,fun) {

    if (Array.isArray(arg)===false) {
        return false;
    }
    if (fun instanceof Function===false) {
        return false;
    }
    for (let i of arg) {
        if(fun(i,i,arg)===false){
            return false;
        }
    }

    return true;
}

function some(arg,fun) {

    if (Array.isArray(arg)===false) {
        return false;
    }
    if (fun instanceof Function===false) {
        return false;
    }
    for (let i of arg) {
        if(fun(i,i,arg)===true){
            return true;
        }
    }

    return false;
}

function find(arg,fun) {

    if (Array.isArray(arg)===false) {
        return false;
    }
    if (fun instanceof Function===false) {
        return false;
    }
    for (let i of arg) {
        if(fun(i,i,arg)===true){

            return i;
        }
    }

    return undefined;
}

function map(arg,fun) {
    let ary=[];
    if (Array.isArray(arg)===false) {
        return false;
    }
    if (fun instanceof Function===false) {
        return false;
    }
    for (let i=0;i < arg.length;i++) {
        ary.push(arg[i]);
    }
    for (let j=0;j < ary.length;j++) {
        ary[j]=fun(ary[j],j,ary);
    }

    return ary;
}

function foreach(arg,fun) {

    if (Array.isArray(arg)===false) {
        return false;
    }
    if (fun instanceof Function===false) {
        return false;
    }
    for (let j=0;j < arg.length;j++) {
        fun(arg[j],j,arg);
    }

    return undefined;
}

function filter(arg,fun) {
    let ary=[];
    if (Array.isArray(arg)===false) {
        return false;
    }
    if (fun instanceof Function===false) {
        return false;
    }

    for (let j=0;j < arg.length;j++) {
        if(fun(arg[j],j,arg)===true){
        ary[ary.length]=arg[j];

        }
    }

    return ary;
}

function concat(x) {
    let ary=[],args=Array.prototype.slice.call(arguments);
    if (Array.isArray(x)===false) {
        return false;
    }
    for (var i = 0; i < args.length; i++) {
        if (Array.isArray(args[i])===true) {
            for (var j = 0; j < args[i].length; j++) {
                ary[ary.length]=args[i][j];
            }
        }else{
            ary[ary.length]=args[i];
        }

    }
    return ary;
}

function encrypt(str,n){
    let str1="",str2="";
    if(typeof (str)!=='string'||typeof(n)!=='number'||n<0||Number.isInteger(n)===false||n===Infinity){
        return false;
    }

    if(n===0){
        return str;
    }

    if(str.length===1){
        return str;
    }
    for (var i = 0; i < str.length; i++) {
        if (i%2===1) {
            str1+=str[i];
        }else{
            str2+=str[i];
        }
    }
    str1+=str2;
    return encrypt(str1,n-1)
}

module.exports = {
  add        : add,
  subtract   : subtract,
  deepReverse: deepReverse,
  every      : every,
  some       : some,
  find       : find,
  map        : map,
  foreach    : foreach,
  filter     : filter,
  concat     : concat,
  encrypt    : encrypt
};
