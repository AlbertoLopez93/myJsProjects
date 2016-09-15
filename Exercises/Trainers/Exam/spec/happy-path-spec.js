"use strict";

let functions = require("../script");

let every = functions.every;
let some = functions.some;
let find = functions.find;
let map = functions.map;
let foreach = functions.foreach;
let filter = functions.filter;
let concat = functions.concat;
let add = functions.add;
let subtract = functions.subtract;
let encrypt = functions.encrypt;
let deepReverse = functions.deepReverse;

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

    })


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