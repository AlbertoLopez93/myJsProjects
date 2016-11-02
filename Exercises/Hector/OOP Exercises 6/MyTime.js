function MyTime(horas, minutos, segundos) {
    var hour = horas || 0;
    var minutes = minutos || 0;
    var seconds = segundos || 0;
    var error = "Invalid hour, minute, or second!";

    Object.defineProperties(this, {
        "getHour": {
            value: function () {
                return hour;
            },
            enumerable: true
        },
        "setHour": {
            value: function (newHour) {
                if (newHour <= 23 && newHour >= 0) {
                    hour = newHour;
                } else {
                    console.log(error);
                }
            },
            enumerable: true
        },
        "getMinute": {
            value: function () {
                return minutes;
            },
            enumerable: true
        },
        "setMinute": {
            value: function (newMinute) {
                if (newMinute <= 59 && newMinute >= 0) {
                    minutes = newMinute;
                } else {
                    console.log(error);
                }
            },
            enumerable: true
        },
        "getSecond": {
            value: function () {
                return seconds;
            },
            enumerable: true
        },
        "setSecond": {
            value: function (newSecond) {
                if (newSecond <= 59 && newSecond >= 0) {
                    seconds = newSecond;
                } else {
                    console.log(error);
                }
            },
            enumerable: true
        }

    });
}
Object.defineProperties(MyTime.prototype, {
    "toString": {
        value: function () {
            var hour = this.getHour();
            var minute = this.getMinute();
            var second = this.getSecond();
            if(hour < 10){
                hour = "0" + hour;
            }
            if(minute < 10){
                minute = "0" + minute;
            }
            if(second < 10){
                second = "0" + second;
            }
            return hour + ":" + minute + ":" + second;
        },
        enumerable: true
    },
    "nextSecond": {
        value: function() {
            var currentSecond = this.getSecond();
            var currentHour = this.getHour();
            var currentMinute = this.getMinute();
            var newSecond = currentSecond + 1;
            if( newSecond > 59 ){
                newSecond = 0;
                this.setSecond(newSecond);
                currentMinute += 1;
                if( currentMinute > 59 ){
                    currentMinute = 0;
                    this.setMinute(currentMinute);
                    currentHour += 1;
                    if( currentHour > 23 ){
                        currentHour = 0;
                        this.setHour(currentHour);
                    } else {
                        this.setHour(currentHour);
                    }
                }  else {
                    this.setMinute(currentMinute);
                }
            } else {
                this.setSecond(newSecond);
            }
            return this;

        },
        enumerable: true
    },
    "previousSecond": {
        value: function() {
            var currentSecond = this.getSecond();
            var currentHour = this.getHour();
            var currentMinute = this.getMinute();
            var newSecond = currentSecond;
            if( currentSecond === 0 ){
                newSecond = 59;
                this.setSecond(newSecond);
                if( currentMinute == "0" ) {
                    currentMinute = 59;
                    this.setMinute(currentMinute);
                    if( currentHour == "0" ) {
                        currentHour = 23;
                        this.setHour(currentHour);
                    } else {
                        currentHour -= 1;
                        this.setHour(currentHour);
                    }
                }  else {
                    currentMinute -= 1;
                    this.setMinute(currentMinute);
                }
            } else {
                newSecond -= 1;
                this.setSecond(newSecond);
            }
            return this;
        },
        enumerable: true
    },
    "nextMinute": {
        value: function() {
            var currentSecond = this.getSecond();
            var currentHour = this.getHour();
            var currentMinute = this.getMinute();
            var newMinute = currentMinute + 1;
            if (newMinute === 60 ){
                this.setMinute(0);
                var newHour = currentHour + 1;
                if (newHour === 24) {
                    this.setHour(0);
                }else {
                    this.setHour(newHour);
                }
            }else {
                this.setMinute(newMinute);
            }
            return this;
        },
        enumerable: true
    },
    "previousMinute": {
        value: function() {
            var currentHour = this.getHour();
            var currentMinute = this.getMinute();
            if (currentMinute === 0 ){
                this.setMinute(59);
                if (currentHour === 0) {
                    this.setHour(23);
                } else {
                    this.setHour(currentHour - 1);
                }
            }else {
                var newMinute = currentMinute - 1;
                this.setMinute(newMinute);
            }
            return this;
        },
        enumerable: true
    },
    "nextHour": {
        value: function() {
            var currentHour = this.getHour();
            var newHour = currentHour + 1;
            if( newHour === 24){
                this.setHour(0);
            } else {
                this.setHour(newHour);
            }
            return this;
        },
        enumerable: true
        },
    "previousHour": {
        value: function() {
            var currentHour = this.getHour();
            if( currentHour === 0){
                this.setHour(23);
            } else {
                var newHour = currentHour - 1;
                this.setHour(newHour);
            }
            return this;
        },
        enumerable: true
    },
    "setTime": {
        value: function (newHour, newMinute, newSecond) {
            if (newHour <= 23 && newHour >= 0 && newMinute <= 59 && newMinute >= 0 && newSecond <= 59 && newSecond >= 0) {
                this.setHour(newHour);
                this.setMinute(newMinute);
                this.setSecond(newSecond);
                return this;
            } else {
                return undefined;
            }
        },
        enumerable: true
    }
});
module.exports = MyTime;
