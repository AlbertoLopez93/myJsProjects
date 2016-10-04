(function() {
    'use strict';

    var assert = require('./assert');

    function NewDate(date) {
        var day = date.day;
        var month = date.month;
        var year = date.year;

        // getDay():int returns the day of the newDate.
        this.getDay = function getDay() {
            return day;
        };

        // getMonth():int returns the month of the newDate.
        this.getMonth = function getMonth() {
            return month;
        };

        // getYear():int returns the year of the newDate.
        this.getYear = function getYear() {
            return year;
        };

        // setDay(day:int):void sets a new day for the newDate instance.
        this.setDay = function setDay(_day) {
            if (assert.Number(_day)) {
                day = _day;
            }
        };

        // setMonth(month:int):void sets a new month for the newDate instance.
        this.setMonth = function setMonth(_month) {
            if (assert.Number(_month)) {
                month = _month;
            }
        };

        // setYear(year:int):void sets a new year for the newDate instance.
        this.setYear = function setYear(_year) {
            if (assert.Number(_year)) {
                year = _year;
            }
        };
    }

    // setDate(day:int, month:int, year:int)void sets the day, month, and year of the newDate instance.
    NewDate.prototype.setDate = function setDate(day, month, year) {
        if (assert.Number(day) && assert.Number(month) && assert.Number(year)) {
            this.setDay(day);
            this.setMonth(month);
            this.setYear(year);
        }
    };

    function leadingZeros(number) {
        return number < 10 ? '0' + number : number;
    }

    // toString():string returns a string that will follow the pattern: “dd/mm/yyyy”,
    // with leading zeros (if day is 1, month is 5 and year is 2016, then the string should be: “01/05/2016”).
    NewDate.prototype.toString = function toString() {
        return leadingZeros(this.getDay()) + "/" + leadingZeros(this.getMonth()) + "/" + this.getYear();
    };

    module.exports = NewDate;
}());
