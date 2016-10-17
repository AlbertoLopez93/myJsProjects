(function() {
    'use strict';

    function MyDate(newYear, newMonth, newDay) {
        /*jshint validthis:true */
        // Private attributes.
        // ==================================================
        let _year, _month, _day;

        // Initialization.
        setDate(newYear, newMonth, newDay);

        // Public functions.
        // ==================================================

        function setDate(year, month, day) {
            if (MyDate.isValidDate(year, month, day)) {
                _year = year;
                _month = month;
                _day = day;
            } else {
                console.log('Invalid year, month, or day!');
            }
        }

        function setYear(year) {
            if (MyDate.isValidDate(year, _month, _day)) {
                _year = year;
            } else {
                console.log('Invalid year!');
            }
        }

        function getYear() {
            return _year;
        }

        function setMonth(month) {
            if (MyDate.isValidDate(_year, month, _day)) {
                _month = month;
            } else {
                console.log('Invalid month!', _year, month, _day);
            }
        }

        function getMonth() {
            return _month;
        }

        function setDay(day) {
            if (MyDate.isValidDate(_year, _month, day)) {
                _day = day;
            } else {
                console.log('Invalid day!');
            }
        }

        function getDay() {
            return _day;
        }

        Object.defineProperties(this, {
            setDate: {
                value: setDate,
                enumerable: true
            },
            setYear: {
                value: setYear,
                enumerable: true
            },
            getYear: {
                value: getYear,
                enumerable: true
            },
            setMonth: {
                value: setMonth,
                enumerable: true
            },
            getMonth: {
                value: getMonth,
                enumerable: true
            },
            setDay: {
                value: setDay,
                enumerable: true
            },
            getDay: {
                value: getDay,
                enumerable: true
            }
        });
    }

    // Static properties.
    // ==================================================
    let strMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        strDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Static functions.
    // ==================================================
    function isValidYear(year) {
        return typeof year === 'number' && Number.isInteger(year) && year >= 1 && year <= 9999;
    }

    function isValidMonth(month) {
        return typeof month === 'number' && Number.isInteger(month) && month >= 1 && month <= 12;
    }

    function isValidDay(day, maxDays) {
        return typeof day === 'number' && Number.isInteger(day) && day >= 1 && day <= maxDays;
    }

    function getMaxDay(month, year) {
        let max = MyDate.daysInMonths[month - 1];
        max = month === 2 && isLeapYear(year) ? max + 1 : max;
        return max;
    }

    function isValidDate(year, month, day) {
        if (isValidYear(year) && isValidMonth(month) && isValidDay(day, getMaxDay(month, year))) {
            return true;
        }
        return false;
    }

    function isLeapYear(year) {
        return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
    }

    function getDayOfWeek(year, month, day) {
        // Formula from: https://es.wikipedia.org/wiki/Congruencia_de_Zeller
        let a, y, m, d = 0;
        if (isValidDate(year, month, day)) {
            a = Math.floor((14 - month) / 12);
            y = year - a;
            m = month + 12 * a - 2;
            d = (day + y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + Math.floor((31 * m) / 12)) % 7;
        }
        return d;
    }

    // Protect prototype
    Object.defineProperties(MyDate, {
        prototype: {
            writable: false,
            configurable: false,
            enumerable: false
        },
        strMonths: {
            value: strMonths
        },
        strDays: {
            value: strDays
        },
        daysInMonths: {
            value: daysInMonths
        },
        isValidDate: {
            value: isValidDate,
            enumerable: true
        },
        isLeapYear: {
            value: isLeapYear,
            enumerable: true
        },
        getDayOfWeek: {
            value: getDayOfWeek,
            enumerable: true
        }
    });

    Object.defineProperties(MyDate.prototype, {
        toString: {
            value: function toString() {
                return MyDate.strDays[MyDate.getDayOfWeek(this.getYear(), this.getMonth(), this.getDay())] + ' ' + this.getDay() + ' ' + MyDate.strMonths[this.getMonth() - 1] + ' ' + this.getYear();
            },
            enumerable: true
        },
        nextDay: {
            value: function nextDay() {
                let newDay = this.getDay() + 1,
                    maxDay = getMaxDay(this.getMonth(), this.getYear());
                if (newDay > maxDay) {
                    let oldDay = this.getDay(),
                        oldMonth = this.getMonth();
                    this.setDay(1);
                    let updated = this.nextMonth();
                    if (oldMonth === updated.getMonth()) {
                        this.setDay(oldDay);
                    }
                } else {
                    this.setDay(newDay);
                }
                return this;
            },
            enumerable: true
        },
        previousDay: {
            value: function previousDay() {
                let newDay = this.getDay() - 1;
                if (newDay < 1) {
                    let oldDay = this.getDay(),
                        oldMonth = this.getMonth();
                    this.setDay(1); // to ensure that is safe
                    let updated = this.previousMonth();
                    if (oldMonth === updated.getMonth()) {
                        this.setDay(oldDay);
                    } else {
                        this.setDay(getMaxDay(updated.getMonth(), this.getYear()));
                    }
                } else {
                    this.setDay(newDay);
                }
                return this;
            },
            enumerable: true
        },
        nextMonth: {
            value: function nextMonth() {
                let newMonth = this.getMonth() + 1;
                if (newMonth > 12) {
                    let oldMonth = this.getMonth(),
                        oldYear = this.getYear();
                    this.setMonth(1);
                    let updated = this.nextYear();
                    if (oldYear === updated.getYear()) {
                        this.setMonth(oldMonth);
                    }
                } else {
                    this.setMonth(newMonth);
                }
                return this;
            },
            enumerable: true
        },
        previousMonth: {
            value: function previousMonth() {
                let newMonth = this.getMonth() - 1;
                if (newMonth < 1) {
                    let oldMonth = this.getMonth(),
                        oldYear = this.getYear();
                    this.setMonth(12);
                    let updated = this.previousYear();
                    if (oldYear === updated.getYear()) {
                        this.setMonth(oldMonth);
                    }
                } else {
                    this.setMonth(newMonth);
                }
                return this;
            },
            enumerable: true
        },
        nextYear: {
            value: function nextYear() {
                let newYear = this.getYear() + 1;
                if (newYear <= 9999) {
                    this.setYear(newYear);
                } else {
                    console.log('Year out of range!');
                }
                return this;
            },
            enumerable: true
        },
        previousYear: {
            value: function previousYear() {
                let newYear = this.getYear() - 1;
                if (newYear >= 1) {
                    this.setYear(newYear);
                } else {
                    console.log('Year out of range!');
                }
                return this;
            },
            enumerable: true
        }
    });

    module.exports = MyDate;
}());
