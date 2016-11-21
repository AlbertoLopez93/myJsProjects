"use strict";

function Animal() {
  let type = "Animal";
  let isAwake = true;
  let isCalled = false;
  if(arguments.length > 0) {isCalled = true;}

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
        console.log("Roaming on the plain…");
      }
    },
    enumerable: true, configurable: isCalled, writable: isCalled
  });
  Object.defineProperty( this, "makeNoise", {
    value: function() {
      if (isAwake) {
        console.log("Making some noises…");
      }
      else {
        console.log("Zzzzzz…");
      }
    },
    enumerable: true, configurable: isCalled, writable: isCalled
  });

}

Object.defineProperty( Animal.prototype, "getType", {
  value: function() {
    return "Animal";
  },
  enumerable: true, configurable: false, writable:false
});

module.exports = Animal;

let ani1 = new Animal();
// ani1.sleep();
// ani1.roam();
// ani1.wakeUp();
// ani1.roam();
// ani1.makeNoise();
console.log(ani1.getType());
