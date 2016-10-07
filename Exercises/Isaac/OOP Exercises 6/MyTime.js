(function() {
    'use strict';

    function MyTime(newHour, newMinute, newSecond) {
        let hour = newHour || 0;
        let minute = newMinute || 0;
        let second = newSecond || 0;

        // Class Methods.
        Object.defineProperties(this, {
            getHour: {
                value: function getHour() {
                    return hour;
                }
            },
            setHour: {
                value: function setHour(newHour) {
                    if (this.isValidHour(newHour)) {
                        hour = newHour;
                    } else {
                        console.log('Invalid hour!');
                    }
                }
            },
            getMinute: {
                value: function getMinute() {
                    return minute;
                }
            },
            setMinute: {
                value: function setMinute(newMinute) {
                    if (this.isValidMinute(newMinute)) {
                        minute = newMinute;
                    } else {
                        console.log('Invalid minute!');
                    }
                }
            },
            getSecond: {
                value: function getSecond() {
                    return second;
                }
            },
            setSecond: {
                value: function setSecond(newSecond) {
                    if (this.isValidSecond(newSecond)) {
                        second = newSecond;
                    } else {
                        console.log('Invalid second!');
                    }
                }
            }
        });
    }

    // Protect prototype
    Object.defineProperty(MyTime, 'prototype', {
        writable: false,
        configurable: false,
        enumerable: false
    });

    // Prototype Methods.
    Object.defineProperties(MyTime.prototype, {
        leadZeros: {
            value: function leadZeros(number) {
                return number < 10 ? '0' + number : '' + number;
            }
        },
        toString: {
            value: function toString() {
                return this.leadZeros(this.getHour()) + ':' + this.leadZeros(this.getMinute()) + ':' +
                    this.leadZeros(this.getSecond());
            }
        },
        isValidHour: {
            value: function isValidHour(hour) {
                return typeof hour === 'number' && Number.isInteger(hour) && hour >= 0 && hour <= 23;
            }
        },
        isValidMinute: {
            value: function isValidMinute(minute) {
                return typeof minute === 'number' && Number.isInteger(minute) && minute >= 0 && minute <= 59;
            }
        },
        isValidSecond: {
            value: function isValidSecond(second) {
                return typeof second === 'number' && Number.isInteger(second) && second >= 0 && second <= 59;
            }
        },
        setTime: {
            value: function setTime(newHour, newMinute, newSecond) {
                if (this.isValidHour(newHour) && this.isValidMinute(newMinute) && this.isValidSecond(newSecond)) {
                    this.setHour(newHour);
                    this.setMinute(newMinute);
                    this.setSecond(newSecond);
                } else {
                    console.log('Invalid hour, minute, or second!');
                }
            }
        },
        nextSecond: {
            value: function nextSecond() {
                let newSecond = this.getSecond() + 1;
                if (newSecond > 59) {
                    newSecond = 0;
                    this.nextMinute();
                }
                this.setSecond(newSecond);
                return this;
            }
        },
        previousSecond: {
            value: function previousSecond() {
                let newSecond = this.getSecond() - 1;
                if (newSecond < 0) {
                    newSecond = 59;
                    this.previousMinute();
                }
                this.setSecond(newSecond);
                return this;
            }
        },
        nextMinute: {
            value: function nextMinute() {
                let newMinute = this.getMinute() + 1;
                if (newMinute > 59) {
                    newMinute = 0;
                    this.nextHour();
                }
                this.setMinute(newMinute);
                return this;
            }
        },
        previousMinute: {
            value: function previousMinute() {
                let newMinute = this.getMinute() - 1;
                if (newMinute < 0) {
                    newMinute = 59;
                    this.previousHour();
                }
                this.setMinute(newMinute);
                return this;
            }
        },
        nextHour: {
            value: function nextHour() {
                let newHour = this.getHour() + 1;
                if (newHour > 23) {
                    newHour = 0;
                }
                this.setHour(newHour);
                return this;
            }
        },
        previousHour: {
            value: function previousHour() {
                let newHour = this.getHour() - 1;
                if (newHour < 0) {
                    newHour = 23;
                }
                this.setHour(newHour);
                return this;
            }
        }
    });

    module.exports = MyTime;
}());
