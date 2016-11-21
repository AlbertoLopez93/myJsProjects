"use strict";

let Animal = require ("./Animal");

function Canine() {
  let type = "Canine";
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
        console.log("Roaming with the pack");
      }
    },
    enumerable: true, configurable: isCalled, writable: isCalled
  });

}
Canine.prototype = Object.create(Animal.prototype);
Canine.prototype.constructor = Canine;

Object.defineProperty( Canine.prototype, "getType", {
  value: function() {
    return "Canine";
  },
  enumerable: true, configurable: false, writable:false
});

module.exports = Canine;

let ani1 = new Canine();
ani1.sleep();
ani1.roam();
ani1.wakeUp();
ani1.roam();
ani1.makeNoise();
console.log(ani1.getType());
