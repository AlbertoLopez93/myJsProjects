"use strict"

// add

function add (obj, n, str) {
var year = obj.getFullYear();
var months = obj.getMonth();
var days = obj.getDay();
var hours = obj.getHours();
var minute = obj.getMinutes();
var second = obj.getSeconds();
var millisec = obj.getMilliseconds();
var res;

if (!(obj instanceof Date) || (typeof(n) !== 'number' || n < 0 ) || typeof(str) !== 'string' ){
    return false;
}

if (str !== 'years' && str !== 'quarters' && str !== 'months' && str !== 'days' && str !== 'hours' && str !== 'minutes' && str !== 'seconds' && str !== 'milliseconds'){
    return false;
}

console.log(obj);

switch (str){
    case 'years': res = new Date (year+n, months, days, hours, minute, second, millisec);
    break;
    case 'quarters': res = new Date (year, months+(n*3), days, hours, minute, second, millisec);
    break;
    case 'months': res = new Date (year, months, days+(n*31), hours, minute, second, millisec);
    break;
    case 'days': res = new Date (year, months, days+n, hours, minute, second, millisec);
    break;
    case 'hours': res = new Date (year, months, days, hours+n, minute, second, millisec);
    break;
    case 'minutes': res = new Date (year+n, months, days, hours, minute+n, second, millisec);
    break;
    case 'seconds': res = new Date (year, months, days, hours, minute, second+n, millisec);
    break;
    case 'milliseconds': res = new Date (year, months, days, hours, minute, second, millisec+n);
    break;
}

return res;
}


console.log(add(new Date(2016, 4, 0, 0, 0, 0, 0), 2, "quarters"));


//subtract

"use strict"

function subtract (obj, n, str) {
var year = obj.getFullYear();
var months = obj.getMonth();
var days = obj.getDay();
var hours = obj.getHours();
var minute = obj.getMinutes();
var second = obj.getSeconds();
var millisec = obj.getMilliseconds();
var res;

if (!(obj instanceof Date) || (typeof(n) !== 'number' || n < 0 ) || typeof(str) !== 'string' ){
    return false;
}

if (str !== 'years' && str !== 'quarters' && str !== 'months' && str !== 'days' && str !== 'hours' && str !== 'minutes' && str !== 'seconds' && str !== 'milliseconds'){
    return false;
}

console.log(obj);
switch (str){
    case 'years': res = new Date (year-n, months, days, hours, minute, second, millisec);
    break;
    case 'quarters': res = new Date (year, months-(n*3), days, hours, minute, second, millisec);
    break;
    case 'months': res = new Date (year, months, days-(n*31), hours, minute, second, millisec);
    break;
    case 'days': res = new Date (year, months, days-n, hours, minute, second, millisec);
    break;
    case 'hours': res = new Date (year, months, days, hours-n, minute, second, millisec);
    break;
    case 'minutes': res = new Date (year+n, months, days, hours, minute-n, second, millisec);
    break;
    case 'seconds': res = new Date (year, months, days, hours, minute, second-n, millisec);
    break;
    case 'milliseconds': res = new Date (year, months, days, hours, minute, second, millisec-n);
    break;
}

return res;
}

console.log(subtract(new Date(2016, 4, 0, 0, 0, 0, 0), 2, "months"));


//deepReverse

function deespReverse (ary) {
  var res = [], temp = 0, aux=[];
  if (!Array.isArray(ary)) {
      return false;
  }

  if (ary.length === 0) {
      return false;
  }

  if (ary.length === 1) {
      return ary;
  }
  //console.log(ary);
  for (var x = 1; x<ary.length; x++) {
        for(var y = 0; y<ary.length-1; y++) {
                aux = ary[y];
                ary[y] = ary[y+1];
                ary[y+1] = aux;
                console.log(aux);
        }
        if (Array.isArray(ary[x-1])){
          deepReverse(ary[x-1])
        }
  }

  return ary;
}

console.log(deespReverse([1,2,3,4,[4,5,6],[7,8,9]]));

//every

function every (ary, func) {
var res;
var flag = true;
var cont = 0;

  if (!Array.isArray(ary) || typeof func !== 'function' || ary.length === 0) {
    return undefined;
  }

  for (var x = 0; x < ary.length; x++) {
        res = func (ary[x], x, ary);
        console.log(res);
        if (res === ary[x]){
           cont++;
        }
  }
  if (cont === ary.length-1) {
     return true;
  } else {
      return false;
  }

}

//some

function some (ary, func) {
var res;
var flag = false;

  if (!Array.isArray(ary) || typeof func !== 'function' || ary.length === 0) {
    return undefined;
  }
  for (var x = 0; x < ary.length; x++) {
        res = func (ary[x], x, ary);
        if (!res){
           flag = true;
           break;
        }
  }
  return flag;
}

//find

function find (ary, func) {
var res;
var exit;

  if (!Array.isArray(ary) || typeof func !== 'function' || ary.length === 0) {
    return undefined;
  }

  for (var x = 0; x < ary.length; x++) {
        res = func (ary[x], x, ary);
        if (res === ary[x]){
            exit = ary[x];
           break;
        }
  }
  return exit;
}

//map

function map (ary, func) {
var res;
var newAry = [];

  if (!Array.isArray(ary) || typeof func !== 'function' || ary.length === 0) {
    return undefined;
  }

  for (var x = 0; x < ary.length; x++) {
        res = func (ary[x], x, ary);
        if (res){
            newAry.push(ary[x]);
        }
  }
  return newAry;
}
