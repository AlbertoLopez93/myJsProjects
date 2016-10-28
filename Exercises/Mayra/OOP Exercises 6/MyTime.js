"use strict";
function MyTime(hour,minute,second) {
    if (hour>23||typeof hour !== "number") {
        hour=undefined;
    }

    if (minute>59||typeof minute !== "number") {
        minute=undefined;
    }

    if (second>59||typeof second !== "number") {
        second=undefined;
    }

    let varHour=hour||0,varMinute=minute||0,varSecond=second||0;

    Object.defineProperty(this, 'getHour', {
        value: function() {
            return varHour;
        },
        writable: false,
        configurable: false,
        enumerable: true
    });

    Object.defineProperty(this, 'getMinute', {
        value: function() {
            return varMinute;
        },
        writable: false,
        configurable: false,
        enumerable: true
    });

    Object.defineProperty(this, 'getSecond', {
        value: function() {
            return varSecond;
        },
        writable: false,
        configurable: false,
        enumerable: true
    });

    Object.defineProperty(this, 'setHour', {
        value: function(newHour) {
            if (newHour>=0 && newHour<24 && typeof newHour === "number" ) {
                varHour=newHour;
            }else{
                let message="Invalid hour, minute, or second!";
                console.log(message);
            }
        },
        configurable: false,
        enumerable: true
    });
    Object.defineProperty(this, 'setMinute', {
        value: function(newMinute) {
            if (newMinute>=0 && newMinute<60 && typeof newMinute === "number" ) {
                varMinute=newMinute;
            }else{
                let message="Invalid hour, minute, or second!";
                console.log(message);
            }

        },
            configurable: false,
            enumerable: true
    });
    Object.defineProperty(this, 'setSecond', {
        value: function(newSecond) {
            if (newSecond>=0 && newSecond<60 && typeof newSecond === "number" ) {
                varSecond=newSecond;
            }else{
                let message="Invalid hour, minute, or second!";
                console.log(message);
            }
        },
            configurable: false,
            enumerable: true
    });

}

Object.defineProperty(MyTime.prototype, 'setTime', {
    value:function (newHour,newMinutes,newSecond) {
        if (newHour>=0 && newMinutes>=0 &&newMinutes<60 && newSecond>=0 && newSecond<60 && newHour<24 && typeof newHour === "number" ) {
            this.setHour(newHour);
            this.setMinute(newMinutes);
            this.setSecond(newSecond);;
        }else{
            let message="Invalid hour, minute, or second!";
            console.log(message);
        }
    },
    enumerable: true,
    configurable: false
});

Object.defineProperty(MyTime.prototype, 'toString',{
    value:function () {
        var hourZero,minuteZero,secondZero;
        if(this.getHour() < 10){
            hourZero= "0" + this.getHour() + ":";
        } else {
               hourZero=this.getHour() + ":";
        }
        if(this.getMinute() < 10){
               minuteZero= "0" + this.getMinute() + ":";
        } else {
               minuteZero= this.getMinute() + ":";
        }
        if(this.getSecond() < 10){
            secondZero= "0" + this.getSecond();
        } else {
            secondZero= this.getSecond();
        }
        return hourZero+minuteZero+secondZero;
    },
});

Object.defineProperty(MyTime.prototype, 'nextSecond',{
    value:function() {
        if(this.getSecond()===59&&this.getHour()===23){
            this.setHour(0);
            this.setMinute(0);
            this.setSecond(0);
            return this;
        }
        if(this.getSecond()===59){
            this.setMinute(this.getMinute()+1);
            this.setSecond(0);
            return this;
        }else{
            this.setSecond(this.getSecond()+1);
            return this;
        }

    },
    enumerable: true,
    configurable: false
});

Object.defineProperty(MyTime.prototype, 'nextMinute',{
    value:function() {
        if(this.getMinute()===59&&this.getHour()===23){
            this.setHour(0);
            this.setMinute(0);
            return this;
        }
        if(this.getMinute()===59){
            this.setHour(this.getHour()+1);
            this.setMinute(0);
            return this;
        }else{
            this.setMinute(this.getMinute()+1);
            return this;
        }

    },
    enumerable: true,
    configurable: false
});

