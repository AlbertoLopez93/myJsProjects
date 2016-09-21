"use strict";

/**
 * Created by EDDY on 14/09/2016.

 */

function isType (item, inst, name) {
    if (item instanceof inst === true || typeof item === name) {
        return true;
    }
}

function add (date, Quantity, key) {
    var millisecond = 1;
    var second = 1000 * millisecond;
    var minute = 60 * second;
    var hour = 60 * minute;
    var day = 24 * hour;
    var month = 31 * day;
    var quarter = 3 * month;
    var year = 365 * day;
    var dates = ['years', 'quarters', 'months', 'days', 'hours', 'minutes', 'seconds', 'milliseconds'];
    var values = [year, quarter, month, day, hour, minute, second, millisecond];
    var flag = false;
    for (let i = 0; i < dates.length; i++) {
        if (key === dates[i]) {
            var operator = values[i];
            flag = true;
            break;
        }
    }
    if (flag && isType (date, Date, 'date') && isType (Quantity, Number, 'number') && (Quantity % 1 === 0) && Quantity !== Infinity) {
        if (Quantity >= 0) {
            return new Date (date.getTime()+operator*Quantity);
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function subtract (date, Quantity, key) {
    var millisecond = 1;
    var second = 1000 * millisecond;
    var minute = 60 * second;
    var hour = 60 * minute;
    var day = 24 * hour;
    var month = 31 * day;
    var quarter = 3 * month;
    var year = 365 * day;
    var dates = ['years', 'quarters', 'months', 'days', 'hours', 'minutes', 'seconds', 'milliseconds'];
    var values = [year, quarter, month, day, hour, minute, second, millisecond];
    var flag = false;
    for (let i = 0; i < dates.length; i++) {
        if (key === dates[i]) {
            var operator = values[i];
            flag = true;
            break;
        }
    }
    if (flag && isType (date, Date, 'date') && isType (Quantity, Number, 'number') && (Quantity % 1 === 0) && Quantity !== Infinity) {
        if (Quantity >= 0) {
            return new Date (date.getTime()-operator*Quantity);
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function deepReverse (arr) {
    if (isType (arr, Array, 'array')) {
        var copy = arr.slice (0);
        var i = 0;
        if (copy.length === 0) {
            return copy;
        }
        if (copy.length >= 1) {
            for (i = 0; i < copy.length; i++) {
                if (isType (copy[i], Array, 'array')){
                    copy[i] = deepReverse (copy[i]);
                }
            }
            return copy.reverse ();
        }
    }
    return false;
}

function every (arr, funct) {

    var flag = 0;
    if (isType (arr, Array, 'array') && isType (funct, Function, 'function')) {
        for (var i = 0; i < arr.length; i++) {
            if (funct (arr[i], i, arr)) {
                flag++;
            } else {
                return false;
            }
        }
        return flag === arr.length;
    }
    return false;
}

function some (arr, funct) {

    if (isType (arr, Array, 'array') && isType (funct, Function, 'function')) {
        for (var i = 0; i < arr.length; i++) {
            if (funct (arr[i], i, arr)) {
                return true;
            }
        }

    }
    return false;
}

function find (arr, funct) {
    var flag = undefined;
    if (isType (arr, Array, 'array') && isType (funct, Function, 'function')) {
        for (var i = 0; i < arr.length; i++) {
            if (funct (arr[i], i, arr)) {
                flag = arr[i];
                return flag;
            }
        }
        return flag;
    }
    return false;
}

function map (arr, funct) {
    var flag = [];
    if (isType (arr, Array, 'array') && isType (funct, Function, 'function')) {
        var copy = arr.slice(0);
        for (var i = 0; i < arr.length; i++) {
            flag.push (funct (copy[i],i,copy));
        }
        return flag;
    }
    return false;
}

function foreach (arr, funct) {
    if (isType (arr, Array, 'array') && isType (funct, Function, 'function')) {
        var args = Array.prototype.slice.call (arguments[0]);
        for (var i = 0; i < arr.length; i++) {
            funct (args[i], i, arr);   // se que ary y arr son lo mismo pero que es mas correto?

        }
        return undefined;
    }
    return false
}

function filter (arr, funct) {
    var flag = [];
    if (isType (arr, Array, 'array') && isType (funct, Function, 'function')) {
        for (var i = 0; i < arr.length; i++) {
            if (funct (arr[i], i, arr)) {
                flag.push (arr[i]);
            }
        }
        return flag;
    }
    return false;
}

function concat () {
    if (!arguments||!isType(arguments[0],Array,'array')) {
        return false;
    } else {
        var args = Array.from(Array.prototype.slice.call (arguments));
        var result = [];
        for (let i = 0; i < args.length; i++) {
            result = result.concat (args[i]);
        }
        return result;
    }
}

function encrypt (str, num) {
    if (isType (str, String, 'string') && isType (num, Number, 'number')) {
        if (num >= 0 && !isNaN (num) && num % 1 === 0 && num !== Infinity) {
            var newPhrase = '';
            var garbage = '';
            var i = 0;
            if (num < 1) {
                return str;
            } else {
                newPhrase = '';
                garbage = '';
                for (i = 1; i < str.length; i += 2) {
                    newPhrase += str[i];
                    garbage += str[i - 1];
                }
                garbage += str[str.length - 1];
                return encrypt (newPhrase + garbage,num-1);
            }
        }
        return false;
    }
    return false;
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
