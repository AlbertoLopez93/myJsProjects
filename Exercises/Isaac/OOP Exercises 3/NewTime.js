(function () {
    'use strict';

    function NewTime(time) {
        let hour = time.hour;
        let minute = time.minute;
        let second = time.second;

        //getHour():int will return the hour of the instance.
        this.getHour = function getHour() {
            return hour;
        };

        //getMinute():int will return the minutes of the instance.
        this.getMinute = function getMinute() {
            return minute;
        };

        //getSecond():int will return the seconds of the instance.
        this.getSecond = function getSecond() {
            return second;
        };

        //setHour(hour:int):void will set a new hour to the instance.
        this.setHour = function setHour(newHour) {
            hour = newHour;
        };

        //setMinute(minutes:int):void will set a new minutes to the instance.
        this.setMinute = function setMinute(newMinute) {
            minute = newMinute;
        };

        //setSecond(seconds:int):void will set a new seconds to the instance.
        this.setSecond = function setSecond(newSecond) {
            second = newSecond;
        };
    }

    //setTime(hour:int, minute:int, second:int):void will set a new hour, minutes and seconds to the instance.
    NewTime.prototype.setTime = function setTime(newHour, newMinute, newSecond) {
        this.setHour(newHour);
        this.setMinute(newMinute);
        this.setSecond(newSecond);
    };

    function leadingZeros(number) {
        return number < 10 ? '0' + number : '' + number;
    }

    //toString():string will return a string following the pattern: “hh:mm:ss” with leading zeros if needed.
    NewTime.prototype.toString = function toString() {
        let h = leadingZeros(this.getHour());
        let m = leadingZeros(this.getMinute());
        let s = leadingZeros(this.getSecond());
        return h + ":" + m + ":" + s;
    };

    //nextSecond():NewTime will add one second to the current instance and return the instance.
    NewTime.prototype.nextSecond = function nextSecond() {
        let newSecond = this.getSecond() + 1;
        let newMinute = this.getMinute() + Math.floor(newSecond / 60);
        let newHour = this.getHour() + Math.floor(newMinute / 60);
        newSecond %= 60;
        newMinute %= 60;
        newHour %= 24;
        this.setSecond(newSecond);
        this.setMinute(newMinute);
        this.setHour(newHour);
        return this;
    };

    //previousSecond():NewTime will subtract one second to the current instance and return the instance.
    NewTime.prototype.previousSecond = function previousSecond() {
        let newSecond = this.getSecond() - 1;
        let newMinute = this.getMinute() + Math.floor(newSecond / 60);
        let newHour = this.getHour() + Math.floor(newMinute / 60);
        newSecond %= 60;
        newMinute %= 60;
        newHour %= 24;
        this.setSecond(newSecond < 0 ? 60 + newSecond : newSecond);
        this.setMinute(newMinute < 0 ? 60 + newMinute : newMinute);
        this.setHour(newHour < 0 ? 24 + newHour : newHour);
        return this;
    };

    module.exports = NewTime;
}());