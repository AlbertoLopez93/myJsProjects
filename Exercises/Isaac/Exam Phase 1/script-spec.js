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
        let miliseconds = 1,
            seconds = 1000 * miliseconds,
            minutes = 60 * seconds,
            hours = 60 * minutes,
            days = 24 * hours,
            months = 31 * days,
            quarters = 3 * months,
            years = 365 * days;

        return {
            miliseconds: miliseconds,
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
        }
        return undefined;
    }

    /*
     * 4) Returns a new array with the elemenents changed by a function given.
     */
    function map(array, fnCallBack) {
        let mapped = [];
        if (Array.isArray(array) && fnCallBack instanceof Function) {
            for (let i = 0; i < array.length; i++) {
                mapped.push(fnCallBack(array[i], i, array));
            }
        }
        return mapped;
    }

    /*
     * 5) Performs a function for each element in the array.
     */
    function foreach(array, fnCallBack) {
        if (Array.isArray(array) && fnCallBack instanceof Function) {
            for (let i = 0; i < array.length; i++) {
                fnCallBack(array[i], i, array);
            }
        }
    }

    /*
     * 6) Returns a new array of elements which matched the condition given.
     */
    function filter(array, fnCallBack) {
        let filtered = [];
        if (Array.isArray(array) && fnCallBack instanceof Function) {
            for (let i = 0; i < array.length; i++) {
                if (fnCallBack(array[i], i, array)) {
                    filtered.push(array[i]);
                }
            }
        }
        return filtered;
    }

    /*
     * 7) Returns an array with all the arguments passed to the function concatenated.
     *  The first argument MUST be an array.
     */
    function concat() {
        let args = Array.prototype.slice.call(arguments);
        let result = [];
        if (args && args[0] && Array.isArray(args[0])) {
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
        }
        return result;
    }

    /*
     * 8) Shifts the even chars from a string 'times' times, then it concatenates the odd chars.
     */
    function encrypt(msg, times) {
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
                            expect(add(new Date(), 2, 'milisecond')).toBe(false);
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
                        expect(add(new Date(), 2, 'miliseconds')).not.toBe(false);
                        expect(add(new Date(), 1, 'seconds')).not.toBe(false);
                        expect(add(new Date(), 1, 'minutes')).not.toBe(false);
                        expect(add(new Date(), 1, 'hours')).not.toBe(false);
                        expect(add(new Date(), 1, 'days')).not.toBe(false);
                        expect(add(new Date(), 1, 'months')).not.toBe(false);
                        expect(add(new Date(), 1, 'quarters')).not.toBe(false);
                        expect(add(new Date(), 1, 'years')).not.toBe(false);
                    });
                    it("Should add miliseconds", function () {
                        expect(add(new Date(2016, 8, 14, 1, 30, 30, 500), 0, "miliseconds").toString()).toBe(new Date(2016, 8, 14, 1, 30, 30, 500).toString());
                        expect(add(new Date(2016, 8, 14, 1, 30, 30, 500), 101, "miliseconds").toString()).toBe(new Date(2016, 8, 14, 1, 30, 30, 601).toString());
                        expect(add(new Date(2016, 8, 14, 1, 59, 59, 999), 1, "miliseconds").toString()).toBe(new Date(2016, 8, 14, 2, 0, 0, 0).toString());
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
                            expect(subtract(new Date(), 2, 'milisecond')).toBe(false);
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
                        expect(subtract(new Date(), 2, 'miliseconds')).not.toBe(false);
                        expect(subtract(new Date(), 1, 'seconds')).not.toBe(false);
                        expect(subtract(new Date(), 1, 'minutes')).not.toBe(false);
                        expect(subtract(new Date(), 1, 'hours')).not.toBe(false);
                        expect(subtract(new Date(), 1, 'days')).not.toBe(false);
                        expect(subtract(new Date(), 1, 'months')).not.toBe(false);
                        expect(subtract(new Date(), 1, 'quarters')).not.toBe(false);
                        expect(subtract(new Date(), 1, 'years')).not.toBe(false);
                    });
                    it("Should subtract miliseconds", function () {
                        expect(subtract(new Date(2016, 8, 14, 1, 30, 30, 500), 0, "miliseconds").toString()).toBe(new Date(2016, 8, 14, 1, 30, 30, 500).toString());
                        expect(subtract(new Date(2016, 8, 14, 1, 30, 30, 601), 101, "miliseconds").toString()).toBe(new Date(2016, 8, 14, 1, 30, 30, 500).toString());
                        expect(subtract(new Date(2016, 8, 14, 2, 0, 0, 0), 1, "miliseconds").toString()).toBe(new Date(2016, 8, 14, 1, 59, 59, 999).toString());
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
}());