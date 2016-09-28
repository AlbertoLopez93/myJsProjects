"use strict";

function every(ary, callback) {
    if (!Array.isArray(ary) || typeof callback !== 'function') {
        return false;
    }

    for (let i = 0; i < ary.length; i++) {
        if (!callback(ary[i], i, ary)) {
            return false;
        }
    }
    return true;
}

function some(ary, callback) {
    if (!Array.isArray(ary) || typeof callback !== 'function') {
        return false;
    }

    for (let i = 0; i < ary.length; i++) {
        if (callback(ary[i], i, ary)) {
            return true;
        }
    }
    return false;
}

function find(ary, callback) {
    if (!Array.isArray(ary) || typeof callback !== 'function') {
        return false;
    }

    for (let i = 0; i < ary.length; i++) {
        if (callback(ary[i], i, ary)) {
            return ary[i];
        }
    }
    return undefined;
}


function map(ary, callback) {
    let result = [];

    if (!Array.isArray(ary) || typeof callback !== 'function') {
        return false;
    }

    for (let i = 0; i < ary.length; i++) {
        result.push(callback(ary[i], i, ary));
    }
    return result;
}

function foreach(ary, callback) {
    if (!Array.isArray(ary) || typeof callback !== 'function') {
        return false;
    }

    for (let i = 0; i < ary.length; i++) {
        callback(ary[i], i, ary);
    }
    return;
}

function filter(ary, callback) {
    let result = [];

    if (!Array.isArray(ary) || typeof callback !== 'function') {
        return false;
    }

    for (let i = 0; i < ary.length; i++) {
        if (callback(ary[i], i, ary)) {
            result.push(ary[i]);
        }
    }
    return result;
}

function concat() {
    if (arguments === undefined) {
        return false;
    }
    if (!Array.isArray(arguments[0])) {
        return false;
    }
    let result = arguments[0].slice();
    for (let i = 1; i < arguments.length; i++) {
        if (Array.isArray(arguments[i])) {
            for (let j = 0; j < arguments[i].length; j++) {
                result.push(arguments[i][j]);
            }
        } else {
            result.push(arguments[i]);
        }
    }
    return result;
}

function add(date, qty, type) {
    if (typeof date !== 'object') {
        return false;
    }
    if (!(date instanceof Date)) {
        return false;
    }
    if (typeof qty !== 'number') {
        return false;
    }
    if (typeof qty === 'number' && isNaN(qty)) {
        return false;
    }
    if (typeof qty === 'number' && parseInt(qty, 10) !== qty) {
        return false;
    }
    if (typeof type !== 'string') {
        return false;
    }
    let validTypes = ['years', 'quarters', 'months', 'days', 'hours', 'minutes', 'seconds', 'milliseconds'];
    if (validTypes.indexOf(type.toLowerCase()) < 0) {
        return date;
    }

    switch(type) {
        case 'years':
            date = new Date(date.getTime() + (qty * 365 * 24 * 3600 * 1000));
            break;
        case 'quarters':
            date = new Date(date.getTime() + (qty * 3 * 31* 24 * 3600 * 1000));
            break;
        case 'months':
            date = new Date(date.getTime() + (qty * 31 * 24 * 3600 * 1000));
            break;
        case 'days':
            date = new Date(date.getTime() + (qty * 24 * 3600 * 1000));
            break;
        case 'hours':
            date = new Date(date.getTime() + (qty * 3600 * 1000));
            break;
        case 'minutes':
            date = new Date(date.getTime() + (qty * 60 * 1000));
            break;
        case 'seconds':
            date = new Date(date.getTime() + (qty * 1000));
            break;
        case 'milliseconds':
            date = new Date(date.getTime() + (qty));
            break;
    }
    return date;
}

function subtract(date, qty, type) {
    if (typeof date !== 'object') {
        return false;
    }
    if (!(date instanceof Date)) {
        return false;
    }
    if (typeof qty !== 'number') {
        return false;
    }
    if (typeof qty === 'number' && isNaN(qty)) {
        return false;
    }
    if (typeof qty === 'number' && parseInt(qty, 10) !== qty) {
        return false;
    }
    if (typeof type !== 'string') {
        return false;
    }
    let validTypes = ['years', 'quarters', 'months', 'days', 'hours', 'minutes', 'seconds', 'milliseconds'];
    if (validTypes.indexOf(type.toLowerCase()) < 0) {
        return date;
    }

    switch(type) {
        case 'years':
            date = new Date(date.getTime() - (qty * 365 * 24 * 3600 * 1000));
            break;
        case 'quarters':
            date = new Date(date.getTime() - (qty * 3 * 31* 24 * 3600 * 1000));
            break;
        case 'months':
            date = new Date(date.getTime() - (qty * 31 * 24 * 3600 * 1000));
            break;
        case 'days':
            date = new Date(date.getTime() - (qty * 24 * 3600 * 1000));
            break;
        case 'hours':
            date = new Date(date.getTime() - (qty * 3600 * 1000));
            break;
        case 'minutes':
            date = new Date(date.getTime() - (qty * 60 * 1000));
            break;
        case 'seconds':
            date = new Date(date.getTime() - (qty * 1000));
            break;
        case 'milliseconds':
            date = new Date(date.getTime() - (qty));
            break;
    }
    return date;
}

function encrypt(str, n) {
    if (typeof str !== 'string') {
        return false;
    }
    if (typeof n !== 'number') {
        return false;
    }
    if (typeof n === 'number' && isNaN(n)) {
        return false;
    }
    if (typeof n === 'number' && n === Infinity) {
        return false;
    }
    if (typeof n === 'number' && n < 0) {
        return false;
    }
    if (typeof n === 'number' && parseInt(n, 10) !== n) {
        return false;
    }
    if (n === 0) {
        return str;
    }

    let result = "";
    let i = 0;
    let counter = 0;

    while(result.length < str.length) {
        if (i >= str.length) {
            i = i - str.length;
        }

        if (counter % 2 === 1) {
            result += str[i];
        }
        i++;
        counter++;
    }

    return encrypt(result, n -1);
}

function deepReverse(ary) {

    if (!Array.isArray(ary)) {
        return false;
    }

    if (ary.filter(function (e) {
        return Array.isArray(e);
    }).lenth === 0) {
        return ary.reverse();
    }

    return ary.map(function (e) {
        if (Array.isArray(e)) {
            return deepReverse(e);
        } else {
            return e;
        }
    }).reverse();
}

console.log(deepReverse([ [1, 2], [3, 4], 5, 6]));

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