Object.defineProperty(MyTime.prototype, 'nextHour',{
    value:function() {
        if(this.getHour()===23){
            this.setHour(0);
            return this;
        }else{
            this.setHour(this.getHour()+1);
            return this;
        }

    },
    enumerable: true,
    configurable: false
});

Object.defineProperty(MyTime.prototype,'previousSecond',{
    value:function() {
        if(this.getSecond()===0&&this.getMinute()===0&&this.getHour()===0){
            this.setHour(23);
            this.setMinute(59);
            this.setSecond(59);
            return this;
        }
        if(this.getSecond()===0&&this.getMinute()===0){
            this.setMinute(59);
            this.setSecond(59);
            return this;
        }
        if(this.getSecond()===0){
            this.setMinute(this.getMinute()-1);
            this.setSecond(59);
            return this;
        }else{
        this.setSecond(this.getSecond()-1);
        return this;
        }
    },
    enumerable: true,
    configurable: false
});
Object.defineProperty(MyTime.prototype,'previousMinute',{
    value:function() {
        if(this.getMinute()===0&&this.getHour()===0){
            this.setHour(23);
            this.setMinute(59);
            return this;
        }
        if(this.getMinute()===0){
            this.setMinute(59);
            return this;
        }else{
        this.setMinute(this.getMinute()-1);
        return this;
        }
    },
    enumerable: true,
    configurable: false
});

Object.defineProperty(MyTime.prototype,'previousHour',{
    value:function() {
        if(this.getHour()===0){
            this.setHour(23);
            return this;
        }
        this.setHour(this.getHour()-1);
        return this;
    },
    enumerable: true,
    configurable: false
});

var time = new MyTime(1,1,1);
// console.log(time.getHour());
// console.log(time.getMinute());
// console.log(time.getSecond());
// console.log(time.toString());
//
// time.setHour(12);
// time.setMinute(12);
// time.setSecond(12);
// console.log(time.getHour());
// console.log(time.getMinute());
// console.log(time.getSecond());
// console.log(time.toString());
//
// time.setTime(23,59,59);
// console.log(time.getHour());
// console.log(time.getMinute());
// console.log(time.getSecond());
// console.log(time.toString());

// time.setTime(23,59,59);
// time.nextSecond();
// console.log(time.toString());
// time.setTime(20,59,59);
// time.nextSecond();
// console.log(time.toString());
// time.setTime(5,5,5);
// time.nextSecond();
// console.log(time.toString());
//
// time.setTime(23,59,59);
// time.nextMinute();
// console.log(time.toString());
// time.setTime(20,59,59);
// time.nextMinute();
// console.log(time.toString());
// time.setTime(5,5,5);
// time.nextMinute();
// console.log(time.toString());
//
// time.setTime(23,59,59);
// time.nextHour();
// console.log(time.toString());
// time.setTime(20,59,59);
// time.nextHour();
// console.log(time.toString());
// time.setTime(5,5,5);
// time.nextHour();
// console.log(time.toString());

// time.setTime(0,0,0);
// time.previousSecond();
// console.log(time.toString());
// time.setTime(20,0,0);
// time.previousSecond();
// console.log(time.toString());
// time.setTime(5,5,5);
// time.previousSecond();
// console.log(time.toString());
//
// time.setTime(0,0,0);
// time.previousMinute();
// console.log(time.toString());
// time.setTime(20,0,0);
// time.previousMinute();
// console.log(time.toString());
// time.setTime(5,5,5);
// time.previousMinute();
// console.log(time.toString());
//
//
// time.setTime(0,0,0);
// time.previousHour();
// console.log(time.toString());
// time.setTime(20,0,0);
// time.previousHour();
// console.log(time.toString());
// time.setTime(5,5,5);
// time.previousHour();
// console.log(time.toString());

module.exṕorts=MyTime;
