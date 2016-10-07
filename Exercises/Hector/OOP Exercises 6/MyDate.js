function MyDate(_year, _month, _day) {
    var year = _year;
    var month = _month;
    var day = _day;
    Object.defineProperties(this, {
        "strMonths": {
            value: [
                "Jan",
                "feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec"
            ],
            enumerable: true
        },
        "strDays": {
            value: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            enumerable: true
        },
        "daysInMonths": {
            value: [
                31,
                28,
                31,
                30,
                31,
                30,
                31,
                31,
                30,
                31,
                30,
                31
            ],
            enumerable: true
        },
        "getYear": {
            value: function () {
                return year;
            },
            enumerable: true
        },
        "getMonth": {
            value: function () {
                return month;
            },
            enumerable: true
        },
        "getDay": {
            value: function() {
                return day;
            },
            enumerable: true
        },
        "isLeapYear": {
            value: function (_year) {
                if ( _year % 4 === 0 && _year % 100 !== 0 ) {
                    return true;
                } else {
                    if ( _year % 400 === 0 ) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            },
            enumerable: true
        },
        "isValidDate": {
            value: function (year, month, day) {
                if ( year < 1 || year > 9999 ) {
                    return false;
                }
                if ( month < 1 || month > 12 ) {
                    return false;
                }
                if ( day < 1 || day > 31 ) {
                    return false;
                }
                var isLeap = this.isLeapYear(year);
                var lastDayOfMonth = this.daysInMonths[month-1];
                if (isLeap && month === 2){
                    lastDayOfMonth += 1;
                }
                if ( day <= lastDayOfMonth ) {
                    return true;
                } else {
                    return false;
                }
            },
            enumerable: true
        }
    });
}

var date = new MyDate(1993, 11, 27);
console.log(date.getYear());
console.log(date.isLeapYear(2160));
console.log("\n");
console.log(date.isValidDate(2015, 2, 29));
module.exports = MyDate;
