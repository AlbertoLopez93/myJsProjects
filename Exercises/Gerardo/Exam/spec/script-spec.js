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
  if(quantity < 0) {
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
      return false;
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
  if(quantity < 0) {
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
      return false;
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

function concat() {
  var res = []
  for(var i = 0; i < arguments.length; i++) {
    if(!Array.isArray(arguments[i])) {
      return false;
    }
    for(var j = 0; j < arguments[i].length; j++) {
      res[res.length] = arguments[i][j];
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

describe("Testing Examen", function () {

    describe("Array's functions", function () {

        describe("every function", function () {
            it("should be defined", function () {
                expect(every).toBeDefined();
            });
            it("should not work against numbers", function () {
                expect(every(5, 6)).toBe(false);
                expect(every(5.0, 6.0)).toBe(false);
                expect(every(new Number(3), new Number(5))).toBe(false);
                expect(every(NaN, NaN)).toBe(false);
                expect(every(-5, -6)).toBe(false);
                expect(every(0, 0)).toBe(false);
                expect(every(Infinity, 6)).toBe(false);
                expect(every(6, Infinity)).toBe(false);
                expect(every([1,2,3], 5)).toBe(false);
                expect(every(3, function() {})).toBe(false);
            });
            it("should not work against string", function () {
                expect(every("", "")).toBe(false);
                expect(every(new String(""), new String(""))).toBe(false);
                expect(every("hola", "mundo")).toBe(false);
                expect(every([1, 2, 3], "hola")).toBe(false);
                expect(every("hola", function() {})).toBe(false);
            });
            it("should not work against object", function () {
                expect(every({}, {})).toBe(false);
                expect(every(new Object(), new Object())).toBe(false);
                expect(every([1, 2, 3], {})).toBe(false);
                expect(every({}, function() {})).toBe(false);
            });
            it("should not work against booleans", function () {
                expect(every(true, true)).toBe(false);
                expect(every([1, 2, 3], true)).toBe(false);
                expect(every(true, function() {})).toBe(false);
            });
            it("should not work against null", function () {
                expect(every(null, null)).toBe(false);
                expect(every([1, 2, 3], null)).toBe(false);
                expect(every(null, function() {})).toBe(false);
            });
            it("should not work against undefined", function () {
                expect(every(undefined, undefined)).toBe(false);
                expect(every([1, 2, 3], undefined)).toBe(false);
                expect(every(undefined, function() {})).toBe(false);
            });
            it("should not work against 2 functions as parameters", function () {
                expect(every(function() {}, function() {})).toBe(false);
                expect(every(function() {}, undefined)).toBe(false);
                expect(every({}, function() {})).toBe(false);
            });
            it("should not work against 2 arrays as parameters", function () {
                expect(every([1, 2, 3], [1, 2, 3])).toBe(false);
                expect(every(undefined, [1, 2, 3])).toBe(false);
            });
            it("should work against an array 1st parameter and a function as 2nd parameter", function () {
                expect(every([1, 2, 3], function (element) {
                    return element < 5;
                })).toBe(true);
                expect(every([false, false, false], function(element) {
                    return element === true;
                })).toBe(false);
                expect(every([true, true, false], function(element) {
                    return element === true;
                })).toBe(false);
                expect(every([true, true, true], function(element) {
                    return element === true;
                })).toBe(true);
            });
        });

        describe("some function", function () {
            it("should be defined", function () {
                expect(some).toBeDefined();
            });
            it("should not work against numbers", function () {
                expect(some(5, 6)).toBe(false);
                expect(some(5.0, 6.0)).toBe(false);
                expect(some(new Number(3), new Number(5))).toBe(false);
                expect(some(NaN, NaN)).toBe(false);
                expect(some(-5, -6)).toBe(false);
                expect(some(0, 0)).toBe(false);
                expect(some(Infinity, 6)).toBe(false);
                expect(some(6, Infinity)).toBe(false);
                expect(some([1,2,3], 5)).toBe(false);
                expect(some(3, function() {})).toBe(false);
            });
            it("should not work against string", function () {
                expect(some("", "")).toBe(false);
                expect(some(new String(""), new String(""))).toBe(false);
                expect(some("hola", "mundo")).toBe(false);
                expect(some([1, 2, 3], "hola")).toBe(false);
                expect(some("hola", function() {})).toBe(false);
            });
            it("should not work against object", function () {
                expect(some({}, {})).toBe(false);
                expect(some(new Object(), new Object())).toBe(false);
                expect(some([1, 2, 3], {})).toBe(false);
                expect(some({}, function() {})).toBe(false);
            });
            it("should not work against booleans", function () {
                expect(some(true, true)).toBe(false);
                expect(some([1, 2, 3], true)).toBe(false);
                expect(some(true, function() {})).toBe(false);
            });
            it("should not work against null", function () {
                expect(some(null, null)).toBe(false);
                expect(some([1, 2, 3], null)).toBe(false);
                expect(some(null, function() {})).toBe(false);
            });
            it("should not work against undefined", function () {
                expect(some(undefined, undefined)).toBe(false);
                expect(some([1, 2, 3], undefined)).toBe(false);
                expect(some(undefined, function() {})).toBe(false);
            });
            it("should not work against 2 functions as parameters", function () {
                expect(some(function() {}, function() {})).toBe(false);
                expect(some(function() {}, undefined)).toBe(false);
                expect(some({}, function() {})).toBe(false);
            });
            it("should not work against 2 arrays as parameters", function () {
                expect(some([1, 2, 3], [1, 2, 3])).toBe(false);
                expect(some(undefined, [1, 2, 3])).toBe(false);
            });
            it("should work against an array 1st parameter and a function as 2nd parameter", function () {
                expect(some([1, 2, 3], function (element) {
                    return element < 5;
                })).toBe(true);
                expect(some([false, false, false], function(element) {
                    return element === true;
                })).toBe(false);
                expect(some([true, true, false], function(element) {
                    return element === true;
                })).toBe(true);
                expect(some([true, true, true], function(element) {
                    return element === true;
                })).toBe(true);
                expect(some([false, false, true], function(element) {
                    return element === true;
                })).toBe(true);
            });
        });

        describe("find function", function () {
            it("should be defined", function () {
                expect(find).toBeDefined();
            });
            it("should not work against numbers", function () {
                expect(find(5, 6)).toBe(false);
                expect(find(5.0, 6.0)).toBe(false);
                expect(find(new Number(3), new Number(5))).toBe(false);
                expect(find(NaN, NaN)).toBe(false);
                expect(find(-5, -6)).toBe(false);
                expect(find(0, 0)).toBe(false);
                expect(find(Infinity, 6)).toBe(false);
                expect(find(6, Infinity)).toBe(false);
                expect(find([1,2,3], 5)).toBe(false);
                expect(find(3, function() {})).toBe(false);
            });
            it("should not work against string", function () {
                expect(find("", "")).toBe(false);
                expect(find(new String(""), new String(""))).toBe(false);
                expect(find("hola", "mundo")).toBe(false);
                expect(find([1, 2, 3], "hola")).toBe(false);
                expect(find("hola", function() {})).toBe(false);
            });
            it("should not work against object", function () {
                expect(find({}, {})).toBe(false);
                expect(find(new Object(), new Object())).toBe(false);
                expect(find([1, 2, 3], {})).toBe(false);
                expect(find({}, function() {})).toBe(false);
            });
            it("should not work against booleans", function () {
                expect(find(true, true)).toBe(false);
                expect(find([1, 2, 3], true)).toBe(false);
                expect(find(true, function() {})).toBe(false);
            });
            it("should not work against null", function () {
                expect(find(null, null)).toBe(false);
                expect(find([1, 2, 3], null)).toBe(false);
                expect(find(null, function() {})).toBe(false);
            });
            it("should not work against undefined", function () {
                expect(find(undefined, undefined)).toBe(false);
                expect(find([1, 2, 3], undefined)).toBe(false);
                expect(find(undefined, function() {})).toBe(false);
            });
            it("should not work against 2 functions as parameters", function () {
                expect(find(function() {}, function() {})).toBe(false);
                expect(find(function() {}, undefined)).toBe(false);
                expect(find({}, function() {})).toBe(false);
            });
            it("should not work against 2 arrays as parameters", function () {
                expect(find([1, 2, 3], [1, 2, 3])).toBe(false);
                expect(find(undefined, [1, 2, 3])).toBe(false);
            });
            it("should work against an array 1st parameter and a function as 2nd parameter", function () {
                expect(find([1, 2, 3], function (element) {
                    return element === 5;
                })).toBe(undefined);
                expect(find([1, 2, 3], function (element) {
                    return element === 3;
                })).toBe(3);
                expect(find([{name: "apples", quantity: 2}, {name: "bananas", quantity: 0}, {name: "cherries", quantity: 5}], function (element) {
                    return element.name === "cherries";
                })).toEqual({name: "cherries", quantity: 5});
            });
        });

        describe("map function", function () {
            it("should be defined", function () {
                expect(map).toBeDefined();
            });
            it("should not work against numbers", function () {
                expect(map(5, 6)).toBe(false);
                expect(map(5.0, 6.0)).toBe(false);
                expect(map(new Number(3), new Number(5))).toBe(false);
                expect(map(NaN, NaN)).toBe(false);
                expect(map(-5, -6)).toBe(false);
                expect(map(0, 0)).toBe(false);
                expect(map(Infinity, 6)).toBe(false);
                expect(map(6, Infinity)).toBe(false);
                expect(map([1,2,3], 5)).toBe(false);
                expect(map(3, function() {})).toBe(false);
            });
            it("should not work against string", function () {
                expect(map("", "")).toBe(false);
                expect(map(new String(""), new String(""))).toBe(false);
                expect(map("hola", "mundo")).toBe(false);
                expect(map([1, 2, 3], "hola")).toBe(false);
                expect(map("hola", function() {})).toBe(false);
            });
            it("should not work against object", function () {
                expect(map({}, {})).toBe(false);
                expect(map(new Object(), new Object())).toBe(false);
                expect(map([1, 2, 3], {})).toBe(false);
                expect(map({}, function() {})).toBe(false);
            });
            it("should not work against booleans", function () {
                expect(map(true, true)).toBe(false);
                expect(map([1, 2, 3], true)).toBe(false);
                expect(map(true, function() {})).toBe(false);
            });
            it("should not work against null", function () {
                expect(map(null, null)).toBe(false);
                expect(map([1, 2, 3], null)).toBe(false);
                expect(map(null, function() {})).toBe(false);
            });
            it("should not work against undefined", function () {
                expect(map(undefined, undefined)).toBe(false);
                expect(map([1, 2, 3], undefined)).toBe(false);
                expect(map(undefined, function() {})).toBe(false);
            });
            it("should not work against 2 functions as parameters", function () {
                expect(map(function() {}, function() {})).toBe(false);
                expect(map(function() {}, undefined)).toBe(false);
                expect(map({}, function() {})).toBe(false);
            });
            it("should not work against 2 arrays as parameters", function () {
                expect(map([1, 2, 3], [1, 2, 3])).toBe(false);
                expect(map(undefined, [1, 2, 3])).toBe(false);
            });
            it("should work against an array 1st parameter and a function as 2nd parameter", function () {
                var ary = [1, 2, 3];
                expect(map(ary, function (element) {
                    return element * 5;
                })).toEqual([5, 10, 15]);
                expect(ary).toEqual([1, 2, 3]);

                expect(map(ary, function (element) {
                    return element + 3;
                })).toEqual([4, 5, 6]);
                expect(ary).toEqual([1, 2, 3]);

                var inventory = [{name: "apples", quantity: 2}, {name: "bananas", quantity: 0}, {name: "cherries", quantity: 5}];
                expect(map(inventory, function (element) {
                    element.quantity = 0;
                    return element;
                })).toEqual([{name: "apples", quantity: 0}, {name: "bananas", quantity: 0}, {name: "cherries", quantity: 0}]);

                expect(inventory).toEqual([{name: "apples", quantity: 2}, {name: "bananas", quantity: 0}, {name: "cherries", quantity: 5}]);
            });
        });

        describe("foreach function", function () {
            it("should be defined", function () {
                expect(foreach).toBeDefined();
            });
            it("should not work against numbers", function () {
                expect(foreach(5, 6)).toBe(false);
                expect(foreach(5.0, 6.0)).toBe(false);
                expect(foreach(new Number(3), new Number(5))).toBe(false);
                expect(foreach(NaN, NaN)).toBe(false);
                expect(foreach(-5, -6)).toBe(false);
                expect(foreach(0, 0)).toBe(false);
                expect(foreach(Infinity, 6)).toBe(false);
                expect(foreach(6, Infinity)).toBe(false);
                expect(foreach([1,2,3], 5)).toBe(false);
                expect(foreach(3, function() {})).toBe(false);
            });
            it("should not work against string", function () {
                expect(foreach("", "")).toBe(false);
                expect(foreach(new String(""), new String(""))).toBe(false);
                expect(foreach("hola", "mundo")).toBe(false);
                expect(foreach([1, 2, 3], "hola")).toBe(false);
                expect(foreach("hola", function() {})).toBe(false);
            });
            it("should not work against object", function () {
                expect(foreach({}, {})).toBe(false);
                expect(foreach(new Object(), new Object())).toBe(false);
                expect(foreach([1, 2, 3], {})).toBe(false);
                expect(foreach({}, function() {})).toBe(false);
            });
            it("should not work against booleans", function () {
                expect(foreach(true, true)).toBe(false);
                expect(foreach([1, 2, 3], true)).toBe(false);
                expect(foreach(true, function() {})).toBe(false);
            });
            it("should not work against null", function () {
                expect(foreach(null, null)).toBe(false);
                expect(foreach([1, 2, 3], null)).toBe(false);
                expect(foreach(null, function() {})).toBe(false);
            });
            it("should not work against undefined", function () {
                expect(foreach(undefined, undefined)).toBe(false);
                expect(foreach([1, 2, 3], undefined)).toBe(false);
                expect(foreach(undefined, function() {})).toBe(false);
            });
            it("should not work against 2 functions as parameters", function () {
                expect(foreach(function() {}, function() {})).toBe(false);
                expect(foreach(function() {}, undefined)).toBe(false);
                expect(foreach({}, function() {})).toBe(false);
            });
            it("should not work against 2 arrays as parameters", function () {
                expect(foreach([1, 2, 3], [1, 2, 3])).toBe(false);
                expect(foreach(undefined, [1, 2, 3])).toBe(false);
            });
            it("should work against an array 1st parameter and a function as 2nd parameter", function () {
                let ary = [1, 2, 3];
                let result = 0;
                expect(foreach(ary, function (element, index, ary) {
                    result += ary[index];
                })).toBe(undefined);
                expect(result).toBe(6);
                expect(ary).toEqual([1, 2, 3]);

                expect(foreach(ary, function (element, index, ary) {
                    ary[index]++;
                })).toBe(undefined);
                expect(ary).toEqual([2, 3, 4]);

                let inventory = [{name: "apples", quantity: 2}, {name: "bananas", quantity: 0}, {name: "cherries", quantity: 5}];
                expect(foreach(inventory, function (element) {
                    element.quantity = 0;
                })).toEqual(undefined);
                expect(inventory).toEqual([{name: "apples", quantity: 0}, {name: "bananas", quantity: 0}, {name: "cherries", quantity: 0}]);
            });
        });

        describe("filter function", function () {
            it("should be defined", function () {
                expect(filter).toBeDefined();
            });
            it("should not work against numbers", function () {
                expect(filter(5, 6)).toBe(false);
                expect(filter(5.0, 6.0)).toBe(false);
                expect(filter(new Number(3), new Number(5))).toBe(false);
                expect(filter(NaN, NaN)).toBe(false);
                expect(filter(-5, -6)).toBe(false);
                expect(filter(0, 0)).toBe(false);
                expect(filter(Infinity, 6)).toBe(false);
                expect(filter(6, Infinity)).toBe(false);
                expect(filter([1,2,3], 5)).toBe(false);
                expect(filter(3, function() {})).toBe(false);
            });
            it("should not work against string", function () {
                expect(filter("", "")).toBe(false);
                expect(filter(new String(""), new String(""))).toBe(false);
                expect(filter("hola", "mundo")).toBe(false);
                expect(filter([1, 2, 3], "hola")).toBe(false);
                expect(filter("hola", function() {})).toBe(false);
            });
            it("should not work against object", function () {
                expect(filter({}, {})).toBe(false);
                expect(filter(new Object(), new Object())).toBe(false);
                expect(filter([1, 2, 3], {})).toBe(false);
                expect(filter({}, function() {})).toBe(false);
            });
            it("should not work against booleans", function () {
                expect(filter(true, true)).toBe(false);
                expect(filter([1, 2, 3], true)).toBe(false);
                expect(filter(true, function() {})).toBe(false);
            });
            it("should not work against null", function () {
                expect(filter(null, null)).toBe(false);
                expect(filter([1, 2, 3], null)).toBe(false);
                expect(filter(null, function() {})).toBe(false);
            });
            it("should not work against undefined", function () {
                expect(filter(undefined, undefined)).toBe(false);
                expect(filter([1, 2, 3], undefined)).toBe(false);
                expect(filter(undefined, function() {})).toBe(false);
            });
            it("should not work against 2 functions as parameters", function () {
                expect(filter(function() {}, function() {})).toBe(false);
                expect(filter(function() {}, undefined)).toBe(false);
                expect(filter({}, function() {})).toBe(false);
            });
            it("should not work against 2 arrays as parameters", function () {
                expect(filter([1, 2, 3], [1, 2, 3])).toBe(false);
                expect(filter(undefined, [1, 2, 3])).toBe(false);
            });
            it("should work against an array 1st parameter and a function as 2nd parameter", function () {
                let ary = [1, 2, 3];
                expect(filter(ary, function (element) {
                    return element < 5;
                })).toEqual([1, 2, 3]);
                expect(ary).toEqual([1, 2, 3]);

                expect(filter(ary, function(element, index, ary) {
                    ary[index]++;
                })).toEqual([]);
                expect(ary).toEqual([1, 2, 3]);

                expect(filter([false, false, false], function(element) {
                    return element === true;
                })).toEqual([]);

                expect(filter([true, true, false], function(element) {
                    return element === true;
                })).toEqual([true, true]);
                expect(filter([true, true, true], function(element) {
                    return element === true;
                })).toEqual([true, true, true]);
            });
        });

        describe("concat function", function () {
            it("should be defined", function () {
                expect(concat).toBeDefined();
            });
            it("it should not work if 1st parameter isn't an Array", function () {
                expect(concat()).toBe(false);
                expect(concat("")).toBe(false);
                expect(concat(function(){})).toBe(false);
                expect(concat(true)).toBe(false);
                expect(concat(1)).toBe(false);
                expect(concat({})).toBe(false);
                expect(concat(null)).toBe(false);
                expect(concat(/abcd/)).toBe(false);
            });
            it("should work with 1st argument as array, and any other whatever typ they are", function () {
                let ary = [1, 2, 3];
                expect(concat([], 1, 2, 3)).toEqual([1, 2, 3]);
                expect(concat([])).toEqual([]);
                expect(concat([], [1, 2, 3])).toEqual([1, 2, 3]);
                expect(concat(ary, [4, 5, 6, [7]])).toEqual([1, 2, 3, 4, 5, 6, [7]]);
                expect(ary).toEqual([1, 2, 3]);
                expect(concat([], "", 0, false, undefined, null)).toEqual(["", 0, false, undefined, null]);
            });
        });
    });

    describe("Dates functions", function () {

        describe("Add function", function () {
            it("should be defined", function () {
                expect(add).toBeDefined();
            });
            it("should not work against numbers", function () {
                expect(add(5, 6, 6)).toBe(false);
                expect(add(5.0, 6.0, 6.0)).toBe(false);
                expect(add(new Number(3), new Number(5), new Number(5))).toBe(false);
                expect(add(NaN, NaN, NaN)).toBe(false);
                expect(add(-5, -6, -6)).toBe(false);
                expect(add(0, 0, 0)).toBe(false);
                expect(add(Infinity, 6, 6)).toBe(false);
                expect(add(6, Infinity, Infinity)).toBe(false);
                expect(add([1,2,3], 5, 5)).toBe(false);
                expect(add(3, function() {}, function() {})).toBe(false);
            });
            it("should not work against string", function () {
                expect(add("", "", "")).toBe(false);
                expect(add(new String(""), new String(""), new String(""))).toBe(false);
                expect(add("hola", "mundo", "mundo")).toBe(false);
                expect(add([1, 2, 3], "hola", "amigo")).toBe(false);
                expect(add("hola", function() {}, "amigo")).toBe(false);
            });
            it("should not work against object", function () {
                expect(add({}, {}, {})).toBe(false);
                expect(add(new Object(), new Object(), new Object())).toBe(false);
                expect(add([1, 2, 3], {}, {})).toBe(false);
                expect(add({}, function() {}, function() {})).toBe(false);
            });
            it("should not work against booleans", function () {
                expect(add(true, true, true)).toBe(false);
                expect(add([1, 2, 3], true, true)).toBe(false);
                expect(add(true, function() {}, function() {})).toBe(false);
            });
            it("should not work against null", function () {
                expect(add(null, null, null)).toBe(false);
                expect(add([1, 2, 3], null, null)).toBe(false);
                expect(add(null, function() {}, function() {})).toBe(false);
            });
            it("should not work against undefined", function () {
                expect(add(undefined, undefined, undefined)).toBe(false);
                expect(add([1, 2, 3], undefined, undefined)).toBe(false);
                expect(add(undefined, function() {}, function() {})).toBe(false);
            });
            it("should not work against 2 functions as parameters", function () {
                expect(add(function() {}, function() {}, function() {})).toBe(false);
                expect(add(function() {}, undefined, undefined)).toBe(false);
                expect(add({}, function() {}, function() {})).toBe(false);
            });
            it("should not work against 2 arrays as parameters", function () {
                expect(add([1, 2, 3], [1, 2, 3], [1, 2, 3])).toBe(false);
                expect(add(undefined, [1, 2, 3], [1, 2, 3])).toBe(false);
            });
            it("should only work with a Date object as 1 parameter, a number positive an integer as 2nd parameter and a string as third parameter", function () {
                expect(add(new Date, 3.15, "days")).toBe(false);
                expect(add(new Date, NaN, "days")).toBe(false);
                expect(add({}, 3, "days")).toBe(false);
            });
            it("should return same date if the 3rd parameter string is not one of the valid options", function () {
                let date = new Date;
                expect(add(date, 1, "days2")).toEqual(false);
            });
            it("should work with 'years' as 3rd parameter", function () {
                let date1 = new Date;
                let year1 = date1.getFullYear();
                expect(add(date1, 1, "years").getFullYear()).toBe(year1 + 1);
            });
            it("should work with 'quarters' as 3rd parameter", function () {
                let date1 = new Date;
                let month1 = date1.getMonth();
                expect(add(date1, 1, "quarters").getMonth()).toBe(month1 + 3);
            });
            it("should work with 'months' as 3rd parameter", function () {
                let date1 = new Date;
                let month1 = date1.getMonth();
                expect(add(date1, 1, "months").getMonth()).toBe(month1 + 1);
            });
            it("should work with 'days' as 3rd parameter", function () {
                let date1 = new Date;
                let days1 = date1.getDate();
                expect(add(date1, 1, "days").getDate()).toBe(days1 + 1);
            });
            it("should work with 'hours' as 3rd parameter", function () {
                let date1 = new Date;
                let hours1 = date1.getHours();
                expect(add(date1, 1, "hours").getHours()).toBe(hours1 + 1);
            });
            it("should work with 'minutes' as 3rd parameter", function () {
                let date1 = new Date;
                let minutes1 = date1.getMinutes();
                expect(add(date1, 1, "minutes").getMinutes()).toBe(minutes1 + 1);
            });
            it("should work with 'seconds' as 3rd parameter", function () {
                let date1 = new Date;
                let seconds1 = date1.getSeconds();
                expect(add(date1, 1, "seconds").getSeconds()).toBe(seconds1 + 1);
            });
            it("should work with 'milliseconds' as 3rd parameter", function () {
                let date1 = new Date;
                let milliseconds1 = date1.getMilliseconds();
                expect(add(date1, 10, "milliseconds").getMilliseconds()).toBe(milliseconds1 + 10);
            });
        });

        describe("Subtract function", function () {
            it("should be defined", function () {
                expect(subtract).toBeDefined();
            });
            it("should not work against numbers", function () {
                expect(subtract(5, 6, 6)).toBe(false);
                expect(subtract(5.0, 6.0, 6.0)).toBe(false);
                expect(subtract(new Number(3), new Number(5), new Number(5))).toBe(false);
                expect(subtract(NaN, NaN, NaN)).toBe(false);
                expect(subtract(-5, -6, -6)).toBe(false);
                expect(subtract(0, 0, 0)).toBe(false);
                expect(subtract(Infinity, 6, 6)).toBe(false);
                expect(subtract(6, Infinity, Infinity)).toBe(false);
                expect(subtract([1,2,3], 5, 5)).toBe(false);
                expect(subtract(3, function() {}, function() {})).toBe(false);
            });
            it("should not work against string", function () {
                expect(subtract("", "", "")).toBe(false);
                expect(subtract(new String(""), new String(""), new String(""))).toBe(false);
                expect(subtract("hola", "mundo", "mundo")).toBe(false);
                expect(subtract([1, 2, 3], "hola", "amigo")).toBe(false);
                expect(subtract("hola", function() {}, "amigo")).toBe(false);
            });
            it("should not work against object", function () {
                expect(subtract({}, {}, {})).toBe(false);
                expect(subtract(new Object(), new Object(), new Object())).toBe(false);
                expect(subtract([1, 2, 3], {}, {})).toBe(false);
                expect(subtract({}, function() {}, function() {})).toBe(false);
            });
            it("should not work against booleans", function () {
                expect(subtract(true, true, true)).toBe(false);
                expect(subtract([1, 2, 3], true, true)).toBe(false);
                expect(subtract(true, function() {}, function() {})).toBe(false);
            });
            it("should not work against null", function () {
                expect(subtract(null, null, null)).toBe(false);
                expect(subtract([1, 2, 3], null, null)).toBe(false);
                expect(subtract(null, function() {}, function() {})).toBe(false);
            });
            it("should not work against undefined", function () {
                expect(subtract(undefined, undefined, undefined)).toBe(false);
                expect(subtract([1, 2, 3], undefined, undefined)).toBe(false);
                expect(subtract(undefined, function() {}, function() {})).toBe(false);
            });
            it("should not work against 2 functions as parameters", function () {
                expect(subtract(function() {}, function() {}, function() {})).toBe(false);
                expect(subtract(function() {}, undefined, undefined)).toBe(false);
                expect(subtract({}, function() {}, function() {})).toBe(false);
            });
            it("should not work against 2 arrays as parameters", function () {
                expect(subtract([1, 2, 3], [1, 2, 3], [1, 2, 3])).toBe(false);
                expect(subtract(undefined, [1, 2, 3], [1, 2, 3])).toBe(false);
            });
            it("should only work with a Date object as 1 parameter, a number positive an integer as 2nd parameter and a string as third parameter", function () {
                expect(subtract(new Date, 3.15, "days")).toBe(false);
                expect(subtract(new Date, NaN, "days")).toBe(false);
                expect(subtract({}, 3, "days")).toBe(false);
            });
            it("should return same date if the 3rd parameter string is not one of the valid options", function () {
                let date = new Date;
                expect(subtract(date, 1, "days2")).toEqual(false);
            });
            it("should work with 'years' as 3rd parameter", function () {
                let date1 = new Date;
                let year1 = date1.getFullYear();
                expect(subtract(date1, 1, "years").getFullYear()).toBe(year1 - 1);
            });
            it("should work with 'quarters' as 3rd parameter", function () {
                let date1 = new Date;
                let month1 = date1.getMonth();
                expect(subtract(date1, 1, "quarters").getMonth()).toBe(month1 - 3);
            });
            it("should work with 'months' as 3rd parameter", function () {
                let date1 = new Date;
                let month1 = date1.getMonth();
                expect(subtract(date1, 1, "months").getMonth()).toBe(month1 - 1);
            });
            it("should work with 'days' as 3rd parameter", function () {
                let date1 = new Date;
                let days1 = date1.getDate();
                expect(subtract(date1, 1, "days").getDate()).toBe(days1 - 1);
            });
            it("should work with 'hours' as 3rd parameter", function () {
                let date1 = new Date;
                let hours1 = date1.getHours();
                expect(subtract(date1, 1, "hours").getHours()).toBe(hours1 - 1);
            });
            it("should work with 'minutes' as 3rd parameter", function () {
                let date1 = new Date;
                let minutes1 = date1.getMinutes();
                expect(subtract(date1, 1, "minutes").getMinutes()).toBe(minutes1 - 1);
            });
            it("should work with 'seconds' as 3rd parameter", function () {
                let date1 = new Date;
                let seconds1 = date1.getSeconds();
                expect(subtract(date1, 1, "seconds").getSeconds()).toBe(seconds1 - 1);
            });
            it("should work with 'milliseconds' as 3rd parameter", function () {
                let date1 = new Date;
                let milliseconds1 = date1.getMilliseconds();
                expect(subtract(date1, 10, "milliseconds").getMilliseconds()).toBe(milliseconds1 - 10);
            });
        });
    });

    describe("Katas functions", function () {

        describe("encrypt function", function () {
            it("should be defined", function () {
                expect(encrypt).toBeDefined();
            });
            it("should not work against functions", function () {
                expect(encrypt(function() {}, function() {})).toBe(false);
                expect(encrypt(function() {}, 3)).toBe(false);
                expect(encrypt("hola", function() {})).toBe(false);
            });
            it("should not work against objects", function () {
                expect(encrypt({}, {})).toBe(false);
                expect(encrypt({}, 5)).toBe(false);
                expect(encrypt("hola", {})).toBe(false);
            });
            it("should not work against numbers", function () {
                expect(encrypt(5, 5)).toBe(false);
                expect(encrypt(5.0, 5.0)).toBe(false);
                expect(encrypt(Infinity, Infinity)).toBe(false);
                expect(encrypt(-5, -5)).toBe(false);
                expect(encrypt(NaN, NaN)).toBe(false);
                expect(encrypt("hola", NaN)).toBe(false);
                expect(encrypt("hola", -5)).toBe(false);
                expect(encrypt(5, -5)).toBe(false);
                expect(encrypt("hola", Infinity)).toBe(false);
            });
            it("should not work against strings", function () {
                expect(encrypt("hola", "mundo")).toBe(false);
                expect(encrypt(5, "hola")).toBe(false);
            });
            it("shuould not work against booleans", function () {
                expect(encrypt(true, true)).toBe(false);
                expect(encrypt("hola", true)).toBe(false);
                expect(encrypt(true, 5)).toBe(false);
            });
            it("should not work against null", function () {
                expect(encrypt(null, null)).toBe(false);
                expect(encrypt("hola", null)).toBe(false);
                expect(encrypt(null, 5)).toBe(false);
                expect(encrypt(null, "hola")).toBe(false);
            });
            it("should not work against undefined", function () {
                expect(encrypt(undefined, undefined)).toBe(false);
                expect(encrypt("hola", undefined)).toBe(false);
                expect(encrypt(undefined, 5)).toBe(false);
                expect(encrypt(undefined, "hola")).toBe(false);
            });
            it("should work against a string as 1st parameter and a number positive integer as second parameter", function () {
                expect(encrypt("hola", 3.15)).toBe(false);
                expect(encrypt("This is a test!", 0)).toBe("This is a test!");
                expect(encrypt("This is a test!", 1)).toBe("hsi  etTi sats!");
                expect(encrypt("This is a test!", 1.00)).toBe("hsi  etTi sats!");
                expect(encrypt("This is a test!", 2)).toBe("s eT ashi tist!");
                expect(encrypt("This is a test!", 3)).toBe(" Tah itse sits!");
            });
        });

        describe("deepReverse function", function () {
            it("should be defined", function () {
                expect(deepReverse).toBeDefined();
            });
            it("should not work against numbers", function () {
                expect(deepReverse(5)).toBe(false);
                expect(deepReverse(5.0)).toBe(false);
                expect(deepReverse(new Number(3))).toBe(false);
                expect(deepReverse(NaN)).toBe(false);
                expect(deepReverse(-5)).toBe(false);
                expect(deepReverse(0)).toBe(false);
                expect(deepReverse(Infinity)).toBe(false);
                expect(deepReverse(-Infinity)).toBe(false);
            });
            it("shold not work against strings", function () {
                expect(deepReverse("")).toBe(false);
                expect(deepReverse(new String(""))).toBe(false);
                expect(deepReverse("hola")).toBe(false);
            });
            it("should not work against object", function () {
                expect(deepReverse({})).toBe(false);
                expect(deepReverse(new Object())).toBe(false);
            });
            it("should not work against functions", function () {
                expect(deepReverse(function() {})).toBe(false);
            });
            it("should not work against booleans", function () {
                expect(deepReverse(true)).toBe(false);
                expect(deepReverse(false)).toBe(false);
            });
            it("should not work against null", function () {
                expect(deepReverse(null)).toBe(false);
            });
            it("should not work against undefined", function () {
                expect(deepReverse(undefined)).toBe(false);
            });
            it("should not work against regex", function () {
                expect(deepReverse(/abcd/)).toBe(false);
            });
            it("should only work against arrays", function () {
                expect(deepReverse([])).toEqual([]);
                expect(deepReverse([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
                expect(deepReverse([[1,2],[3,4]])).toEqual([[4,3],[2,1]]);
                expect(deepReverse([[9,8,7],[6,5,4],[3,2,1]])).toEqual([[1,2,3],[4,5,6],[7,8,9]]);
                expect(deepReverse([ [1, 2], [3, 4], 5, 6])).toEqual([6, 5, [4, 3], [2, 1]]);
            });
        });
    });
});
