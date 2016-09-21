/**
 * Exam Phase 1 - BTS Bootcamp
 * Author: Isaac Ramírez
 * Date: 14-Sep-2016
 */
(function () {
    'use strict';

    // Part One
    // ==================================================
    /*
     * Returns a dictionary of time for the functions 'add' and 'subtract'.
     */
    function dictionaryOfTime() {
        let milliseconds = 1,
            seconds = 1000 * milliseconds,
            minutes = 60 * seconds,
            hours = 60 * minutes,
            days = 24 * hours,
            months = 31 * days,
            quarters = 3 * months,
            years = 365 * days;

        return {
            milliseconds: milliseconds,
            seconds: seconds,
            minutes: minutes,
            hours: hours,
            days: days,
            months: months,
            quarters: quarters,
            years: years
        };
    }

    /*
     * Adds time to a Date Object depending by the unit (key).
     */
    function add(date, quantity, key) {
        let dictTime = dictionaryOfTime();
        if (date instanceof Date && ((typeof quantity === 'number' || quantity instanceof Number) && Number.isInteger(quantity) && quantity >= 0) && ((typeof key === 'string' || key instanceof String) && dictTime.hasOwnProperty(key))) {
            return new Date(date.valueOf() + quantity * dictTime[key]);
        }
        return false;
    }

    /*
     * Substracts time to a Date Oject depending by the unit (key).
     */
    function subtract(date, quantity, key) {
        let dictTime = dictionaryOfTime();
        if (date instanceof Date && ((typeof quantity === 'number' || quantity instanceof Number) && Number.isInteger(quantity) && quantity >= 0) && ((typeof key === 'string' || key instanceof String) && dictTime.hasOwnProperty(key))) {
            return new Date(date.valueOf() - quantity * dictTime[key]);
        }
        return false;
    }

    /*
     * Reverses the elements from an Array an all its subarrays.
     */
    function deepReverse(array) {
        if (Array.isArray(array)) {
            let reversed = [];
            for (let i = array.length - 1, val; i >= 0; i--) {
                if (Array.isArray(array[i])) {
                    val = deepReverse(array[i]);
                } else {
                    val = array[i];
                }
                reversed.push(val);
            }
            return reversed;
        }
        return false;
    }

    // Part Two
    // ==================================================
    /*
     * 1) Returns true or false if every element in the array matches the condition given.
     */
    function every(array, fnCallBack) {
        if (Array.isArray(array) && fnCallBack instanceof Function) {
            for (let i = 0; i < array.length; i++) {
                if (!fnCallBack(array[i], i, array)) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }

    /*
     * 2) Returns true or false if some element in the array matches the condition given.
     */
    function some(array, fnCallBack) {
        if (Array.isArray(array) && fnCallBack instanceof Function) {
            for (let i = 0; i < array.length; i++) {
                if (fnCallBack(array[i], i, array)) {
                    return true;
                }
            }
        }
        return false;
    }

    /*
     * 3) Returns an element which matches a condition given or undefined.
     */
    function find(array, fnCallBack) {
        if (Array.isArray(array) && fnCallBack instanceof Function) {
            for (let i = 0; i < array.length; i++) {
                if (fnCallBack(array[i], i, array)) {
                    return array[i];
                }
            }
            return undefined;
        }
        return false;
    }

    /*
     * 4) Returns a new array with the elemenents changed by a function given.
     */
    function map(array, fnCallBack) {
        if (Array.isArray(array) && fnCallBack instanceof Function) {
            let mapped = [];
            for (let i = 0; i < array.length; i++) {
                mapped.push(fnCallBack(array[i], i, array));
            }
            return mapped;
        }
        return false;
    }

    /*
     * 5) Performs a function for each element in the array.
     */
    function foreach(array, fnCallBack) {
        if (Array.isArray(array) && fnCallBack instanceof Function) {
            for (let i = 0; i < array.length; i++) {
                fnCallBack(array[i], i, array);
            }
            return undefined;
        }
        return false;
    }

    /*
     * 6) Returns a new array of elements which matched the condition given.
     */
    function filter(array, fnCallBack) {
        if (Array.isArray(array) && fnCallBack instanceof Function) {
            let filtered = [];
            for (let i = 0; i < array.length; i++) {
                if (fnCallBack(array[i], i, array)) {
                    filtered.push(array[i]);
                }
            }
            return filtered;
        }
        return false;
    }

    /*
     * 7) Returns an array with all the arguments passed to the function concatenated.
     *  The first argument MUST be an array.
     */
    function concat() {
        let args = Array.prototype.slice.call(arguments);
        if (args && args[0] && Array.isArray(args[0])) {
            let result = [];
            result = args[0].slice(0);
            for (let i = 1; i < args.length; i++) {
                if (Array.isArray(args[i])) {
                    for (let j = 0; j < args[i].length; j++) {
                        result.push(args[i][j]);
                    }
                } else {
                    result.push(args[i]);
                }
            }
            return result;
        }
        return false;
    }

    /*
     * 8) Shifts the even chars from a string 'times' times, then it concatenates the odd chars.
     */
    function _encrypt(msg, times) {
        if ((typeof msg === 'string' || msg instanceof String) && ((typeof times === 'number' || times instanceof Number) && Number.isInteger(times) && times >= 0)) {
            for (let n = 0; n < times; n++) {
                let odds = '',
                    evens = '';
                for (let i = 0; i < msg.length; i++) {
                    if (i % 2 === 0) {
                        odds += msg[i];
                    } else {
                        evens += msg[i];
                    }
                }
                msg = evens + odds;
            }
            return msg;
        }
        return false;
    }

    function encrypt(msg, times) {
        if ((typeof msg === 'string' || msg instanceof String) && ((typeof times === 'number' || times instanceof Number) && Number.isInteger(times) && times >= 0)) {
            if (times) {
                let odds = '',
                    evens = '';
                for (let i = 0; i < msg.length; i++) {
                    if (i % 2 === 0) {
                        odds += msg[i];
                    } else {
                        evens += msg[i];
                    }
                }
                msg = encrypt(evens + odds, times - 1);
            }
            return msg;
        }
        return false;
    }

    // TESTS SECTION
    // ==================================================
    xdescribe("Performing Tests...", function () {
        // Testing Part One
        // ==================================================
        describe("Testing Part One", function () {
            // add function Tests
            // ==================================================
            describe("Testing 'add' function", function () {
                it("Should exists", function () {
                    expect(add).toBeDefined();
                });
                describe("Testing invalid inputs", function () {
                    describe("Testing 'date' parameter", function () {
                        it("Should NOT work with Numbers", function () {
                            expect(add(5, 1, 'seconds')).toBe(false);
                        });
                        it("Should NOT work with Floating points", function () {
                            expect(add(5.5, 1, 'seconds')).toBe(false);
                        });
                        it("Should NOT work with Strings", function () {
                            expect(add('date', 1, 'seconds')).toBe(false);
                        });
                        it("Should NOT work with Arrays", function () {
                            expect(add([new Date()], 1, 'seconds')).toBe(false);
                        });
                        it("Should NOT work with Objects", function () {
                            expect(add({
                                date: new Date()
                            }, 1, 'seconds')).toBe(false);
                        });
                        it("Should NOT work with Functions", function () {
                            expect(add(function () {
                                return new Date();
                            }, 1, 'seconds')).toBe(false);
                        });
                        it("Should NOT work with Nulls", function () {
                            expect(add(null, 1, 'seconds')).toBe(false);
                        });
                        it("Should NOT work with Undefineds", function () {
                            expect(add(undefined, 1, 'seconds')).toBe(false);
                        });
                        it("Should NOT work with Booleans", function () {
                            expect(add(true, 1, 'seconds')).toBe(false);
                        });
                    });
                    describe("Testing 'quantity' parameter", function () {
                        it("Should NOT work with Numbers less than 0", function () {
                            expect(add(new Date(), -1, 'seconds')).toBe(false);
                        });
                        it("Should NOT work with Floating points", function () {
                            expect(add(new Date(), 1.5, 'seconds')).toBe(false);
                        });
                        it("Should NOT work with Strings", function () {
                            expect(add(new Date(), '1', 'seconds')).toBe(false);
                        });
                        it("Should NOT work with Arrays", function () {
                            expect(add(new Date(), [1], 'seconds')).toBe(false);
                        });
                        it("Should NOT work with Objects", function () {
                            expect(add(new Date(), {
                                "1": 1
                            }, 'seconds')).toBe(false);
                        });
                        it("Should NOT work with Functions", function () {
                            expect(add(new Date(), function () {
                                return 1;
                            }, 'seconds')).toBe(false);
                        });
                        it("Should NOT work with Nulls", function () {
                            expect(add(new Date(), null, 'seconds')).toBe(false);
                        });
                        it("Should NOT work with Undefineds", function () {
                            expect(add(new Date(), undefined, 'seconds')).toBe(false);
                        });
                        it("Should NOT work with Booleans", function () {
                            expect(add(new Date(), true, 'seconds')).toBe(false);
                        });
                    });
                    describe("Testing 'key' parameter", function () {
                        it("Should NOT work with Numbers", function () {
                            expect(add(new Date(), 1, 1)).toBe(false);
                        });
                        it("Should NOT work with Floating points", function () {
                            expect(add(new Date(), 1, 1.5)).toBe(false);
                        });
                        xit("Should NOT work with Strings", function () {});
                        it("Should NOT work with Arrays", function () {
                            expect(add(new Date(), 1, ['seconds'])).toBe(false);
                        });
                        it("Should NOT work with Objects", function () {
                            expect(add(new Date(), 1, {
                                seconds: 'seconds'
                            })).toBe(false);
                        });
                        it("Should NOT work with Functions", function () {
                            expect(add(new Date(), 1, function () {
                                return 'seconds';
                            })).toBe(false);
                        });
                        it("Should NOT work with Nulls", function () {
                            expect(add(new Date(), 1, null)).toBe(false);
                        });
                        it("Should NOT work with Undefineds", function () {
                            expect(add(new Date(), 1, undefined)).toBe(false);
                        });
                        it("Should NOT work with Booleans", function () {
                            expect(add(new Date(), 1, true)).toBe(false);
                        });
                        it("Should NOT work with Keys that don't exist", function () {
                            expect(add(new Date(), 2, 'millisecond')).toBe(false);
                            expect(add(new Date(), 1, 'second')).toBe(false);
                            expect(add(new Date(), 1, 'minute')).toBe(false);
                            expect(add(new Date(), 1, 'hour')).toBe(false);
                            expect(add(new Date(), 1, 'day')).toBe(false);
                            expect(add(new Date(), 1, 'month')).toBe(false);
                            expect(add(new Date(), 1, 'quarter')).toBe(false);
                            expect(add(new Date(), 1, 'year')).toBe(false);
                        });
                    });
                });
                describe("Testing valid inputs", function () {
                    it("Should WORK with valid inputs", function () {
                        expect(add(new Date(), 2, 'milliseconds')).not.toBe(false);
                        expect(add(new Date(), 1, 'seconds')).not.toBe(false);
                        expect(add(new Date(), 1, 'minutes')).not.toBe(false);
                        expect(add(new Date(), 1, 'hours')).not.toBe(false);
                        expect(add(new Date(), 1, 'days')).not.toBe(false);
                        expect(add(new Date(), 1, 'months')).not.toBe(false);
                        expect(add(new Date(), 1, 'quarters')).not.toBe(false);
                        expect(add(new Date(), 1, 'years')).not.toBe(false);
                    });
                    it("Should add milliseconds", function () {
                        expect(add(new Date(2016, 8, 14, 1, 30, 30, 500), 0, "milliseconds").toString()).toBe(new Date(2016, 8, 14, 1, 30, 30, 500).toString());
                        expect(add(new Date(2016, 8, 14, 1, 30, 30, 500), 101, "milliseconds").toString()).toBe(new Date(2016, 8, 14, 1, 30, 30, 601).toString());
                        expect(add(new Date(2016, 8, 14, 1, 59, 59, 999), 1, "milliseconds").toString()).toBe(new Date(2016, 8, 14, 2, 0, 0, 0).toString());
                    });
                    it("Should add seconds", function () {
                        expect(add(new Date(2016, 8, 14, 1, 30, 30, 500), 0, "seconds").toString()).toBe(new Date(2016, 8, 14, 1, 30, 30, 500).toString());
                        expect(add(new Date(2016, 8, 14, 1, 30, 30, 500), 30, "seconds").toString()).toBe(new Date(2016, 8, 14, 1, 31, 0, 500).toString());
                        expect(add(new Date(2016, 8, 14, 23, 59, 59, 999), 1, "seconds").toString()).toBe(new Date(2016, 8, 15, 0, 0, 0, 999).toString());
                    });
                    it("Should add minutes", function () {
                        expect(add(new Date(2016, 8, 14, 1, 30, 30, 500), 0, "minutes").toString()).toBe(new Date(2016, 8, 14, 1, 30, 30, 500).toString());
                        expect(add(new Date(2016, 8, 14, 1, 30), 2, "minutes").toString()).toBe(new Date(2016, 8, 14, 1, 32).toString());
                        expect(add(new Date(2016, 8, 14, 1, 30), 2, "minutes").toString()).toBe(new Date(2016, 8, 14, 1, 32).toString());
                    });
                    it("Should add hours", function () {
                        expect(add(new Date(2016, 8, 14, 1, 30, 30, 500), 0, "hours").toString()).toBe(new Date(2016, 8, 14, 1, 30, 30, 500).toString());
                        expect(add(new Date(2016, 8, 14, 1, 30), 2, "hours").toString()).toBe(new Date(2016, 8, 14, 3, 30).toString());
                        expect(add(new Date(2016, 8, 14, 1, 30), 24, "hours").toString()).toBe(new Date(2016, 8, 15, 1, 30).toString());
                    });
                    it("Should add days", function () {
                        expect(add(new Date(2016, 8, 14, 1, 30, 30, 500), 0, "days").toString()).toBe(new Date(2016, 8, 14, 1, 30, 30, 500).toString());
                        expect(add(new Date(2016, 8, 14, 1, 30), 2, "days").toString()).toBe(new Date(2016, 8, 16, 1, 30).toString());
                        expect(add(new Date(2016, 8, 14, 1, 30), 31, "days").toString()).toBe(new Date(2016, 9, 15, 1, 30).toString());
                    });
                    it("Should add months", function () {
                        expect(add(new Date(2016, 8, 14, 1, 30, 30, 500), 0, "months").toString()).toBe(new Date(2016, 8, 14, 1, 30, 30, 500).toString());
                        expect(add(new Date(2016, 8, 14, 1, 30), 2, "months").toString()).toBe(new Date(2016, 10, 15, 0, 30).toString());
                        expect(add(new Date(2016, 8, 14, 1, 30), 12, "months").toString()).toBe(new Date(2017, 8, 21, 1, 30).toString());
                    });
                    it("Should add quarters", function () {
                        expect(add(new Date(2016, 8, 14, 1, 30, 30, 500), 0, "quarters").toString()).toBe(new Date(2016, 8, 14, 1, 30, 30, 500).toString());
                        expect(add(new Date(2016, 8, 14, 1, 30), 1, "quarters").toString()).toBe(new Date(2016, 11, 16, 0, 30).toString());
                        expect(add(new Date(2016, 8, 14, 1, 30), 4, "quarters").toString()).toBe(new Date(2017, 8, 21, 1, 30).toString());
                    });
                    it("Should add years", function () {
                        expect(add(new Date(2016, 8, 14, 1, 30, 30, 500), 0, "years").toString()).toBe(new Date(2016, 8, 14, 1, 30, 30, 500).toString());
                        expect(add(new Date(2016, 8, 14, 1, 30), 1, "years").toString()).toBe(new Date(2017, 8, 14, 1, 30).toString());
                        expect(add(new Date(2016, 8, 14, 1, 30), 1000, "years").toString()).toBe(new Date(3016, 0, 16, 0, 30).toString());
                    });
                });
            });
            // subtract function Tests
            // ==================================================
            describe("Testing 'subtract' function", function () {
                it("Should exists", function () {
                    expect(subtract).toBeDefined();
                });
                describe("Testing invalid inputs", function () {
                    describe("Testing 'date' parameter", function () {
                        it("Should NOT work with Numbers", function () {
                            expect(subtract(5, 1, 'seconds')).toBe(false);
                        });
                        it("Should NOT work with Floating points", function () {
                            expect(subtract(5.5, 1, 'seconds')).toBe(false);
                        });
                        it("Should NOT work with Strings", function () {
                            expect(subtract('date', 1, 'seconds')).toBe(false);
                        });
                        it("Should NOT work with Arrays", function () {
                            expect(subtract([new Date()], 1, 'seconds')).toBe(false);
                        });
                        it("Should NOT work with Objects", function () {
                            expect(subtract({
                                date: new Date()
                            }, 1, 'seconds')).toBe(false);
                        });
                        it("Should NOT work with Functions", function () {
                            expect(subtract(function () {
                                return new Date();
                            }, 1, 'seconds')).toBe(false);
                        });
                        it("Should NOT work with Nulls", function () {
                            expect(subtract(null, 1, 'seconds')).toBe(false);
                        });
                        it("Should NOT work with Undefineds", function () {
                            expect(subtract(undefined, 1, 'seconds')).toBe(false);
                        });
                        it("Should NOT work with Booleans", function () {
                            expect(subtract(true, 1, 'seconds')).toBe(false);
                        });
                    });
                    describe("Testing 'quantity' parameter", function () {
                        it("Should NOT work with Numbers less than 0", function () {
                            expect(subtract(new Date(), -1, 'seconds')).toBe(false);
                        });
                        it("Should NOT work with Floating points", function () {
                            expect(subtract(new Date(), 1.5, 'seconds')).toBe(false);
                        });
                        it("Should NOT work with Strings", function () {
                            expect(subtract(new Date(), '1', 'seconds')).toBe(false);
                        });
                        it("Should NOT work with Arrays", function () {
                            expect(subtract(new Date(), [1], 'seconds')).toBe(false);
                        });
                        it("Should NOT work with Objects", function () {
                            expect(subtract(new Date(), {
                                "1": 1
                            }, 'seconds')).toBe(false);
                        });
                        it("Should NOT work with Functions", function () {
                            expect(subtract(new Date(), function () {
                                return 1;
                            }, 'seconds')).toBe(false);
                        });
                        it("Should NOT work with Nulls", function () {
                            expect(subtract(new Date(), null, 'seconds')).toBe(false);
                        });
                        it("Should NOT work with Undefineds", function () {
                            expect(subtract(new Date(), undefined, 'seconds')).toBe(false);
                        });
                        it("Should NOT work with Booleans", function () {
                            expect(subtract(new Date(), true, 'seconds')).toBe(false);
                        });
                    });
                    describe("Testing 'key' parameter", function () {
                        it("Should NOT work with Numbers", function () {
                            expect(subtract(new Date(), 1, 1)).toBe(false);
                        });
                        it("Should NOT work with Floating points", function () {
                            expect(subtract(new Date(), 1, 1.5)).toBe(false);
                        });
                        xit("Should NOT work with Strings", function () {});
                        it("Should NOT work with Arrays", function () {
                            expect(subtract(new Date(), 1, ['seconds'])).toBe(false);
                        });
                        it("Should NOT work with Objects", function () {
                            expect(subtract(new Date(), 1, {
                                seconds: 'seconds'
                            })).toBe(false);
                        });
                        it("Should NOT work with Functions", function () {
                            expect(subtract(new Date(), 1, function () {
                                return 'seconds';
                            })).toBe(false);
                        });
                        it("Should NOT work with Nulls", function () {
                            expect(subtract(new Date(), 1, null)).toBe(false);
                        });
                        it("Should NOT work with Undefineds", function () {
                            expect(subtract(new Date(), 1, undefined)).toBe(false);
                        });
                        it("Should NOT work with Booleans", function () {
                            expect(subtract(new Date(), 1, true)).toBe(false);
                        });
                        it("Should NOT work with Keys that don't exist", function () {
                            expect(subtract(new Date(), 2, 'millisecond')).toBe(false);
                            expect(subtract(new Date(), 1, 'second')).toBe(false);
                            expect(subtract(new Date(), 1, 'minute')).toBe(false);
                            expect(subtract(new Date(), 1, 'hour')).toBe(false);
                            expect(subtract(new Date(), 1, 'day')).toBe(false);
                            expect(subtract(new Date(), 1, 'month')).toBe(false);
                            expect(subtract(new Date(), 1, 'quarter')).toBe(false);
                            expect(subtract(new Date(), 1, 'year')).toBe(false);
                        });
                    });
                });
                describe("Testing valid inputs", function () {
                    it("Should WORK with valid inputs", function () {
                        expect(subtract(new Date(), 2, 'milliseconds')).not.toBe(false);
                        expect(subtract(new Date(), 1, 'seconds')).not.toBe(false);
                        expect(subtract(new Date(), 1, 'minutes')).not.toBe(false);
                        expect(subtract(new Date(), 1, 'hours')).not.toBe(false);
                        expect(subtract(new Date(), 1, 'days')).not.toBe(false);
                        expect(subtract(new Date(), 1, 'months')).not.toBe(false);
                        expect(subtract(new Date(), 1, 'quarters')).not.toBe(false);
                        expect(subtract(new Date(), 1, 'years')).not.toBe(false);
                    });
                    it("Should subtract milliseconds", function () {
                        expect(subtract(new Date(2016, 8, 14, 1, 30, 30, 500), 0, "milliseconds").toString()).toBe(new Date(2016, 8, 14, 1, 30, 30, 500).toString());
                        expect(subtract(new Date(2016, 8, 14, 1, 30, 30, 601), 101, "milliseconds").toString()).toBe(new Date(2016, 8, 14, 1, 30, 30, 500).toString());
                        expect(subtract(new Date(2016, 8, 14, 2, 0, 0, 0), 1, "milliseconds").toString()).toBe(new Date(2016, 8, 14, 1, 59, 59, 999).toString());
                    });
                    it("Should subtract seconds", function () {
                        expect(subtract(new Date(2016, 8, 14, 1, 30, 30, 500), 0, "seconds").toString()).toBe(new Date(2016, 8, 14, 1, 30, 30, 500).toString());
                        expect(subtract(new Date(2016, 8, 14, 1, 30, 30, 500), 30, "seconds").toString()).toBe(new Date(2016, 8, 14, 1, 30, 0, 500).toString());
                        expect(subtract(new Date(2016, 8, 15, 0, 0, 0, 0), 1, "seconds").toString()).toBe(new Date(2016, 8, 14, 23, 59, 59, 0).toString());
                    });
                    it("Should subtract minutes", function () {
                        expect(subtract(new Date(2016, 8, 14, 1, 30, 30, 500), 0, "minutes").toString()).toBe(new Date(2016, 8, 14, 1, 30, 30, 500).toString());
                        expect(subtract(new Date(2016, 8, 14, 1, 30), 2, "minutes").toString()).toBe(new Date(2016, 8, 14, 1, 28).toString());
                    });
                    it("Should subtract hours", function () {
                        expect(subtract(new Date(2016, 8, 14, 1, 30, 30, 500), 0, "hours").toString()).toBe(new Date(2016, 8, 14, 1, 30, 30, 500).toString());
                        expect(subtract(new Date(2016, 8, 14, 1, 30), 2, "hours").toString()).toBe(new Date(2016, 8, 13, 23, 30).toString());
                        expect(subtract(new Date(2016, 8, 14, 1, 30), 24, "hours").toString()).toBe(new Date(2016, 8, 13, 1, 30).toString());
                    });
                    it("Should subtract days", function () {
                        expect(subtract(new Date(2016, 8, 14, 1, 30, 30, 500), 0, "days").toString()).toBe(new Date(2016, 8, 14, 1, 30, 30, 500).toString());
                        expect(subtract(new Date(2016, 8, 14, 1, 30), 2, "days").toString()).toBe(new Date(2016, 8, 12, 1, 30).toString());
                        expect(subtract(new Date(2016, 8, 14, 1, 30), 30, "days").toString()).toBe(new Date(2016, 7, 15, 1, 30).toString());
                    });
                    it("Should subtract months", function () {
                        expect(subtract(new Date(2016, 8, 14, 1, 30, 30, 500), 0, "months").toString()).toBe(new Date(2016, 8, 14, 1, 30, 30, 500).toString());
                        expect(subtract(new Date(2016, 8, 14, 1, 30), 2, "months").toString()).toBe(new Date(2016, 6, 14, 1, 30).toString());
                        expect(subtract(new Date(2016, 8, 14, 1, 30), 12, "months").toString()).toBe(new Date(2015, 8, 8, 1, 30).toString());
                    });
                    it("Should subtract quarters", function () {
                        expect(subtract(new Date(2016, 8, 14, 1, 30, 30, 500), 0, "quarters").toString()).toBe(new Date(2016, 8, 14, 1, 30, 30, 500).toString());
                        expect(subtract(new Date(2016, 8, 14, 1, 30), 1, "quarters").toString()).toBe(new Date(2016, 5, 13, 1, 30).toString());
                        expect(subtract(new Date(2016, 8, 14, 1, 30), 4, "quarters").toString()).toBe(new Date(2015, 8, 8, 1, 30).toString());
                    });
                    it("Should subtract years", function () {
                        expect(subtract(new Date(2016, 8, 14, 1, 30, 30, 500), 0, "years").toString()).toBe(new Date(2016, 8, 14, 1, 30, 30, 500).toString());
                        expect(subtract(new Date(2016, 8, 14, 1, 30), 1, "years").toString()).toBe(new Date(2015, 8, 15, 1, 30).toString());
                        expect(subtract(new Date(2016, 8, 14, 1, 30), 1000, "years").toString()).toBe(new Date(1017, 4, 15, 1, 30).toString());
                    });
                });
            });
            // deepReverse function Tests
            // ==================================================
            describe("Testing 'deepReverse' function", function () {
                it("Should exists", function () {
                    expect(deepReverse).toBeDefined();
                });
                describe("Testing invalid inputs", function () {
                    it("Should NOT work with Numbers", function () {
                        expect(deepReverse(1)).toBe(false);
                    });
                    it("Should NOT work with Floating points", function () {
                        expect(deepReverse(1.1)).toBe(false);
                    });
                    it("Should NOT work with Strings", function () {
                        expect(deepReverse('[1, 2]')).toBe(false);
                    });
                    xit("Should NOT work with Arrays", function () {});
                    it("Should NOT work with Objects", function () {
                        expect(deepReverse({
                            "1": [1, 2]
                        })).toBe(false);
                    });
                    it("Should NOT work with Functions", function () {
                        expect(deepReverse(function () {
                            return [1, 2];
                        })).toBe(false);
                    });
                    it("Should NOT work with Nulls", function () {
                        expect(deepReverse(null)).toBe(false);
                    });
                    it("Should NOT work with Undefineds", function () {
                        expect(deepReverse(undefined)).toBe(false);
                    });
                    it("Should NOT work with Booleans", function () {
                        expect(deepReverse(false)).toBe(false);
                    });
                });

                describe("Testing valid inputs", function () {
                    it("Should WORK with Arrays", function () {
                        expect(deepReverse([1, 2, 3])).not.toBe(false);
                    });
                    it("Should reverse the arrays", function () {
                        expect(deepReverse([[1, 2], [3, 4]])).toEqual([[4, 3], [2, 1]]);
                        expect(deepReverse([[9, 8, 7], [6, 5, 4], [3, 2, 1]])).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
                        expect(deepReverse([[50, 51, [52, 53]], [[54, 55], 56, 57]])).toEqual([[57, 56, [55, 54]], [[53, 52], 51, 50]]);
                    });
                });
            });
        });
        // Testing Part Two
        // ==================================================
        describe("Testing Part Two", function () {
            // every function tests
            // ==================================================
            describe("Testing 'every' function", function () {
                it("Should exists", function () {
                    expect(every).toBeDefined();
                });
                describe("Testing invalid inputs", function () {
                    // Arrays
                    // Numbers
                    // Floating Points
                    // Nulls
                    // Undefineds
                    // Functions
                    // Objects
                    // Strings
                    // Booleans
                });
                describe("Testing valid inputs", function () {
                    it("Should WORK with Arrays and Functions", function () {
                        expect(every([1, 2, 3], function (element) {
                            return element < 5;
                        })).not.toBe(false);
                        expect(every([1, 2, 3], function (element) {
                            return element > 5;
                        })).not.toBe(true);
                    });
                    it("Should return True", function () {
                        expect(every([1, 2, 3], function (element) {
                            return element < 5;
                        })).toBe(true);
                    });
                    it("Should return False", function () {
                        expect(every([1, 2, 3], function (element) {
                            return element > 5;
                        })).toBe(false);
                    });
                });
            });
            // some function tests
            // ==================================================
            describe("Testing 'some' function", function () {
                it("Should exists", function () {
                    expect(some).toBeDefined();
                });
                describe("Testing invalid inputs", function () {
                    // Arrays
                    // Numbers
                    // Floating Points
                    // Nulls
                    // Undefineds
                    // Functions
                    // Objects
                    // Strings
                    // Booleans
                });
                describe("Testing valid inputs", function () {
                    it("Should WORK with Arrays and Functions", function () {
                        expect(some([1, 2, 3], function (element) {
                            return element === 3;
                        })).not.toBe(false);
                        expect(some([1, 2, 3], function (element) {
                            return element === 5;
                        })).not.toBe(true);
                    });
                    it("Should return True", function () {
                        expect(some([1, 2, 3], function (element) {
                            return element <= 1;
                        })).toBe(true);
                    });
                    it("Should return False", function () {
                        expect(some([1, 2, 3], function (element) {
                            return element > 5;
                        })).toBe(false);
                    });
                });
            });
            // find function tests
            // ==================================================
            describe("Testing 'find' function", function () {
                it("Should exists", function () {
                    expect(find).toBeDefined();
                });
                describe("Testing invalid inputs", function () {
                    // Arrays
                    // Numbers
                    // Floating Points
                    // Nulls
                    // Undefineds
                    // Functions
                    // Objects
                    // Strings
                    // Booleans
                });
                describe("Testing valid inputs", function () {
                    it("Should WORK with Arrays and Functions", function () {
                        expect(find([1, 2, 3], function (element) {
                            return element === 3;
                        })).not.toBe(undefined);
                        expect(find([1, 2, 3], function (element) {
                            return element === 5;
                        })).not.toBe(5);
                    });
                    it("Should return a Value", function () {
                        expect(find([1, 2, 3], function (element) {
                            return element === 2;
                        })).toBe(2);
                    });
                    it("Should return Undefined", function () {
                        expect(find([1, 2, 3], function (element) {
                            return element === 5;
                        })).toBe(undefined);
                    });
                });
            });
            // map function tests
            // ==================================================
            describe("Testing 'map' function", function () {
                it("Should exists", function () {
                    expect(map).toBeDefined();
                });
                describe("Testing invalid inputs", function () {
                    // Arrays
                    // Numbers
                    // Floating Points
                    // Nulls
                    // Undefineds
                    // Functions
                    // Objects
                    // Strings
                    // Booleans
                });
                describe("Testing valid inputs", function () {
                    let array = [1, 2, 3];
                    it("Should WORK with Arrays and Functions", function () {
                        expect(map(array, function (element) {
                            return element * 2;
                        })).not.toEqual([]);
                        expect(map([], function (element) {
                            return element * 2;
                        })).not.toEqual([2]);
                    });
                    it("Should not modify the original array", function () {
                        expect(array).toEqual([1, 2, 3]);
                    });
                    it("Should return a new array", function () {
                        expect(map(array, function (element) {
                            return element * 2;
                        })).toEqual([2, 4, 6]);
                    });
                    it("Should not modify the original array", function () {
                        expect(array).toEqual([1, 2, 3]);
                    });
                    it("Should return an empty array", function () {
                        expect(map([], function (element) {
                            return element * 2;
                        })).toEqual([]);
                    });
                    let obj = {
                        a: 1
                    };
                    let arrayObjects = [obj, Number(2), String(3)];
                    it("Should return a new array of objects", function () {
                        let mapArray = map(arrayObjects, function (e) {
                            return e;
                        });
                        expect(mapArray).toEqual(arrayObjects);
                        expect(mapArray).not.toBe(arrayObjects);
                    });
                });
            });
            // foreach function tests
            // ==================================================
            describe("Testing 'foreach' function", function () {
                it("Should exists", function () {
                    expect(foreach).toBeDefined();
                });
                describe("Testing invalid inputs", function () {
                    // Arrays
                    // Numbers
                    // Floating Points
                    // Nulls
                    // Undefineds
                    // Functions
                    // Objects
                    // Strings
                    // Booleans
                });
                describe("Testing valid inputs", function () {
                    let array = [1, 2, 3];
                    it("Should WORK with Arrays and Functions", function () {
                        expect(foreach(array, function (element) {
                            return element; // it does nothing.
                        })).not.toEqual([]);
                        expect(foreach(array, function (element) {
                            return element; // it does nothing.
                        })).toBe(undefined);
                    });
                    it("Should not modify the original array", function () {
                        expect(array).toEqual([1, 2, 3]);
                    });
                    it("Should sum all elements", function () {
                        let result = 0;
                        expect(foreach(array, function (element) {
                            result += element;
                        })).toBe(undefined);
                        expect(result).toBe(6);
                    });
                    it("Should not modify the original array", function () {
                        expect(array).toEqual([1, 2, 3]);
                    });
                });
            });
            // filter function tests
            // ==================================================
            describe("Testing 'filter' function", function () {
                it("Should exists", function () {
                    expect(filter).toBeDefined();
                });
                describe("Testing invalid inputs", function () {
                    // Arrays
                    // Numbers
                    // Floating Points
                    // Nulls
                    // Undefineds
                    // Functions
                    // Objects
                    // Strings
                    // Booleans
                });
                describe("Testing valid inputs", function () {
                    let array = [1, 2, 3];
                    it("Should WORK with Arrays and Functions", function () {
                        expect(filter(array, function (element) {
                            return element < 5;
                        })).toEqual([1, 2, 3]);
                    });
                    it("Should not modify the original array", function () {
                        expect(array).toEqual([1, 2, 3]);
                        expect(array).toBe(array);
                    });
                    it("Should filter elements odd elements", function () {
                        expect(filter(array, function (element) {
                            return element % 2 !== 0;
                        })).toEqual([1, 3]);
                    });
                    it("Should return an empty array", function () {
                        expect(filter(array, function (element) {
                            return element > 3;
                        })).toEqual([]);
                    });
                    it("Should return a copy of the array", function () {
                        expect(filter(array, function (element) {
                            return element;
                        })).toEqual(array);
                    });
                    it("Should not modify the original array", function () {
                        expect(array).toEqual([1, 2, 3]);
                    });
                });
            });
            // concat function tests
            // ==================================================
            describe("Testing 'concat' function", function () {
                it("Should exists", function () {
                    expect(concat).toBeDefined();
                });
                describe("Testing invalid inputs", function () {
                    // Arrays
                    // Numbers
                    // Floating Points
                    // Nulls
                    // Undefineds
                    // Functions
                    // Objects
                    // Strings
                    // Booleans
                });
                describe("Testing valid inputs", function () {
                    let array = [1, 2, 3];
                    it("Should WORK with Arrays and Functions", function () {
                        expect(concat(array)).not.toEqual([]);
                        expect(concat([])).not.toEqual([1, 2, 3]);
                    });
                    it("Should return an empty array", function () {
                        expect(concat([])).toEqual([]);
                    });
                    it("Should concat the arguments", function () {
                        expect(concat(array, [4, 5, 6, [7]])).toEqual([1, 2, 3, 4, 5, 6, [7]]);
                        let obj = {
                            a: 1
                        };
                        expect(concat(array, obj, null, undefined, ['a', 3, 4.5])).toEqual([1, 2, 3, obj, null, undefined, 'a', 3, 4.5]);
                    });
                    it("Should not modify the original array", function () {
                        expect(array).toEqual([1, 2, 3]);
                    });
                });
            });
            // encrypt function tests
            // ==================================================
            describe("Testing 'encrypt' function", function () {
                it("Should exists", function () {
                    expect(encrypt).toBeDefined();
                });
                describe("Testing invalid inputs", function () {
                    // Arrays
                    // Numbers
                    // Floating Points
                    // Nulls
                    // Undefineds
                    // Functions
                    // Objects
                    // Strings
                    // Booleans
                });
                describe("Testing valid inputs", function () {
                    it("Should WORK with Strings and Numbers", function () {
                        expect(encrypt('Hola', 1)).not.toBe(false);
                    });
                    it("Should encrypt a message 0 times", function () {
                        expect(encrypt('Hola', 0)).toBe('Hola');
                    });
                    it("Should encrypt a message 1 times", function () {
                        expect(encrypt('Hola', 1)).toBe('oaHl');
                        expect(encrypt('This is a test!', 1)).toBe('hsi  etTi sats!');
                    });
                    it("Should encrypt a message 2 times", function () {
                        expect(encrypt('Hola', 2)).toBe('aloH');
                        expect(encrypt('This is a test!', 2)).toBe('s eT ashi tist!');
                    });
                    it("Should encrypt a message 3 times", function () {
                        expect(encrypt('Hola', 3)).toBe('lHao');
                    });
                    it("Should encrypt a message 4 times", function () {
                        expect(encrypt('Hola', 4)).toBe('Hola');
                    });
                });
            });
        });
    });


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
}());