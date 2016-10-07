(function() {
    'use strict';

    function MyTime(newHour, newMinute, newSecond) {
        let hour = newHour || 0;
        let minute = newMinute || 0;
        let second = newSecond || 0;

        // Class Methods.
        Object.defineProperties(this, {
            getHour: {
                value: function() {
                    return hour;
                }
            },
            setHour: {
                value: function(newHour) {
                    if (this.isValidHour(newHour)) {
                        hour = newHour;
                    } else {
                        console.log('Invalid hour!');
                    }
                }
            },
            getMinute: {
                value: function() {
                    return minute;
                }
            },
            setMinute: {
                value: function(newMinute) {
                    if (this.isValidMinute(newMinute)) {
                        minute = newMinute;
                    } else {
                        console.log('Invalid minute!');
                    }
                }
            },
            getSecond: {
                value: function() {
                    return second;
                }
            },
            setSecond: {
                value: function(newSecond) {
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
            value: function(number) {
                return number < 10 ? '0' + number : '' + number;
            }
        },
        toString: {
            value: function() {
                return this.leadZeros(this.getHour()) + ':' + this.leadZeros(this.getMinute()) + ':' +
                    this.leadZeros(this.getSecond());
            }
        },
        isValidHour: {
            value: function(hour) {
                return hour >= 0 && hour <= 23;
            }
        },
        isValidMinute: {
            value: function(minute) {
                return minute >= 0 && minute <= 59;
            }
        },
        isValidSecond: {
            value: function(second) {
                return second >= 0 && second <= 59;
            }
        },
        setTime: {
            value: function(newHour, newMinute, newSecond) {
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
            value: function() {
                let newSecond = this.getSecond() + 1,
                    newMinute = this.getMinute(),
                    newHour = this.getHour();
                if (newSecond === 60) {
                    newSecond = 0;
                    newMinute += 1;
                    if (newMinute === 60) {
                        newMinute = 0;
                        newHour += 1;
                        if (newHour === 24) {
                            newHour = 0;
                        }
                    }
                }
                this.setTime(newHour, newMinute, newSecond);
                return this;
            }
        },
        previousSecond: {
            value: function() {
                let newSecond = this.getSecond() - 1,
                    newMinute = this.getMinute(),
                    newHour = this.getHour();
                if (newSecond < 0) {
                    newSecond = 59;
                    newMinute -= 1;
                    if (newMinute < 0) {
                        newMinute = 59;
                        newHour -= 1;
                        if (newHour < 0) {
                            newHour = 23;
                        }
                    }
                }
                this.setTime(newHour, newMinute, newSecond);
                return this;
            }
        },
        nextMinute: {
            value: function() {
                let newMinute = this.getMinute() + 1,
                    newHour = this.getHour();
                if (newMinute === 60) {
                    newMinute = 0;
                    newHour += 1;
                    if (newHour === 24) {
                        newHour = 0;
                    }
                }
                this.setTime(newHour, newMinute, this.getSecond());
                return this;
            }
        },
        previousMinute: {
            value: function() {
                let newMinute = this.getMinute() - 1,
                    newHour = this.getHour();
                if (newMinute < 0) {
                    newMinute = 59;
                    newHour -= 1;
                    if (newHour < 0) {
                        newHour = 23;
                    }
                }
                this.setTime(newHour, newMinute, this.getSecond());
                return this;
            }
        },
        nextHour: {
            value: function() {
                let newHour = this.getHour() + 1;
                if (newHour === 24) {
                    newHour = 0;
                }
                this.setTime(newHour, this.getMinute(), this.getSecond());
                return this;
            }
        },
        previousHour: {
            value: function() {
                let newHour = this.getHour() - 1;
                if (newHour < 0) {
                    newHour = 23;
                }
                this.setTime(newHour, this.getMinute(), this.getSecond());
                return this;
            }
        }
    });

    module.exports = MyTime;
}());
