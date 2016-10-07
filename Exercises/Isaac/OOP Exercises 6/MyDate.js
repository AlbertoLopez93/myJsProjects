(function() {
    'use strict';

    function MyDate(newYear, newMonth, newDay) {
        let _year = newYear,
            _month = newMonth,
            _day = newDay,
            strMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            strDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            dayInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        Object.defineProperties(this, {
            isLeapYear: {
                value: function(year) {
                    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
                }
            },
            isValidDate: {
                value: function(year, month, day) {
                    if (typeof year === 'number' && Number.isInteger(year) && year >= 1 && year <= 9999) {
                        if (typeof month === 'number' && Number.isInteger(month) && month >= 1 && month <= 12) {
                            let maxDays = dayInMonths[month - 1];
                            if (month === 2 && this.isLeapYear(year)) {
                                maxDays = 29;
                            }
                            if (typeof day === 'number' && Number.isInteger(day) && day >= 1 && day <= maxDays) {
                                return true;
                            }
                        }
                    }
                    return false;
                }
            },
            getDayOfWeek: {
                value: function(year, month, day) {
                    let k, m, c, y, w;
                    // How to calculate the day of the Week:
                    // w = (k + [2.6m - 0.2] - 2c + y + [y/4] + [c/4]) % 7
                    // formula extracted from: https://cs.uwaterloo.ca/~alopez-o/math-faq/node73.html

                    // k = day of month (28, 30, 31)
                    k = day;
                    // m = month (1. March, 2. April, ..., 10. December, 11. January, 12. February)
                    m = (month + 10) % 12;
                    m = m === 0 ? 1 : m;
                    // c = century (from given year 1987, century = 19)
                    c = Math.floor(year / 100);
                    // y = year (from given year 1987, year = 87, BUT if the month is equal to jan or feb, year = 86)
                    y = year % 100;
                    y = month === 1 && month === 2 ? y - 1 : y;
                    // w = represents the day of week [0. Sunday, 1. Monday, ... , 6. Saturday)
                    w = (k + Math.floor(2.6 * m - 0.2) - 2 * c + y + Math.floor(y / 4) + Math.floor(c / 4)) % 7;
                    return w;
                }
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
