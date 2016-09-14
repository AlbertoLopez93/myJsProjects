/**
 * Exam Phase 1 - BTS Bootcamp
 * Author: Isaac Ramírez
 * Date: 14-Sep-2016
 */
(function () {
    'use strict';

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

    // TESTS SECTION
    // ==================================================
    describe("Performing Tests...", function () {
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
}());