(function() {
    'use strict';

    function MyDate(newYear, newMonth, newDay) {
        /*jshint validthis:true */
        // Private attributes.
        // ==================================================
        let _year, _month, _day;
        let strMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            strDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            dayInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        // Initialization.
        setDate(newYear, newMonth, newDay);

        // Private functions.
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
            let max = dayInMonths[month - 1];
            max = month === 2 && isLeapYear(year) ? max + 1 : max;
            return max;
        }

        function isLeapYear(year) {
            return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
        }

        function isValidDate(year, month, day) {
            if (isValidYear(year) && isValidMonth(month) && isValidDay(day, getMaxDay(month, year))) {
                return true;
            }
            return false;
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

        function setDate(year, month, day) {
            if (isValidDate(year, month, day)) {
                _year = year;
                _month = month;
                _day = day;
            } else {
                console.log('Invalid year, month, or day!');
            }
        }

        function setYear(year) {
            if (isValidDate(year, _month, _day)) {
                _year = year;
            } else {
                console.log('Invalid year!');
            }
        }

        function getYear() {
            return _year;
        }

        function setMonth(month) {
            if (isValidDate(_year, month, _day)) {
                _month = month;
            } else {
                console.log('Invalid month!', _year, month, _day);
            }
        }

        function getMonth() {
            return _month;
        }

        function setDay(day) {
            if (isValidDate(_year, _month, day)) {
                _day = day;
            } else {
                console.log('Invalid day!');
            }
        }

        function getDay() {
            return _day;
        }

        function toString() {
            return strDays[getDayOfWeek(_year, _month, _day)] + ' ' + _day + ' ' + strMonths[_month - 1] + ' ' + _year;
        }

        function nextDay() {
            let newDay = _day + 1,
                maxDay = getMaxDay(_month, _year);
            if (newDay > maxDay) {
                let oldDay = _day,
                    oldMonth = _month;
                _day = 1;
                let updated = this.nextMonth();
                if (oldMonth === updated.getMonth()) {
                    _day = oldDay;
                }
            } else {
                _day = newDay;
            }
            return this;
        }

        function previousDay() {
            let newDay = _day - 1;
            if (newDay < 1) {
                let oldDay = _day,
                    oldMonth = _month;
                _day = 1; // to ensure that is safe
                let updated = this.previousMonth();
                if (oldMonth === updated.getMonth()) {
                    _day = oldDay;
                } else {
                    _day = getMaxDay(updated.getMonth(), _year);
                }
            } else {
                _day = newDay;
            }
            return this;
        }

        function nextMonth() {
            let newMonth = _month + 1;
            if (newMonth > 12) {
                let oldMonth = _month,
                    oldYear = _year;
                _month = 1;
                let updated = this.nextYear();
                if (oldYear === updated.getYear()) {
                    _month = oldMonth;
                }
            } else {
                _month = newMonth;
            }
            return this;
        }

        function previousMonth() {
            let newMonth = _month - 1;
            if (newMonth < 1) {
                let oldMonth = _month,
                    oldYear = _year;
                _month = 12;
                let updated = this.previousYear();
                if (oldYear === updated.getYear()) {
                    _month = oldMonth;
                }
            } else {
                _month = newMonth;
            }
            return this;
        }

        function nextYear() {
            let newYear = _year + 1;
            if (newYear <= 9999) {
                _year = newYear;
            } else {
                console.log('Year out of range!');
            }
            return this;
        }

        function previousYear() {
            let newYear = _year - 1;
            if (newYear >= 1) {
                _year = newYear;
            } else {
                console.log('Year out of range!');
            }
            return this;
        }

        Object.defineProperties(this, {
            isLeapYear: {
                value: isLeapYear
            },
            isValidDate: {
                value: isValidDate
            },
            getDayOfWeek: {
                value: getDayOfWeek
            },
            setDate: {
                value: setDate
            },
            setYear: {
                value: setYear
            },
            getYear: {
                value: getYear
            },
            setMonth: {
                value: setMonth
            },
            getMonth: {
                value: getMonth
            },
            setDay: {
                value: setDay
            },
            getDay: {
                value: getDay
            },
            toString: {
                value: toString
            },
            nextDay: {
                value: nextDay
            },
            previousDay: {
                value: previousDay
            },
            nextMonth: {
                value: nextMonth
            },
            previousMonth: {
                value: previousMonth
            },
            nextYear: {
                value: nextYear
            },
            previousYear: {
                value: previousYear
            }
        });
    }

    // Protect prototype
    Object.defineProperty(MyDate, 'prototype', {
        writable: false,
        configurable: false,
        enumerable: false
    });

    module.exports = MyDate;
}());
