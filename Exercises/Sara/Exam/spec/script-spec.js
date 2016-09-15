"use strict";

function add(fecha,cant,str){
  if(fecha instanceof Date===false){
    return false;
  }
  if(cant<=0 || isNaN(cant)===true || cant===Infinity || cant===null || cant===undefined || typeof cant==='boolean'){
    return false;
  }
  function addYear(f,q){
    f.setDate(f.getDate()+365*q);
    return f;
  }
  function addQuarter(f,q){
    f.setDate(f.getDate()+3*31*q);
    return f;
  }
  function addMonth(f,q){
    f.setDate(f.getDate()+31*q);
    return f;
  }
  function addDay(f,q){
    f.setDate(f.getDate()+q);
    return f;
  }
  function addHour(f,q){
    f.setHours(f.getHours()+q);
    return f;
  }
  function addMinute(f,q){
    f.setMinutes(f.getMinutes()+q);
    return f;
  }
  function addSecond(f,q){
    f.setSeconds(f.getSeconds()+q);
    return f;
  }
  function addMillisecond(f,q){
    f.setMilliseconds(f.getMilliseconds()+q);
    return f;
  }
  switch(str){
    case 'years':
      addYear(fecha,cant);
      break;
    case 'quarters':
      addQuarter(fecha,cant);
      break;
    case 'months':
      addMonth(fecha,cant);
      break;
    case 'days':
      addDay(fecha,cant);
      break;
    case 'hours':
      addHour(fecha,cant)
      break;
    case 'minutes':
      addMinute(fecha,cant)
      break;
    case 'seconds':
      addSecond(fecha,cant);
      break;
    case 'milliseconds':
      addMillisecond(fecha,cant);
      break;
    default:
      return false;
    }
  return fecha;
}

function substract(fecha,cant,str){
  if(fecha instanceof Date===false){
    return false;
  }
  if(cant<=0 || isNaN(cant)===true || cant===Infinity || cant===null || cant===undefined || typeof cant==='boolean'){
    return false;
  }
  function substractYear(f,q){
    f.setDate(f.getDate()-365*q);
    return f;
  }
  function substractQuarter(f,q){
    f.setDate(f.getDate()-3*31*q);
    return f;
  }
  function substractMonth(f,q){
    f.setDate(f.getDate()-31*q);
    return f;
  }
  function substractDay(f,q){
    f.setDate(f.getDate()-q);
    return f;
  }
  function substractHour(f,q){
    f.setHours(f.getHours()-q);
    return f;
  }
  function substractMinute(f,q){
    f.setMinutes(f.getMinutes()-q);
    return f;
  }
  function substractSecond(f,q){
    f.setSeconds(f.getSeconds()-q);
    return f;
  }
  function substractMillisecond(f,q){
    f.setMilliseconds(f.getMilliseconds()-q);
    return f;
  }
  switch(str){
    case 'years':
      substractYear(fecha,cant);
      break;
    case 'quarters':
      substractQuarter(fecha,cant);
      break;
    case 'months':
      substractMonth(fecha,cant);
      break;
    case 'days':
      substractDay(fecha,cant);
      break;
    case 'hours':
      substractHour(fecha,cant)
      break;
    case 'minutes':
      substractMinute(fecha,cant)
      break;
    case 'seconds':
      substractSecond(fecha,cant);
      break;
    case 'milliseconds':
      substractMillisecond(fecha,cant);
      break;
    default:
      return false;
    }
  return fecha;
}

function every(a,fun){
  if(Array.isArray(a)===false){
    return false;
  }
  if(typeof fun!=='function'){
    return false;
  }
  for(var i=0;i<a.length;i++){
    if(fun(a[i],i,a)===false){
      return false;
    }
  }
  return true;
}
every([],function(element){
  return element<5;
});

function some(a,fun){
  if(Array.isArray(a)===false){
    return false;
  }
  if(typeof fun!=='function'){
    return false;
  }
  for(var i=0;i<a.length;i++){
    if(fun(a[i],i,a)===true){
      return true;
    }
  }
  return false;
}
some([],function(element){
  return element===true;
});

