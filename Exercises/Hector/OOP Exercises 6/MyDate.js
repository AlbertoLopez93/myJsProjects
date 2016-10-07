function MyDate(_year, _month, _day) {
    var year;
    var month;
    var day;
    var strMonths = [
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
        ];
        var strDays = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];

        var daysInMonths = [
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
        ];

    Object.defineProperties(this, {
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
            value: function (_y) {
                var _year = _y || year;
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
            value: function (y, m, d) {
                var _year = y;
                var _month = m;
                var _day = d;
                if (  _day % 1 !== 0 || typeof _day !== "number" ) {
                    return false;
                }
                if (  _month % 1 !== 0 || typeof _month !== "number" ) {
                    return false;
                }
                if (  _year % 1 !== 0 || typeof _year !== "number" ) {
                    return false;
                }

                if ( _year < 1 || _year > 9999 ) {
                    return false;
                }
                if ( _month < 1 || _month > 12 ) {
                    return false;
                }
                if ( _day < 1 || _day > 31 ) {
                    return false;
                }
                var isLeap = this.isLeapYear(_year);
                var lastDayOfMonth = daysInMonths[_month-1];
                if (isLeap && _month === 2){
                    lastDayOfMonth += 1;
                }
                if ( _day <= lastDayOfMonth ) {
                    return true;
                } else {
                    return false;
                }
            },
            enumerable: true
        },
        "getDayOfWeek": {
            value: function(year, month, day) {
                var validDate = this.isValidDate(year, month, day);
                if ( !validDate ) {
                    return false;
                }
                var a = Math.floor((14 - month) / 12);
                var y = year - a;
                var m = month + 12 * a - 2;

                var d = (day + y + Math.floor(y/4) - Math.floor(y/100) + Math.floor(y/400) + Math.floor((31*m)/12)) % 7;
                return d;
            },
            enumerable: true
        },// return a + " " + " " + y + " " + m;
        "setDate": {
            value: function(_year, _month, _day) {
                var validDate = this.isValidDate(_year, _month, _day);
                if ( !validDate ) {
                    console.log("Invalid year, month, or day!");
                } else {
                    year = _year;
                    month = _month;
                    day = _day;
                }

            }
        },
        "setYear": {
            value: function (newYear) {
                if (Number.isInteger (newYear) && newYear <= 9999 && newYear >= 1) {
                    year = newYear;
                }
            },
            enumerable: true
        },
        "setMonth": {
            value: function (newMonth) {
                var maxDay = daysInMonths[newMonth-1];
                if (Number.isInteger (newMonth) && newMonth <= 12 && newMonth >= 1 && day <= maxDay) {
                    month = newMonth;
                }
            },
            enumerable: true
        },
        "setDay": {
            value: function (newDay) {
                var isLeap = this.isLeapYear(year);
                var maxDaysInMonth = daysInMonths[month-1];
                var currentMonth = this.getMonth();
                if ( isLeap && currentMonth === 2){
                    maxDaysInMonth += 1;
                }
                if ( newDay >= 1 && newDay <= maxDaysInMonth ) {
                    day = newDay;
                } else {
                    console.log("Invalid month!");
                }
            },
            enumerable: true
        },
        "toString": {
            value: function () {
                var month = this.getMonth();
                var day = this.getDay();
                var year = this.getYear();
                var dayOfWeek = this.getDayOfWeek(year, month, day);
                return strDays[dayOfWeek] + " " + day + " " + strMonths[month-1] + " " + year;
            },
            enumerable: true
        },
        "nextDay": {
            value: function() {

                let currentDay = this.getDay();
                let newDay = currentDay + 1;
                let currentYear = this.getYear();
                let isLeap = this.isLeapYear(year);
                let maxDaysInMonth = daysInMonths[month-1];
                let currentMonth = this.getMonth();
                if ( isLeap && currentMonth === 2){
                    maxDaysInMonth += 1;
                }
                if (year < 9999) {
                    if (newDay > maxDaysInMonth) {
                        day = 1;
                        currentMonth += 1;
                        if (currentMonth > 12) {
                            month = 1;
                            year += 1;
                        } else {
                            month += 1;
                        }
                    } else {
                        day = newDay;
                    }
                }

                return this;
            }
        },
        "nextMonth": {
            value: function() {

                let currentDay = this.getDay();
                let currentYear = this.getYear();
                let isLeap = this.isLeapYear(year);
                let maxDaysInMonth = daysInMonths[month-1];
                let currentMonth = this.getMonth();
                let newMonth = currentMonth + 1;
                if ( isLeap && currentMonth === 2){
                    maxDaysInMonth += 1;
                }
                if (year<9999) {
                    if ( newMonth > 12 ) {
                        month = 1;
                        if (year <= 9998) {
                            year += 1;
                        }
                    } else {
                        month += 1;
                        var newMax = daysInMonths[month-1];
                        if(isLeap && month === 2){
                            newMax += 1;
                        }
                        console.log(newMax);
                        if ( day > newMax ){
                            day = newMax;
                        }
                    }
                }

                return this;
            }
        },
        "nextYear": {
            value: function(){
                if (year <= 9998) {
                    year += 1;
                }

                let currentDay = this.getDay();
                let isLeap = this.isLeapYear(year);
                var maxDays = daysInMonths[month-1];
                console.log(maxDays);
                if(isLeap && month === 2){
                    maxDays += 1;
                }
                if ( day > maxDays ){
                    day = maxDays;
                }

                return this;
            }
        },
        "previousDay": {
            value: function() {
                if ( year > 1) {
                    let currentDay = this.getDay();
                    let newDay = currentDay - 1;
                    let currentYear = this.getYear();
                    let isLeap = this.isLeapYear(year);
                    let currentMonth = this.getMonth();
                    let  maxDaysInMonth = daysInMonths[month-2];
                    if ( isLeap && currentMonth === 3){
                        maxDaysInMonth += 1;
                    }
                    if (newDay === 0 && month === 1) {
                        day = 31;
                        month = 12;
                        year -= 1;
                        if ( year <= 0) {
                            return this;
                        }
                    } else {
                        if ( newDay === 0 ) {
                            day = maxDaysInMonth;
                            month = month - 1;
                        } else {
                            day -= 1;
                        }
                    }
                }
                return this;
            }
        },
        "previousMonth": {
            value: function() {
                if ( year > 1) {
                    let currentDay = this.getDay();
                    let currentYear = this.getYear();
                    let isLeap = this.isLeapYear(year);
                    let maxDaysInMonth = daysInMonths[month-2];
                    let currentMonth = this.getMonth();
                    if ( isLeap && currentMonth === 3){
                        maxDaysInMonth += 1;
                    }
                    if ( month === 1 ) {
                        month = 12;
                        year -= 1;
                    } else {
                        month = month-1;
                        if (currentDay > maxDaysInMonth ){
                            day = maxDaysInMonth;
                        }
                    }
                }
                return this;
            }
        },
        "previousYear": {
            value: function(){
                if ( year > 1) {
                    year -= 1;
                    let currentDay = this.getDay();
                    let isLeap = this.isLeapYear(year);
                    var maxDays = daysInMonths[month-1];
                    if(isLeap && month === 3){
                        maxDays += 1;
                    }
                    if ( day > maxDays ){
                        day = maxDays;
                    }
                }

                return this;
            }
        },
    });
    this.setDate(_year, _month,_day);
}
// Object.defineProperties(MyDate.prototype, {
//
//
// });
//
// var date = new MyDate(201, 2, 28);
//     console.log(date.toString());
//     date.previousYear();
//     console.log(date.toString());
module.exports = MyDate;
