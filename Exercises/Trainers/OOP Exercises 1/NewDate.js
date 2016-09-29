"use strict";

function NewDate(data) {
    var day = data.day;
    var month = data.month;
    var year = data.year;

    this.getDay = function getDay() {
        return day;
    };

    this.getMonth = function getMonth() {
        return month;
    };

    this.getYear = function getYear() {
        return year;
    };

    this.setDay = function setDay(newDay) {
        day = newDay;
    };

    this.setMonth = function setMonth(newMonth) {
        month = newMonth;
    };

    this.setYear = function setYear(newYear) {
        year = newYear;
    };
}

NewDate.prototype.setDate = function setDate(newDay, newMonth, newYear) {
    this.setDay(newDay);
    this.setMonth(newMonth);
    this.setYear(newYear);
};

NewDate.prototype.toString = function toString() {
    var day = this.getDay();
    var month = this.getMonth();
    var year = this.getYear();

    day = day < 10 ? "0" + day : "" + day;
    month = month < 10 ? "0" + month : "" + month;

    return day + "/" + month + "/" + year;
};

module.exports = NewDate;