function find(a,fun){
  if(Array.isArray(a)===false){
    return false;
  }
  if(typeof fun!=='function'){
    return false;
  }
  for(var i=0;i<a.length;i++){
    if(fun(a[i],i,a)===true){
      return a[i];
    }
  }
  return undefined;
}
find([],function(element){
  return element===5;
});

function map(a,fun){
  if(Array.isArray(a)===false){
    return false;
  }
  if(typeof fun!=='function'){
    return false;
  }
  var res=[];
  for(var i=0;i<a.length;i++){
      res[res.length]=fun(a[i],i,a);
    }
  return res;
}
map([0,0,0],function(element){
  return element+5;
});

function foreach(a,fun){
  if(Array.isArray(a)===false){
    return false;
  }
  if(typeof fun!=='function'){
    return false;
  }
  for(var i=0;i<a.length;i++){
      fun(a[i],i,a);
    }
  return undefined;
}
foreach([1,2,3],function(element,i,a){
  //console.log(a[i]);
});

function filter(a,fun){
  if(Array.isArray(a)===false){
    return false;
  }
  if(typeof fun!=='function'){
    return false;
  }
  var res=[];
  for(var i=0;i<a.length;i++){
    if(fun(a[i],i,a)===true){
      res[res.length]=a[i];
    }
  }
  return res;
}
filter([],function(element){
  return element<=2;
});

function concat(a){
  if(Array.isArray(a)===false){
    return false;
  }
  var args=Array.prototype.slice.call(arguments);
  var ary=[];
  for(var i=0;i<args.length;i++){
    if(Array.isArray(args[i])===true){
      for(var j=0;j<args[i].length;j++){
          ary[ary.length]=args[i][j];
        }
      }
    else{
      ary[ary.length]=args[i];
    }
  }
  return ary;
}
concat([],true,6,[6,7],'hola',[2,4,[7,2,4,[5]]]);

function encrypt(str,n){
  if(typeof str!=='string'){
    return false;
  }
  if(isNaN(n)===true || Number.isInteger(n)===false || n===Infinity || n===null || typeof n==='boolean'){
    return false;
  }
  if(str.length===0){
    return "";
  }
  if(str.length===1){
    return str;
  }
  var cad,index;
  for(var i=0;i<n;i++){
    if(i!==0){
      str=cad;
    }
    cad="";
    index=1;
    while(cad.length!==str.length){
      cad=cad+str[index];
      index=index+2;
      if(index===str.length){
        index=0;
      }
    }
  }
return cad;
}

describe("Testing every", function () {
  it("Debe regresar true si le mandas [1,2,3]",function(){
    expect(every([1,2,3],function(element){
      return element<5;
    })).toBe(true);
  })
  it("Debe regresar false si le mandas [5,1,2]",function(){
    expect(every([5,1,2],function(element){
      return element<5;
    })).toBe(false)
  })
  it("Debe regresar true si le mandas []",function(){
    expect(every([],function(element){
      return element<5;
    })).toBe(true);
  })
  it("Debe regresar false si le mandas 'hola'",function(){
    expect(every('hola',function(element){
      return element<5;
    })).toBe(false);
  })
  it("Debe regresar false si le mandas null",function(){
    expect(every(null,function(element){
      return element<5;
    })).toBe(false);
  })
  it("Debe regresar false si le mandas Infinity",function(){
    expect(every(Infinity,function(element){
      return element<5;
    })).toBe(false);
  })
  it("Debe regresar false si le mandas true",function(){
    expect(every(true,function(element){
      return element<5;
    })).toBe(false);
  })
});
describe("Testing some", function () {
  it("Debe regresar true si le mandas [1,2,3]",function(){
    expect(every([1,2,3],function(element){
      return element<5;
    })).toBe(true);
  })
  it("Debe regresar true si le mandas [5,1,2]",function(){
    expect(every([5,1,2],function(element){
      return element<5;
    })).toBe(false)
  })
  it("Debe regresar true si le mandas [5,5,6]",function(){
    expect(every([5,5,6],function(element){
      return element<5;
    })).toBe(false)
  })
});


