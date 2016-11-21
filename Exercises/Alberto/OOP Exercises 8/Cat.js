"use strict";

let Feline = require ("./Feline");

function Cat() {
  let type = "Cat";
  let isAwake = true;

  Feline.call(this, true);

  Object.defineProperty( this, "sleep", {
    value: function() {
      isAwake = false;
    },
    enumerable: true, configurable: false, writable: false
  });
  Object.defineProperty( this, "wakeUp", {
    value: function() {
      isAwake = true;
    },
    enumerable: true, configurable: false, writable: false
  });

  Object.defineProperty( this, "roam", {
    value: function() {
      if (isAwake) {
        console.log("Roaming alone!");
      }
    },
    enumerable: true, configurable: false, writable: false
  });
  Object.defineProperty( this, "makeNoise", {
    value: function() {
      if (isAwake) {
        console.log("Miaowing: Miaooo!");
      }
      else {
        console.log("Zzzzzz…");
      }
    },
    enumerable: true, configurable: false, writable: false
  });

}

Cat.prototype = Object.create(Feline.prototype);
Cat.prototype.constructor = Cat;

Object.defineProperty( Cat.prototype, "getType", {
  value: function() {
    return "Cat";
  },
  enumerable: true, configurable: false, writable:false
});

module.exports = Cat;

let ani1 = new Cat();
ani1.sleep();
ani1.makeNoise();
ani1.roam();
ani1.wakeUp();
ani1.makeNoise();
console.log(ani1.getType());
