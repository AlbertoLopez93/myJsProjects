"use strict";

let Animal = require ("./Animal");

function Feline() {
  let type = "Feline";
  let isAwake = true;
  let isCalled = false;
  if(arguments.length > 0) {isCalled = true;}

  Animal.call(this, true);

  Object.defineProperty( this, "sleep", {
    value: function() {
      isAwake = false;
    },
    enumerable: true, configurable: isCalled, writable: isCalled
  });
  Object.defineProperty( this, "wakeUp", {
    value: function() {
      isAwake = true;
    },
    enumerable: true, configurable: isCalled, writable: isCalled
  });

  Object.defineProperty( this, "roam", {
    value: function() {
      if (isAwake) {
        console.log("Roaming alone!");
      }
    },
    enumerable: true, configurable: isCalled, writable: isCalled
  });

}

Object.defineProperty( Feline.prototype, "getType", {
  value: function() {
    return "Feline";
  },
  enumerable: true, configurable: false, writable:false
});

module.exports = Feline;

let ani1 = new Feline();
ani1.sleep();
ani1.roam();
ani1.wakeUp();
ani1.roam();
ani1.makeNoise();
console.log(ani1.getType());