describe("Testing Examen", function () {
    describe("Array's functions", function () {

        describe("every function", function () {
            it("should be defined", function () {
                expect(every).toBeDefined();
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
            it("should only work with a Date object as 1 parameter, a number positive an integer as 2nd parameter and a string as third parameter", function () {
                expect(add(new Date, 3.15, "days")).toBe(false);
                expect(add(new Date, NaN, "days")).toBe(false);
                expect(add({}, 3, "days")).toBe(false);
            });
            it("should return same date if the 3rd parameter string is not one of the valid options", function () {
                let date = new Date;
                expect(add(date, 1, "days2")).toEqual(date);
            });
            it("should work with 'years' as 3rd parameter", function () {
                let date1 = new Date;
                let year1 = date1.getFullYear();
                let date2 = new Date;
                let year2 = date2.getFullYear();
                expect(add(date1, 1, "years").getFullYear()).toBe(year1 + 1);
                expect(add(date2, -1, "years").getFullYear()).toBe(year2 - 1);
            });
            it("should work with 'quarters' as 3rd parameter", function () {
                let date1 = new Date;
                let month1 = date1.getMonth();
                let date2 = new Date;
                let month2 = date2.getMonth();
                expect(add(date1, 1, "quarters").getMonth()).toBe(month1 + 3);
                expect(add(date2, -1, "quarters").getMonth()).toBe(month2 - 3);
            });
            it("should work with 'months' as 3rd parameter", function () {
                let date1 = new Date;
                let month1 = date1.getMonth();
                let date2 = new Date;
                let month2 = date2.getMonth();
                expect(add(date1, 1, "months").getMonth()).toBe(month1 + 1);
                expect(add(date2, -1, "months").getMonth()).toBe(month2 - 1);
            });
            it("should work with 'days' as 3rd parameter", function () {
                let date1 = new Date;
                let days1 = date1.getDate();
                let date2 = new Date;
                let days2 = date2.getDate();
                expect(add(date1, 1, "days").getDate()).toBe(days1 + 1);
                expect(add(date2, -1, "days").getDate()).toBe(days2 - 1);
            });
            it("should work with 'hours' as 3rd parameter", function () {
                let date1 = new Date;
                let hours1 = date1.getHours();
                let date2 = new Date;
                let hours2 = date2.getHours();
                expect(add(date1, 1, "hours").getHours()).toBe(hours1 + 1);
                expect(add(date2, -1, "hours").getHours()).toBe(hours2 - 1);
            });
            it("should work with 'minutes' as 3rd parameter", function () {
                let date1 = new Date;
                let minutes1 = date1.getMinutes();
                let date2 = new Date;
                let minutes2 = date2.getMinutes();
                expect(add(date1, 1, "minutes").getMinutes()).toBe(minutes1 + 1);
                expect(add(date2, -1, "minutes").getMinutes()).toBe(minutes2 - 1);
            });
            it("should work with 'seconds' as 3rd parameter", function () {
                let date1 = new Date;
                let seconds1 = date1.getSeconds();
                let date2 = new Date;
                let seconds2 = date2.getSeconds();
                expect(add(date1, 1, "seconds").getSeconds()).toBe(seconds1 + 1);
                expect(add(date2, -1, "seconds").getSeconds()).toBe(seconds2 - 1);
            });
            it("should work with 'milliseconds' as 3rd parameter", function () {
                let date1 = new Date;
                let milliseconds1 = date1.getMilliseconds();
                let date2 = new Date;
                let milliseconds2 = date2.getMilliseconds();
                expect(add(date1, 10, "milliseconds").getMilliseconds()).toBe(milliseconds1 + 10);
                expect(add(date2, -10, "milliseconds").getMilliseconds()).toBe(milliseconds2 - 10);
            });
        });

        describe("Substract function", function () {
            it("should be defined", function () {
                expect(subtract).toBeDefined();
            });
            it("should only work with a Date object as 1 parameter, a number positive an integer as 2nd parameter and a string as third parameter", function () {
                expect(subtract(new Date, 3.15, "days")).toBe(false);
                expect(subtract(new Date, NaN, "days")).toBe(false);
                expect(subtract({}, 3, "days")).toBe(false);
            });
            it("should return same date if the 3rd parameter string is not one of the valid options", function () {
                let date = new Date;
                expect(subtract(date, 1, "days2")).toEqual(date);
            });
            it("should work with 'years' as 3rd parameter", function () {
                let date1 = new Date;
                let year1 = date1.getFullYear();
                let date2 = new Date;
                let year2 = date2.getFullYear();
                expect(subtract(date1, 1, "years").getFullYear()).toBe(year1 - 1);
                expect(subtract(date2, -1, "years").getFullYear()).toBe(year2 + 1);
            });
            it("should work with 'quarters' as 3rd parameter", function () {
                let date1 = new Date;
                let month1 = date1.getMonth();
                let date2 = new Date;
                let month2 = date2.getMonth();
                expect(subtract(date1, 1, "quarters").getMonth()).toBe(month1 - 3);
                expect(subtract(date2, -1, "quarters").getMonth()).toBe(month2 + 3);
            });
            it("should work with 'months' as 3rd parameter", function () {
                let date1 = new Date;
                let month1 = date1.getMonth();
                let date2 = new Date;
                let month2 = date2.getMonth();
                expect(subtract(date1, 1, "months").getMonth()).toBe(month1 - 1);
                expect(subtract(date2, -1, "months").getMonth()).toBe(month2 + 1);
            });
            it("should work with 'days' as 3rd parameter", function () {
                let date1 = new Date;
                let days1 = date1.getDate();
                let date2 = new Date;
                let days2 = date2.getDate();
                expect(subtract(date1, 1, "days").getDate()).toBe(days1 - 1);
                expect(subtract(date2, -1, "days").getDate()).toBe(days2 + 1);
            });
            it("should work with 'hours' as 3rd parameter", function () {
                let date1 = new Date;
                let hours1 = date1.getHours();
                let date2 = new Date;
                let hours2 = date2.getHours();
                expect(subtract(date1, 1, "hours").getHours()).toBe(hours1 - 1);
                expect(subtract(date2, -1, "hours").getHours()).toBe(hours2 + 1);
            });
            it("should work with 'minutes' as 3rd parameter", function () {
                let date1 = new Date;
                let minutes1 = date1.getMinutes();
                let date2 = new Date;
                let minutes2 = date2.getMinutes();
                expect(subtract(date1, 1, "minutes").getMinutes()).toBe(minutes1 - 1);
                expect(subtract(date2, -1, "minutes").getMinutes()).toBe(minutes2 + 1);
            });
            it("should work with 'seconds' as 3rd parameter", function () {
                let date1 = new Date;
                let seconds1 = date1.getSeconds();
                let date2 = new Date;
                let seconds2 = date2.getSeconds();
                expect(subtract(date1, 1, "seconds").getSeconds()).toBe(seconds1 - 1);
                expect(subtract(date2, -1, "seconds").getSeconds()).toBe(seconds2 + 1);
            });
            it("should work with 'milliseconds' as 3rd parameter", function () {
                let date1 = new Date;
                let milliseconds1 = date1.getMilliseconds();
                let date2 = new Date;
                let milliseconds2 = date2.getMilliseconds();
                expect(subtract(date1, 10, "milliseconds").getMilliseconds()).toBe(milliseconds1 - 10);
                expect(subtract(date2, -10, "milliseconds").getMilliseconds()).toBe(milliseconds2 + 10);
            });
        });
    });

    describe("Katas functions", function () {

        describe("encrypt function", function () {
            it("should be defined", function () {
                expect(encrypt).toBeDefined();
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
