function MyDate(_year, _month, _day) {
    var year;
    var month;
    var day;


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
        // return a + " " + " " + y + " " + m;
        "setDate": {
            value: function(_year, _month, _day) {
                var validDate = MyDate.isValidDate(_year, _month, _day);
                if ( !validDate ) {
                    console.log("Invalid year, month, or day!");
                } else {
                    year = _year;
                    month = _month;
                    day = _day;
                }

            },
            enumerable: true
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
                var maxDay = MyDate.daysInMonths[newMonth-1];
                if (Number.isInteger (newMonth) && newMonth <= 12 && newMonth >= 1 && day <= maxDay) {
                    month = newMonth;
                }
            },
            enumerable: true
        },
        "setDay": {
            value: function (newDay) {
                var isLeap = MyDate.isLeapYear(year);
                var maxDaysInMonth = MyDate.daysInMonths[month-1];
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


    });
    this.setDate(_year, _month,_day);
}

Object.defineProperties(MyDate, {
    "isLeapYear": {
        value: function (_y) {
            if (!arguments) {
                return false;
            } else {
                var _year = _y;
            }

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
            var isLeap = MyDate.isLeapYear(_year);
            var lastDayOfMonth = MyDate.daysInMonths[_month-1];
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

    "strMonths": {
            value: [
            "Jan",
            "Feb",
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
        enumerable: false,
        writeble: false,
        configurable: false

    },

    "strDays": {
        value: ["Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"],

        enumerable: false,
        writeble: false,
        configurable: false
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
                enumerable: false,
                writeble: false,
                configurable: false

        },
        "getDayOfWeek": {
            value: function(year, month, day) {
                var validDate = MyDate.isValidDate(year, month, day);
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
        },
});

Object.defineProperties(MyDate.prototype, {
    "toString": {
        value: function () {
            var month = this.getMonth();
            var day = this.getDay();
            var year = this.getYear();
            var dayOfWeek = MyDate.getDayOfWeek(year, month, day);
            return MyDate.strDays[dayOfWeek] + " " + day + " " + MyDate.strMonths[month-1] + " " + year;
        },
        enumerable: true
    },
    "nextYear": {
        value: function(){
            let year = this.getYear();
            let month = this.getMonth();
            let day = this.getDay();
            if (year <= 9998) {
                this.setYear(year += 1);
            }
            let currentDay = this.getDay();
            let isLeap = MyDate.isLeapYear(year);
            var maxDays = MyDate.daysInMonths[month-1];
            console.log(maxDays);
            if(isLeap && month === 2){
                maxDays += 1;
            }
            if ( day > maxDays ){
                this.setDay( maxDays);
            }

            return this;
        },
        enumerable: true
    },
    "previousYear": {
        value: function(){
            let year = this.getYear();
            let month = this.getMonth();
            let day = this.getDay();
            if ( year > 1) {
                this.setYear(year -= 1);
                let currentDay = this.getDay();
                let isLeap = MyDate.isLeapYear(year);
                var maxDays = MyDate.daysInMonths[month-1];
                if(isLeap && month === 3){
                    maxDays += 1;
                }
                if ( day > maxDays ){
                    this.setDay(maxDays);
                }
            }

            return this;
        },
        enumerable:true
    },
    "nextMonth": {
        value: function() {
            let year = this.getYear();
            let month = this.getMonth();
            let day = this.getDay();
            let currentDay = this.getDay();
            let currentYear = this.getYear();
            let isLeap = MyDate.isLeapYear(year);
            let maxDaysInMonth = MyDate.daysInMonths[month-1];
            let currentMonth = this.getMonth();
            let newMonth = currentMonth + 1;
            if ( isLeap && currentMonth === 2){
                maxDaysInMonth += 1;
            }
            if (year<9999) {
                if ( newMonth > 12 ) {
                    this.setMonth(1);
                    if (year <= 9998) {
                        this.setYear(year += 1);
                    }
                } else {
                    this.setMonth(month += 1);
                    var newMax = MyDate.daysInMonths[month-1];
                    if(isLeap && month === 2){
                        newMax += 1;
                    }

                    if ( day > newMax ){
                        this.setDay(newMax);
                    }
                }
            }

            return this;
        },
        enumerable: true
    },
    "previousMonth": {
        value: function() {
            let year = this.getYear();
            let month = this.getMonth();
            let day = this.getDay();
            if ( year > 1) {
                let currentDay = this.getDay();
                let currentYear = this.getYear();
                let isLeap = MyDate.isLeapYear(year);
                let maxDaysInMonth = MyDate.daysInMonths[month-2];
                let currentMonth = this.getMonth();
                if ( isLeap && currentMonth === 3){
                    maxDaysInMonth += 1;
                }
                if ( month === 1 ) {
                    this.setMonth( 12);
                    this.setYear(year -= 1);
                } else {
                    this.setMonth(month-1);
                    if (currentDay > maxDaysInMonth ){
                        this.setDay( maxDaysInMonth);
                    }
                }
            }
            return this;
        },
        enumerable: true
    },
    "nextDay": {
        value: function() {
            let year = this.getYear();
            let month = this.getMonth();
            let day = this.getDay();

            let currentDay = this.getDay();
            let newDay = currentDay + 1;
            let currentYear = this.getYear();
            let isLeap = MyDate.isLeapYear(year);
            let maxDaysInMonth = MyDate.daysInMonths[month-1];
            let currentMonth = this.getMonth();
            if ( isLeap && currentMonth === 2){
                maxDaysInMonth += 1;
            }
            if (year < 9999) {
                if (newDay > maxDaysInMonth) {
                    this.setDay(1);
                    currentMonth += 1;
                    if (currentMonth > 12) {
                        this.setMonth(1);
                        this.setYear(year += 1);
                    } else {
                        this.setMonth(month += 1);
                    }
                } else {
                    this.setDay(newDay);
                }
            }

            return this;
        },
        enumerable: true
    },


    "previousDay": {
        value: function() {
            let year = this.getYear();
            let month = this.getMonth();
            let day = this.getDay();
            if ( year > 1) {
                let currentDay = this.getDay();
                let newDay = currentDay - 1;
                let currentYear = this.getYear();
                let isLeap = MyDate.isLeapYear(year);
                let  maxDaysInMonth = MyDate.daysInMonths[month-2];
                if ( isLeap && month === 3){
                    maxDaysInMonth += 1;
                }
                if (newDay === 0 && month === 1) {
                    this.setDay(31);
                    this.setMonth(12);
                    this.setYear(year -= 1);
                    if ( year <= 0) {
                        return this;
                    }
                } else {
                    if ( newDay === 0 ) {
                        console.log("aqui si entro ");
                        this.setDay(maxDaysInMonth);
                        this.setMonth(month -= 1);
                    } else {
                        this.setDay(newDay);
                    }
                }
            }
            return this;
        },
        enumerable: true
    },

});

module.exports = MyDate;
