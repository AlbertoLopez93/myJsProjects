"use strict";

function add(date, quantity, str) {
  const year = 365 * 24 * 60 * 60 * 1000;
  const quarter = 3 * 31 * 24 * 60 * 60 * 1000;
  const month = 31 * 24 * 60 * 60 * 1000;
  const day = 24 * 60 * 60 * 1000;
  const hour = 60 * 60 * 1000;
  const minute = 60 * 1000;
  const second = 1000;
  if(!(date instanceof Date)) {
    return false;
  }
  if(typeof quantity !== 'number') {
    return false;
  }
  if(quantity + '' === 'Infinity') {
    return false;
  }
  if(quantity % 1 !== 0) {
    return false;
  }
  if(quantity + '' === 'NaN') {
    return false;
  }
  if(typeof str !== 'string') {
    return false;
  }
  switch(str) {
    case 'years':
      date.setMilliseconds(date.getMilliseconds() + year * quantity);
      return date;
    case 'quarters':
      date.setMilliseconds(date.getMilliseconds() + quarter * quantity);
      return date;
    case 'months':
      date.setMilliseconds(date.getMilliseconds() + month * quantity);
      return date;
    case 'days':
      date.setMilliseconds(date.getMilliseconds() + day * quantity);
      return date;
    case 'hours':
      date.setMilliseconds(date.getMilliseconds() + hour * quantity);
      return date;
    case 'minutes':
      date.setMilliseconds(date.getMilliseconds() + minute * quantity);
      return date;
    case 'seconds':
      date.setMilliseconds(date.getMilliseconds() + second * quantity);
      return date;
    case 'milliseconds':
      date.setMilliseconds(date.getMilliseconds() + quantity);
      return date;
    default:
      return date;
  }
}

function subtract(date, quantity, str) {
  const year = 365 * 24 * 60 * 60 * 1000;
  const quarter = 3 * 31 * 24 * 60 * 60 * 1000;
  const month = 31 * 24 * 60 * 60 * 1000;
  const day = 24 * 60 * 60 * 1000;
  const hour = 60 * 60 * 1000;
  const minute = 60 * 1000;
  const second = 1000;
  if(!(date instanceof Date)) {
    return false;
  }
  if(typeof quantity !== 'number') {
    return false;
  }
  if(quantity + '' === 'Infinity') {
    return false;
  }
  if(quantity % 1 !== 0) {
    return false;
  }
  if(quantity + '' === 'NaN') {
    return false;
  }
  if(typeof str !== 'string') {
    return false;
  }
  switch(str) {
    case 'years':
      date.setMilliseconds(date.getMilliseconds() - year * quantity);
      return date;
    case 'quarters':
      date.setMilliseconds(date.getMilliseconds() - quarter * quantity);
      return date;
    case 'months':
      date.setMilliseconds(date.getMilliseconds() - month * quantity);
      return date;
    case 'days':
      date.setMilliseconds(date.getMilliseconds() - day * quantity);
      return date;
    case 'hours':
      date.setMilliseconds(date.getMilliseconds() - hour * quantity);
      return date;
    case 'minutes':
      date.setMilliseconds(date.getMilliseconds() - minute * quantity);
      return date;
    case 'seconds':
      date.setMilliseconds(date.getMilliseconds() - second * quantity);
      return date;
    case 'milliseconds':
      date.setMilliseconds(date.getMilliseconds() - quantity);
      return date;
    default:
      return date;
  }
}

function deepReverse(array) {
  if(!Array.isArray(array)) {
    return false;
  }
  for(var i = 0; i < array.length; i++) {
    if(Array.isArray(array[i])) {
      array[i] = deepReverse(array[i]);
    }
  }
  return array.reverse();
}

function every(array, callback) {
  if(!Array.isArray(array)) {
    return false;
  }
  if(typeof callback !== 'function') {
    return false;
  }
  for(var i = 0; i < array.length; i++) {
    if(!callback(array[i], i, array.slice())) {
      return false;
    }
  }
  return true;
}

function some(array, callback) {
  if(!Array.isArray(array)) {
    return false;
  }
  if(typeof callback !== 'function') {
    return false;
  }
  for(var i = 0; i < array.length; i++) {
    if(callback(array[i], i, array.slice())) {
      return true;
    }
  }
  return false;
}

function find(array, callback) {
  if(!Array.isArray(array)) {
    return false;
  }
  if(typeof callback !== 'function') {
    return false;
  }
  for(var i = 0; i < array.length; i++) {
    if(callback(array[i], i, array.slice())) {
      return array[i];
    }
  }
  return undefined;
}

function map(array, callback) {
  if(!Array.isArray(array)) {
    return false;
  }
  if(typeof callback !== 'function') {
    return false;
  }
  var res = [];
  for(var i = 0; i < array.length; i++) {
    res[res.length] = callback(array[i], i, array.slice())
  }
  return res;
}

function foreach(array, callback) {
  if(!Array.isArray(array)) {
    return false;
  }
  if(typeof callback !== 'function') {
    return false;
  }
  for(var i = 0; i < array.length; i++) {
    callback(array[i], i, array)
  }
}

function filter(array, callback) {
  if(!Array.isArray(array)) {
    return false;
  }
  if(typeof callback !== 'function') {
    return false;
  }
  var res = [];
  for(var i = 0; i < array.length; i++) {
    if(callback(array[i], i, array.slice())) {
      res[res.length] = array[i];
    }
  }
  return res;
}

function concat(array) {
  if(!Array.isArray(array)) {
    return false;
  }
  var res = array.slice();
  for(var i = 1; i < arguments.length; i++) {
    if(Array.isArray(arguments[i])) {
      for(var j = 0; j < arguments[i].length; j++) {
        res[res.length] = arguments[i][j];
      }
    } else {
      res[res.length] = arguments[i];
    }
  }
  return res;
}

function encrypt(str, num) {
  if(typeof str !== 'string') {
    return false;
  }
  if(typeof num !== 'number') {
    return false;
  }
  if(num % 1 !== 0) {
    return false;
  }
  if(num + '' === 'Infinity') {
    return false;
  }
  if(num + '' === 'NaN') {
    return false;
  }
  if(num < 0) {
    return false;
  }
  var res = str;
  var aux = '';
  for(var i = 0; i < num; i++) {
    for(var j = 0; j < str.length; j++) {
      if(j % 2 !== 0) {
        aux += res[j];
      }
    }
    for(var k = 0; k < str.length; k++) {
      if(k % 2 === 0) {
        aux += res[k];
      }
    }
    res = aux;
    aux = '';
  }
  return res;
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
