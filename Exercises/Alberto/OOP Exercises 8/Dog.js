"use strict";

let Canine = require ("./Canine");

function Dog() {
  let type = "Dog";
  let isAwake = true;
  
  Canine.call(this, true);

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
        console.log("Roaming with the pack");
      }
    },
    enumerable: true, configurable: false, writable: false
  });
  Object.defineProperty( this, "makeNoise", {
    value: function() {
      if (isAwake) {
        console.log("Barking:Woof Woof!");
      }
      else {
        console.log("Zzzzzz…");
      }
    },
    enumerable: true, configurable: false, writable: false
  });

}

Dog.prototype = Object.create(Canine.prototype);
Dog.prototype.constructor = Dog;

Object.defineProperty( Dog.prototype, "getType", {
  value: function() {
    return "Dog";
  },
  enumerable: true, configurable: false, writable:false
});

module.exports = Dog;

let ani1 = new Dog();
ani1.sleep();
ani1.makeNoise();
ani1.roam();
ani1.wakeUp();
ani1.makeNoise();
console.log(ani1.getType());
