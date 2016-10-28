"use strict";

function isValidHour(hour) {
  return hour >= 0 && hour < 24;
}

function isValidMinute(minute) {
  return minute >= 0 && minute < 60;
}

function isValidSecond(second) {
  return second >= 0 && second < 60;
}

function MyTime(hour, minute, second) {

  hour = hour || 0;
  minute = minute || 0;
  second = second || 0;

  Object.defineProperty(this, "getHour", {
    value: function() {
      return hour;
    },
    enumerable: true
  });

  Object.defineProperty(this, "getMinute", {
    value: function() {
      return minute;
    },
    enumerable: true
  });

  Object.defineProperty(this, "getSecond", {
    value: function() {
      return second;
    },
    enumerable: true
  });

  Object.defineProperty(this, "setHour", {
    value: function(newHour) {
      if (isValidHour(newHour)) {
        hour = newHour;
      } else {
        console.log("Invalid hour!");
      }
    },
    enumerable: true
  });

  Object.defineProperty(this, "setMinute", {
    value: function(newMinute) {
      if (isValidMinute(newMinute)) {
        minute = newMinute;
      } else {
        console.log("Invalide minute!");
      }
    },
    enumerable: true
  });

  Object.defineProperty(this, "setSecond", {
    value: function(newSecond) {
      if (isValidSecond(newSecond)) {
        second = newSecond;
      } else {
        console.log("Invalide second!");
      }
    },
    enumerable: true
  });
}

Object.defineProperty(MyTime.prototype, "setTime", {
  value: function(newHour, newMinute, newSecond) {
    if (!(isValidHour(newHour) && isValidMinute(newMinute) && isValidSecond(newSecond))) {
      console.log("Invalid hour, minute or second!");
    } else {
      this.setHour(newHour);
      this.setMinute(newMinute);
      this.setSecond(newSecond);
    }
  },
  enumerable: true
});

Object.defineProperty(MyTime.prototype, "toString", {
  value:function () {
    let hour = this.getHour();
    let minute = this.getMinute();
    let second = this.getSecond();

    hour = hour < 10 ? "0" + hour : "" + hour;
    minute = minute < 10 ? "0" + minute : "" + minute;
    second = second < 10 ? "0" + second : "" + second;

    return hour + ":" + minute + ":" + second;
  },
  enumerable: true
});

Object.defineProperty(MyTime.prototype, "nextHour", {
  value: function() {
    let nextHour = this.getHour() + 1;
    if (nextHour > 23) {
      nextHour = 0;
    }
    this.setHour(nextHour);
    return this;
  },
  enumerable: true
});

Object.defineProperty(MyTime.prototype, "previousHour", {
  value: function () {
    let previousHour = this.getHour() - 1;
    if (previousHour < 0) {
      previousHour = 23;
    }
    this.setHour(previousHour);
    return this;
  },
  enumerable: true
});

Object.defineProperty(MyTime.prototype, "nextMinute", {
  value: function () {
    let nextMinute = this.getMinute() + 1;
    if (nextMinute > 59) {
      nextMinute = 0;
    }
    this.setMinute(nextMinute);
    if (nextMinute === 0) {
      this.nextHour();
    }
    return this;
  },
  enumerable: true
});

Object.defineProperty(MyTime.prototype, "previousMinute", {
  value: function () {
    let previousMinute = this.getMinute() - 1;
    if (previousMinute < 0) {
      previousMinute = 59;
    }
    this.setMinute(previousMinute);
    if (previousMinute === 59) {
      this.previousHour();
    }
    return this;
  },
  enumerable: true
});

Object.defineProperty(MyTime.prototype, "nextSecond", {
  value: function () {
    let nextSecond = this.getSecond() + 1;
    if (nextSecond > 59) {
      nextSecond = 0;
    }
    this.setSecond(nextSecond);
    if (nextSecond === 0) {
      this.nextMinute();
    }
    return this;
  },
  enumerable: true
});

Object.defineProperty(MyTime.prototype, "previousSecond", {
  value: function () {
    let previousSecond = this.getSecond() - 1;
    if (previousSecond < 0) {
      previousSecond = 59;
    }
    this.setSecond(previousSecond);
    if (previousSecond === 59) {
      this.previousMinute();
    }
    return this;
  },
  enumerable: true
});

module.exports = MyTime;
