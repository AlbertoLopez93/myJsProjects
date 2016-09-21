"use strict";

function add(date, num, str) {
  let result = false;
  if ((date instanceof Date) && ((Number.isInteger(num)) && (num >= 0)) && (typeof(str) === "string")) {
    //console.log(date);
    let strYear = date.getFullYear();
    let strMonth = date.getMonth();
    let strDay = date.getDate();
    let strHour = date.getHours();
    let strMinute = date.getMinutes();
    let strSecond = date.getSeconds();
    let strMilliseconds= date.getMilliseconds();
    //console.log(strYear, strMonth, strDay, strHour, strMinute, strSecond, strMilliseconds);
    let insert;
    result = date;
    switch (str) {
      case "years":insert = num + strYear;
                  result = new Date(insert, strMonth, strDay, strHour, strMinute, strSecond, strMilliseconds);
                  break;

      case "quarters":insert = (num * 3) + strMonth;
                     result = new Date(strYear, insert, strDay, strHour, strMinute, strSecond, strMilliseconds);
                     break;

      case "months":insert = (num * 31) + strMonth;
                  result = new Date(strYear, insert, strDay, strHour, strMinute, strSecond, strMilliseconds);
                  break;

      case "days":insert = num + strDay;
                  result = new Date(strYear, strMonth, insert, strHour, strMinute, strSecond, strMilliseconds);
                  break;

      case "hours":insert = num + strHour;
                  result = new Date(strYear, strMonth, strDay, insert, strMinute, strSecond, strMilliseconds);
                  break;

      case "minutes":insert = num + strMinute;
                    result = new Date(strYear, strMonth, strDay, strHour, insert, strSecond, strMilliseconds);
                    break;

      case "seconds":insert = num + strSecond;
                    result = new Date(strYear, strMonth, strDay, strHour, strMinute, insert, strMilliseconds);
                    break;

      case "milliseconds":insert = num + strMilliseconds;
                         result = new Date(strYear, strMonth, strDay, strHour, strMinute, strSecond, insert);
                         break;
      default:
    }
   //toString(result);
  }
  return result;
}

function subtract(date, num, str) {
  let result = false;
  if ((date instanceof Date) && ((Number.isInteger(num)) && (num >= 0)) && (typeof(str) === "string")) {
    //console.log(date);
    let strYear= date.getFullYear();
    let strMonth= date.getMonth();
    let strDay= date.getDate();
    let strHour= date.getHours();
    let strMinute= date.getMinutes();
    let strSecond= date.getSeconds();
    let strMilliseconds= date.getMilliseconds();
    //console.log(strYear, strMonth, strDay, strHour, strMinute, strSecond, strMilliseconds);
    let insert
    result = date;
    switch (str = str.toLowerCase()) {
      case "years":insert = strYear - num;
                  result = new Date(insert, strMonth, strDay, strHour, strMinute, strSecond, strMilliseconds);
                  break;

      case "quarters":insert = strMonth - (num * 3);
                     result = new Date(strYear, insert, strDay, strHour, strMinute, strSecond, strMilliseconds);
                     break;

      case "months":insert = strMonth - (num * 31);
                  result = new Date(strYear, insert, strDay, strHour, strMinute, strSecond, strMilliseconds);
                  break;

      case "days":insert = strDay - num;
                  result = new Date(strYear, strMonth, insert, strHour, strMinute, strSecond, strMilliseconds);
                  break;

      case "hours":insert = strHour - num;
                  result = new Date(strYear, strMonth, strDay, insert, strMinute, strSecond, strMilliseconds);
                  break;

      case "minutes":insert = strMinute - num;
                    result = new Date(strYear, strMonth, strDay, strHour, insert, strSecond, strMilliseconds);
                    break;

      case "seconds":insert = strSecond - num;
                    result = new Date(strYear, strMonth, strDay, strHour, strMinute, insert, strMilliseconds);
                    break;

      case "milliseconds":insert = strMilliseconds - num;
                         result = new Date(strYear, strMonth, strDay, strHour, strMinute, strSecond, insert);
                         break;
      default:
    }
   //toString(result);
  }
  return result;
}

