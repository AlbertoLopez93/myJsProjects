"use strict"

//var NewCustomer = require("./NewCustomer");

function MyTime() {
  let hour, minute,second;
  if (arguments.length === 0) {
    hour = 0;
    minute = 0;
    second = 0;
  }
  if (arguments.length === 3) {
    if (Number.isInteger(arguments[0]) && Number.isInteger(arguments[1]) && Number.isInteger(arguments[2])) {
      if ((arguments[0] >= 0) && (arguments[0] <= 23)) {
        if ((arguments[1] >= 0) && (arguments[1] <= 59)) {
          if ((arguments[2] >= 0) && (arguments[2] <= 59)) {
            hour = arguments[0];
            minute = arguments[1];
            second = arguments[2];
          }
        }
      }
    }
  }

  Object.defineProperty(this, "setTime" , {
    value: function (newHour, newMinute, newSecond) {
      if (arguments.length === 3) {
        if (Number.isInteger(newHour) && Number.isInteger(newMinute) && Number.isInteger(newSecond)) {
          if ((newHour >= 0) && (newHour <= 23)) {
            if ((newMinute >= 0) && (newMinute <= 59)) {
              if ((newSecond >= 0) && (newSecond <= 59)) {
                hour = newHour;
                minute = newMinute;
                second = newSecond;
              } else {
                console.log("Invalid second!");
              }
            } else {
              console.log("Invalid minute");
            }
          } else {
            console.log("Invalid hour");
          }
        }
      }
    },
    configurable : false,
    enumerable : false,
    writable : false
  });
  Object.defineProperty(this, "setHour" , {
    value: function (newHour) {
      if (Number.isInteger(newHour)) {
        if ((newHour >= 0) && (newHour <= 23)) {
          hour = newHour;
        }
      }
    },
    configurable : false,
    enumerable : false,
    writable : false
  });
  Object.defineProperty(this, "setMinute" , {
    value: function (newMinute) {
      if (Number.isInteger(newMinute)) {
        if ((newMinute >= 0) && (newMinute <= 59)) {
          minute = newMinute;
        }
      }
    },
    configurable : false,
    enumerable : false,
    writable : false
  });
  Object.defineProperty(this, "setSecond" , {
    value: function (newSecond) {
      if (Number.isInteger(newSecond)) {
        if ((newSecond >= 0) && (newSecond <= 59)) {
          second = newSecond;
        }
      }
    },
    configurable : false,
    enumerable : false,
    writable : false
  });
  Object.defineProperty(this, "getHour" , {
    value: function () {
      return hour;
    },
    configurable : false,
    enumerable : false,
    writable : false
  });
  Object.defineProperty(this, "getMinute" , {
    value: function () {
      return minute;
    },
    configurable : false,
    enumerable : false,
    writable : false
  });
  Object.defineProperty(this, "getSecond" , {
    value: function () {
      return second;
    },
    configurable : false,
    enumerable : false,
    writable : false
  });
}

Object.defineProperty(MyTime.prototype, "toString" , {
  value: function () {
    let format = "";
    if (this.getHour() < 10) {
      format += "0" + this.getHour() + ":";
    }else {
      format += this.getHour() + ":";
    }
    if (this.getMinute() < 10) {
      format += "0" + this.getMinute() + ":";
    }else {
      format += this.getMinute() + ":";
    }
    if (this.getSecond() < 10) {
      format += "0" + this.getSecond();
    }else {
      format += this.getSecond();
    }
    return format;
  },
  configurable : false,
  enumerable : false,
  writable : false
});
Object.defineProperty(MyTime.prototype, "nextSecond" , {
  value: function () {
    if ((this.getSecond() + 1) === 60) {
      this.setSecond(0);
      if ((this.getMinute() + 1) === 60) {
        this.setMinute(0);
        if ((this.getHour() + 1) === 24) {
          this.setHour(0);
        }else {
          this.setHour(this.getHour() + 1);
        }
      }else {
        this.setMinute(this.getMinute() + 1);
      }
    }else {
      this.setSecond(this.getSecond() + 1);
    }
    return this;
  },
  configurable : false,
  enumerable : false,
  writable : false
});
Object.defineProperty(MyTime.prototype, "nextMinute" , {
  value: function () {
    if ((this.getMinute() + 1) === 60) {
      this.setMinute(0);
      if ((this.getHour() + 1) === 24) {
        this.setHour(0);
      }else {
        this.setHour(this.getHour() + 1);
      }
    }else {
      this.setMinute(this.getMinute() + 1);
    }
    return this;
  },
  configurable : false,
  enumerable : false,
  writable : false
});
Object.defineProperty(MyTime.prototype, "nextHour" , {
  value: function () {
    if ((this.getHour() + 1) === 24) {
      this.setHour(0);
    }else {
      this.setHour(this.getHour() + 1);
    }
    return this;
  },
  configurable : false,
  enumerable : false,
  writable : false
});
Object.defineProperty(MyTime.prototype, "previousSecond" , {
  value: function () {
    if ((this.getSecond() - 1) === -1) {
      this.setSecond(59);
      if ((this.getMinute() - 1) === -1) {
        this.setMinute(59);
        if ((this.getHour() - 1) === -1) {
          this.setHour(23);
        }else {
          this.setHour(this.getHour() - 1);
        }
      }else {
        this.setMinute(this.getMinute() - 1);
      }
    }else {
      this.setSecond(this.getSecond() - 1);
    }
    return this;
  },
  configurable : false,
  enumerable : false,
  writable : false
});
Object.defineProperty(MyTime.prototype, "previousMinute" , {
  value: function () {
    if ((this.getMinute() - 1) === -1) {
      this.setMinute(59);
      if ((this.getHour() - 1) === -1) {
        this.setHour(23);
      }else {
        this.setHour(this.getHour() - 1);
      }
    }else {
      this.setMinute(this.getMinute() - 1);
    }
    return this;
  },
  configurable : false,
  enumerable : false,
  writable : false
});
Object.defineProperty(MyTime.prototype, "previousHour" , {
  value: function () {
    if ((this.getHour() - 1) ===-1) {
      this.setHour(23);
    }else {
      this.setHour(this.getHour() - 1);
    }
    return this;
  },
  configurable : false,
  enumerable : false,
  writable : false
});

/*
let x = new MyTime(5,6,7);

console.log(x.getHour());
console.log(x.getMinute());
console.log(x.getSecond());
x.setHour(0);
x.setMinute(0);
x.setSecond(0);
x.setTime(0, 0, -1);
console.log(x.getHour());
console.log(x.getMinute());
console.log(x.getSecond());
console.log(x.previousSecond());
console.log(x.toString());
console.log(x.previousMinute());
console.log(x.toString());
console.log(x.previousHour());
console.log(x.toString());*/

module.exports = MyTime;
