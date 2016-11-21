"use strict";

let Feline = require ("./Feline");

function Lion() {
  let type = "Lion";
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
        console.log("Roaring: Rrrrrr!");
      }
      else {
        console.log("Zzzzzz…");
      }
    },
    enumerable: true, configurable: false, writable: false
  });

}

Lion.prototype = Object.create(Feline.prototype);
Lion.prototype.constructor = Lion;

Object.defineProperty( Lion.prototype, "getType", {
  value: function() {
    return "Lion";
  },
  enumerable: true, configurable: false, writable:false
});

module.exports = Lion;

let ani1 = new Lion();
ani1.sleep();
ani1.makeNoise();
ani1.roam();
ani1.wakeUp();
ani1.makeNoise();
console.log(ani1.getType());
