"use strict"

function MyTime(hour, minute, second) {
  var hour = hour || 0;
  var minute = minute || 0;
  var second = second || 0;
  Object.defineProperty(this, "hour", {
    get: function() {
      return hour;
    },
    set: function(newHour) {
      if(typeof newHour === 'number') {
        if(!isNaN(newHour)) {
          if(newHour >= 0 && newHour <= 23) {
            if(newHour % 1 === 0) {
              hour = newHour;
              return undefined;
            }
          }
        }
      }
      console.log("Invalid hour!");
    },
    enumerable: true
  });
  Object.defineProperty(this, "minute", {
    get: function() {
      return minute;
    },
    set: function(newMinute) {
      if(typeof newMinute === 'number') {
        if(!isNaN(newMinute)) {
          if(newMinute >= 0 && newMinute <= 23) {
            if(newMinute % 1 === 0) {
              minute = newMinute;
              return undefined;
            }
          }
        }
      }
      console.log("Invalid minute!");
    },
    enumerable: true
  });
  Object.defineProperty(this, "second", {
    get: function() {
      return second;
    },
    set: function(newSecond) {
      if(typeof newSecond === 'number') {
        if(!isNaN(newSecond)) {
          if(newSecond >= 0 && newSecond <= 59) {
            if(newSecond % 1 === 0) {
              second = newSecond;
              return undefined;
            }
          }
        }
      }
      console.log("Invalid second!");
    },
    enumerable: true
  });
}

Object.defineProperties(MyTime.prototype, {
  "setTime": {
    value: function(newHour, newMinute, newSecond) {
      if((typeof newSecond === 'number') || (typeof newMinute === 'number') || (typeof newHour === 'number')) {
        if(!isNaN(newSecond) || !isNaN(newMinute) || !isNaN(newHour)) {
          if((newSecond >= 0 && newSecond <= 59) || (newMinute >= 0 && newMinute <= 59) || (newHour >= 0 && newHour <= 23)) {
            if((newSecond % 1 === 0) || (newMinute % 1 === 0) || (newHour % 1 === 0)) {
              this.hour = newHour;
              this.minute = newMinute;
              this.second = newSecond;
              return undefined;
            }
          }
        }
      }
      console.log("Invalid second!");
    },
    enumerable: true
  },
  "toString": {
    value: function() {
      let hour = this.hour;
      let min = this.minute;
      let sec = this.second;
      (hour < 10) ? hour = '0' + hour : hour += '';
      (min < 10) ? min = '0' + min : min += '';
      (sec < 10) ? sec = '0' + sec : sec += '';
      return hour + ':' + min + ':' + sec;
    },
    enumerable: true
  },
  "nextHour": {
    value: function() {
      if(this.hour === 23) {
        this.hour = 0;
      } else {
        this.hour++;
      }
      return this;
    },
    enumerable: true
  },
  "nextMinute": {
    value: function() {
      if(this.minute === 59) {
        this.minute = 0;
        this.nextHour();
      } else {
        this.minute++;
      }
      return this;
    },
    enumerable: true
  },
  "nextSecond": {
    value: function() {
      if(this.second === 59) {
        this.second = 0;
        this.nextMinute();
      } else {
        this.second++;
      }
      return this;
    },
    enumerable: true
  },
  "previousHour": {
    value: function() {
      if(this.hour === 0) {
        this.hour = 23;
      } else {
        this.hour--;
      }
      return this;
    },
    enumerable: true
  },
  "previousMinute": {
    value: function() {
      if(this.minute === 0) {
        this.minute = 59;
        this.previousHour();
      } else {
        this.minute--;
      }
      return this;
    },
    enumerable: true
  },
  "previousSecond": {
    value: function() {
      if(this.second === 0) {
        this.second = 59;
        this.previousMinute();
      } else {
        this.second--;
      }
      return this;
    },
    enumerable: true
  }
});

var time = new MyTime(22, 58, 58);
for(var prop in time) {
  console.log(prop);
}



module.exports = MyTime;