function deepReverse(array) {
  let result = false;
  if (Array.isArray(array)) {
    if (array.length > 0) {
      let aux = [];
      for (var i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
          aux.push(deepReverse(array[i]));
        } else {
          aux.push(array[i]);
        }
      }
      result = aux.reverse();
    } else {
      result = array;
    }
  }
  return result;
}

function every(array, callback) {
  let result = false;
  let aux;
  if ((Array.isArray(array)) && (callback instanceof Function)) {
    for (let i = 0; i < array.length; i++) {
      aux = callback(array[i], i, array);
      if ((aux === false) || (aux === 0) ||(aux === null) || (aux === undefined) || (aux === "") || ((isNaN(aux)) && ((typeof(aux) === "number")))) {
        result = false; break;
      } else {
        result = true;
      }
    }
  }
  return result;
}

function some(array, callback) {
  let result = false;
  let aux;
  if ((Array.isArray(array)) && (callback instanceof Function)) {
    for (let i = 0; i < array.length; i++) {
      aux = callback(array[i], i, array);
      if ((aux === false) || (aux === 0) ||(aux === null) || (aux === undefined) || (aux === "") || ((isNaN(aux)) && ((typeof(aux) === "number")))) {
        result = false;
      } else {
        result = true; break;
      }
    }
  }
  return result;
}

function find(array, callback) {
  let result = undefined;
  let aux;
  if ((Array.isArray(array)) && (callback instanceof Function)) {
    for (let i = 0; i < array.length; i++) {
      aux = callback(array[i], i, array);
      if ((aux === false) || (aux === 0) ||(aux === null) || (aux === undefined) || (aux === "") || ((isNaN(aux)) && ((typeof(aux) === "number")))) {
        result = undefined;
      } else {
        result = array[i];  break;
      }
    }
  }
  return result;
}

function map(array, callback) {
  let result = false;
  let aux = [];
  if ((Array.isArray(array)) && (callback instanceof Function)) {
    for (let i = 0; i < array.length; i++) {
      aux = aux.concat(callback(array[i], i, array));
    }
    result = aux;
  }
  return result;
}

function foreach(array, callback) {
  let result = false;
  if ((Array.isArray(array)) && (callback instanceof Function)) {
    for (let i = 0; i < array.length; i++) {
      callback(array[i], i, array);
    }
    result = undefined;
  }
  return result;
}

function filter(array, callback) {
  let result = false;
  if ((Array.isArray(array)) && (callback instanceof Function)) {
    let temp = [],  aux;
    for (let i = 0; i < array.length; i++) {
      aux = callback(array[i], i, array);
      if ((aux !== false) && (aux !== 0) && (aux !== null) && (aux !== undefined) && (aux !== "")) {
        if (isNaN(aux) && typeof(aux) === "number") {
        } else {
          temp.push(array[i]);
        }
      }
    }
    result = temp;
  }
  return result;
}

function concat(array) {
  let result = false;
  if (Array.isArray(array)) {
    result = array;
    if (arguments.length > 1) {
      let aux = Array.prototype.slice.call(arguments);
      for (let i = 1; i < aux.length; i++) {
        if (Array.isArray(aux[i])) {
          let temp = aux[i];
          for (let j = 0; j < temp.length; j++) {
            result[result.length] = temp[j]
          }
        } else {
          result[result.length] = aux[i];
        }
      }
    }
  }
  return result;
}

function encrypt(str, num) {
  let result = false;
  let pares = "";
  let nones = "";
  if ((typeof(str) === "string") && ((Number.isInteger(num)) && num >= 0)) {
      if (num === 1) {
          for (let i = 0; i < str.length; i=i+2) {
            nones += str[i];
          }
          for (let i = 1; i < str.length; i=i+2) {
            pares += str[i];
          }
      } else {
        str= encrypt(str,num-1);
        for (let i = 0; i < str.length; i=i+2) {
          nones += str[i];
        }
        for (let i = 1; i < str.length; i=i+2) {
          pares += str[i];
        }
      }
      str = pares + nones;
      result = str;
  }
  return result;
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
